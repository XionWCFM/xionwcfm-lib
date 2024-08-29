# xionwcfm monorepo

## Blog Deployment

[xionwcfm.com](https://www.xionwcfm.com/) 


## Folder Structure

- apps : configs, packages에게 의존 당하지 않는 프로젝트 코드들이 포함됩니다.

- packages : apps 간 공유해서 사용할 수 있는 범용적인 코드조각들이 포함됩니다.

- configs : typescript, tailwindcss 등 다양한 패키지에서 필요로하는 구성 설정이 포함됩니다.

---

# CONVENTION

## LABEL CONVENTION

라벨은 아래 PR 컨벤션에서도 동일하게 사용될 수 있습니다.

- chore : 아래 라벨에 포함되지 않는 지루한 작업을 수행한 경우 사용합니다.

- documentation : 문서를 업데이트한 경우 사용합니다.

- feature : 새로운 기능을 구현했을 때 사용합니다.

- bug : 버그 수정시 사용합니다.

- hotfix : 급한 수정사항이 있을 경우 사용합니다.

- refactoring : 코드의 동작을 변경하지 않고 구조를 개선한 경우 사용합니다.

- progress : 해당 PR로 완결되지 못하는 커다란 작업을 수행하고 있을 때 사용합니다.


## PR CONVENTION

모든 PR의 제목은 다음과 같은 명명규칙을 준수합니다.

[yyyy.MM.dd] Label: 작업 내용

### example

[2024.06.19] feature: CI/CD 구성 설정 적용 및 workspace 설정 추가

---

## COMMIT CONVENTION

gitmoji를 이용하여 emoji를 통해 작업내용을 나타내며 각 Commit의 제목은 작업 내용을 나타냅니다.


---

## insight

[모노레포에서 Internal Packages를 관리하는 3가지 방법](https://xionwcfm.tistory.com/464)

