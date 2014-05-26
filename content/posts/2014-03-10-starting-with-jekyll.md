---
title: "Starting with Jekyll"
created_at: 2014-03-10 15:45:00 +0000
kind: article
thumbnail: http://placehold.it/350x350
categories: jekyll ruby
---

I'm testing Jekyll right now as a blogging / resume site method.  Its a pretty cool application, and really frees me up to just write some simple markdown, without getting caught up in a ton of other development issues.

I'm using two repositories to accomplish my Jekyll goals, due to the lack of plugin support when using [<i class="fa fa-github-alt">Github</i>](https://github.com/) as a host.

From ../pages_master

<pre><code class="language-bash">
jekyll build --destination ../dvito.github.io --watch
</code></pre>

In ../dvito.github.io

<pre><code class="language-bash">
jekyll serve --watch
</code></pre>

You can also configure this in ../_config.yml

<pre><code class="language-bash">
  source: /Users/justinraines/Code/pages_master

  destination: /Users/justinraines/Code/dvito.github.io
</code></pre>

And then you can just run:
From ../pages_master

<pre><code class="language-bash">
jekyll build --watch
</code></pre>

In ../dvito.github.io

<pre><code class="language-bash">
jekyll serve --watch
</code></pre>