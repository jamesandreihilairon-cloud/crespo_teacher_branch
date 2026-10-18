# CRESPORT — Teacher Grade Management Demo

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.

## Included files
- `index.html` — portal structure
- `style.css` — CRESPORT navy/blue styling and responsive layouts
- `app.js` — demonstration data, grade calculations, filters, alerts, review actions and print behavior

## Updated grade review interface
- Grading periods are **Term 1 and Term 2** only.
- Four assigned classes are available: Grade 12 – TVL – Programming 1 (Advisory Class), Grade 12 – STEM 4 – MIL (Subject Class), Grade 12 – ABM 2 – PR (Subject Class), and Grade 11 – HUMSS 3 – Philosophy (Subject Class).
- Programming is shown as the specialization of the TVL strand.
- The student grade table column order is: Student information → Status → subject grade column(s) → **Term Average** → Remark. A small spacer column separates Status from the subject columns. All subject columns share one fixed width grid (defined by a `<colgroup>` in `renderTable()`), so they stay aligned and scroll together.
- **Term Average** is the mean of the recorded subject grades for the selected term (one decimal). Missing grades are skipped, never counted as zero. It recalculates after a grade is saved.
- The layout button is labelled **Layout** (⇄ icon kept) and is shown **only for Advisory Classes** (decided by the class `advisory` flag, not by name). Subject Classes always use the horizontal editable table and the button is hidden.
- Every main card has a navy outer border, and every table uses alternating row colours.
- Search, student classification and enrollment filters, class switching, performance alerts, submission review and printing remain available.

## Demo limitations
The sample records are fictional. Grade and review changes are held in the current browser session only; there is no database or authentication backend. Guardian notifications are simulations and do not send real SMS or email.

## Round 2 additions
- **Save All Grades** (Subject Classes only, beside Print): saves every edited grade for the selected class and grading period at once. Edits are tracked (orange input highlight, badge count, footer note). Validation runs first, so an invalid entry saves nothing and is highlighted. The per-row Save button still works.
- Switching class or grading period with unsaved edits opens a Keep editing / Discard / Save all & continue prompt; closing the tab shows the browser's leave warning.
- **Submitted Grade Review** had its Class / Section column removed (restored in Round 4, see below).
- **Printing**: centred heading, report details and total student count; no search text, filters or Save controls; grades print as plain values; the table scales to the page for both Advisory (horizontal and vertical) and Subject Classes.
- Highest / Average / Lowest grade are centred in the Class Performance card.

## Round 3 changes
- **Review popup**: Class / section removed; the former *Record* column is now **Remark** (Passed if the grade is 75 or above, Failed below 75; "—" when no grade is recorded). The free-text field is now labelled *Review notes* to avoid clashing with Remark.
- **Term Average**: no column tint. Only the number sits in a compact orange pill. The header reads *Term 1/2/3 Average* and follows the grading-period selector. Term labels under subject names were removed.
- **Horizontal layout**: long subject names are cut with an ellipsis, and hovering (or focusing) a truncated name shows the full name in a tooltip. Names that fit show no tooltip. The vertical layout is unchanged.
- **Print**: the average uses the same size and weight as subject grades with a thin outline (a border, not a shadow). The spacer column is dropped and subject headers wrap to show full names.

## Round 3 additions
- **Assets** (`assets/`): `cresport-wordmark.png`, `cresport-mascot.png`, `settings-icon.png`, `bell-icon.png`. The header also looks for **`assets/school-logo.png`** (CDLSHS seal). That file was not supplied, so nothing is shown there until it is added.
- **Grading period** is chosen with the Term 1 / Term 2 box in the Grade Progress card (a hidden `#termSelect` still holds the term state).
- **Submitted Grade Review** lists every submission again (5), not only those of the selected term. The review popup shows Subject, Teacher, Grading period and Status (Class / Section was removed from the popup again in Round 4).
- **Notifications**: unread badge on the bell, dropdown (newest first), per-notification targets (submission, class + term, or student), read/unread state held in the browser session only.

## Round 4: grade review workflow
- **Statuses** are now `Sent to Adviser`, `Confirmed` and `Returned for Correction` (plus `Draft` for work not yet sent). The old *For Review* / *Returned* labels were renamed on the existing records.
- **Advisory Teacher Review** (default): columns Subject, Subject teacher, **Class / Section**, Grading period, Submitted, Status, Action. Sent to Adviser → *Review* (confirm / return), Confirmed → *View Details*, Returned for Correction → *Review* (inspect only), Draft → no button. The popups no longer show Class / Section.
- **Subject Teacher Review** (switch in the section header): lists the subject-class submissions only (never the advisory class), with the column **Advisory Teacher**, Class / Section, the status description and the action: Sent to Adviser → *View Submission*, Confirmed → *View Grades*, Returned for Correction → *Revise Grades* (opens that class and grading period in the Student Grade Table with the existing editing and Save All Grades). The description under the heading is the exact text requested.
- Both views read the same `submissions` records (same ids). **Submit to Adviser** (Subject Classes, beside Save All Grades) sends a class + grading period to the adviser: it re-sends a returned record under its original id, or creates the record the first time. It requires saved grades for all active students.
- A returned submission shows a banner above the grade table with the adviser's note, and blank entries are outlined.
- **Grade Management card** (the class progress tracker) now has a white inner area.
- **Placeholder data:** the adviser names of the three subject classes (`classPeople` in `app.js`) are fictional; replace them with real data.
- `Returned for Correction` wording: the subject teacher's list uses *"The advisory teacher found errors or missing entries and sent the submission back."*; the advisory popup and tooltips use *"…found missing or incorrect information and sent the submission back to the subject teacher for revision."*

## Round 5: teacher profile, grade review cleanup, real confirmation
- **Account status**: the teacher record (`teacher` in `app.js`) has `status:"Active"`; the profile shows it in the existing green status pill. It is separate from submission statuses, student statuses and remarks.
- **Profile picture**: *Upload Photo / Change Photo* in the profile card. JPG/JPEG/PNG only, max 2 MB, centre-cropped to a 320 px square, preview with *Save Photo* / *Cancel*. Saved to this browser's `localStorage` (key `cresport.teacher.photo`). There is **no server**, so it is not stored permanently or across devices. For a backend, replace the `localStorage.setItem` call in the `#photoSave` handler with your upload API. The header and profile card are painted from the same value (`syncTeacherUI`). Default avatar is a neutral silhouette.
- **Role label** (replaces "Grade 11 · ICT"): derived by `teacherRoles()` from the assignment types in `classes` (advisory class → *Advisory Teacher*, subject classes → *Subject Teacher*). This teacher has both, so it reads *Advisory Teacher · Subject Teacher*. Setting `teacher.position` overrides the derivation. Department/strand are never used.
- **Submitted Grade Review**: tabs renamed *Advisory Review* / *Subject Review*; Class/Section only in Subject Review; Grading period column removed from both (still stored as `term`); status explanations only as hover/focus tooltips; `Draft` removed entirely (its sample record was deleted).
- **Classification** (Regular / Irregular) now appears under the LRN in Student information, separate from account status and Passed/Failed.
- **Confirmation applies grades**: each submission carries a snapshot `entries` of `{studentId, grade}`. *Confirm Grades* calls `applyConfirmedGrades`, which validates students/subject/class/term, writes only those keys to `gradeBook` (no duplicates, blanks never overwrite), then re-renders averages, remarks, performance and progress. *Return for Correction* applies nothing. Re-submitting a returned record refreshes its snapshot under the same id and it is applied only after the next confirmation. Advisory-class students' term grade is now the rounded average of their subject grades, so confirmed grades reach the performance widgets.
- **Placeholder data**: submission #6 (General Mathematics, "Mr. Renato Villanueva", advisory class) is fictional, added so confirmation visibly updates the advisory table. Submissions of the three subject classes apply to those classes' own records.

## Round 6: Performance Alert notifications limited to the advisory class
- **Viewing is separate from notifying.** Alerts for every assigned class (advisory and subject) remain visible. Only *Notify* / *Notify All* are permission-gated.
- **Single permission source:** `advisoryClassOf(student)` resolves the teacher's advisory class from the assignment flag (`classes[].advisory`) and the enrollment roster (`classes[].students`, by student id), never from the class label or the class selected on screen. `notifyPermission()` and `canNotifyAll()` are built on it.
- **Enforced in the logic, not only the UI:** `notifyStudent()` and the *Notify All* confirm step re-check permission, so a hidden/injected button or a direct call cannot send. Ineligible attempts show: *"Only students in your assigned advisory class can be notified through Performance Alert."*
- **Subject teachers without an advisory class** can view alerts but cannot notify anyone.
- **No duplicates:** one key per student + advisory class + term + alert category (`notifyKey`), shared by single Notify and Notify All, independent of the class view used.
- **Fix:** per-student buttons now refresh to *Notified* after *Notify All*.
- Grades, remarks, alert statuses and submissions are never modified by notifying. Notifications remain simulated (no SMS/email backend).

## Round 7: demo data, Pending Review label, popup badge, alert details
- **Performance Alert**: a one-line note (*Only students in your assigned advisory class can be notified.*) sits under the description; each entry shows `LRN: … | Regular/Irregular` (from the student record) under the name. No "Programming 1" label is shown under names.
- **Advisory Review** lists only this teacher's advisory-class submissions (matched by class id, not text) for Oral Communication, General Mathematics, Media and Information Literacy and Programming: ids 7, 6, 8, 9. The stored status stays `Sent to Adviser`; Advisory Review *displays* **Pending Review** (hover text only). Subject Review keeps `Sent to Adviser`. `Confirmed` / `Returned for Correction` are unchanged.
- **Popup**: the status badge sits beside the *Submitted Grade Review* heading in all five popups; the old status box in the body was removed (one badge only).
- **Removed duplicate**: submission #1 (MIL, Grade 12 STEM 4, Term 1, Sent to Adviser). #5 (MIL STEM 4, Term 3, Returned for Correction) is a different term and stays; the advisory MIL submission (#8) is a separate record for the advisory class.
- **Demo data**: for advisory students 1-8 in Term 1 the four subjects have **no approved grades** until a submission is confirmed (`subjectGrade` returns only `gradeBook` values for those cells; the sample grades live in each submission's `entries`). Terms 2-3 keep their sample grades. Nathan Flores has no Term 1 grade in the original data, so his cell stays blank.
- **Placeholders**: Oral Communication teacher "Ms. Elena Navarro" is fictional; Ms. Carla Bautista (MIL) and Mr. Paulo Cruz (Programming) come from `classPeople`.
- Frontend only: state is held in the browser session; nothing is written to a database.

## Round 8: save, submit, revise and resubmit are separate actions
- **Save / Save All Grades** now open *Confirm Grade Changes* first (class, term, entry count, current → new grade). *Cancel* keeps every unsaved edit; *Confirm Save* validates and saves all-or-nothing (double-clicks save once). Empty or invalid entries are named and block the save. Saving only stores editable, **unsubmitted** grades and says so; it never creates or changes a submission. (The "Save all & continue" button in the unsaved-changes prompt is itself an explicit confirmation and does not open a second dialog.)
- **Submit to Adviser** validates before changing anything: assigned subject class + term, no unsaved edits, every active student has a saved whole-number grade from 0 to 100, and no existing Sent to Adviser / Confirmed submission for the same class + subject + term. A returned submission is updated under its original id; otherwise one record is created. The record is flagged `handedOff`, which is what makes it appear in **Advisory Review** (*Pending Review*) as well as **Subject Review** (*Sent to Adviser*): one shared record.
- **Bug fixed:** since Round 7 Advisory Review listed only the advisory class's four subjects, so a subject class's submission (new or resubmitted) never reached it. It now also lists subject-class submissions that were handed to the adviser. Seeded records that were not handed off (e.g. Philosophy) stay hidden there, as before.
- **Revise Grades** opens that class + term with the returned banner and its saved grades. Saving a revision leaves the status `Returned for Correction` and the submitted snapshot unchanged; only *Submit to Adviser* resubmits it (same id, status back to `Sent to Adviser` / `Pending Review`). Revised grades reach the approved record only when the adviser confirms.
- **Review history** (returns, resubmissions) is kept on each submission and shown in the review popups.
- **Demo data:** the Practical Research submission (#2) was removed from both tables. The Practical Research subject, class (Grade 12 – ABM 2 – PR), students and other terms are unchanged; the five students' **Term 1** grades are cleared (including Trisha Valdez, a transferred-out student, whose old Term 1 grade is gone too).
- Frontend only: nothing is written to a database; state lives in the browser session.

## Round 9: student search in the grade table
- Search filters the rows of the existing Student Grade Table Record in place (name or LRN, updates as you type). Matching ignores case, accents, punctuation and extra spaces, and every typed word must match (`Castillo, Gabriel`, `Dela  Cruz`, `1245 0011 0006`).
- No match shows **No students found** inside the table. Clearing the search restores the whole class. Class, term, status/classification filters and layout are kept while searching.
- Searching never changes grades, saves or submissions. Unsaved edits in rows hidden by a search are kept; if a hidden row has an invalid entry when saving, the search is cleared so the row can be fixed.
- **Print** ignores the search text and prints every student of the class (only the status/classification filters listed in the print header still apply); the search view returns after printing.

## Term 3 removed
- Grading periods are now only Term 1 and Term 2: Term 3 button and hidden `<option>` removed, `terms` array shortened, and each student's `grades` array trimmed to the two remaining terms (Term 1 and Term 2 values unchanged; the old Term 3 value and unused 4th slot were dropped).
- Submission #5 (MIL, STEM 4, Term 3, Returned for Correction) was Term 3 data and was removed. Nothing else in the submission workflow changed.
