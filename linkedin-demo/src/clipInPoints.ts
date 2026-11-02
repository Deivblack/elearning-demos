/**
 * In-points (seconds) so each phone beat starts on the *relevant* screen —
 * never regresses to the login/welcome mid-story.
 *
 * Derived from frame inspection of Playwright webms.
 */
export const IN = {
  welcome: 0.4,
  /** Mission map already visible */
  map: 1.2,
  /** Mission 01 lesson content */
  lesson: 1.5,
  /** Safety trivia with wrong feedback */
  quizWrong: 3.5,
  /** Safety trivia with correct feedback */
  quizRight: 4.0,
  /** Badge modal "Safe floor" */
  badge: 5.0,
  /** Results / onboarding complete */
  final: 25.0,
} as const;
