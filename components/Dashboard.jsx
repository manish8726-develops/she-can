"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, User, Trophy, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const internName = "Manish Chaurasia";
  const referralCode = "manish2025";
  const totalDonations = 5300;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(process.env.BACKEND_API||"https://she-can-server.onrender.com/api/user");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">
          Fetching user data from server. Please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Intern Dashboard
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Welcome back, {user?.name || internName}. Here{"'"}s your current progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border border-border rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Intern Name
            </CardTitle>
            <CardDescription>Your registered name</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{user?.name || internName}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border border-border rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" /> Referral Code
            </CardTitle>
            <CardDescription>Share to get rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-blue-600 dark:text-blue-400 text-lg">
              {user?.referralCode || referralCode}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-xl border border-border rounded-2xl bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900 dark:to-green-800">
          <CardHeader>
            <CardTitle className="text-green-800 dark:text-green-300">
              💰 Total Donations Raised
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-700 dark:text-green-400">
              ₹{(user?.amountRaised || totalDonations).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" /> Rewards & Unlockables
          </CardTitle>
          <CardDescription>Keep referring to unlock more!</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-3 text-muted-foreground text-base">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Bronze Badge</strong> – Raised ₹1000+</li>
            <li><strong>Total Money</strong> – Raised ₹5000+</li>
            <li><strong>Leaderboard Access</strong> – Coming Soon</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
