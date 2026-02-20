#!/bin/bash
# A3 Rubric Checker - Run this from your project root (kambaz-next-js folder)
# Usage: bash check_a3.sh

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS=0
FAIL=0

check() {
  local label="$1"
  local file="$2"
  local pattern="$3"

  if [ -f "$file" ]; then
    if [ -z "$pattern" ] || grep -q "$pattern" "$file" 2>/dev/null; then
      echo -e "${GREEN}✅ $label${NC}"
      ((PASS++))
    else
      echo -e "${RED}❌ $label — file exists but missing: '$pattern'${NC}"
      ((FAIL++))
    fi
  else
    echo -e "${RED}❌ $label — FILE NOT FOUND: $file${NC}"
    ((FAIL++))
  fi
}

check_dir() {
  local label="$1"
  local dir="$2"
  if [ -d "$dir" ]; then
    echo -e "${GREEN}✅ $label${NC}"
    ((PASS++))
  else
    echo -e "${RED}❌ $label — DIRECTORY NOT FOUND: $dir${NC}"
    ((FAIL++))
  fi
}

echo ""
echo "=================================================="
echo "        A3 RUBRIC CHECKER - Lab 3 & Kambaz"
echo "=================================================="
echo ""

echo -e "${YELLOW}--- LABS: JavaScript Concepts ---${NC}"

check "Variables and Constants" \
  "app/labs/lab3/VariablesAndConstants.tsx" \
  "functionScoped"

check "Variable Types" \
  "app/labs/lab3/VariableTypes.tsx" \
  "typeof"

check "Boolean Variables" \
  "app/labs/lab3/BooleanVariables.tsx" \
  "true1"

check "If Else" \
  "app/labs/lab3/IfElse.tsx" \
  "if-else"

check "Ternary Conditional Operator" \
  "app/labs/lab3/TernaryOperator.tsx" \
  "loggedIn"

check "Generating Conditional Output (IfElse)" \
  "app/labs/lab3/ConditionalOutputIfElse.tsx" \
  "Welcome If Else"

check "Please Login Inline" \
  "app/labs/lab3/ConditionalOutputInline.tsx" \
  "Please login Inline"

check "Legacy ES5 Function" \
  "app/labs/lab3/LegacyFunctions.tsx" \
  "twoPlusFour"

check "ES6 Arrow Functions" \
  "app/labs/lab3/ArrowFunctions.tsx" \
  "subtract"

check "Implied Returns" \
  "app/labs/lab3/ImpliedReturn.tsx" \
  "multiply"

check "Template Literals" \
  "app/labs/lab3/TemplateLiterals.tsx" \
  "greeting"

check "Working with Arrays (SimpleArrays)" \
  "app/labs/lab3/SimpleArrays.tsx" \
  "numberArray1"

check "Array Index and Length" \
  "app/labs/lab3/ArrayIndexAndLength.tsx" \
  "indexOf"

check "Adding and Removing Data to/from Arrays" \
  "app/labs/lab3/AddingAndRemovingToFromArrays.tsx" \
  "push"

check "For Loops" \
  "app/labs/lab3/ForLoops.tsx" \
  "for"

check "The Map Function" \
  "app/labs/lab3/MapFunction.tsx" \
  "\.map"

check "The Find Function" \
  "app/labs/lab3/FindFunction.tsx" \
  "\.find"

check "The Find Index Function" \
  "app/labs/lab3/FindIndex.tsx" \
  "findIndex"

check "The Filter Function" \
  "app/labs/lab3/FilterFunction.tsx" \
  "\.filter"

check "JSON (JavaScript Object Notation)" \
  "app/labs/lab3/House.tsx" \
  "JSON.stringify"

check "Implementing TodoItem" \
  "app/labs/lab3/todos/TodoItem.tsx" \
  "todo"

check "TodoList" \
  "app/labs/lab3/todos/TodoList.tsx" \
  "todos.map"

check "The Spread Operator" \
  "app/labs/lab3/Spreader.tsx" \
  "\.\.\."

check "Destructuring" \
  "app/labs/lab3/Destructing.tsx" \
  "const { name"

check "Function Destructuring" \
  "app/labs/lab3/FunctionDestructing.tsx" \
  "subtract"

echo ""
echo -e "${YELLOW}--- LABS: Dynamic Styling ---${NC}"

check "Working with HTML Classes (Classes.tsx)" \
  "app/labs/lab3/Classes.tsx" \
  "wd-bg-"

check "Classes.css exists" \
  "app/labs/lab3/Classes.css" \
  "background-color"

check "Red Dangerous background" \
  "app/labs/lab3/Classes.tsx" \
  "dangerous"

check "Blue Dynamic blue background" \
  "app/labs/lab3/Classes.tsx" \
  "color"

check "Working with the HTML Style attribute (Styles.tsx)" \
  "app/labs/lab3/Styles.tsx" \
  "backgroundColor"

check "Styles yellow, red, blue backgrounds" \
  "app/labs/lab3/Styles.tsx" \
  "lightyellow"

echo ""
echo -e "${YELLOW}--- LABS: Parameterizing Components ---${NC}"

check "Parameterizing Components (Add.tsx)" \
  "app/labs/lab3/Add.tsx" \
  "a + b"

check "Child Components (Square or Highlight)" \
  "app/labs/lab3/Square.tsx" \
  "children"

check "Working with Pathname (TOC.tsx)" \
  "app/labs/TOC.tsx" \
  "usePathname"

check "Navigation highlights current page" \
  "app/labs/TOC.tsx" \
  "active"

check "Encoding Path Parameters (PathParameters.tsx)" \
  "app/labs/lab3/PathParameters.tsx" \
  "add/1/2"

check "1 + 2 displays 3 (AddPathParameters page)" \
  "app/labs/lab3/add/[a]/[b]/page.tsx" \
  "parseInt"

check "3 + 4 displays 7 (same page)" \
  "app/labs/lab3/add/[a]/[b]/page.tsx" \
  "parseInt"

echo ""
echo -e "${YELLOW}--- KAMBAZ: Data Driven Screens ---${NC}"

check "Kambaz Navigation (data-driven)" \
  "app/(kambaz)/Navigation.tsx" \
  "links.map"

check "Kambaz Dashboard (data-driven)" \
  "app/(kambaz)/dashboard/page.tsx" \
  "courses.map"

check "Kambaz Course Screen (dynamic cid)" \
  "app/(kambaz)/courses/[cid]/layout.tsx" \
  "courses.find"

check "Kambaz Course Navigation (data array)" \
  "app/(kambaz)/courses/[cid]/Navigation.tsx" \
  "links"

check "Kambaz Modules Screen (data-driven)" \
  "app/(kambaz)/courses/[cid]/modules/page.tsx" \
  "modules"

check "Kambaz Home Screen with React.js" \
  "app/(kambaz)/courses/[cid]/home/page.tsx" \
  ""

check "Kambaz Assignments Screen (data-driven)" \
  "app/(kambaz)/courses/[cid]/assignments/page.tsx" \
  "assignments"

check "Kambaz Assignment Editor Screen" \
  "app/(kambaz)/courses/[cid]/assignments/[aid]/page.tsx" \
  ""

check "Kambaz People Screen (data-driven)" \
  "app/(kambaz)/courses/[cid]/people/Table/page.tsx" \
  "enrollments"

echo ""
echo -e "${YELLOW}--- DATABASE FILES ---${NC}"

check "courses.json exists" \
  "app/(kambaz)/database/courses.json" \
  ""

check "modules.json exists" \
  "app/(kambaz)/database/modules.json" \
  ""

check "assignments.json exists" \
  "app/(kambaz)/database/assignments.json" \
  ""

check "users.json exists" \
  "app/(kambaz)/database/users.json" \
  ""

check "enrollments.json exists" \
  "app/(kambaz)/database/enrollments.json" \
  ""

check "database/index.ts exports all" \
  "app/(kambaz)/database/index.ts" \
  "assignments"

echo ""
echo "=================================================="
echo -e "  RESULTS: ${GREEN}$PASS passed${NC} | ${RED}$FAIL failed${NC}"
echo "=================================================="
echo ""
if [ $FAIL -eq 0 ]; then
  echo -e "${GREEN}🎉 All checks passed! You're looking great for a 100!${NC}"
else
  echo -e "${RED}⚠️  Fix the $FAIL failing items above before submitting.${NC}"
fi
echo ""
