/**
 * Ribbon-field palettes, one per surface the site paints. Each steps from the
 * page's own ground to a lifted tone of the same family, so the ribbons read
 * as depth within the theme rather than a second colour. Deep palettes stop
 * short of a lightness that would cost the ivory text its AA contrast; light
 * palettes stop short of costing ink text or the opaque cards theirs.
 */

/** Deep green — the default hero ground (see `--deep*`). */
export const DEEP_GREEN = ["#10231b", "#183228", "#21402f", "#2f5a47"];
/** Wellnut's plum band. */
export const DEEP_PLUM = ["#241a3d", "#2c2050", "#352760", "#43337a"];

/** Ivory → sage: the default page ground. */
export const LIGHT_IVORY = ["#f7f5f0", "#e9e6da", "#cfdccf", "#b3c9b9"];
/** Wellnut's lavender ground. */
export const LIGHT_LAVENDER = ["#f5f2fa", "#ece5f7", "#ddd2f1", "#cbbce6"];
/** Cost of a Click's icy blue ground. */
export const LIGHT_BLUE = ["#eef4fb", "#e3edf8", "#cfe0f2", "#b8d1ea"];
