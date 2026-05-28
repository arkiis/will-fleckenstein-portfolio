export type StickyColor = "green" | "yellow" | "blue" | "pink" | "orange" | "purple" | "teal";

export type StickyNoteData = {
  id: string;
  text: string;
  color: StickyColor;
  attribution?: string;
  wide?: boolean;
  tall?: boolean;
};

export type AffinityBoardSection = {
  id: string;
  title: string;
  notes: StickyNoteData[];
  subsections?: { title: string; notes: StickyNoteData[] }[];
};

export const AFFINITY_BOARD_SECTIONS: AffinityBoardSection[] = [
  {
    id: "browsing",
    title: "Browsing + Search + Basic Filters",
    notes: [
      {
        id: "b1",
        color: "green",
        text: "I guess a lot of times I go to these, like, markets and, like, people who are students are, like, doing resales for the clothes. I also go there a lot. That's pretty much about it.",
      },
      {
        id: "b2",
        color: "yellow",
        text: "no, they haven't actively looked for services but not opposed to it",
      },
      {
        id: "b3",
        color: "green",
        text: "I usually just, like—if it's a website, for example, I'll usually just—I mostly shop for clothes, I guess. I'll just say, okay, I want, like, jeans, and I'll only look at jeans.",
      },
      {
        id: "b4",
        color: "orange",
        text: "don't know anyone who does the services - visibility. Hasn't thought about getting services done by students before",
        attribution: "Anika",
      },
      {
        id: "b5",
        color: "pink",
        text: "Location doesn't matter much to my service, however because I am currently only doing this from my apartment I am not able to ship or transport my services farther than Gainesville.",
        attribution: "Vinesh",
        wide: true,
      },
      {
        id: "b6",
        color: "green",
        tall: true,
        text: "Yeah, I don't really actively look for it, but I have, like, talked to some people about, like, making necklaces and bracelets or sometimes, like, buy food from a friend who's, like, baked stuff.",
      },
      {
        id: "b7",
        color: "blue",
        text: "the prices range drastically for certain services",
        attribution: "Mallory",
      },
      {
        id: "b8",
        color: "green",
        tall: true,
        text: "Yeah, I think for me, all of the cool small businesses I've seen… I see them through Instagram, like a cool ad, like a cool post… I'll take a screenshot of it and I'll make sure to go back to it. I think it's like the number one way I find products.",
      },
      {
        id: "b9",
        color: "green",
        tall: true,
        text: "The second way… if I'm out at a market and I see them with the booth… I'll get a card and I'll make sure to follow them so I know when they drop new stuff.",
      },
      {
        id: "b10",
        color: "yellow",
        text: "Doesn't like to go out of way to do things, time commitment",
        attribution: "Anika",
      },
      {
        id: "b11",
        color: "blue",
        text: "No, but not opposed to the idea",
        attribution: "Mallory",
      },
      {
        id: "b12",
        color: "yellow",
        text: "Browse through options would be preferred. Would rather choose what they like rather than ruling it out based on a filter",
        attribution: "Anika",
        wide: true,
      },
      {
        id: "b13",
        color: "blue",
        text: "Thinks both filtering and casual scrolling is useful",
        attribution: "Mallory",
      },
      {
        id: "b14",
        color: "yellow",
        tall: true,
        text: "If there were filtering, they would want: 1. Timing availability (nothing in the night) 2. Location if over 25 min drive",
      },
      {
        id: "b15",
        color: "green",
        tall: true,
        text: "I like to browse options in general, just so I can see the range. But sometimes when I have a specific item in my mind, I like to look for specific stuff. A good mix of both is important for me.",
      },
    ],
    subsections: [
      {
        title: "proximity / range filter",
        notes: [
          {
            id: "p1",
            color: "pink",
            text: "Prefers student only in a local area where she can easily drop off and pick up",
            attribution: "Mallory",
          },
          {
            id: "p2",
            color: "green",
            text: "But if it's, like, an area that I really like and it's a really good deal, then I'll go. I'll drive.",
          },
          {
            id: "p3",
            color: "blue",
            text: "Prefers closeness. Rather meet at a public location",
            attribution: "Mallory",
          },
          {
            id: "p4",
            color: "blue",
            text: "Location matters for photography but not any problem, part of service",
            attribution: "Anika",
          },
          {
            id: "p5",
            color: "purple",
            wide: true,
            tall: true,
            text: "Yeah. But being here in Gainesville, I would love for the service to just be in Gainesville, maybe like even Santa Fe… just close to home, would be the best ideal scenario.",
          },
          {
            id: "p6",
            color: "yellow",
            text: "Location itself: wary about food related items, but would get a service like nails from a dorm",
          },
          {
            id: "p7",
            color: "green",
            text: "If I'm on Facebook Marketplace… if it's too far, yeah, I just won't go. I'm not going to spend all the gas money just to get there.",
          },
          {
            id: "p8",
            color: "yellow",
            text: "Geographical distance wouldn't matter as much because they have a car, but closer is better",
            attribution: "Anika",
          },
        ],
      },
    ],
  },
  {
    id: "reviews",
    title: "Anonymous Reviews",
    notes: [
      {
        id: "r1",
        color: "blue",
        text: "Would want to see reviews to get constructive feedback",
        attribution: "Ankita",
      },
      {
        id: "r2",
        color: "blue",
        text: "Would love to be rated!! Is confident in skills",
        attribution: "Ankita",
      },
      {
        id: "r3",
        color: "yellow",
        text: "If bad service, anonymous review would be preferred",
        attribution: "Ankita",
      },
      {
        id: "r4",
        color: "yellow",
        wide: true,
        text: "might have a slight issue with quality, especially in things that are more prominent in appearance (ex. nails vs. hair). less permanent things are ok",
        attribution: "Ankita",
      },
      {
        id: "r5",
        color: "yellow",
        text: "If good service, then has no problem in giving high rating",
        attribution: "Ankita",
      },
      {
        id: "r6",
        color: "yellow",
        text: "Would want reviews to verify quality of services",
        attribution: "Ankita",
      },
      {
        id: "r7",
        color: "teal",
        text: "Doesn't care if it's anonymous or public reviews",
        attribution: "Mallory",
      },
      {
        id: "r8",
        color: "teal",
        text: "Has trouble finding someone to do a service just the way they like",
        attribution: "Mallory",
      },
      {
        id: "r9",
        color: "teal",
        text: "Yes if pricing is lower than typical professional services",
        attribution: "Mallory",
      },
      {
        id: "r10",
        color: "teal",
        text: "Google Reviews",
        attribution: "Mallory",
      },
      {
        id: "r11",
        color: "teal",
        wide: true,
        text: "younger vs older person giving them a service means different experiences",
        attribution: "Mallory",
      },
      {
        id: "r12",
        color: "green",
        wide: true,
        text: "I would just prefer them to have like a lot of established reviews… I'd be open to it. Like I would definitely like ask them and stuff and if they have like a cool portfolio or a good resume, I would do it",
      },
      {
        id: "r13",
        color: "green",
        wide: true,
        text: "um honestly I probably wouldn't be comfortable… if someone did a bad job I would like give still a high rating but like I don't know",
      },
      {
        id: "r14",
        color: "green",
        text: "I would look at reviews, whether it's through Apple Maps or Yelp or just random Reddit posts.",
      },
      {
        id: "r15",
        color: "green",
        wide: true,
        text: "I guess the lack of maybe experience might result in a bad service… maybe I'm not getting what my money is fully worth. But yeah, I think that's pretty much the primary concern.",
      },
      {
        id: "r16",
        color: "purple",
        wide: true,
        text: "I can have my P&Ls and my cash flows set up and see how much I'd actually have to price the service. I feel I'd be 100% comfortable pitching a product not even to precede investors early on.",
      },
      {
        id: "r17",
        color: "purple",
        wide: true,
        text: "I feel like I can start moving on to precede, and even actually building an MVP early on just to show investors that we are really dedicated",
      },
      {
        id: "r18",
        color: "pink",
        wide: true,
        text: "Very comfortable with potential clients being able to view her rating. She appreciates an honest review because it helps her perfect her designs and holds her accountable.",
        attribution: "Mallory",
      },
      {
        id: "r19",
        color: "orange",
        wide: true,
        text: "I wouldn't mind having my rating showcased, and I think it might be helpful for future clients to see what to expect.",
        attribution: "William Fleckenstein",
      },
      {
        id: "r20",
        color: "yellow",
        text: "yes such as nails and photography but wary about price and quality",
      },
      {
        id: "r21",
        color: "yellow",
        text: "Students may take longer to perform services because they aren't as experienced",
        attribution: "Ankita",
      },
      {
        id: "r22",
        color: "yellow",
        text: "Reviews",
      },
      {
        id: "r23",
        color: "yellow",
        text: "portfolio examples",
      },
    ],
  },
];
