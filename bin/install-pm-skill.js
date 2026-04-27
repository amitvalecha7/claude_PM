#!/usr/bin/env node
/**
 * PM Pro Skill Installer for Claude Code
 * by Amit Valecha — https://github.com/amitvalecha7/claude_PM
 *
 * Usage:
 *   node bin/install-pm-skill.js --global      Install to ~/.claude/commands/ (all projects)
 *   node bin/install-pm-skill.js --project     Install to ./.claude/commands/ (this project only)
 *   node bin/install-pm-skill.js --uninstall   Remove the global skill
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const mode = args[0] || '--global';

const SKILL_SRC = path.join(__dirname, '..', '.claude', 'commands', 'pm.md');
const TEMPLATES_SRC = path.join(__dirname, '..', 'templates');
const POLICIES_SRC = path.join(__dirname, '..', 'policies');

const GLOBAL_COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');
const PROJECT_COMMANDS_DIR = path.join(process.cwd(), '.claude', 'commands');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`  Created: ${dir}`);
  }
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installGlobal() {
  console.log('\n🚀 Installing PM Pro skill globally...\n');
  ensureDir(GLOBAL_COMMANDS_DIR);
  fs.copyFileSync(SKILL_SRC, path.join(GLOBAL_COMMANDS_DIR, 'pm.md'));
  console.log(`  ✓ Skill installed → ${path.join(GLOBAL_COMMANDS_DIR, 'pm.md')}`);

  const globalTemplatesDir = path.join(os.homedir(), '.claude', 'pm-templates');
  const globalPoliciesDir = path.join(os.homedir(), '.claude', 'pm-policies');
  copyDir(TEMPLATES_SRC, globalTemplatesDir);
  copyDir(POLICIES_SRC, globalPoliciesDir);
  console.log(`  ✓ Templates installed → ${globalTemplatesDir}`);
  console.log(`  ✓ Policies installed  → ${globalPoliciesDir}`);

  console.log('\n✅ PM Pro skill installed globally!');
  console.log('\n📋 Usage: Open any project in Claude Code and type /pm\n');
}

function installProject() {
  console.log('\n🚀 Installing PM Pro skill for this project...\n');
  ensureDir(PROJECT_COMMANDS_DIR);
  fs.copyFileSync(SKILL_SRC, path.join(PROJECT_COMMANDS_DIR, 'pm.md'));
  console.log(`  ✓ Skill installed → ${path.join(PROJECT_COMMANDS_DIR, 'pm.md')}`);
  copyDir(TEMPLATES_SRC, path.join(process.cwd(), 'templates'));
  copyDir(POLICIES_SRC, path.join(process.cwd(), 'policies'));
  console.log(`  ✓ Templates installed → ./templates/`);
  console.log(`  ✓ Policies installed  → ./policies/`);
  console.log('\n✅ PM Pro skill installed for this project!');
  console.log('\n📋 Usage: Open this project in Claude Code and type /pm\n');
}

function uninstall() {
  const target = path.join(GLOBAL_COMMANDS_DIR, 'pm.md');
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
    console.log(`\n✅ Removed: ${target}\n`);
  } else {
    console.log('\n⚠️  PM Pro skill not found at global install location.\n');
  }
}

switch (mode) {
  case '--global':    installGlobal();  break;
  case '--project':   installProject(); break;
  case '--uninstall': uninstall();      break;
  default:
    console.log('Usage: install-pm-skill [--global|--project|--uninstall]');
    process.exit(1);
}
