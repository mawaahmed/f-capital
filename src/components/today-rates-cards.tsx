"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Info } from "lucide-react";

export default function TodayRatesCards() {
    return (
        <div className="space-y-2">
            {/* Today's Rates Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Today's Rates</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* EUR Rate Card */}
                    <Card className="bg-blue-600 text-white">
                        <CardContent className="items-start space-y-2">
                            <div className="flex justify-between">
                                <span className="text-blue-100 text-[28px]">FCFA</span>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">650</div>
                                <div className="flex gap-4 mt-2 items-center">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-8 h-8" />
                                        <span className="text-[20px]">5% </span>
                                    </div>
                                    <div className="flex items-center gap-2 border-l border-blue-300 pl-4">
                                        <span className="text-[20px]">1 EUR</span>
                                    </div>
                                    <div className="flex items-center gap-2 border-l border-blue-300 pl-4">
                                        <span className="text-blue-200 text-[20px]">682 XAF</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    {/* USD Rate Card */}
                    <Card className="bg-green-600 text-white">
                        <CardContent className="items-start space-y-2">
                            <div className="flex justify-between">
                                <span className="text-blue-100 text-[28px]">FCFA</span>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">650</div>
                                <div className="flex gap-4 mt-2 items-center">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-8 h-8" />
                                        <span className="text-[20px]">5% </span>
                                    </div>
                                    <div className="flex items-center gap-2 border-l border-blue-300 pl-4">
                                        <span className="text-[20px]">1 EUR</span>
                                    </div>
                                    <div className="flex items-center gap-2 border-l border-blue-300 pl-4">
                                        <span className="text-blue-200 text-[20px]">682 XAF</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                     {/* Applied Margin Card */}
                     <Card className="bg-white">
                        <CardContent className="">
                            <h3 className="font-semibold text-gray-800 text-[24px]">Applied Margin</h3>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">USD</span>
                                    <span className="font-semibold">3%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">EUR</span>
                                    <span className="font-semibold">5%</span>
                                </div>
                                <div className="flex items-start gap-2 mt-1 pt-1 border-t">
                                    <Info className="w-4 h-4 text-gray-500 mt-0.5" />
                                    <p className="text-xs text-gray-600">
                                        Today's rates include a margin applied by F-Capital on each currency
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Last Updated */}
                <div className="mt-3 text-sm text-gray-600">
                    Latest updated: Sep 18, 2025 10:30 GMT+1
                </div>
            </div>
        </div>
    );
}
