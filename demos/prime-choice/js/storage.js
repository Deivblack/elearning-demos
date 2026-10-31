/* Shared completion storage for Prime Choice outbound pilot.
   Key: pc_outbound_completions
   Learner UI writes; admin.html reads / exports (not linked from course). */
(function (global) {
  const STORAGE_KEY = 'pc_outbound_completions';

  function loadCompletions() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCompletion(record) {
    const all = loadCompletions();
    all.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return all;
  }

  function clearCompletions() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function summarize(records) {
    const n = records.length;
    if (!n) {
      return { count: 0, avgXp: 0, avgQuizPct: 0, avgDurationMs: 0 };
    }
    let xp = 0, quizPct = 0, dur = 0, durN = 0;
    records.forEach((r) => {
      xp += Number(r.xp) || 0;
      const tq = Number(r.totalQuestions) || 0;
      const ca = Number(r.correctAnswers) || 0;
      quizPct += tq ? (ca / tq) * 100 : 0;
      const d = Number(r.durationMs);
      if (Number.isFinite(d) && d >= 0) {
        dur += d;
        durN += 1;
      }
    });
    return {
      count: n,
      avgXp: Math.round(xp / n),
      avgQuizPct: Math.round(quizPct / n),
      avgDurationMs: durN ? Math.round(dur / durN) : 0
    };
  }

  function formatDuration(ms) {
    if (!Number.isFinite(ms) || ms < 0) return '—';
    const s = Math.round(ms / 1000);
    const m = Math.floor(s / 60);
    const r = s % 60;
    if (m <= 0) return `${r}s`;
    return `${m}m ${String(r).padStart(2, '0')}s`;
  }

  function toCsv(records) {
    const headers = [
      'id', 'firstName', 'lastName', 'fullName', 'lang',
      'startedAt', 'completedAt', 'durationMs', 'durationLabel',
      'xp', 'correctAnswers', 'totalQuestions', 'modulesCompleted', 'program', 'version'
    ];
    const esc = (v) => {
      const s = v == null ? '' : String(v);
      if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
      return s;
    };
    const lines = [headers.join(',')];
    records.forEach((r) => {
      lines.push([
        r.id, r.firstName, r.lastName, r.fullName, r.lang,
        r.startedAt, r.completedAt, r.durationMs, formatDuration(r.durationMs),
        r.xp, r.correctAnswers, r.totalQuestions,
        (r.modulesCompleted || []).join('|'),
        r.program, r.version
      ].map(esc).join(','));
    });
    return lines.join('\n');
  }

  global.PCStorage = {
    STORAGE_KEY,
    loadCompletions,
    saveCompletion,
    clearCompletions,
    summarize,
    formatDuration,
    toCsv
  };
})(typeof window !== 'undefined' ? window : globalThis);
