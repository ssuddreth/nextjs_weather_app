/** @format */

export function convertWindSpeed(speedInMetersPerSecond: number): string {
    const speedInMilesPerHour = speedInMetersPerSecond * 2.23694; // Conversion from m/s to mph
    return `${speedInMilesPerHour.toFixed(0)}mph`;
}