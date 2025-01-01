function TopicsPage(){
    return (
        <>
            <h2>Web Development Topics</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">CSS</a>
            </nav>

            <article id="webServers">
                <h3>Web Servers</h3>
                <p>The <strong>designated home page</strong> is a file on a web server that is returned when a GET request is made to the root address of a website. It serves as the default page. 
                Typically, this file is named index.html on web servers like Apache but can be under other names such as default.html, index.js, or index.php. The name of the file is dependent on the server and programming language used.</p>
                <p>When opening the browser's Web Dev/Inspector Network tab, the output displays details about every network request made. Under the <strong>header</strong>, information about the request method, status code, IP, and policy will be shown if using Chrome. 
                For both the web server and local computer, the GET method is used for the request. The difference between a file from a web server and a local computer is the URL. 
                The <strong>scheme</strong> of the web server is https:// while the local file is file://. There is also more information under the web server response header that shows accept-ranges, connection, content-encoding, and content length.</p>
                <p>Favicon.ico has a <strong>status code</strong> of 200 because the file exists and was delivered properly. The status of main.css and main.js outputs 404 because the requested resources are not found in this particular server. 
                The browser expected to find the files, but they have not been created yet.</p>
                <p>Several parts that make up the <strong>URL</strong>. The <strong>scheme</strong> is https:// and picks the protocol. HTTPS means the communication between the client and the server are encrypted. 
                The <strong>subdomain</strong> is web.engr which is a subsection from the College of Engineering to Oregon State University's main <strong>domain</strong>, oregonstate.edu. 
                This then makes the path to the <strong>resource</strong> ~doau/a1-doau where ~doau is the directory to the username and a1-doau is the folder to assignment 1.</p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>An effective <strong>frontend design</strong> utilizes visual aesthetics with usability to positively impact the user's experience with an application. Choosing the proper layout, color, font, media, icon, and navigation are influential in creating  
                a user-friendly interface. Color enhances user experience and accessibility, with attention to contrast and emotional impact. Fonts help improve readability and guide users, while responsive media like images and videos enhance engagement without compromising performance.
                Icons provide intuitive visual cues, aiding navigation alongside well-structured menus and responsive interfaces. Keyboard navigation, alt text for images, and screen reader compatibility ensures inclusivity for all users.
                There are several key qualities to measure the execution of a frontend design and help ensure an optimal user experience:</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Assist users to reach their desired goal.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Get results in the least amount of time and steps.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Users have a positive experience with the website and want to return.</dd>
                    <dt><strong>Easy to learn or navigate</strong></dt>
                    <dd>The layout is uncomplicated.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Address and prevent common mistakes that users may encounter.</dd>
                </dl>
                <p><strong>Page layout tags</strong> structure the content of a webpage. They also improve how machines navigate and understand sections. 
                    The <strong>header</strong> element often contains introductory information like the website's name or a tagline, and is usually located at the top of the page.
                    The <strong>nav</strong> element provides navigation links to other pages and can appear multiple times on a site.
                    Central content is typically placed inside the <strong>main</strong> element, which hols the most relevant information for the user. 
                    The <strong>section</strong> element groups content that are connected to each other, while the <strong>article</strong> element is usually for self-contained content. 
                    <strong>ID</strong> selectors can be used to separate multiple articles within a section.
                    Lastly, the <strong>footer</strong> element will be placed under the main tag and can be found at the bottom of the page. It typically will have information about the copyright and may have contact links.</p>
                <p>There are three main ways to create hyperlinks using the <strong>anchor</strong> element <code>&lt;a&gt;</code>: external, internal, and page-to-page.
                <ol>
                    <li>
                    <strong>External Anchor:</strong>
                    To link to an external URL, use the `href` attribute and use the full URL (e.g., http:// or https://).
                    </li>
                    
                    <li>
                    <strong>Internal Anchor:</strong>
                    To link to an article within the same page, use an anchor with a hashtag followed by an ID. 
                    </li>
                
                    <li>
                    <strong>Page-to-Page:</strong>
                    When linking to another page within the same website, using a <strong>relative path</strong> is preferred. A relative path is a URL that only points to the location within the structure of the site.
                    On the other hand, an <strong>absolute path</strong> works better for links that are outside the web page and is a complete URL.
                    </li>
                </ol>
                </p>
            </article>

            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>When optimizing images for the web, it's important to strike a balance between quality and performance. To ensure images load quickly while maintaining its look, there are key specifications to follow.
                A <strong>descriptive file name</strong> will clearly describe the content of the image, including details like who, what when, and where. The reason a clear description helps with search engine optimization
                is it allows search engines to categorize images effectively. Another key specification is having a <strong>small file size</strong> in order to get the best loading time possible. Reserve larger images for
                high-resolution devices. Compressing can downsize the file with the two options available: lossy compression reduces the file size while lessening the quality, and lossless compression keeps visual 
                quality without reducing image data. It is important to ensure that images match the <strong>exact dimensions</strong> needed for their space on the webpage. Choose the <strong>correct file format</strong>
                based on the image type. For example, use .JPG for photos and .PNG for line-art images. A <strong>reduced resolution</strong> also helps with faster loading times. The last specification is selecting the
                appropriate <strong>color mode</strong> for the image format. RGB is used for most web formats.
                </p>
                <p>The best formats for photographs are .JPG and WebP. <strong>JPG</strong> can compress large amounts of color and detail into smaller file sizes while maintaining decent image quality. Because of this reason,
                JPG is great for storing and displaying high-resolution images with millions of colors while not taking too much storage. <strong>WebP</strong> provides a high compression rate and retention of image quality. 
                On the other hand, .PNG, .GIF, and .SVG are typically used for line art. For images like logos, icons, or graphics, <strong>.PNG</strong> is applicable. What makes PNG files so versatile is its true transparency 
                factor that allows it to be laid over other colors. For simple animations or images with a small color range, use <strong>GIF</strong>. GIF can support true transparency as well but in 8-bit format.
                <strong>SVG</strong> are widely used for 2D graphics in an XML-based vector format. </p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> or favorite icons are small images associated with a website that browsers and devices use to enhance user experience and branding. They appear in browser tabs, bookmarks, and the address bar, helping 
                users quickly identify and differentiate between multiple open tabs and providing a visual cue in bookmarks for easy recognition. The format that a favicon can be saved in is flexible from .GIF, .PNG, .ICO, and .SVG.
                Once the symbol is created, a common method is to save it in different file formats for different devices. The format for a large display may be different from the format chosen for a cellphone. The icon becomes anchored once the 
                browser looks through the files. It is also common to create several versions. One version is called a <strong>fancy favicon</strong>, which are optimal for bigger sizes with its intricate designs and details. A <strong>simpler favicon</strong> 
                does without the details of gradiency, border, reflections and shadows.</p>
            </article>

            <article id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>Incorporating <strong>Cascading Style Sheets</strong> in websites and apps allows for flexible designs that can be implemented across different types of devices. The CSS language has its own syntax that separates 
                the presentation from the HTML content and JavaScript functionality. Because HTML has a default style, the greatest advantage of stylesheets is its customizability, which gives the designer full control over fonts, colors, layouts,
                and other design elements. </p>
                <p>There are five ways to incorporate styles. There is <strong>external</strong> CSS which is placed in .css files. This is the most efficient and preferred method because it applies to styles globally across pages.
                <strong>Imported</strong> stylesheets are linked with @import that allow for separate components other than the global CSS file. For single-page or specific styles, an <strong>embedded</strong> CSS can be written in 
                the HTML file using the style tag in the head. An <strong>inline</strong> CSS is applied within an element with a style attribute and is also for one time adjustments. There is also the option of <strong>JavaScript</strong> 
                CSS through the Documented Object Model.</p>
            </article>

        </>
    )
}
export default TopicsPage;