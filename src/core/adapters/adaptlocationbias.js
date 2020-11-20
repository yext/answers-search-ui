import LocationBias from '../models/locationbias';
/*
 * Constructs an SDK LocationBias model from an answers-core LocationBias
 *
 * @param {LocationBias} locationBias from answers-core
 * @returns {@link LocationBias}
 */
export default function adaptLocationBias (locationBias) {
  if (!locationBias) {
    return new LocationBias({
      accuracy: 'UNKNOWN'
    });
  }
  return new LocationBias({
    accuracy: locationBias.method,
    latitude: locationBias.latitude,
    longitude: locationBias.longitude,
    locationDisplayName: locationBias.displayName
  });
}
