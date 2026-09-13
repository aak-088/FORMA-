(function () {
  const translations = {
    "01": "A spiral keeps drawing closer to its center, yet never arrives. Here, arrival is not the goal; the act of approaching becomes a condition of its own, a motion searching for an ending it will never grant itself.",
    "02": "Each mass grows according to its own nature. They do not resemble one another in scale or shape, yet they rise from the same ground. Kinship does not require likeness; it can be the closeness of different forms sharing one root.",
    "03": "The form begins with the finest detail it can hold, then gradually releases that precision as it descends into a dark, unnamed mass. Not every path ends in greater complexity. Sometimes attention reaches its highest point just before it lets go.",
    "04": "A dark, broken line crosses the pale wood before almost closing into a complete loop. The closure remains uneven, like a wound that has tried to seal but cannot hide its history. Some boundaries are written in friction, not in a clean line.",
    "05": "Three illuminated masses rest apart, never meeting directly, while one dark vein passes through all of them. Belonging does not always demand closeness; sometimes distance is what allows a shared thread to gather separate edges.",
    "06": "Scattered forms extend small gestures toward one another without making contact. The distance between them is not an absence of relation, but its particular shape. An incomplete approach can hold a meaning that touch itself cannot.",
    "07": "A broad strip falls through three successive beats, caught in the last instant before it settles. A small carved point near the base brings the object close to the living body. The work stops time at the moment when everything is still becoming impact.",
    "08": "Several arms branch from one central point, each carrying a different length and direction. The force of the form lies not in its final branches, but in the first instant when one whole divided into many. Every path still carries the trace of its origin.",
    "09": "Parallel veins spread with quiet confidence across the upper field, then gather at one delicate point descending toward darkness. The fullest parts of the work depend on its most fragile point. What appears wide is carried by what looks slight.",
    "10": "A dark network opens inside a solid body, dividing it into adjoining chambers before splitting at the base. What should have remained hidden, the inner structure holding the form together, becomes its only visible language. Nothing is concealed, and nothing is certain.",
    "11": "A chain of similar ribbons descends in one rhythm. Each repeats the same curl, but with a small change in length or angle. Repetition does not drain the gesture of meaning; it turns the gesture into rhythm, until the rhythm itself becomes the subject.",
    "12": "Nested layers of walls close around one another until they form a small, dark room at the center. The value of an enclosure does not always come from what it contains; sometimes it comes from the weight it builds around the smallest space.",
    "13": "Darkness occupies most of the board, leaving only a narrow slanted opening and two distant circles of light. Illumination does not need to dominate the field. A precisely placed fragment can make the surrounding vastness legible.",
    "14": "A six-sided opening is cut into raw wood, making a window where there was once only material. The aperture is not an escape from the surface; it is the moment the surface reveals another depth inside itself.",
    "15": "One smaller form seems to follow another through the field, never quite catching it. Their relation is made from direction and delay rather than contact. To follow is to carry another shape forward without becoming its copy.",
    "16": "A spiral moves through the material and leaves a quiet wake behind it. What remains is not a record of where the movement began, but the space it made while passing. Every gesture is also an absence it leaves behind.",
    "17": "Two masses lean toward a shared meeting point, holding their distance by the smallest measure. The work lives in that almost-encounter: the tension of two bodies that acknowledge one another without becoming one.",
    "18": "A maze reveals itself only when the eye comes close. From a distance it appears almost sealed, but proximity opens its hidden routes. Some structures do not ask to be understood at once; they ask to be approached.",
    "19": "Four fields drift across the surface, each moving according to a slightly different pull. None is fully anchored, yet their separation creates a quiet order. Drift can be a form of composition, not a failure to settle.",
    "20": "The form gathers its weight around a narrow passage, making the way through feel both necessary and uncertain. A threshold is not simply an opening; it is the pressure felt while deciding to cross it.",
    "21": "A broken rhythm travels across the wood, interrupted by gaps that become part of its measure. Silence is not outside the composition. It is one of the forces that gives the remaining marks their pulse.",
    "22": "A central body holds several outward movements in tension. Each seems ready to leave, yet remains tied to the same core. Departure can begin inside belonging, before the body has moved at all.",
    "23": "The surface opens in layers, revealing a route that is neither fully inside nor fully outside. The work stays at the edge of disclosure, where what is hidden gains its shape from what can almost be seen.",
    "24": "A compact form carries a widening gesture that exceeds its own boundaries. Its scale is modest, but its movement is not. Containment and expansion can occupy the same body without resolving into one another.",
    "25": "Several marks gather like traces of a conversation after the voices have gone. Their order is not a sentence, yet the intervals between them suggest memory, response, and the possibility of return.",
    "26": "The material appears to hold a pressure from within, pushing the surface toward change. Nothing fully breaks open, but the promise of rupture remains visible. Transformation often begins as a force the surface cannot quite hide.",
    "27": "A quiet balance forms between a heavy field and a lighter interruption. Neither cancels the other. The work asks how little can shift before an entire composition begins to feel newly awake.",
    "28": "The shape gathers and releases itself in alternating passages. What first appears controlled slowly reveals a pulse beneath the order. Structure is not the opposite of feeling; it can be the way feeling becomes visible.",
    "29": "A narrow line holds a larger field together while remaining almost easy to miss. Its importance is not measured by its size, but by the consequence of its absence. The smallest support can carry the largest silence.",
    "30": "The work holds an encounter between a surface and what lies behind it. Neither is presented as the final truth. Meaning stays suspended in the interval, where looking becomes a form of crossing.",
    "31": "A crack opens through the material like a mark that has turned back toward the one who sees it. The fracture is not only damage; it is a witness. What breaks can return the gaze and ask what made the break visible."
  };

  const page = document.querySelector(".piece-meta__num");
  const english = document.querySelector("[data-philosophy-en]");
  if (page && english) {
    const number = page.textContent.trim().padStart(2, "0");
    english.textContent = translations[number] || "A study in material, distance, and the quiet threshold between forms.";
  }
})();
