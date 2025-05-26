import { Card } from "./Card";
import { Cpu, Clock, Shield } from "lucide-react";

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 m-auto mt-20">
      <Card
        title="Quickfire Challenges"
        description="Test your reflexes with intense question bursts."
        icon={<Clock />}
      />
      <Card
        title="Real-Time Progress"
        description="Track your advancement across the network."
        icon={<Cpu />}
      />
      <Card
        title="Encrypted Zones"
        description="Unlock elite quizzes weekly."
        icon={<Shield />}
      />
    </div>
  );
}
