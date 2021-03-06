import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Divider, Label, Segment, Grid, Menu, Icon, Container, Dimmer, Loader, Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SkillItem from 'components/SkillItem';
import { fetchCourse } from './actions';

class CoursePage extends React.Component {
	state = { activeItem: 'about' }
	componentDidMount(){
		this.props.fetchCourse(`http://localhost:8000/api/v1/courses/${this.props.match.params.id}/`);
	}
	setIcon(provider) {
	  switch (provider) {
	  case 'MongoDB University': return 'http://www.johncanessa.com/wp-content/uploads/2018/04/mongodb_logo_1-300x300.png';
	  case 'edX': return 'https://avatars0.githubusercontent.com/u/3179841?s=400&v=4';
	  case 'Canvas Network': return 'https://techcrunch.com/wp-content/uploads/2012/10/canvas_vertical_color.jpeg?w=730&crop=1';
	  case 'Udacity': return 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png';
	  case 'Open2Study': return 'https://www.open2study.com/common/images/o2s-logo-facebook.png';
	  case 'Kadenze': return 'https://static.crozdesk.com/web_app_library/providers/logos/000/003/359/original/kadenze-1516387220-logo.png?1516387220';
	  case 'FutureLearn': return 'https://about.futurelearn.com/wp-content/uploads/FL-logo-606x323.png';
	  case 'Open Education by Blackboard': return 'data:image/jpeg;base64,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';
	  case 'Coursera': return 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Coursera_logo.PNG';
	  case 'Independent': return 'https://www.independent.co.uk/img/logo.png';
	  default: return 'http://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg';
	  }
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	renderSkills() {
	  const skillsJSON = this.props.course.skills;
	  let skillsJSONLength = 0;
	  skillsJSONLength = !skillsJSON ? 0 : skillsJSON.length;
	  const skills = [];
	  for (let i = 0; i < skillsJSONLength; i += 1) {
	    skills.push({
	      have_icon: false, check: true, name: skillsJSON[i].name, basic: false,
	    });
	  }
	  return skills.map((skill, index) => (
	    <SkillItem skill={skill} key={index} />
	  ));
	}
	// renderRating(ratingNumb) {
	//   return (
	//     <div className="ui accurate star widget inline" style={{ marginRight: '10px' }}>
	//       <div className="highlight" style={{ width: `${(ratingNumb / 5) * 100}%` }} />
	//     </div>);
	// }

  render() {
  	const { activeItem } = this.state;
    return (
      <div className="course">
        <Container>
            <Breadcrumb>
              <Breadcrumb.Section href="/#/">Home</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section href="/#/courses">Courses</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>Courses Description</Breadcrumb.Section>
            </Breadcrumb>
            <Divider clearing />
        	<div className="course">
        	  <Dimmer active={this.props.course.isFetching} inverted>
        	    <Loader size="large">Loading</Loader>
        	  </Dimmer>
        	  <Header style={{ fontSize: '1.7em' }}>
        	    {this.props.course.title}
        	  </Header>
        	  <Grid>
        	    <Grid.Column width={11}>
        	      <Segment style={{ padding: '40px' }}>
        	        <Header>
        	          Reviews
        	          <span style={{ float: 'right' }}>
        	            <span style={{ cursor: 'pointer' }} className="disabled-beta">
        	              <Icon color="grey" name="plus" />
        	            </span>
        	            <span style={{ cursor: 'pointer' }} className="disabled-beta">
        	              <Icon color="grey" name="share alternate" />
        	            </span>
        	          </span>
        	        </Header>
        	        <span>
        	          {this.props.course.description}
        	        </span>
        	        <Header>
        	          Skills
        	        </Header>
        	        <Label.Group size="medium">
        	          {this.renderSkills()}
        	        </Label.Group>
        	        <Divider hidden />
        	        <Grid>
        	          <Grid.Row>
        	            <Grid.Column width={4}>
        	              <Button as="a" target="_blank" href={this.props.course.external_link}>SHOW COURSE</Button>
        	            </Grid.Column>
        	            <Grid.Column width={6}>
        	              <Button as={Link} to="/certificates/add" color="green">REGISTER CERTIFICATE</Button>
        	            </Grid.Column>
        	          </Grid.Row>
        	        </Grid>
        	        <Divider hidden />
        	        <Menu pointing secondary color="orange">
        	          <Menu.Item style={{ fontSize: '1.3em' }} name="about" active={activeItem === 'about'} onClick={this.handleItemClick} />
        	        </Menu>
        	        <Container style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        	          {(() => {
        	            switch (this.state.activeItem) {
        	            case 'entry requirements': return this.props.course.e_req;
        	            case 'reviews': return this.props.course.reviews;
        	            default: return this.props.course.description;
        	            }
        	          })()}
        	        </Container>
        	      </Segment>
        	    </Grid.Column>
        	    <Grid.Column width={5}>
        	      <Segment style={{ padding: '40px' }}>
        	        <div style={{ textAlign: 'center' }}>
        	          <Header style={{ fontSize: '1.5em' }}>
        	            Provider
        	          </Header>
        	          <Label
        	            as="a"
        	            href={!this.props.course.external_link ? '#' : (this.props.course.external_link.split('/')[0] + this.props.course.external_link.split('/')[2]).toString()}
        	            target="_blank"
        	            circular
        	            style={{
        	              boxShadow: '2px 6px 20px 0 #bcbdbd, 0 1px 21px 1px #d4d4d5', width: '8em', height: '8em', backgroundColor: 'white', backgroundImage: `url(${this.setIcon(this.props.course.provider.name)})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '80%',
        	            }}
        	          />
        	          <Header>
        	            {this.props.course.provider.name}
        	          </Header>
        	        </div>
        	        <Divider clearing />
        	        <Header style={{ fontSize: '1.5em', marginBottom: '5px' }}>
        	          Category
        	        </Header>
        	        <Icon name="industry" />
        	        <span style={{ color: 'grey' }} >
        	          {this.props.course.categories[0].name}
        	        </span>
        	        <Divider clearing />
        	        <Header style={{ fontSize: '1.5em', marginBottom: '5px' }}>
        	          Tutor
        	        </Header>
        	        <Icon name="user outline" />
        	        <span style={{ color: 'grey' }} >
        	          {this.props.course.tutor}
        	        </span>
        	        <Divider clearing />
        	        <Header style={{ fontSize: '1.5em', marginBottom: '5px' }}>
        	          Language
        	        </Header>
        	        <Icon name="world" />
        	        <span style={{ color: 'grey' }} >
        	          English
        	        </span>
        	        <Divider clearing />
        	        <Header style={{ fontSize: '1.5em', marginBottom: '5px' }}>
        	          Course code
        	        </Header>
        	        <span style={{ color: 'grey' }} >
        	          {this.props.course.id}
        	        </span>
        	      </Segment>
        	    </Grid.Column>
        	  </Grid>
        	</div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    course: state.course.course,
    isFetching: state.course.isFetching,
    error: state.course.error,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    fetchCourse(url) {
      dispatch(fetchCourse(url));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
