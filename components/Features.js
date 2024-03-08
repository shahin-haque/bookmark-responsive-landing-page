import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <article>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <section>
        <div className="tab-1">
          <Link href="#">Simple Bookmarking</Link>
          <h2>Bookmark in one click</h2>
          <div>
            <Image
              src="/illustration-features-tab-1.svg"
              alt="illustration-features"
              width={536}
              height={346}
            />
          </div>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button>More Info</button>
        </div>
        <hr />
        <div className="tab-2">
          <Link href="#"> Speedy Searching</Link>
          <h2>Intelligent search</h2>
          <div>
            <Image
              src="/illustration-features-tab-2.svg"
              alt="illustration-features"
              width={536}
              height={346}
            />
          </div>
          <p>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <button>More Info</button>
        </div>
        <hr />
        <div className="tab-3">
          <Link href="#"> Easy Sharing</Link>
          <h2>Share your bookmarks</h2>
          <div>
            <Image
              src="/illustration-features-tab-3.svg"
              alt="illustration-features"
              width={536}
              height={346}
            />
          </div>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button>More Info</button>
        </div>
      </section>
    </article>
  );
};

export default Features;
