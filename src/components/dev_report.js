import React from 'react';

const DevReport = () => {
  return (
    <div>
      <div className="assignment">
        <h3>Basic Concepts:</h3>
        <ul>
          <li>babel: the compiler</li>
          <li>webpack: the modern bunlder</li>
        </ul>

        <h3>The google API Key I am using:</h3>
        <pre><code>AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss</code></pre>

        <h3>Important Tips:</h3>
        <ol>
          <li>note that the installasion in the tutorial is too old. See the newest installasion here:
          <pre><code>npm install --save-dev babel-preset-env</code></pre>
          Reference: <a href="https://babeljs.io/blog/2015/10/31/setting-up-babel-6" target="_blank">https://babeljs.io/blog/2015/10/31/setting-up-babel-6</a>
          </li>
        </ol>

        <div className="separator"></div>
        <h2>Concerning React</h2>
        <h3>For beginners:</h3>
        <ul>
          <li>A good text tutorial to start ReactJS, Babel and Webpack:<br />
          <a href="https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm" target="_blank">https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm</a></li>
          <li>A good video tutorial to start ReactJS, Babel and Webpack:<br />
          <a href="https://www.youtube.com/watch?v=w5TupxbnnrM&amp;index=5&amp;list=LLL_3tdfMBxvgcKjMzUfyy7w" target="_blank">https://www.youtube.com/watch?v=w5TupxbnnrM&amp;index=5&amp;list=LLL_3tdfMBxvgcKjMzUfyy7w</a></li>
        </ul>

        <dl><h3>Q &amp; A:</h3>
          <dt>How to update node and npm on windows?</dt>
          <dd>
            <ol>
              <li>Run PowerShell as Administrator</li>
              <li>Type these code:
                <pre><code>npm install -g npm-windows-upgrade
      npm-windows-upgrade</code></pre>
              </li>
              <li>Reference:<br />
              <a href="https://stackoverflow.com/questions/18412129/how-do-i-update-node-and-npm-on-windows" target="_blank">https://stackoverflow.com/questions/18412129/how-do-i-update-node-and-npm-on-windows</a></li>
            </ol>
          </dd>
          <dt>How to solve the error <code>setState is not defined</code>?</dt>
          <dd>If you dont use Arrow Function you have to bind <code>this</code>.<br />Reference: <a href="https://stackoverflow.com/questions/39210971/this-setstate-is-undefined" target="_blank">https://stackoverflow.com/questions/39210971/this-setstate-is-undefined</a></dd>
        </dl>

        <h3>Useful Tips:</h3>
        <ol>
          <li>Try to use Arrow Functions from time to time because they are very concise.</li>
          <li><b>About Atom:</b> Run apm install atom-shortcuts to install the package.<br />Reference: <a href="https://atom.io/packages/atom-shortcuts" target="_blank">https://atom.io/packages/atom-shortcuts</a></li>
          <li>Things to remember when editing in <code>JSX</code> code instead of <code>HTML</code> code:
            <ol>
              <li>Use <code>className</code> instead of <code>class</code></li>
              <li>Self-closing tags: use <code>&lt;br /&gt;</code> instead of <code>&lt;br&gt;</code></li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DevReport;
