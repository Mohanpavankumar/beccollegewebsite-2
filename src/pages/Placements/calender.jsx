var NewComponent = React.createClass({
    render: function() {
      return (
  
        <academic-calendar className="AcademicCalendar">
          <h2 className="AcademicCalendar-title">Academic Calendar</h2>
          <div className="AcademicCalendar-controls">
            <div className="AcademicCalendar-controls-views">
              <form className="AcademicCalendar-yearSelect"><div className="Select">
                  <label className="Select-label">
                    <span className="label" />
                    <select className="Select-select input input-select     select2-hidden-accessible" name="Select-input" data-select2-id={1} tabIndex={-1} aria-hidden="true" data-bsp-plugin="Module72577">
                      <option value="/?y=2023" data-select2-id={3}>
                        2023
                      </option>
                      <option value="/?y=2024">
                        2024
                      </option>
                      <option value="/?y=2025">
                        2025
                      </option>
                      <option value="/?y=2026">
                        2026
                      </option>
                      <option value="/?y=2027">
                        2027
                      </option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: '99px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-Select-input-vx-container"><span className="select2-selection__rendered" id="select2-Select-input-vx-container" role="textbox" aria-readonly="true" title={
      2023
  }>
                            2023
                          </span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                  </label>
                </div>
              </form>
              <div className="AcademicCalendar-alternativeView"><a className="Link" href="https://academiccalendar.byu.edu/2023-calendar-list-view" data-cms-ai={0}>List View</a></div>
            </div>
            <div className="AcademicCalendar-controls-downloads">
              <div className="AcademicCalendar-subscribe-download"><a className="Link" href="https://academiccalendar.byu.edu/academicCalendar/export?start=2023-01-01&end=2023-12-31" data-cms-ai={0}>Subscribe</a></div>
            </div>
          </div>
          <div className="AcademicCalendar-row">
            <div className="AcademicCalendar-months">
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>JANUARY</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      1
                    </td>
                    <td className="AcademicCalendarDay custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="January 02, 2023" data-url="https://academiccalendar.byu.edu/new-years-day-2023-01-01"><a href="https://academiccalendar.byu.edu/new-years-day-2023-01-01" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      3
                    </td>
                    <td className="AcademicCalendarDay">
                      4
                    </td>
                    <td className="AcademicCalendarDay">
                      5
                    </td>
                    <td className="AcademicCalendarDay">
                      6
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      7
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="January 07, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-01-07"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-01-07" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      8
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Start of Classes (1st day)" data-date="January 09, 2023" data-url="https://academiccalendar.byu.edu/start-of-classes-2023-01-09"><a href="https://academiccalendar.byu.edu/start-of-classes-2023-01-09" target="_self" data-cms-ai={0}><strong>S</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      14
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay winter-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="January 16, 2023" data-url="https://academiccalendar.byu.edu/martin-luther-king-jr-day-2023-01-16"><a href="https://academiccalendar.byu.edu/martin-luther-king-jr-day-2023-01-16" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Add/Drop Deadline (Full Semester & 1st Term)" data-date="January 17, 2023" data-url="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-01-17"><a href="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-01-17" target="_self" data-cms-ai={0}><strong>A</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      21
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      22
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      24
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      25
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      28
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      29
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      31
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>FEBRUARY</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      1
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      4
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      11
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="1st Term or Spring Term Withdraw Deadline" data-date="February 13, 2023" data-url="https://academiccalendar.byu.edu/1st-term-withdraw-deadline-2023-02-13"><a href="https://academiccalendar.byu.edu/1st-term-withdraw-deadline-2023-02-13" target="_self" data-cms-ai={0}><strong>W</strong><sub>1</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      18
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay winter-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="February 20, 2023" data-url="https://academiccalendar.byu.edu/presidents-day-2023-02-20"><a href="https://academiccalendar.byu.edu/presidents-day-2023-02-20" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Monday Instruction" data-date="February 21, 2023" data-url="https://academiccalendar.byu.edu/monday-instruction-2023-02-21"><a href="https://academiccalendar.byu.edu/monday-instruction-2023-02-21" target="_self" data-cms-ai={0}><strong>M</strong><sub>I</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      22
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      24
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      25
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>MARCH</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of 1st Term" data-date="March 01, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-1st-term-2023-03-01"><a href="https://academiccalendar.byu.edu/last-day-of-1st-term-2023-03-01" target="_self" data-cms-ai={0}><strong>T</strong><sub>1</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="First Day of 2nd Term" data-date="March 02, 2023" data-url="https://academiccalendar.byu.edu/first-day-of-2nd-term-2023-03-02"><a href="https://academiccalendar.byu.edu/first-day-of-2nd-term-2023-03-02" target="_self" data-cms-ai={0}><strong>T</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      4
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="2nd Term Add/Drop Deadline" data-date="March 09, 2023" data-url="https://academiccalendar.byu.edu/2nd-term-add-drop-deadline-2023-03-09"><a href="https://academiccalendar.byu.edu/2nd-term-add-drop-deadline-2023-03-09" target="_self" data-cms-ai={0}><strong>A</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      11
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="No Classes" data-date="March 17, 2023" data-url="https://academiccalendar.byu.edu/no-classes-2023-03-17"><a href="https://academiccalendar.byu.edu/no-classes-2023-03-17" target="_self" data-cms-ai={0}><strong>N</strong><sub>C</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      18
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      21
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Withdraw Deadline (Full Semester)" data-date="March 22, 2023" data-url="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-03-22"><a href="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-03-22" target="_self" data-cms-ai={0}><strong>W</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      24
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      25
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      29
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Instructor Ratings (Ends on Exam Prep Day)" data-date="March 30, 2023" data-url="https://academiccalendar.byu.edu/instructor-ratings-2023-03-30"><a href="https://academiccalendar.byu.edu/instructor-ratings-2023-03-30" target="_self" data-cms-ai={0}><strong>R</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      31
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>APRIL</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      1
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      4
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay winter-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="2nd Term or Summer Term Withdraw Deadline" data-date="April 06, 2023" data-url="https://academiccalendar.byu.edu/2nd-term-withdraw-deadline-2023-04-06"><a href="https://academiccalendar.byu.edu/2nd-term-withdraw-deadline-2023-04-06" target="_self" data-cms-ai={0}><strong>W</strong><sub>2</sub></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Discontinuance Deadline" data-date="April 06, 2023" data-url="https://academiccalendar.byu.edu/discontinuance-deadline/discontinuance-deadline-2023-04-06"><a href="https://academiccalendar.byu.edu/discontinuance-deadline/discontinuance-deadline-2023-04-06" target="_self" data-cms-ai={0}><strong>D</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      8
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      15
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay winter-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay winter-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of Class" data-date="April 19, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-class-2023-04-19"><a href="https://academiccalendar.byu.edu/last-day-of-class-2023-04-19" target="_self" data-cms-ai={0}><strong>L</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ffdddd'}}>
                      20
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Exam Preparation Day" data-date="April 20, 2023" data-url="https://academiccalendar.byu.edu/exam-preparation-day-2023-04-20"><a href="https://academiccalendar.byu.edu/exam-preparation-day-2023-04-20" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      21
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="April 21, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-04-21"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-04-21" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      22
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="April 22, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-04-22"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-04-22" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      23
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      24
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="April 24, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-04-24"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-04-24" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      25
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="April 25, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-04-25"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-04-25" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      26
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="April 26, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-04-26"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-04-26" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Commencement" data-date="April 27, 2023" data-url="https://academiccalendar.byu.edu/commencement-2023-04-27"><a href="https://academiccalendar.byu.edu/commencement-2023-04-27" target="_self" data-cms-ai={0}><strong>C</strong><sub>M</sub></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Convocations" data-date="April 27, 2023" data-url="https://academiccalendar.byu.edu/convocations-2023-04-27"><a href="https://academiccalendar.byu.edu/convocations-2023-04-27" target="_self" data-cms-ai={0}><strong>C</strong><sub>V</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Convocations" data-date="April 28, 2023" data-url="https://academiccalendar.byu.edu/convocations-2023-04-28"><a href="https://academiccalendar.byu.edu/convocations-2023-04-28" target="_self" data-cms-ai={0}><strong>C</strong><sub>V</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      29
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      30
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>MAY</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      1
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="May 01, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-05-01"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-05-01" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grade Submission Deadline" data-date="May 02, 2023" data-url="https://academiccalendar.byu.edu/winter-semester-grades-due-2023-05-02"><a href="https://academiccalendar.byu.edu/winter-semester-grades-due-2023-05-02" target="_self" data-cms-ai={0}><strong>G</strong><sub>S</sub></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Start of Classes (1st day)" data-date="May 02, 2023" data-url="https://academiccalendar.byu.edu/start-of-classes-1st-day-2023-05-02"><a href="https://academiccalendar.byu.edu/start-of-classes-1st-day-2023-05-02" target="_self" data-cms-ai={0}><strong>S</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grades Online for Students" data-date="May 04, 2023" data-url="https://academiccalendar.byu.edu/winter-semester-grades-online-2023-05-04"><a href="https://academiccalendar.byu.edu/winter-semester-grades-online-2023-05-04" target="_self" data-cms-ai={0}><strong>G</strong><sub>O</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      6
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Add/Drop Deadline (Full Semester & 1st Term)" data-date="May 09, 2023" data-url="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-05-09"><a href="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-05-09" target="_self" data-cms-ai={0}><strong>A</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      13
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      20
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      21
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      22
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      24
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      25
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      27
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay spring-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="May 29, 2023" data-url="https://academiccalendar.byu.edu/holidays/memorial-day-2023-05-29"><a href="https://academiccalendar.byu.edu/holidays/memorial-day-2023-05-29" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      31
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>JUNE</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      1
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Instructor Ratings (Ends on Exam Prep Day)" data-date="June 03, 2023" data-url="https://academiccalendar.byu.edu/instructor-ratings-2023-06-03"><a href="https://academiccalendar.byu.edu/instructor-ratings-2023-06-03" target="_self" data-cms-ai={0}><strong>R</strong></a></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      4
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay spring-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Discontinuance Deadline" data-date="June 06, 2023" data-url="https://academiccalendar.byu.edu/discontinuance-deadline-2023-06-06"><a href="https://academiccalendar.byu.edu/discontinuance-deadline-2023-06-06" target="_self" data-cms-ai={0}><strong>D</strong></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="1st Term or Spring Term Withdraw Deadline" data-date="June 06, 2023" data-url="https://academiccalendar.byu.edu/spring-term-withdraw-deadline-2023-06-06"><a href="https://academiccalendar.byu.edu/spring-term-withdraw-deadline-2023-06-06" target="_self" data-cms-ai={0}><strong>W</strong><sub>1</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      10
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay spring-term">
                      17
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay spring-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay spring-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="June 19, 2023" data-url="https://academiccalendar.byu.edu/holidays/juneteenth-2023-06-19"><a href="https://academiccalendar.byu.edu/holidays/juneteenth-2023-06-19" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay spring-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of Class" data-date="June 20, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-class-2023-06-20"><a href="https://academiccalendar.byu.edu/last-day-of-class-2023-06-20" target="_self" data-cms-ai={0}><strong>L</strong></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Withdraw Deadline (Full Semester)" data-date="June 20, 2023" data-url="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-06-20"><a href="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-06-20" target="_self" data-cms-ai={0}><strong>W</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ffdddd'}}>
                      21
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Exam Preparation Day" data-date="June 21, 2023" data-url="https://academiccalendar.byu.edu/exam-preparation-day-2023-06-21"><a href="https://academiccalendar.byu.edu/exam-preparation-day-2023-06-21" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      22
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="June 22, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-06-22"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-06-22" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      23
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="June 23, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-06-23"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-06-23" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      24
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="June 24, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-06-24"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-06-24" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      25
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Start of Classes (1st day)" data-date="June 26, 2023" data-url="https://academiccalendar.byu.edu/start-of-classes-1st-day-2023-06-26"><a href="https://academiccalendar.byu.edu/start-of-classes-1st-day-2023-06-26" target="_self" data-cms-ai={0}><strong>S</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grade Submission Deadline" data-date="June 29, 2023" data-url="https://academiccalendar.byu.edu/spring-term-grades-due-2023-06-28"><a href="https://academiccalendar.byu.edu/spring-term-grades-due-2023-06-28" target="_self" data-cms-ai={0}><strong>G</strong><sub>S</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>JULY</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      1
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay summer-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Add/Drop Deadline (Full Semester & 1st Term)" data-date="July 03, 2023" data-url="https://academiccalendar.byu.edu/add-drop-deadline-2023-07-03"><a href="https://academiccalendar.byu.edu/add-drop-deadline-2023-07-03" target="_self" data-cms-ai={0}><strong>A</strong></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grades Online for Students" data-date="July 03, 2023" data-url="https://academiccalendar.byu.edu/spring-term-grades-online-2023-07-03"><a href="https://academiccalendar.byu.edu/spring-term-grades-online-2023-07-03" target="_self" data-cms-ai={0}><strong>G</strong><sub>O</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="July 04, 2023" data-url="https://academiccalendar.byu.edu/holidays/independence-day-2023-07-04"><a href="https://academiccalendar.byu.edu/holidays/independence-day-2023-07-04" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      8
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      15
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      21
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      22
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay summer-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="July 24, 2023" data-url="https://academiccalendar.byu.edu/pioneer-day-2023-07-24"><a href="https://academiccalendar.byu.edu/pioneer-day-2023-07-24" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      25
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      29
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      31
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>AUGUST</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay summer-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Discontinuance Deadline" data-date="August 01, 2023" data-url="https://academiccalendar.byu.edu/discontinuance-deadline-2023-08-01"><a href="https://academiccalendar.byu.edu/discontinuance-deadline-2023-08-01" target="_self" data-cms-ai={0}><strong>D</strong></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="2nd Term or Summer Term Withdraw Deadline" data-date="August 01, 2023" data-url="https://academiccalendar.byu.edu/summer-term-withdraw-deadline-2023-08-01"><a href="https://academiccalendar.byu.edu/summer-term-withdraw-deadline-2023-08-01" target="_self" data-cms-ai={0}><strong>W</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      4
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      5
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      12
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay summer-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay summer-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of Class" data-date="August 14, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-class-2023-08-14"><a href="https://academiccalendar.byu.edu/last-day-of-class-2023-08-14" target="_self" data-cms-ai={0}><strong>L</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ffdddd'}}>
                      15
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Exam Preparation Day" data-date="August 15, 2023" data-url="https://academiccalendar.byu.edu/exam-preparation-day-2023-08-15"><a href="https://academiccalendar.byu.edu/exam-preparation-day-2023-08-15" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      16
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="August 16, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-08-16"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-08-16" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      17
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="August 17, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-17"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-17" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      18
                    </td>
                    <td className="AcademicCalendarDay">
                      19
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      20
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e4e4e4'}}>
                      21
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Education Week" data-date="August 21, 2023" data-url="https://academiccalendar.byu.edu/education-week-2023-08-21"><a href="https://academiccalendar.byu.edu/education-week-2023-08-21" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e4e4e4'}}>
                      22
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Education Week" data-date="August 22, 2023" data-url="https://academiccalendar.byu.edu/education-week-2023-08-22"><a href="https://academiccalendar.byu.edu/education-week-2023-08-22" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key has-two-events" style={{backgroundColor: '#e4e4e4'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grade Submission Deadline" data-date="August 23, 2023" data-url="https://academiccalendar.byu.edu/summer-term-grades-due-2023-08-23"><a href="https://academiccalendar.byu.edu/summer-term-grades-due-2023-08-23" target="_self" data-cms-ai={0}><strong>G</strong><sub>S</sub></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Education Week" data-date="August 23, 2023" data-url="https://academiccalendar.byu.edu/education-week-2023-08-23"><a href="https://academiccalendar.byu.edu/education-week-2023-08-23" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e4e4e4'}}>
                      24
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Education Week" data-date="August 24, 2023" data-url="https://academiccalendar.byu.edu/education-week-2023-08-24"><a href="https://academiccalendar.byu.edu/education-week-2023-08-24" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key has-two-events" style={{backgroundColor: '#e4e4e4'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grades Online for Students" data-date="August 25, 2023" data-url="https://academiccalendar.byu.edu/summer-term-grades-online-2023-08-25"><a href="https://academiccalendar.byu.edu/summer-term-grades-online-2023-08-25" target="_self" data-cms-ai={0}><strong>G</strong><sub>O</sub></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Education Week" data-date="August 25, 2023" data-url="https://academiccalendar.byu.edu/education-week-2023-08-25"><a href="https://academiccalendar.byu.edu/education-week-2023-08-25" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      26
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      27
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e7f4ff'}}>
                      28
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="University Conference" data-date="August 28, 2023" data-url="https://academiccalendar.byu.edu/university-conference-2023-08-28"><a href="https://academiccalendar.byu.edu/university-conference-2023-08-28" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e7f4ff'}}>
                      29
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="University Conference" data-date="August 29, 2023" data-url="https://academiccalendar.byu.edu/university-conference-2023-08-29"><a href="https://academiccalendar.byu.edu/university-conference-2023-08-29" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#e7f4ff'}}>
                      30
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="University Conference" data-date="August 30, 2023" data-url="https://academiccalendar.byu.edu/university-conference-2023-08-30"><a href="https://academiccalendar.byu.edu/university-conference-2023-08-30" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      31
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="August 31, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-08-31"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-08-31" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>SEPTEMBER</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      1
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="September 01, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-09-01"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-09-01" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ccf1e0'}}>
                      2
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="New Student Orientation" data-date="September 02, 2023" data-url="https://academiccalendar.byu.edu/new-student-orientation-2023-09-02"><a href="https://academiccalendar.byu.edu/new-student-orientation-2023-09-02" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      3
                    </td>
                    <td className="AcademicCalendarDay custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="September 04, 2023" data-url="https://academiccalendar.byu.edu/labor-day-2023-09-04"><a href="https://academiccalendar.byu.edu/labor-day-2023-09-04" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Start of Classes (1st day)" data-date="September 05, 2023" data-url="https://academiccalendar.byu.edu/start-of-classes-2023-09-05"><a href="https://academiccalendar.byu.edu/start-of-classes-2023-09-05" target="_self" data-cms-ai={0}><strong>S</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      9
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Add/Drop Deadline (Full Semester & 1st Term)" data-date="September 12, 2023" data-url="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-09-12"><a href="https://academiccalendar.byu.edu/add-drop-deadline-full-semester-1st-term-2023-09-12" target="_self" data-cms-ai={0}><strong>A</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      16
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      21
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      22
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      23
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      24
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      25
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      29
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      30
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>OCTOBER</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      1
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      4
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      7
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="1st Term or Spring Term Withdraw Deadline" data-date="October 09, 2023" data-url="https://academiccalendar.byu.edu/1st-term-withdraw-deadline-2023-10-09"><a href="https://academiccalendar.byu.edu/1st-term-withdraw-deadline-2023-10-09" target="_self" data-cms-ai={0}><strong>W</strong><sub>1</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      14
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      18
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      21
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      22
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      23
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of 1st Term" data-date="October 24, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-1st-term-2023-10-24"><a href="https://academiccalendar.byu.edu/last-day-of-1st-term-2023-10-24" target="_self" data-cms-ai={0}><strong>T</strong><sub>1</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="First Day of 2nd Term" data-date="October 25, 2023" data-url="https://academiccalendar.byu.edu/first-day-of-2nd-term-2023-10-25"><a href="https://academiccalendar.byu.edu/first-day-of-2nd-term-2023-10-25" target="_self" data-cms-ai={0}><strong>T</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      28
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      29
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      31
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>NOVEMBER</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="2nd Term Add/Drop Deadline" data-date="November 01, 2023" data-url="https://academiccalendar.byu.edu/2nd-term-add-drop-deadline-2023-11-01"><a href="https://academiccalendar.byu.edu/2nd-term-add-drop-deadline-2023-11-01" target="_self" data-cms-ai={0}><strong>A</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      2
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      4
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      9
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      11
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      14
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      15
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      16
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      17
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      18
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      19
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      20
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Friday Instruction" data-date="November 21, 2023" data-url="https://academiccalendar.byu.edu/friday-instruction-2023-11-21"><a href="https://academiccalendar.byu.edu/friday-instruction-2023-11-21" target="_self" data-cms-ai={0}><strong>F</strong><sub>I</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="No Classes" data-date="November 22, 2023" data-url="https://academiccalendar.byu.edu/no-classes-2023-11-22"><a href="https://academiccalendar.byu.edu/no-classes-2023-11-22" target="_self" data-cms-ai={0}><strong>N</strong><sub>C</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="November 23, 2023" data-url="https://academiccalendar.byu.edu/thanksgiving-2023-11-23"><a href="https://academiccalendar.byu.edu/thanksgiving-2023-11-23" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="November 24, 2023" data-url="https://academiccalendar.byu.edu/thanksgiving-holiday-2023-11-24"><a href="https://academiccalendar.byu.edu/thanksgiving-holiday-2023-11-24" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      25
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      26
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      27
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      28
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      29
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      30
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="AcademicCalendarMonth">
                <thead>
                </thead><caption>DECEMBER</caption>
                <tbody><tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </tbody><tbody>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay">
                    </td>
                    <td className="AcademicCalendarDay fall-term has-two-events">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Withdraw Deadline (Full Semester)" data-date="December 01, 2023" data-url="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-11-13"><a href="https://academiccalendar.byu.edu/withdraw-deadline-full-semester-2023-11-13" target="_self" data-cms-ai={0}><strong>W</strong></a></academic-calendar-event>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="2nd Term or Summer Term Withdraw Deadline" data-date="December 01, 2023" data-url="https://academiccalendar.byu.edu/2nd-term-withdraw-deadline-2023-12-01"><a href="https://academiccalendar.byu.edu/2nd-term-withdraw-deadline-2023-12-01" target="_self" data-cms-ai={0}><strong>W</strong><sub>2</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      2
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      3
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      4
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      5
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      6
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      7
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      8
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      9
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay fall-term">
                      10
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      11
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      12
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      13
                    </td>
                    <td className="AcademicCalendarDay fall-term">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Last Day of Class" data-date="December 14, 2023" data-url="https://academiccalendar.byu.edu/last-day-of-class-2023-12-14"><a href="https://academiccalendar.byu.edu/last-day-of-class-2023-12-14" target="_self" data-cms-ai={0}><strong>L</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#ffdddd'}}>
                      15
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Exam Preparation Day" data-date="December 15, 2023" data-url="https://academiccalendar.byu.edu/exam-preparation-day-2023-12-15"><a href="https://academiccalendar.byu.edu/exam-preparation-day-2023-12-15" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      16
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="December 16, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-12-16"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-12-16" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      17
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      18
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="December 18, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-12-18"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-12-18" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      19
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="December 19, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-12-19"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-12-19" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      20
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="December 20, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-12-20"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-12-20" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key" style={{backgroundColor: '#f9ecff'}}>
                      21
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Final Exam Day" data-date="December 21, 2023" data-url="https://academiccalendar.byu.edu/final-exam-day-2023-12-21"><a href="https://academiccalendar.byu.edu/final-exam-day-2023-12-21" target="_self" data-cms-ai={0} /></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="December 22, 2023" data-url="https://academiccalendar.byu.edu/holidays/christmas-eve-2023-12-22"><a href="https://academiccalendar.byu.edu/holidays/christmas-eve-2023-12-22" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      23
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      24
                    </td>
                    <td className="AcademicCalendarDay custom-key is-holiday" style={{backgroundColor: '#ffffff'}}>
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Holiday" data-date="December 25, 2023" data-url="https://academiccalendar.byu.edu/christmas-holiday-2023-12-25"><a href="https://academiccalendar.byu.edu/christmas-holiday-2023-12-25" target="_self" data-cms-ai={0}><strong>H</strong></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      26
                    </td>
                    <td className="AcademicCalendarDay">
                      27
                    </td>
                    <td className="AcademicCalendarDay">
                      28
                    </td>
                    <td className="AcademicCalendarDay">
                      <academic-calendar-event className="AcademicCalendarEvent" data-title="Grade Submission Deadline" data-date="December 29, 2023" data-url="https://academiccalendar.byu.edu/fall-semester-grades-due-2023-12-29"><a href="https://academiccalendar.byu.edu/fall-semester-grades-due-2023-12-29" target="_self" data-cms-ai={0}><strong>G</strong><sub>S</sub></a></academic-calendar-event>
                    </td>
                    <td className="AcademicCalendarDay">
                      30
                    </td>
                  </tr>
                  <tr className="AcademicCalendarWeek">
                    <td className="AcademicCalendarDay">
                      31
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="AcademicCalendar-terms">
              <div className="AcademicCalendarTerm winter-term">
                <h4 className="AcademicCalendarTerm-title">Winter Semester</h4>
                <div className="AcademicCalendarTerm-description">
                  Jan 09 - Apr 20
                </div>
                <table className="AcademicCalendarTerm-items">
                  <tbody>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Jan 17
                      </td>
                      <td>
                        Add/Drop Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Mar 22
                      </td>
                      <td>
                        Withdraw Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Apr 06
                      </td>
                      <td>
                        Discontinuance Deadline
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="AcademicCalendarTerm spring-term">
                <h4 className="AcademicCalendarTerm-title">Spring Term</h4>
                <div className="AcademicCalendarTerm-description">
                  May 02 - Jun 21
                </div>
                <table className="AcademicCalendarTerm-items">
                  <tbody>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        May 09
                      </td>
                      <td>
                        Add/Drop Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Jun 06
                      </td>
                      <td>
                        Withdraw Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Jun 06
                      </td>
                      <td>
                        Discontinuance Deadline
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="AcademicCalendarTerm summer-term">
                <h4 className="AcademicCalendarTerm-title">Summer Term</h4>
                <div className="AcademicCalendarTerm-description">
                  Jun 26 - Aug 15
                </div>
                <table className="AcademicCalendarTerm-items">
                  <tbody>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Jul 03
                      </td>
                      <td>
                        Add/Drop Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Aug 01
                      </td>
                      <td>
                        Withdraw Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Aug 01
                      </td>
                      <td>
                        Discontinuance Deadline
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="AcademicCalendarTerm fall-term">
                <h4 className="AcademicCalendarTerm-title">Fall Semester</h4>
                <div className="AcademicCalendarTerm-description">
                  Sep 05 - Dec 15
                </div>
                <table className="AcademicCalendarTerm-items">
                  <tbody>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Sep 12
                      </td>
                      <td>
                        Add/Drop Deadline
                      </td>
                    </tr>
                    <tr>
                      <td className="AcademicCalendarTerm-items-date">
                        Dec 01
                      </td>
                      <td>
                        Withdraw Deadline
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="AcademicCalendar-legends">
            <div className="AcademicCalendarLegend">
              <div className="AcademicCalendarLegend-title">Color Key</div>
              <table className="AcademicCalendarLegend-items">
                <tbody>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#fef2d0'}} />
                    <td>
                      Event
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#ffdddd'}} />
                    <td>
                      Exam Preparation Day
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#f9ecff'}} />
                    <td>
                      Final Exam Day
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#c9c9ff'}} />
                    <td>
                      Graduation
                    </td>
                  </tr>
                  <tr className="is-holiday">
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#ffffff'}}><strong>H</strong></td>
                    <td>
                      Holiday
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#ccf1e0'}} />
                    <td>
                      New Student Orientation
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#e4e4e4'}} />
                    <td>
                      Education Week
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label" style={{backgroundColor: '#e7f4ff'}} />
                    <td>
                      University Conference
                    </td>
                  </tr>
                </tbody>
              </table>
            </div><div className="AcademicCalendarLegend">
              <div className="AcademicCalendarLegend-title">Academic Deadlines</div>
              <table className="AcademicCalendarLegend-items">
                <tbody>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>W</strong><sub>1</sub></td>
                    <td>
                      1st Term or Spring Term Withdraw Deadline
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>W</strong><sub>2</sub></td>
                    <td>
                      2nd Term or Summer Term Withdraw Deadline
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>A</strong></td>
                    <td>
                      Add/Drop Deadline (Full Semester &amp; 1st Term)
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>A</strong><sub>2</sub></td>
                    <td>
                      2nd Term Add/Drop Deadline
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>G</strong><sub>S</sub></td>
                    <td>
                      Grade Submission Deadline
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>D</strong></td>
                    <td>
                      Discontinuance Deadline
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>G</strong><sub>O</sub></td>
                    <td>
                      Grades Online for Students
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>W</strong></td>
                    <td>
                      Withdraw Deadline (Full Semester)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div><div className="AcademicCalendarLegend">
              <div className="AcademicCalendarLegend-title">Other Dates</div>
              <table className="AcademicCalendarLegend-items">
                <tbody>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>C</strong><sub>M</sub></td>
                    <td>
                      Commencement
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>T</strong><sub>2</sub></td>
                    <td>
                      First Day of 2nd Term
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>C</strong><sub>V</sub></td>
                    <td>
                      Convocations
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>F</strong><sub>I</sub></td>
                    <td>
                      Friday Instruction
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>R</strong></td>
                    <td>
                      Instructor Ratings (Ends on Exam Prep Day)
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>T</strong><sub>1</sub></td>
                    <td>
                      Last Day of 1st Term
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>L</strong></td>
                    <td>
                      Last Day of Class
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>M</strong><sub>I</sub></td>
                    <td>
                      Monday Instruction
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>S</strong></td>
                    <td>
                      Start of Classes (1st day)
                    </td>
                  </tr>
                  <tr className>
                    <td className="AcademicCalendarLegend-items-label"><strong>N</strong><sub>C</sub></td>
                    <td>
                      No Classes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </academic-calendar>
      );
    }
  });