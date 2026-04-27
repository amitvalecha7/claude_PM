#!/usr/bin/env bash
# PM Pro Skill Installer — Shell version
# by Amit Valecha | https://github.com/amitvalecha7/claude_PM
#
# Usage:
#   bash install.sh            # Global install (~/.claude/commands/)
#   bash install.sh --project  # Project-only install (./.claude/commands/)
#   bash install.sh --remove   # Remove global install

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SRC="$SCRIPT_DIR/.claude/commands/pm.md"
TEMPLATES_SRC="$SCRIPT_DIR/templates"
POLICIES_SRC="$SCRIPT_DIR/policies"

GLOBAL_COMMANDS_DIR="$HOME/.claude/commands"
PROJECT_COMMANDS_DIR="$(pwd)/.claude/commands"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

MODE="${1:---global}"

install_global() {
  echo -e "\n${GREEN}🚀 Installing PM Pro skill globally...${NC}\n"
  mkdir -p "$GLOBAL_COMMANDS_DIR"
  cp "$SKILL_SRC" "$GLOBAL_COMMANDS_DIR/pm.md"
  echo -e "  ${GREEN}✓${NC} Skill installed → $GLOBAL_COMMANDS_DIR/pm.md"
  mkdir -p "$HOME/.claude/pm-templates" "$HOME/.claude/pm-policies"
  cp -r "$TEMPLATES_SRC/." "$HOME/.claude/pm-templates/"
  cp -r "$POLICIES_SRC/." "$HOME/.claude/pm-policies/"
  echo -e "  ${GREEN}✓${NC} Templates installed → ~/.claude/pm-templates/"
  echo -e "  ${GREEN}✓${NC} Policies installed  → ~/.claude/pm-policies/"
  echo -e "\n${GREEN}✅ PM Pro skill installed globally!${NC}"
  echo -e "\n${YELLOW}📋 Usage: Open any project in Claude Code and type /pm${NC}\n"
}

install_project() {
  echo -e "\n${GREEN}🚀 Installing PM Pro skill for this project...${NC}\n"
  mkdir -p "$PROJECT_COMMANDS_DIR"
  cp "$SKILL_SRC" "$PROJECT_COMMANDS_DIR/pm.md"
  echo -e "  ${GREEN}✓${NC} Skill installed → $PROJECT_COMMANDS_DIR/pm.md"
  cp -r "$TEMPLATES_SRC" "$(pwd)/templates"
  cp -r "$POLICIES_SRC" "$(pwd)/policies"
  echo -e "  ${GREEN}✓${NC} Templates installed → ./templates/"
  echo -e "  ${GREEN}✓${NC} Policies installed  → ./policies/"
  echo -e "\n${GREEN}✅ PM Pro skill installed for this project!${NC}"
  echo -e "\n${YELLOW}📋 Usage: Open this project in Claude Code and type /pm${NC}\n"
}

remove_global() {
  TARGET="$GLOBAL_COMMANDS_DIR/pm.md"
  if [ -f "$TARGET" ]; then
    rm "$TARGET"
    echo -e "\n${GREEN}✅ Removed: $TARGET${NC}\n"
  else
    echo -e "\n${YELLOW}⚠️  PM Pro skill not found at $TARGET${NC}\n"
  fi
}

case "$MODE" in
  --global)   install_global  ;;
  --project)  install_project ;;
  --remove)   remove_global   ;;
  *)
    echo "Usage: bash install.sh [--global|--project|--remove]"
    exit 1
    ;;
esac
