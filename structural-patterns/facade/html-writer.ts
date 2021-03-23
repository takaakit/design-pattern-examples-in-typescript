// ˅
'use strict';

import { WriteStream } from 'fs';

// ˄

export class HtmlWriter {
    // ˅
    
    // ˄

    private readonly writer: WriteStream;

    constructor(writer: WriteStream) {
        // ˅
        this.writer = writer;
        // ˄
    }

    // Write a title
    heading(title: string): void {
        // ˅
        this.writer.write('<html>');
        this.writer.write('<head><title>' + title + '</title></head>');
        this.writer.write('<body>\n');
        this.writer.write('<h1>' + title + '</h1>\n');
        // ˄
    }

    // Write a paragraph
    paragraph(message: string): void {
        // ˅
        this.writer.write('<p>' + message + '</p>\n');
        // ˄
    }

    // Write a mail address
    mailto(mailAddress: string, userName: string): void {
        // ˅
        this.anchor('mailto:' + mailAddress, userName);
        // ˄
    }

    close(): void {
        // ˅
        this.writer.write('</body>');
        this.writer.write('</html>\n');
        this.writer.end();
        // ˄
    }

    // Write a link
    private anchor(url: string, text: string): void {
        // ˅
        this.paragraph('<a href="' + url + '">' + text + '</a>');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
