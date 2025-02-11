import nats, { Stan } from "node-nats-streaming";

class QueueWapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error("Cannot access NATS client before connecting");
    }
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });
    return new Promise<void>((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });
      this.client.on("error", (error) => {
        console.log("Failed to connected to NATS");
        reject(error);
      });
    });
  }
}

export const queueWrapper = new QueueWapper();
