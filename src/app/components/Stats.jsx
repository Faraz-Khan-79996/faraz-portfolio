"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Stats() {
    const achievements = [
        {
            platform: "LeetCode",
            description: "Problems Solved",
            value: "550+", // Replace with your actual count
            icon: "/companies/leetcode.svg",
            url: "https://leetcode.com/Faraz_khan79996",
        },
        {
            platform: "CodeChef",
            description: "3 Star",
            value: "★★★", // Replace with your actual rating
            icon: "/companies/codechef.svg",
            url: "https://www.codechef.com/users/farazkhan79996",
        },
    ];

    return (
        <div className="py-10 bg-gray-900 mb-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-200 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Programming Stats
                </motion.h2>

                {/* Achievements Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-4 bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-purple-500/50 transition-shadow duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {/* Link for internal or same-tab URL */}
                            <Link href={achievement.url}>
                                <div className="flex items-center w-full">
                                    {/* Icon */}
                                    <img
                                        src={achievement.icon}
                                        alt={achievement.platform}
                                        className="w-16 h-16 mr-4"
                                    />

                                    {/* Details */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-200">
                                            {achievement.platform}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {achievement.description}
                                        </p>
                                        <p className="text-lg font-bold text-purple-600 mt-1">
                                            {achievement.value}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
