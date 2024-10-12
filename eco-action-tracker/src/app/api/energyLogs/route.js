import dbConnect from "@/lib/mongodb";
import {
  createEnergyLog,
  getAllEnergyLogs,
  getEnergyLogById,
  updateEnergyLog,
  deleteEnergyLog,
} from "@/lib/energyLogController";

export async function POST(req) {
  await dbConnect();
  const energyLogData = await req.json();

  try {
    const energyLog = await createEnergyLog(energyLogData);
    return new Response(
      JSON.stringify({ message: "Energy log created successfully", energyLog }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const energyLog = await getEnergyLogById(id);
      return new Response(JSON.stringify(energyLog), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const energyLogs = await getAllEnergyLogs();
      return new Response(JSON.stringify(energyLogs), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req) {
  await dbConnect();
  const { id, ...energyLogData } = await req.json();

  try {
    const updatedEnergyLog = await updateEnergyLog(id, energyLogData);
    return new Response(
      JSON.stringify({
        message: "Energy log updated successfully",
        updatedEnergyLog,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const deletedEnergyLog = await deleteEnergyLog(id);
    return new Response(
      JSON.stringify({
        message: "Energy log deleted successfully",
        deletedEnergyLog,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
