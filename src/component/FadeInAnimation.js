import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function FadeInAnimation({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  distance = 200,
  ...props
}) {
  const Component = wrapperElement;
  const compRef = useRef(null);

  //   const distance = 900;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    // case "up":
    //   fadeDirection = { y: distance };
    //   break;
    // case "down":
    //   fadeDirection = { y: -distance };
    //   break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    gsap.fromTo(
      compRef.current,
      { opacity: 0 },
      {
        ...fadeDirection,
        opacity: 1,
        delay,
      }
    );
  }, [compRef, fadeDirection, delay]);

  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
}

/*
    wrapperElement: used to specify what the component would be. It has a default of div. 
                    This is better than creating an extra DOM node to wrap the component 
                    we want to animate.
    useRef: gsap we need this to know what to trigger animations for. With this, we can refer 
            to our component in the DOM.
    useEffect: without this, gsap will trigger animations with a null reference (useRef(null)). 
               We have to ensure the component is mounted already, hence this hook.
    children: this will be what's found between <FadeInAnimation> and </FadeInAnimation>. 
              Could be text, or even a group of elements.
    ...props: to extend reusability, this is necessary so that the components can apply other props 
              like className and style.
    direction: for cases where we want to add direction to the fade-in effect. The default value is 
               null.
*/

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// export default function FadeInAnimation({
//   children,
//   wrapperElement = "div",
//   direction = null,
//   delay = 0,
//   ...props
// }) {
//   const Component = wrapperElement;
//   const compRef = useRef(null);

//   const distance = 200;
//   let fadeDirection;
//   switch (direction) {
//     case "left":
//       fadeDirection = { x: -distance };
//       break;
//     case "right":
//       fadeDirection = { x: distance };
//       break;
//     case "up":
//       fadeDirection = { y: distance };
//       break;
//     case "down":
//       fadeDirection = { y: -distance };
//       break;
//     default:
//       fadeDirection = { x: 0 };
//   }

//   useEffect(() => {
//     gsap.from(compRef.current, {
//       ...fadeDirection,
//       opacity: 1,
//       delay,
//     });
//   }, [compRef, fadeDirection, delay]);

//   return (
//     <Component ref={compRef} {...props}>
//       {children}
//     </Component>
//   );
// }

// /*
//     wrapperElement: used to specify what the component would be. It has a default of div.
//                     This is better than creating an extra DOM node to wrap the component
//                     we want to animate.
//     useRef: gsap we need this to know what to trigger animations for. With this, we can refer
//             to our component in the DOM.
//     useEffect: without this, gsap will trigger animations with a null reference (useRef(null)).
//                We have to ensure the component is mounted already, hence this hook.
//     children: this will be what's found between <FadeInAnimation> and </FadeInAnimation>.
//               Could be text, or even a group of elements.
//     ...props: to extend reusability, this is necessary so that the components can apply other props
//               like className and style.
//     direction: for cases where we want to add direction to the fade-in effect. The default value is
//                null.
// */
