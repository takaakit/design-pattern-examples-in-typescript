Design Pattern Examples in TypeScript
===

[English](README.md) | 日本語

TypeScript 向けに作成したデザインパターンのモデル＆コード例です。  
次のような目的で活用ください。

* Astah と M PLUS プラグインを使ってモデル駆動開発を試す。
* UML モデルと TypeScript コードのマッピングを知る。
* TypeScript で記述したデザインパターンのコード例を知る。  
  など  

> UML モデル例:

![](screenshots/CompositePattern.png "Composite Pattern")

> TypeScript コード例:

```typescript:FileElement class
// ˅
'use strict';

import { FileSystemElement } from './file-system-element';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    constructor(name: string, size: number) {
        // ˅
        super();
        this.name = name;
        this.size = size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath: string): void {
        // ˅
        console.log(upperPath + '/' + this.toString());
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
```

インストール
------------
**Astah**
* [チェンジビジョンのサイト](http://astah.change-vision.com/ja/download.html)から Astah の UML or Professional をダウンロードしインストールしてください。  

**M PLUS プラグイン**
* [M PLUS プラグインのサイト](https://sites.google.com/view/m-plus-plugin/download)からプラグインをダウンロードしインストールしてください。  
  **バージョン 2.5.0 以降をダウンロードしてください。**  

**TypeScript 開発環境**
* TypeScript の開発環境を用意してください。[Visual Studio Code](https://code.visualstudio.com/download) など。
* [Node.js](https://nodejs.org/ja/) をインストールしてください。node ver.12.3.1 以降を使用してください。
* Node.js をインストールした後、下記の NPM コマンドで TypeScript と node の型定義をインストールしてください。  
`npm install -g typescript`  
`npm install @types/node`

使い方
------
* Astah のモデルブラウザ上でモデル要素を選択し、コード生成ボタンを押すとコードが生成されます。  
* 生成されたコードにはユーザコードエリアが挿入されます。ユーザコードエリアは "˅" と "˄" で挟まれた領域です。ユーザコードエリア内に書いた手書きコードは繰り返しコード生成しても維持されます。  
* パターン毎に用意した main.ts もしくは HTML ファイルからプログラムを実行できます。
* ツールの詳しい使い方は、[Astah のマニュアル](http://astah.change-vision.com/ja/manual.html)や [M PLUS の Tips](https://sites.google.com/view/m-plus-plugin/tips) を見てください。

![](screenshots/Usage.gif "Usage")

参考文献
--------

* Gamma, E. et al. Design Patterns: Elements of Reusable Object-Oriented Software, Addison-Wesley, 1994
* 結城浩. Java 言語で学ぶデザインパターン入門. SB クリエイティブ, 2004

その他のプログラミング言語
--------------------------

* [Design Pattern Examples in C++](https://github.com/takaakit/design-pattern-examples-in-cpp)
* [Design Pattern Examples in C#](https://github.com/takaakit/design-pattern-examples-in-csharp)
* [Design Pattern Examples in Golang](https://github.com/takaakit/design-pattern-examples-in-golang)
* [Design Pattern Examples in Java](https://github.com/takaakit/design-pattern-examples-in-java)
* [Design Pattern Examples in JavaScript](https://github.com/takaakit/design-pattern-examples-in-javascript)
* [Design Pattern Examples in Kotlin](https://github.com/takaakit/design-pattern-examples-in-kotlin)
* [Design Pattern Examples in Python](https://github.com/takaakit/design-pattern-examples-in-python)
* [Design Pattern Examples in Ruby](https://github.com/takaakit/design-pattern-examples-in-ruby)
* [Design Pattern Examples in Scala](https://github.com/takaakit/design-pattern-examples-in-scala)
* [Design Pattern Examples in Swift](https://github.com/takaakit/design-pattern-examples-in-swift)

Contributing
----
We welcome your contributions. Function addition, bug fix, refactoring, etc.  
The procedure is as follows.

1. Fork the repository and create your branch from master.
2. If you've changed model or code, check that the model and code are not separate. The check procedure is as follows.
    1. Select a project element on the model browser of Astah.  
    ![](screenshots/SelectModelElements.png "")
    2. Press the "Generate code" button.  
    ![](screenshots/PressCodeGenerationButton.png "")
    3. Check that the generated code is not updated.  
    ![](screenshots/CheckGeneratedCode.png "")
3. Issue the pull request!

Licence
----------
このプロジェクトは Creative Commons Zero（CC0）ライセンスです。モデルとコードは自由に使用できます。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
