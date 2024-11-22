# 請檢查以下測試是否通過
## Jeremy
### 程式檢查
- [ ] 1. 預設檢查
- [ ] 2. 傳 `.env.sample` 跟 `.env.local`
- [ ] 3. 只傳 `envName`: `.env.setting`
- [ ] 4. 只傳 `schemaName`: `.env.schema`
- [ ] 5. 只傳 `isCheckMissing`: `false`
- [ ] 6. 只傳 `isCheckEmpty`: `false`
- [ ] 7. 只傳 `isCheckExtra`: `false`
- [ ] 8. 全傳 `false`
- [ ] 9. 全傳 `true`
- [ ] 10. 傳兩個 `false`
- [ ] 11. `rootDir` 傳 `'use default'`
- [ ] 12. `rootDir` 傳不存在的資料夾
- [ ] 13. `rootDir` 傳存在的資料夾
- [ ] 14. `rootDir` 傳很深的資料夾
- [ ] 15. `rootDir` 傳同名但不同路徑的資料夾
- [ ] 16. schema 跟 env 檔案不在同一層
- [ ] 17. schema 不存在
- [ ] 18. env 不存在
- [ ] 19. schema 跟 env 都不存在

### CLI 檢查
- [ ] 1. `npx env-aligner`
- [ ] 2. `npx env-aligner -h`
- [ ] 3. `npx env-aligner -v`
- [ ] 4. `npx env-aligner -s .env.sample`
- [ ] 5. `npx env-aligner -e .env.local`
- [ ] 6. `npx env-aligner -s .env.sample -e .env.local`
- [ ] 7. `npx env-aligner --schema .env.sample --env .env.local`
- [ ] 8. `npx env-aligner -m false`
- [ ] 9. `npx env-aligner -m true`
- [ ] 10. `npx env-aligner -n false`
- [ ] 11. `npx env-aligner -x true`
- [ ] 12. `npx env-aligner -m false -n false -x false`
- [ ] 13. `npx env-aligner -m true -n true -x true`
- [ ] 14. `npx env-aligner --missing false --empty false --extra false`
- [ ] 15. `npx env-aligner -e .env.setting -s .env.schema` - 顛倒看抓不抓得到
- [ ] 16. `npx env-aligner -e .env.setting -s .env.schema -m false -n false -x false`


## JuiCheng
### 程式檢查
- [ ] 1. 預設檢查
- [ ] 2. 傳 `.env.sample` 跟 `.env.local`
- [ ] 3. 只傳 `envName`: `.env.setting`
- [ ] 4. 只傳 `schemaName`: `.env.schema`
- [ ] 5. 只傳 `isCheckMissing`: `false`
- [ ] 6. 只傳 `isCheckEmpty`: `false`
- [ ] 7. 只傳 `isCheckExtra`: `false`
- [ ] 8. 全傳 `false`
- [ ] 9. 全傳 `true`
- [ ] 10. 傳兩個 `false`
- [ ] 11. `rootDir` 傳 `'use default'`
- [ ] 12. `rootDir` 傳不存在的資料夾
- [ ] 13. `rootDir` 傳存在的資料夾
- [ ] 14. `rootDir` 傳很深的資料夾
- [ ] 15. `rootDir` 傳同名但不同路徑的資料夾

### CLI 檢查
- [ ] 1. `npx env-aligner`
- [ ] 2. `npx env-aligner -h`
- [ ] 3. `npx env-aligner -v`
- [ ] 4. `npx env-aligner -s .env.sample`
- [ ] 5. `npx env-aligner -e .env.local`
- [ ] 6. `npx env-aligner -s .env.sample -e .env.local`
- [ ] 7. `npx env-aligner --schema .env.sample --env .env.local`
- [ ] 8. `npx env-aligner -m false`
- [ ] 9. `npx env-aligner -m true`
- [ ] 10. `npx env-aligner -n false`
- [ ] 11. `npx env-aligner -x true`
- [ ] 12. `npx env-aligner -m false -n false -x false`
- [ ] 13. `npx env-aligner -m true -n true -x true`
- [ ] 14. `npx env-aligner --missing false --empty false --extra false`
- [ ] 15. `npx env-aligner -e .env.setting -s .env.schema` - 顛倒看抓不抓得到
- [ ] 16. `npx env-aligner -e .env.setting -s .env.schema -m false -n false -x false`