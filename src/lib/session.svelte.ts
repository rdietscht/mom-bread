// This file saves stateful information for a user currently tracking bread progress.
// Intended to allow users to exit the route and resume it at a later time.

// The bread type being tracked. An undefined value means a user is not currently tracking bread.
let type: string | undefined = $state(undefined);

// The current step the user is on.
let step: number = $state(0);

/**
 * Get the current the bread type being tracked, if any.
 * 
 * @returns A string representing the tracked bread type. Undefined if the user isn't tracking anything yet.
 */
export function getCurrentType(): string | undefined
{
    return type;
}

/**
 * Set the bread type a user is currently tracking, which will be used to render the progress tracker window.
 * 
 * @param btype A string value if a user is going to start tracking bread, or undefined if a user is no longer tracking bread.
 */
export function setCurrentType(btype: string | undefined)
{
    type = btype;
}

/**
 * Get the instructional step number within a bread type's steps array the user is currently on.
 * 
 * @returns A number representing an index inside a bread type's steps array.
 */
export function getCurrentStep(): number
{
    return step;
}

/**
 * Updates the instructional step number used to render a step within the progress tracker.
 * 
 * @param new_step A number representing a valid entry in a bread type's steps array.
 */
export function setCurrentStep(new_step: number)
{
    step = new_step;
}