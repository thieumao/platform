import React from 'react';
import { Container } from 'semantic-ui-react';
import LearnerProfile from 'components/LearnerProfile'
import AcademyProfile from 'components/AcademyProfile'
import BusinessProfile from 'components/BusinessProfile'

const square = { width: 175, height: 175 }

export default class ProfilePage extends React.Component {

    //learner

    switcher = this.props.activeAccount;

    setProfile() {
    	var profile_info;
    	switch(this.props.activeAccount) {
      case 'Academy': return { logo_src: 'osu-logo', name: 'Udacity', location: 'U.S.', short_desc: 'blah blah blah blah', learners: '9000 ppl', email: 'support@udacity.com', site: 'eu.udacity.com', full_desc: 'blah blah desc', };
      case 'Business': return { logo_src: 'osu-logo', name: 'Open Source University', location: 'Sofia, Bulgaria', short_desc: 'blah blah blah blah', employees: '100500 ppl', email: 'support@os.university', site: 'os.university', full_desc: 'blah blah desc', };
      default: return { profile_src: 'https://media.licdn.com/dms/image/C4D03AQGc-oNYLYVPVA/profile-displayphoto-shrink_800_800/0?e=1530021600&v=beta&t=STurHYsfGE6n-UIt9bRIDkUsgb0uhNKM0SgFTEmRJ5Y', name: 'Jordan Jambazov', position: 'Technology Lead in Open Source University', edu: 11, specialisation: 'Semantic UI', location: 'New York, NY', email: 'support@os.university', site: 'os.university', certificates: 15, courses: 30, skills: 128, reviews: 0, introduction: '“I am a non-accredited, overly logical psychologist, therapist, mechanic, diplomat, businessman, and Teacher working in an industry that is still defining itself each and every day."' };
    	}
    }

  render() {
  	var profile_info = this.setProfile();

    return (
        <Container>
        	{(() => {
                switch(this.props.activeAccount) {
                case 'Academy': return <AcademyProfile academy = {profile_info} />;
                case 'Business': return <BusinessProfile company = {profile_info} />;
                default: return <LearnerProfile learner = {profile_info} />;
                }
              })()}
        </Container>
    );
  }
}
