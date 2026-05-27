// このスクリプトは npm install 時に postinstall フックで自動実行される
// 【デモ用】実害なし。デスクトップにテキストファイルを作るだけ。

const fs = require('fs');
const path = require('path');
const os = require('os');

const desktopPath = path.join(os.homedir(), 'Desktop');
const targetFile = path.join(desktopPath, 'install_pwned.txt');

const message = `============================================================
[DEMO] このファイルは npm install の postinstall フックで
       自動的に作成されました。

実行日時: ${new Date().toISOString()}
実行ユーザー: ${os.userInfo().username}
ホスト名: ${os.hostname()}
プラットフォーム: ${os.platform()}

★ 実際の攻撃であれば、このタイミングで以下のようなことが実行されます：
  ・ランサムウェアの起動
  ・SSH鍵 (~/.ssh/id_rsa) の窃取と外部送信
  ・社内ツールの認証情報 (.env, 認証トークン) の窃取
  ・永続化バックドアの設置
  ・社内ネットワークへの横展開

「便利そうなツールだから npm install してみよう」
という行為が、これだけのリスクを含んでいます。
============================================================
`;

try {
  if (fs.existsSync(desktopPath)) {
    fs.writeFileSync(targetFile, message, 'utf8');
    console.log('\n  [demo] postinstall: ' + targetFile + ' を作成しました\n');
  } else {
    const fallback = path.join(os.homedir(), 'install_pwned.txt');
    fs.writeFileSync(fallback, message, 'utf8');
    console.log('\n  [demo] postinstall: ' + fallback + ' を作成しました\n');
  }
} catch (e) {
  console.log('  [demo] postinstall: ファイル作成失敗 (' + e.message + ')');
}
