import { NextRequest, NextResponse } from "next/server";
import { generateSystemTopology } from "@/lib/ai/topology-dispatcher";
import { analyzeFloorplanPlanData } from "@/lib/ai/spatial-analyzer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const selectedBrands = body.selectedBrands || ["basalte", "gira", "lutron"];
    const planName = body.planName || "Architectural_Villa_Master.dwg";

    const analysis = body.analysis || analyzeFloorplanPlanData(planName);
    const topology = generateSystemTopology(analysis, selectedBrands);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      standardsCompliance: [
        "ISO/IEC 14543 (KNX Bus Standard)",
        "IEC 62386 (DALI-2 Lighting Standard)",
        "CEDIA CTA/RP22 (Immersive Audio Standard)",
        "ASHRAE 62.2 (Residential IAQ Ventilation Standard)",
      ],
      topology,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate system topology" },
      { status: 500 }
    );
  }
}
