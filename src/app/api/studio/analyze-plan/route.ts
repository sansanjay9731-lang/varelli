import { NextRequest, NextResponse } from "next/server";
import { analyzeFloorplanPlanData } from "@/lib/ai/spatial-analyzer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const filename = body.filename || "Architectural_Plan_Villa.pdf";
    const fileSizeBytes = body.fileSizeBytes || 4820000;

    const analysis = analyzeFloorplanPlanData(filename, fileSizeBytes);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      engine: "VARELLI-Spatial-Vision-v4.2-Enterprise",
      analysis,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to analyze floorplan" },
      { status: 500 }
    );
  }
}
