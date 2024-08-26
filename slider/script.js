// https://www.youtube.com/watch?v=Emrbhrhp6BU
const slides = document.querySelectorAll(".slide");
let count = 0;

// Set the initial position of each slide

// set the left positioning from the parent
for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
}


// X axis pe piche kar diya

// translate(100%) only moves the animated object as far as its length.
function slideImages() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${count * 100}%)`;
    }
}

function next() {
    if (count < slides.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slideImages();
}

function prev() {
    if (count > 0) {
        count--;
    } else {
        count = slides.length - 1;
    }
    slideImages();
}


//•	When you apply translateX(-100%) to all slides, each slide shifts 100% of its width to the left from its current position, effectively moving the visible window to the next slide.
	// •	If you use count * 100%, the amount of shift depends on which slide you’re trying to display, ensuring that only the correct slide is in view. // didnot get it


    // Let’s break it down more clearly with an example to explain the difference between applying translateX(-100%) to all slides versus using translateX(-${count * 100}%).

    // Example Setup:
    
    // Assume you have 3 slides (.slide) inside a parent container (.parent), and each slide is 100% of the parent container’s width:
    
    //     1.	Initial Positions:
    //     •	Slide 1 (left: 0%): This is the first slide and is positioned at the left edge of the parent container.
    //     •	Slide 2 (left: 100%): This is the second slide and is positioned just to the right of the first slide.
    //     •	Slide 3 (left: 200%): This is the third slide and is positioned just to the right of the second slide.
    
    // Scenario 1: Applying translateX(-100%) to All Slides
    
    //     •	What Happens:
    //     •	translateX(-100%) shifts each slide 100% of its own width to the left, regardless of its current position.
    //     •	Slide 1: Shifts from left: 0% to translateX(-100%), so it moves to the left by 100% of its width.
    //     •	Slide 2: Shifts from left: 100% to translateX(-100%), so it also moves left by 100% of its width.
    //     •	Slide 3: Shifts from left: 200% to translateX(-100%), moving left by 100% of its width.
    //     •	Outcome:
    //     •	Slide 1: Now positioned at left: -100%.
    //     •	Slide 2: Now positioned at left: 0% (it becomes visible in the parent container).
    //     •	Slide 3: Now positioned at left: 100%.
    //     •	Problem: This shifts each slide the same amount regardless of the desired position, which might not correctly align the slides for subsequent transitions.
    
    // Scenario 2: Applying translateX(-${count * 100}%)
    
    //     •	Count-Based Shifting:
    //     •	Here, count represents the current slide index (e.g., count = 0 for the first slide, count = 1 for the second, etc.).
    //     •	The transformation is applied relative to the current slide index, ensuring the correct slide is displayed.
    //     •	Transition Examples:
    //     •	Initial State (count = 0):
    //     •	translateX(-${0 * 100}%) = translateX(0%), meaning no shift; Slide 1 remains fully visible.
    //     •	After next() (count = 1):
    //     •	translateX(-${1 * 100}%) = translateX(-100%), shifting all slides left by 100% of their width.
    //     •	Slide 1 moves out of view, and Slide 2 becomes visible.
    //     •	After next() again (count = 2):
    //     •	translateX(-${2 * 100}%) = translateX(-200%), shifting all slides left by 200% of their width.
    //     •	Slide 2 moves out of view, and Slide 3 becomes visible.
    //     •	Outcome:
    //     •	With translateX(-${count * 100}%), each transition correctly aligns the slides based on how many times next() or prev() has been called. This ensures that the correct slide is always fully in view, while the others are shifted out of view.
    
    // Why count * 100% Works:
    
    //     •	Cumulative Shifts:
    //     •	The count * 100% accounts for how many slides you’ve already moved past, ensuring that each slide is aligned precisely in the viewport.
    //     •	Single Slide Visibility:
    //     •	This approach ensures that only one slide is visible at a time. The current slide index (count) determines the cumulative translation needed to show the correct slide.
    
    // Summary:
    
    //     •	translateX(-100%) alone will move every slide by exactly one slide-width, but it doesn’t account for the cumulative effect of multiple transitions.
    //     •	translateX(-${count * 100}%) accumulates the translation based on how many slides you’ve already transitioned, ensuring the correct slide is displayed in sequence.


    // que : so when we move to left ie transition the relative psoition to parent of 1st img is still 100 or got changed to -100 now explain using both count*100 and 100
    // gpt : Let's break this down by focusing on the relative position of the first image (`Slide 1`) in the slideshow when using both `translateX(-100%)` and `translateX(-${count * 100}%)`. We'll discuss what happens to the first slide as we transition between slides.

// ### Initial Setup

// - **Parent Container (`.parent`)**: This is the element containing all the slides and is `60%` of the page width.
// - **Slide 1 (`.slide`)**: The first slide is initially positioned at `left: 0%` relative to the parent.
// - **Slide 2**: Positioned at `left: 100%` relative to the parent.
// - **Slide 3**: Positioned at `left: 200%` relative to the parent.

// ### Scenario 1: Applying `translateX(-100%)` on Transition

// 1. **Initial Position (`count = 0`)**:
//    - **Slide 1**: Positioned at `left: 0%`.
//    - **No Translation Applied Yet**: So Slide 1 is fully visible, and its position is `0%` relative to the parent.

// 2. **After First Transition**:
//    - **Action**: `translateX(-100%)` is applied to all slides.
//    - **Slide 1**: Moves left by 100% of its own width. The new visual position is `translateX(-100%)`, but the `left` value remains `0%`.
//    - **Result**: Slide 1 is now **visually** at `-100%` relative to its original position but still positioned at `left: 0%` in terms of its CSS layout.

// 3. **Impact**:
//    - The `left` property remains `0%`, meaning in the document flow, Slide 1 is still considered at the `0%` position relative to the parent.
//    - However, the visual position has been shifted to `-100%` due to the transformation.

// ### Scenario 2: Applying `translateX(-${count * 100}%)` on Transition

// 1. **Initial Position (`count = 0`)**:
//    - **Slide 1**: Positioned at `left: 0%` (same as in the previous scenario).
//    - **No Translation Applied Yet**: Slide 1 is fully visible at `0%` relative to the parent.

// 2. **After First Transition (`count = 1`)**:
//    - **Action**: `translateX(-${1 * 100}%)` = `translateX(-100%)` is applied to all slides.
//    - **Slide 1**: Moves left by 100% of its own width. The visual position is now `translateX(-100%)`, but the `left` property remains `0%`.
//    - **Result**: Slide 1 is now visually at `-100%` relative to its original position, with its `left` value still `0%`.

// 3. **After Second Transition (`count = 2`)**:
//    - **Action**: `translateX(-${2 * 100}%)` = `translateX(-200%)` is applied to all slides.
//    - **Slide 1**: Moves further left by another 100%, so it is now visually at `-200%` relative to its original position.
//    - **Result**: Slide 1 is now far to the left, completely out of view, with its visual position `translateX(-200%)` and `left: 0%`.

// ### Key Differences and Explanations:

// - **Relative to Parent**:
//   - The `left` property of Slide 1 does **not change**. It remains `left: 0%` throughout, indicating its original position relative to the parent container.
  
// - **Visual Transformation**:
//   - The `translateX` transformation is applied in addition to the `left` positioning. It **temporarily** shifts the visual position of the slide without altering the `left` value.

// - **Cumulative Effect with `count * 100%`**:
//   - With `count * 100%`, each transition adds to the cumulative visual movement. This approach ensures that Slide 1 moves by `-100%` after the first transition and by `-200%` after the second transition, pushing it further left, fully out of view.

// - **Single Step with `100%`**:
//   - If you use only `translateX(-100%)` repeatedly, every slide will always move by just one slide-width (`100%`), regardless of the current `count`. This doesn't allow for correct positioning if you want to show Slide 2 after Slide 1 or Slide 3 after Slide 2. The slides would overlap incorrectly because there's no cumulative tracking of how far you've moved.

// ### Summary:

// - **`count * 100%`**: This ensures that each slide is moved the correct cumulative distance, accounting for the number of transitions, so the correct slide is shown in view.
// - **`100%`** alone: This moves each slide a fixed distance every time, regardless of its current position, leading to incorrect transitions if you want to move past multiple slides.

// The `translateX` transformation affects the visual position of the slides relative to their `left` value but does not change their actual `left` value, which remains constant and relative to the parent container.




///////
// no if i do translateX 100 and again do translate x 100 it means same position 2nd have no effect ??
// Yes, you're correct. If you apply `translateX(100%)` to an element and then apply `translateX(100%)` again, the second transformation does not accumulate with the first one. Each `translateX` operation is independent and replaces the previous transformation. Here's how it works:

// ### Understanding `translateX`

// 1. **First `translateX(100%)`**:
//    - The element (e.g., a slide) moves 100% of its width to the right from its original position.
//    - If the element was initially at `left: 0%`, it visually moves to `left: 100%`, but the `left` value itself remains unchanged.

// 2. **Second `translateX(100%)`**:
//    - When you apply `translateX(100%)` again, it does not add to the previous `translateX(100%)`.
//    - The element will still move 100% of its width to the right from its original position, just like the first time. It won't be at `200%` or double the previous transformation.

// ### Why This Happens:

// - **Transformations Reset**: Each call to `translateX` resets the transformation to a new value based on the element's original position, not the transformed position.
// - **No Accumulation**: CSS transformations like `translateX` do not accumulate unless you explicitly specify them to do so in a single transformation (e.g., `transform: translateX(100%) translateX(100%)` is equivalent to `transform: translateX(200%)`, but this is rarely done).

// ### Impact on the Slideshow:

// - **Using `translateX(100%)` Repeatedly**:
//    - If you call `translateX(100%)` in sequence without considering the previous transformations, each slide will only move by `100%` from its original position, not from where it was last moved to.
//    - For example, after two calls of `translateX(100%)`, the slide is still just `100%` to the right of its original position, not `200%`.

// - **Using `translateX(-${count * 100}%)`**:
//    - This is why `translateX(-${count * 100}%)` is important: it calculates the total translation based on how many times you've moved (tracked by `count`).
//    - If `count` is 2, `translateX(-${2 * 100}%)` will move the slide by `-200%`, effectively placing the third slide in view and pushing the previous slides out of view.

// ### Example:

// 1. **Initial State**:
//    - Slide 1: `left: 0%`, no transformation applied.
//    - Slide 2: `left: 100%`, no transformation applied.
//    - Slide 3: `left: 200%`, no transformation applied.

// 2. **First Transition (`count = 1`)**:
//    - Apply `translateX(-100%)`: Moves Slide 1 to `left: -100%`, Slide 2 to `left: 0%`, Slide 3 to `left: 100%`.

// 3. **Second Transition (`count = 2`)**:
//    - Apply `translateX(-200%)`: Moves Slide 1 to `left: -200%`, Slide 2 to `left: -100%`, Slide 3 to `left: 0%`.

// ### Summary:

// - **Independent Translations**: Each `translateX(100%)`