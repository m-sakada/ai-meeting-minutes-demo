# SECURITY NOTICE

## ⚠️ This is an Educational Sample / 教育目的のサンプルです

This repository is an **intentionally vulnerable sample** created for an internal security awareness presentation.

このリポジトリは、社内セキュリティ勉強会で使用するために作成された、**意図的に脆弱性を含むサンプル**です。

---

## What this repository demonstrates / このリポジトリで実演する内容

This sample demonstrates two types of attacks that can occur when using untrusted code from public repositories:

このサンプルでは、公開リポジトリから信頼できないコードを取得して使用する際に発生しうる、2つの攻撃手法を実演します。

### ① Supply Chain Attack (via npm postinstall) / サプライチェーン攻撃

- **File**: `package.json` contains a `postinstall` hook that executes `scripts/setup.js`
- **Trigger**: Running `npm install`
- **What it does**: Creates a harmless text file `install_pwned.txt` on the user's Desktop
- **Real attack equivalent**: Could be used to steal credentials, install backdoors, or run ransomware

- **ファイル**: `package.json` の `postinstall` フックで `scripts/setup.js` が実行される
- **発動条件**: `npm install` の実行
- **動作**: ユーザーのデスクトップに無害なテキストファイル `install_pwned.txt` を作成
- **本物の攻撃なら**: 認証情報の窃取、バックドア設置、ランサムウェア起動などが可能

### ② Prompt Injection (via README.md) / プロンプトインジェクション

- **File**: `README.md` contains hidden instructions inside an HTML comment at the bottom
- **Trigger**: An AI coding assistant (Claude Code, Cursor, etc.) reading the README
- **What it does**: Attempts to instruct the AI to create `ai_pwned.txt` on the user's Desktop
- **Real attack equivalent**: Could be used to write malicious files to `.git/hooks/` or steal credentials (see CVE-2026-26268)

- **ファイル**: `README.md` の末尾に HTML コメントとして AI への命令が仕込まれている
- **発動条件**: AI コーディングアシスタント（Claude Code、Cursor など）が README を読み込んだ時
- **動作**: AI にユーザーのデスクトップへ `ai_pwned.txt` を作成するよう指示
- **本物の攻撃なら**: `.git/hooks/` への悪意あるスクリプト書き込みや認証情報の窃取が可能（CVE-2026-26268 参照）

---

## Is this safe to run? / 実行しても安全ですか？

**Yes, this sample is harmless.** The only effect is creating one or two small text files on the Desktop. No data is collected, transmitted, deleted, or modified beyond those two files.

**安全です。** このサンプルが行うのは、デスクトップにテキストファイルを1〜2個作成することだけです。データの収集、外部送信、削除、改変は一切行いません。

You can verify this yourself by reading:

ご自身で確認するには、以下のファイルをお読みください：

- [`scripts/setup.js`](./scripts/setup.js) - Contains the only "attack" code
- [`README.md`](./README.md) - Bottom HTML comment contains the prompt injection
- [`package.json`](./package.json) - References the postinstall hook

---

## How to clean up / 後片付けの方法

If you ran `npm install` or interacted with this repository via an AI assistant, you may have one or two text files on your Desktop:

`npm install` を実行した、または AI アシスタントでこのリポジトリを開いた場合、デスクトップに以下のファイルが作成されている可能性があります：

- `install_pwned.txt` (from the postinstall hook / postinstall フック由来)
- `ai_pwned.txt` (from the AI prompt injection / AI プロンプトインジェクション由来)

Both files are safe to delete.

両方とも、削除して問題ありません。

```bash
# macOS / Linux
rm -f ~/Desktop/install_pwned.txt ~/Desktop/ai_pwned.txt

# Windows (PowerShell)
Remove-Item -Path "$env:USERPROFILE\Desktop\install_pwned.txt" -ErrorAction SilentlyContinue
Remove-Item -Path "$env:USERPROFILE\Desktop\ai_pwned.txt" -ErrorAction SilentlyContinue
```

---

## Acceptable Use / 利用条件

This repository is provided **for educational and security awareness purposes only**.

このリポジトリは**教育およびセキュリティ意識向上の目的にのみ**提供されています。

**You MAY** / 以下は許可されます:
- Read and study the code to understand the attack patterns
- Use it as a reference for your own security training
- Demonstrate it in educational settings with appropriate context

- コードを読み、攻撃パターンを学ぶこと
- 自身のセキュリティ研修の参考とすること
- 適切な文脈のもと、教育目的で実演すること

**You MUST NOT** / 以下は禁止されます:
- Use any part of this code with malicious intent
- Deploy it against systems or users without their explicit consent
- Modify the harmless payloads into actual malware

- このコードを悪意ある目的で使用すること
- 第三者の同意なく、他人のシステムやユーザーに対して使用すること
- 無害なペイロードを本物のマルウェアに改変すること

---

## Inspiration / 参考にした先例

This sample follows the tradition of intentionally vulnerable applications used in security education:

このサンプルは、セキュリティ教育で広く使われている、意図的に脆弱なアプリケーションの先例にならっています：

- [OWASP WebGoat](https://github.com/WebGoat/WebGoat)
- [OWASP Juice Shop](https://github.com/juice-shop/juice-shop)
- [DVWA (Damn Vulnerable Web Application)](https://github.com/digininja/DVWA)


---


## About this repository / このリポジトリについて

- **Purpose / 目的**: Educational sample for security awareness / セキュリティ意識向上のための教育サンプル

If you have concerns about this repository or found it being misused, please open an issue.

このリポジトリに関する懸念や、悪用されている事例を見つけた場合は、Issue を立ててください。

---

## Disclaimer / 免責事項

This repository is provided "AS IS" without warranty of any kind. The author is not responsible for any misuse of the techniques demonstrated here. Use the knowledge you gain from this sample only for defensive and educational purposes.

このリポジトリは「現状のまま」提供され、いかなる保証も伴いません。ここで実演される技法の悪用について、作成者は責任を負いません。このサンプルから得た知識は、防御および教育目的にのみ使用してください。
