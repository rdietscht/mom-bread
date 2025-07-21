// place files you want to import through the `$lib` alias in this folder.
type BreadStep_T =
{
    title: string, // the title of the step (i.e., making the dough)
    img: string, // url to associated image
    alt: string, // description of image (for accessibility purposes)
    desc: string, // describes the step; can be expanded
    links?: string, // resource links associated for additional help
    timer?: number // for steps with waiting periods, the time in seconds to start the timer
}