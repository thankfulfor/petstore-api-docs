---
title: Языки разметки в технической документации
ShowToc: false
---

# Языки разметки в технической документации

В технической документации используют не только Markdown и reStructuredText. Формат выбирают под задачу: быстрый docs-as-code, строгую enterprise-документацию, интерактивный developer portal, CLI-справку или PDF с формулами.

<table>
  <thead>
    <tr>
      <th>Формат</th>
      <th>Где используют</th>
      <th>Когда подходит</th>
      <th>Пример разметки</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Markdown</td>
      <td>docs-as-code, README, GitHub/GitLab, статические сайты</td>
      <td>Для простой и быстрой документации</td>
      <td><pre><code>## Установка
- Скачайте пакет
`npm install`</code></pre></td>
    </tr>
    <tr>
      <td>reStructuredText</td>
      <td>Python-документация, Sphinx, Read the Docs</td>
      <td>Для структурированной документации с cross-references и автогенерацией API</td>
      <td><pre><code>Заголовок
=========
.. note:: Важно</code></pre></td>
    </tr>
    <tr>
      <td>AsciiDoc / AsciiDoctor</td>
      <td>документация ПО, API, книги, enterprise docs</td>
      <td>Когда Markdown уже тесен: include, admonitions, таблицы, PDF</td>
      <td><pre><code>== Установка
NOTE: Требуется Java 17
include::api.adoc[]</code></pre></td>
    </tr>
    <tr>
      <td>DITA XML</td>
      <td>крупная enterprise-документация, hardware/software docs</td>
      <td>Для модульной single-source документации</td>
      <td><pre><code>&lt;topic id="install"&gt;
&lt;title&gt;Установка&lt;/title&gt;
&lt;/topic&gt;</code></pre></td>
    </tr>
    <tr>
      <td>DocBook XML</td>
      <td>технические книги, мануалы, Linux/open-source docs</td>
      <td>Для длинной строгой документации с HTML/PDF-выводом</td>
      <td><pre><code>&lt;section&gt;
&lt;title&gt;Установка&lt;/title&gt;
&lt;/section&gt;</code></pre></td>
    </tr>
    <tr>
      <td>HTML / XHTML</td>
      <td>web-документация, help center, кастомные docs-сайты</td>
      <td>Когда нужен полный контроль над версткой</td>
      <td><pre><code>&lt;h2&gt;Установка&lt;/h2&gt;
&lt;p&gt;Скачайте пакет.&lt;/p&gt;</code></pre></td>
    </tr>
    <tr>
      <td>MDX</td>
      <td>React-документация, дизайн-системы, developer portals</td>
      <td>Когда нужны интерактивные компоненты внутри документации</td>
      <td><pre><code>## Button
&lt;Button variant="primary" /&gt;</code></pre></td>
    </tr>
    <tr>
      <td>LaTeX</td>
      <td>научная, инженерная, математическая документация</td>
      <td>Для формул, PDF и сложной типографики</td>
      <td><pre><code>\section{Установка}
\textbf{Важно}</code></pre></td>
    </tr>
    <tr>
      <td>MediaWiki markup</td>
      <td>wiki-документация, внутренние базы знаний</td>
      <td>Для командных wiki и больших баз знаний</td>
      <td><pre><code>== Установка ==
* Шаг 1
[[Ссылка]]</code></pre></td>
    </tr>
    <tr>
      <td>Org mode</td>
      <td>Emacs, личные базы знаний, literate programming</td>
      <td>Когда документация связана с задачами и заметками</td>
      <td><pre><code>* Установка
#+BEGIN_SRC sh
npm install</code></pre></td>
    </tr>
    <tr>
      <td>roff / troff / man macros</td>
      <td>Unix/Linux man pages</td>
      <td>Для CLI-справок и системной документации</td>
      <td><pre><code>.SH NAME
.B mytool</code></pre></td>
    </tr>
    <tr>
      <td>Textile</td>
      <td>старые wiki, Redmine, legacy-документация</td>
      <td>Для поддержки старой документации</td>
      <td><pre><code>h2. Установка
* Шаг 1</code></pre></td>
    </tr>
  </tbody>
</table>

На практике техническому писателю полезно уверенно знать Markdown и reStructuredText, понимать возможности AsciiDoc и DITA, а также узнавать DocBook, MDX и man-страницы в существующих проектах.
