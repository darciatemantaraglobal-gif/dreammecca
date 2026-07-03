import { Router, type IRouter, type Request, type Response } from "express";
import { and, asc, eq } from "drizzle-orm";
import { db, packagesTable, departuresTable } from "@workspace/db";
import {
  CreatePackageBody,
  UpdatePackageBody,
  CreateDepartureBody,
  UpdateDepartureBody,
} from "@workspace/api-zod";

const router: IRouter = Router();

function requireAuth(req: Request, res: Response): boolean {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Not authenticated" });
    return false;
  }
  return true;
}

async function attachDepartures(
  pkgs: (typeof packagesTable.$inferSelect)[],
  activeOnly: boolean,
) {
  const results = [];
  for (const pkg of pkgs) {
    const deps = await db
      .select()
      .from(departuresTable)
      .where(
        activeOnly
          ? and(
              eq(departuresTable.packageId, pkg.id),
              eq(departuresTable.isActive, true),
            )
          : eq(departuresTable.packageId, pkg.id),
      )
      .orderBy(asc(departuresTable.sortOrder));
    results.push({ ...pkg, departures: deps });
  }
  return results;
}

router.get("/packages", async (_req: Request, res: Response) => {
  const pkgs = await db
    .select()
    .from(packagesTable)
    .where(eq(packagesTable.isActive, true))
    .orderBy(asc(packagesTable.sortOrder));
  const withDeps = await attachDepartures(pkgs, true);
  res.json({ packages: withDeps });
});

router.get("/admin/packages", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const pkgs = await db
    .select()
    .from(packagesTable)
    .orderBy(asc(packagesTable.sortOrder));
  const withDeps = await attachDepartures(pkgs, false);
  res.json({ packages: withDeps });
});

router.post("/admin/packages", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const parsed = CreatePackageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Data paket tidak valid" });
    return;
  }
  const [pkg] = await db
    .insert(packagesTable)
    .values(parsed.data)
    .returning();
  res.status(201).json({ package: { ...pkg, departures: [] } });
});

router.put("/admin/packages/:id", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const parsed = UpdatePackageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Data paket tidak valid" });
    return;
  }
  const [pkg] = await db
    .update(packagesTable)
    .set(parsed.data)
    .where(eq(packagesTable.id, String(req.params.id)))
    .returning();
  if (!pkg) {
    res.status(404).json({ error: "Paket tidak ditemukan" });
    return;
  }
  const [withDeps] = await attachDepartures([pkg], false);
  res.json({ package: withDeps });
});

router.delete("/admin/packages/:id", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  await db.delete(packagesTable).where(eq(packagesTable.id, String(req.params.id)));
  res.json({ success: true });
});

router.post(
  "/admin/packages/:packageId/departures",
  async (req: Request, res: Response) => {
    if (!requireAuth(req, res)) return;
    const parsed = CreateDepartureBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Data jadwal tidak valid" });
      return;
    }
    const [dep] = await db
      .insert(departuresTable)
      .values({ ...parsed.data, packageId: String(req.params.packageId) })
      .returning();
    res.status(201).json({ departure: dep });
  },
);

router.put("/admin/departures/:id", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const parsed = UpdateDepartureBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Data jadwal tidak valid" });
    return;
  }
  const [dep] = await db
    .update(departuresTable)
    .set(parsed.data)
    .where(eq(departuresTable.id, String(req.params.id)))
    .returning();
  if (!dep) {
    res.status(404).json({ error: "Jadwal tidak ditemukan" });
    return;
  }
  res.json({ departure: dep });
});

router.delete("/admin/departures/:id", async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  await db.delete(departuresTable).where(eq(departuresTable.id, String(req.params.id)));
  res.json({ success: true });
});

export default router;
