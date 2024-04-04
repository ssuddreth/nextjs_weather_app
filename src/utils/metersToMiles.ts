/** @format */

export function metersToMiles(visibilityInMeters: number): string {
    const visibilityInMiles = visibilityInMeters / 1609.344; // 1 mile is approximately equal to 1609.344 meters
    return `${visibilityInMiles.toFixed(1)} miles`; // Round to 1 decimal place and add 'miles' unit
}