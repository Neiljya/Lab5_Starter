// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber [TRUE] - dashed format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber [TRUE] - Parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber [FALSE] - Numbers Only', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber [FALSE] - No Numbers', () => {
  expect(isPhoneNumber('call me maybe')).toBe(false);
});

// isEmail() Tests
test('isEmail [TRUE] - Standard', () => {
  expect(isEmail('hello@world.com')).toBe(true);
});

test('isEmail [TRUE] - Underscores', () => {
  expect(isEmail('ucsd_student1@ucsd.edu')).toBe(true);
});

test('isEmail [FALSE] - No top level domain', () => {
  expect(isEmail('hello@world')).toBe(false);
});

test('isEmail [FALSE] - No @', () => {
  expect(isEmail('helloworld.com')).toBe(false);
});

// Password tests
test('isStrongPassword [TRUE] - Standard', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('isStrongPassword [TRUE] - Underscores', () => {
  expect(isStrongPassword('Pass_Word')).toBe(true);
});

test('isStrongPassword [FALSE] - Starts with a number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('isStrongPassword [FALSE] - Too short (< 4 chars)', () => {
  expect(isStrongPassword('Pwd')).toBe(false);
});

// isDate() tests
test('isDate [TRUE] - Double digit', () => {
  expect(isDate('12/12/2024')).toBe(true);
});

test('isDate [TRUE] - Single digit', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('isDate [FALSE] - Dash format', () => {
  expect(isDate('12-12-2024')).toBe(false);
});

test('isDate [FALSE] - 2 digit year', () => {
  expect(isDate('12/12/24')).toBe(false);
});

// isHexColor() tests
test('isHexColor [TRUE] - 6 characters with hashtag', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});

test('isHexColor [TRUE] - 3 characters without hashtag', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('isHexColor [FALSE] - Invalid hex letter', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});

test('isHexColor [FALSE] - Wrong length', () => {
  expect(isHexColor('#ABCD')).toBe(false);
});