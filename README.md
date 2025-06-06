## 簡介
此專案為 env-aligner 測試用專案，專門測試套件更新 beta 版的 CLI 與 JS 指令。

- 本次測試版本：2.0.0-beta.1

## 測試項目與人員
### Jeremy
1. CLI
    - [ ] `env-aligner`：預期自動檢查 root 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --dir src/env`：預期檢查 src/env folder 的 .env 跟 .env.example
    - [ ] `env-aligner --schema .env.schema`：預期自動檢查 root 的 .env 跟 .env.schema 的 missing key & missing value
    - [ ] `env-aligner --env .env.prod`：預期自動檢查 root 的 .env.prod 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --schema .env.schema --env .env.prod`：預期自動檢查 root 的 .env.prod 跟 .env.schema 的 missing key & missing value
    - [ ] `env-aligner --schema .env.prod --env .env.schema`：呈上，但把 env 跟 schema 寫相反，理論還是會檢查，只是參照反過來
    - [ ] `env-aligner --dir --schema --env`：都不給值時應會以預設值測試 root 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env`：檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value
    - [ ] `env-aligner --dir src/env --schema .env.example --env .env`：檢查 src/env 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --clone`：預期使用 root 的 .env.example 建立 .env
        - [ ] 原先就有 .env 時會報錯
        - [ ] 沒有 .env 時會建立
    - [ ] `env-aligner --clone true`：測試多傳參數 true，預期使用 root 的 .env.example 建立 .env
    - [ ] `env-aligner --clone false`：測試多傳參數 false，預期不會 clone，但會執行檢查，行為同 `env-aligner`
    - [ ] `env-aligner --strict`：開啟嚴格模式，預期自動檢查 root 的 .env 跟 .env.example 的 missing key & missing value & extra key
    - [ ] `env-aligner --strict true`：測試多傳參數 true，預期行為同 `env-aligner --strict`
    - [ ] `env-aligner --strict false`：測試多傳參數 false，預期行為同 `env-aligner`
    - [ ] `env-aligner --strict --align`：測試嚴格模式下進行排列，預期 .env 裡多出的 key 和註解會被移除，但保留 env value
    - [ ] `env-aligner --strict --align true`：測試多傳參數 true，預期行為同 `env-aligner --strict --align`
    - [ ] `env-aligner --strict --align false`：測試多傳參數 false `env-aligner --strict`
    - [ ] `env-aligner --align`：非嚴格模式下做 align，預期會報錯
    - [ ] `env-aligner --clone --strict`：預期 clone 優先級別會比 strict 高，所以只會 clone 不會檢查。
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --strict`：測試會以嚴格模式檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value & extra key
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --strict --align`：測試會以嚴格模式檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value & extra key，並執行排列
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --clone`：測試會以嚴格模式檢查 /.devcontainer 的 config.example 建立 .env file，而多傳的 `--env config.env` 不會影響運作
    - [ ] `env-aligner --schema .env.not-found`：沒有該檔案，預期噴錯
    - [ ] `env-aligner --env .env.not-found`：沒有該檔案，預期噴錯
    - [ ] `env-aligner --dir not-found`：沒有該路徑，預期噴錯
    - [ ] `env-aligner --dir not-found --schema env.not-found --env env.not-found`：：沒有該檔案與路徑，預期噴錯
    - [ ] `env-aligner --help`：預期顯示幫助指令

### Jui-Cheng
1. CLI
    - [ ] `env-aligner`：預期自動檢查 root 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --dir src/env`：預期檢查 src/env folder 的 .env 跟 .env.example
    - [ ] `env-aligner --schema .env.schema`：預期自動檢查 root 的 .env 跟 .env.schema 的 missing key & missing value
    - [ ] `env-aligner --env .env.prod`：預期自動檢查 root 的 .env.prod 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --schema .env.schema --env .env.prod`：預期自動檢查 root 的 .env.prod 跟 .env.schema 的 missing key & missing value
    - [ ] `env-aligner --schema .env.prod --env .env.schema`：呈上，但把 env 跟 schema 寫相反，理論還是會檢查，只是參照反過來
    - [ ] `env-aligner --dir --schema --env`：都不給值時應會以預設值測試 root 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env`：檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value
    - [ ] `env-aligner --dir src/env --schema .env.example --env .env`：檢查 src/env 的 .env 跟 .env.example 的 missing key & missing value
    - [ ] `env-aligner --clone`：預期使用 root 的 .env.example 建立 .env
        - [ ] 原先就有 .env 時會報錯
        - [ ] 沒有 .env 時會建立
    - [ ] `env-aligner --clone true`：測試多傳參數 true，預期使用 root 的 .env.example 建立 .env
    - [ ] `env-aligner --clone false`：測試多傳參數 false，預期不會 clone，但會執行檢查，行為同 `env-aligner`
    - [ ] `env-aligner --strict`：開啟嚴格模式，預期自動檢查 root 的 .env 跟 .env.example 的 missing key & missing value & extra key
    - [ ] `env-aligner --strict true`：測試多傳參數 true，預期行為同 `env-aligner --strict`
    - [ ] `env-aligner --strict false`：測試多傳參數 false，預期行為同 `env-aligner`
    - [ ] `env-aligner --strict --align`：測試嚴格模式下進行排列，預期 .env 裡多出的 key 和註解會被移除，但保留 env value
    - [ ] `env-aligner --strict --align true`：測試多傳參數 true，預期行為同 `env-aligner --strict --align`
    - [ ] `env-aligner --strict --align false`：測試多傳參數 false `env-aligner --strict`
    - [ ] `env-aligner --align`：非嚴格模式下做 align，預期會報錯
    - [ ] `env-aligner --clone --strict`：預期 clone 優先級別會比 strict 高，所以只會 clone 不會檢查。
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --strict`：測試會以嚴格模式檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value & extra key
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --strict --align`：測試會以嚴格模式檢查 /.devcontainer 的 config.env 跟 config.example 的 missing key & missing value & extra key，並執行排列
    - [ ] `env-aligner --dir /.devcontainer --schema config.example --env config.env --clone`：測試會以嚴格模式檢查 /.devcontainer 的 config.example 建立 .env file，而多傳的 `--env config.env` 不會影響運作
    - [ ] `env-aligner --schema .env.not-found`：沒有該檔案，預期噴錯
    - [ ] `env-aligner --env .env.not-found`：沒有該檔案，預期噴錯
    - [ ] `env-aligner --dir not-found`：沒有該路徑，預期噴錯
    - [ ] `env-aligner --dir not-found --schema env.not-found --env env.not-found`：：沒有該檔案與路徑，預期噴錯
    - [ ] `env-aligner --help`：預期顯示幫助指令