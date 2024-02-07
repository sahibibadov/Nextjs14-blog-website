import mongoose from "mongoose";

interface ConnectionStatus {
  isConnected?: number;
}

const connection: ConnectionStatus = {};

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO as string );
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
