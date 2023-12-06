export const langType = [
  {
    id: 1,
    lang: "C",
    code: `

#include <stdio.h>

int main()
{
    printf("Hello World");

    return 0;
}
`,
  },
  {
    id: 2,
    lang: "C++",
    code: `
#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello World";

    return 0;
}`,
  },
  {
    id: 3,
    lang: "Java",
    code: `
public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}
`,
  },
  {
    id: 4,
    lang: "Python",
    code: `
print ('Hello World')`,
  },
  { id: 5, lang: "JavaScript", code: `console.log("Hello World")` },
  { id: 6, lang: "TypeScript", code: `console.log("Hello World")` },
  { id: 7, lang: "Ruby", code: `puts "Hello World"` },
  {
    id: 8,
    lang: "PHP",
    code: ` 
    <?php
   echo "Hello World";
`,
  },
  {
    id: 9,
    lang: "Swift",
    code: `
     print("Hello World")
    `,
  },
  {
    id: 10,
    lang: "Go",
    code: `
  package main
import "fmt"

func main() {
    fmt.Println("Hello World")
}
  `,
  },
  {
    id: 11,
    lang: "Rust",
    code: `
  fn main() {
    println!("Hello World");
}
  `,
  },
  {
    id: 12,
    lang: "Kotlin",
    code: `
    fun main() {
    println("Hello World")
    }
`,
  },
  {
    id: 13,
    lang: "HTML,CSS,JS",
    code: `
<!-- You can remove all the code below and start from a clean slate -->

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<p>Here is a paragraph of text.</p>
<hr />

<abbr>Specifies abbreviations.</abbr>
<br />
<b>It is used to bold text.</b>

<br />
<cite>It specifies the work title.</cite>
<br />
<code>Specifies text in computer code.</code>
<br />
<strong>Used for describing important text.</strong>
<br />
<i>Formats text in document to italic text.</i>
<br />
<strike>Skrike through text</strike>
<br />
<a href="https://google.com">Go to google</a>

<ul>
    <li>Unordered Item 1</li>
    <li>Unordered Item 2</li>
    <li>Unordered Item 3</li>
    <li>Unordered Item 4</li>
</ul>

<ol>
    <li>Unordered Item 1</li>
    <li>Unordered Item 2</li>
    <li>Unordered Item 3</li>
    <li>Unordered Item 4</li>
</ol>
`,
  },
];
