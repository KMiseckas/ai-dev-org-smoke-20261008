import test from 'node:test';
import assert from 'node:assert/strict';
import {greet} from '../greeting.mjs';
test('greets a named visitor',()=>assert.equal(greet('Ada'),'Hello, Ada'));
test('trims a visitor name',()=>assert.equal(greet('  Ada  '),'Hello, Ada'));
test('greets a blank visitor as guest',()=>assert.equal(greet(''),'Hello, guest'));
test('greets a whitespace-only visitor as guest',()=>assert.equal(greet(' \t\n '),'Hello, guest'));
