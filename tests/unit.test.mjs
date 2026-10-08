import test from 'node:test';
import assert from 'node:assert/strict';
import {greet} from '../greeting.mjs';
test('greets a named visitor',()=>assert.equal(greet('Ada'),'Hello, Ada'));
test('trims a visitor name',()=>assert.equal(greet('  Ada  '),'Hello, Ada'));
