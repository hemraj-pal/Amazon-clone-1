import React from "react";

function About() {
  return (
    <>
      <div   name="About"
      className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello,my name is Hemraj Pal.I am creating a website for learning and
            creativity.This site helps people learn new skills and improve their
            knowledge.
          </p>
          <br />
          <h1 className="text-green-600  font-semibold text-xl">Education</h1>
          <span>
            Pursuing Bachelor of Computer Applications (BCA) — 3rd Year, M.B
            Khalsa College Indore(Expected Graduation: 2026)
          </span>
          <br />
          <br />
          <h1 className="text-green-600  font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span className="list-none">
            <li>HTML Strong knowledge of structure and tags</li>
            <li>CSS Styling, Flexbox, and Responsive Design</li>
            <li>JavaScript Functional and DOM manipulation</li>
            <li>React.js Component-based development</li>
            <li>Tailwind CSS Fast and modern UI styling</li>
            <li>Bootstrap Layout and responsive framework</li>
          </span>
          <br />

          <h1 className="text-green-600  font-semibold text-xl">Projects</h1>
          <span>
            Built multiple web projects using HTML, CSS, JavaScript, React,
            Tailwind CSS, and Bootstrap. Currently developing a Swiggy Clone to
            improve my frontend and responsive design skills.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Learning Journey
          </h1>
          <span>
            I started my journey with HTML and CSS, then moved to JavaScript,
            React, and Tailwind CSS. I am constantly improving my skills and
            building new creative projects.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <span>
            My mission is to become a skilled Frontend Developer who creates
            modern, user-friendly websites. I aim to keep learning new
            technologies and grow into a full-stack developer in the future.
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
