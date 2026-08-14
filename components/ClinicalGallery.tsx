"use client";

import { useState } from "react";

export default function ClinicalGallery() {
  const [acknowledged, setAcknowledged] = useState(false);

  if (!acknowledged) {
    return (
      <div className="clinicalWarning">
        <p className="eyebrow">Clinical images — viewer discretion advised</p>
        <h2>This gallery contains photographs of open wounds.</h2>
        <p>
          The images are intended to demonstrate clinical wound-care experience
          and may be graphic or uncomfortable for some viewers.
        </p>
        <button className="button" type="button" onClick={() => setAcknowledged(true)}>
          I understand — show clinical images
        </button>
      </div>
    );
  }

  return (
    <div className="clinicalGallery">
      <div className="clinicalGalleryNotice">
        <strong>Clinical image gallery activated.</strong>
        <span>
          Authorized wound photographs can be added to this section once the
          original image files are placed in <code>public/images/clinical</code>.
        </span>
      </div>

      <div className="clinicalPlaceholderGrid">
        <article>
          <span>Clinical image 01</span>
          <p>Place the first authorized wound photograph here.</p>
        </article>
        <article>
          <span>Clinical image 02</span>
          <p>Place the second authorized wound photograph here.</p>
        </article>
        <article>
          <span>Clinical image 03</span>
          <p>Place the third authorized wound photograph here.</p>
        </article>
      </div>

      <button className="textButton" type="button" onClick={() => setAcknowledged(false)}>
        Hide clinical images
      </button>
    </div>
  );
}
