import React from 'react';
import ReactQuill from 'react-quill';
import SkillItem from 'components/SkillItem';
import { Container, Header, Segment, Button, Divider, Form, Input, Breadcrumb, Grid, Label, Icon, Menu, Sticky, Dropdown } from 'semantic-ui-react';
import 'react-quill/dist/quill.snow.css';
// import Countries from '../../data/countriesList';
import Languages from '../../data/languagesList';
import jobParameters from '../../data/jobParameters';
import Industries from '../../data/industryList';


export default class CreateJobPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDescription: '', textResponsobilities: '', textQualifications: '', textOffer: '', skillsArray: [],
    }; // You can also pass a Quill Delta here
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeResponsobilities = this.handleChangeResponsobilities.bind(this);
    this.handleChangeQualifications = this.handleChangeQualifications.bind(this);
    this.handleChangeOffer = this.handleChangeOffer.bind(this);
    this.reactDescriptionRef = null;
    this.reactResponsobilitiesRef = null;
    this.reactQualificationsRef = null;
    this.reactOfferRef = null;
    this.skillsArray = [];
  }
  state = { contextRef: '' }
  handleChangeDescription(value) {
    this.setState({ textDescription: value });
    this.setState({
      descriptionHTML: this.reactDescriptionRef.editor.container.firstChild.innerHTML,
    });
  }
  handleChangeResponsobilities(value) {
    this.setState({ textResponsobilities: value });
    this.setState({
      responsobilitiesHTML: this.reactResponsobilitiesRef.editor.container.firstChild.innerHTML,
    });
  }
  handleChangeQualifications(value) {
    this.setState({ textQualifications: value });
    this.setState({
      qualificationsHTML: this.reactQualificationsRef.editor.container.firstChild.innerHTML,
    });
  }
  handleChangeOffer(value) {
    this.setState({ textOffer: value });
    this.setState({
      // offerHTML: this.reactOfferRef.editor.container.firstChild.innerHTML,
    });
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  renderSkills() {
    const skills = [];
    for (let i = 0; i < this.state.skillsArray.length; i += 1) {
      skills.push({
        have_icon: false, check: true, name: this.state.skillsArray[i], basic: false,
      });
    }
    return skills.map((course, index) => (
      <SkillItem skill={course} key={index} />
    ));
  }

  renderRating(ratingNumb) {
    return (
      <div className="ui accurate star widget inline" style={{ marginRight: '10px' }}>
        <div className="highlight" style={{ width: `${ratingNumb * 20}%` }} />
      </div>);
  }


  render() {
    const skills = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ];
    const { contextRef } = this.state;
    return (
      <div ref={this.handleContextRef}>
        <Breadcrumb>
          <Breadcrumb.Section href="/#/">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section href="/#/jobs">Job list</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Add job position</Breadcrumb.Section>
        </Breadcrumb>

        <Divider clearing />
        <Header size="large" floated="left">
          Add job position
        </Header>

        <Divider clearing />
        <Grid>
          <Grid.Column computer={6}>
            <Segment>
              <Form size="huge">
                <Form.Field>
                  <label htmlFor="jobTitle">
                    Job title
                    <Input
                      id="jobTitle"
                      name="jobTiple"
                      iconPosition="left"
                      icon="address card outline"
                      placeholder="Job title"
                      onChange={(e, { value }) => { this.setState({ job_title: value }); }}
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="jobType">
                    Job type
                    <Dropdown
                      id="jobType"
                      name="jobType"
                      placeholder="Job type"
                      icon="travel"
                      fluid
                      labeled
                      button
                      className="icon"
                      options={jobParameters.JobType}
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="experience">
                    Experience level
                    <Dropdown
                      id="experience"
                      name="experience"
                      placeholder="Experience level"
                      icon="book"
                      fluid
                      labeled
                      button
                      className="icon"
                      options={jobParameters.ProficiencyLevel}
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <Form.Dropdown
                    label="Industry"
                    placeholder="Industry"
                    fluid
                    multiple
                    search
                    selection
                    options={Industries.Industries}
                  />
                </Form.Field>

                <Form.Field>
                  <label htmlFor="startDate">
                    Start date
                    <Input
                      id="startDate"
                      name="startDate"
                      iconPosition="left"
                      icon="calendar outline"
                      placeholder="Start"
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="endDate">
                    End date
                    <Input
                      id="endDate"
                      name="endDate"
                      iconPosition="left"
                      icon="calendar outline"
                      placeholder="End"
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <Form.Dropdown
                    label="Language"
                    placeholder="Language required"
                    fluid
                    multiple
                    search
                    selection
                    options={Languages.Languages}
                  />
                </Form.Field>

                <Form.Field>
                  <label htmlFor="salary">
                    Salary
                    <Input
                      id="salary"
                      name="salary"
                      iconPosition="left"
                      icon="money"
                      placeholder="Salary"
                      type="number"
                      onChange={(e, { value }) => { this.setState({ salary: value }); }}
                    />
                  </label>
                </Form.Field>

                <Form.Field>
                  <Form.TextArea
                    label="Overview"
                    placeholder="Overview"
                    onChange={(e, { value }) => { this.setState({ overview: value }); }}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Dropdown
                    label="Skills"
                    placeholder="Select Skills"
                    fluid
                    multiple
                    search
                    selection
                    options={skills}
                    onChange={(e, { value }) => { this.setState({ skillsArray: value }); }}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Description">
                    Job description
                    <ReactQuill id="Description" ref={(el) => { this.reactDescriptionRef = el; }} style={{ height: '130px', marginBottom: '50px' }} value={this.state.textDescription} onChange={this.handleChangeDescription} />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Responsobilities">
                    Responsobilities
                    <ReactQuill id="Responsobilities" ref={(el) => { this.reactResponsobilitiesRef = el; }} style={{ height: '130px', marginBottom: '50px' }} value={this.state.textResponsobilities} onChange={this.handleChangeResponsobilities} />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Qualifications">
                    Qualifications
                    <ReactQuill id="Qualifications" ref={(el) => { this.reactQualificationsRef = el; }} style={{ height: '130px', marginBottom: '50px' }} value={this.state.textQualifications} onChange={this.handleChangeQualifications} />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Offer">
                    We offer
                    <ReactQuill id="Offer" ref={(el) => { this.reactOfferRef = el; }} style={{ height: '130px', marginBottom: '50px' }} value={this.state.textOffer} onChange={this.handleChangeOffer} />
                  </label>
                </Form.Field>
                <Button type="submit" primary size="huge">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>

          <Grid.Column computer={10}>
            <Sticky context={contextRef} offset={150}>
              <Segment>
                <div className="course">
                  <Grid>
                    <Grid.Column width={16}>
                      <Segment style={{ padding: '40px' }}>
                        <div>
                          <Header style={{ fontSize: '1.7em' }}>
                            <span className="label-status"> <Label pointing="right" basic color="green">New</Label> </span>
                            {this.state.job_title}
                          </Header>
                          <span style={{ fontSize: '1.3em', color: 'gray' }}>
                            Posted by {this.state.company} <Icon name="point" style={{ marginLeft: '10px', marginRight: 0 }} /> {this.state.location} <Icon name="dollar" style={{ marginLeft: '10px', marginRight: 0 }} /> {this.state.salary}
                          </span>
                          <Header>
                             Overview
                          </Header>
                          <span>
                            {this.state.overview}
                          </span>
                          <Header>
                            Skills
                          </Header>
                          <Label.Group size="medium">
                            {this.renderSkills()}
                          </Label.Group>
                          <Menu pointing secondary color="orange">
                            <Menu.Item style={{ fontSize: '1.3em' }} name="desc" active>
                              Job Descriptions
                            </Menu.Item>
                          </Menu>
                          <Container style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                            <div dangerouslySetInnerHTML={{
                              __html: this.state.descriptionHTML,
                            }}
                            />
                          </Container>
                          <Menu pointing secondary color="orange">
                            <Menu.Item style={{ fontSize: '1.2em' }} name="resp" active >
                              Responsibilities
                            </Menu.Item>
                          </Menu>
                          <Container style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                            <div dangerouslySetInnerHTML={{
                              __html: this.state.responsobilitiesHTML,
                            }}
                            />
                          </Container>
                          <Menu pointing secondary color="orange">
                            <Menu.Item style={{ fontSize: '1.2em' }} name="qual" active>
                              Qualifications
                            </Menu.Item>
                          </Menu>
                          <Container style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                            <div dangerouslySetInnerHTML={{
                              __html: this.state.qualificationsHTML,
                            }}
                            />
                          </Container>
                        </div>
                        <Divider hidden />
                        <Button name="jobs" onClick={this.handleButtonClick}> Back to search research </Button>
                        <Button style={{ float: 'right' }}> Priveus </Button>
                        <Button style={{ float: 'right' }}> Next </Button>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </div>
              </Segment>
            </Sticky>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
