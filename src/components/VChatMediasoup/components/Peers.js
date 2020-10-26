import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as appPropTypes from './appPropTypes';
// import { Appear } from './transitions';
import Peer from './Peer';
import ScrollContainer from 'react-indiana-drag-scroll'
import styled from 'styled-components'
const DivPeers = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	.peer{
		width: 250px;
		height: 250px;
		border: 1px solid transparent;
		&.active {
			border: 1px solid white;
		}
	}
`;
const Peers = ({ clicked, member, peers, activeSpeakerId }) => {
	return (
		<ScrollContainer vertical={false} className="inner scroll-container">
			<DivPeers>
				{peers.map((peer) => {
					return (
						// <Appear key={peer.id} duration={1000}>
						<div
							className={`peer ${peer.id === activeSpeakerId ? 'active' : ""}`}
							key={peer.id}>
							<Peer
								clicked={clicked}
								info={member.find(mem => mem.user_id === parseInt(peer.id, 10))}
								id={peer.id} />
						</div>
						// </Appear>
					);
				})}
			</DivPeers>
		</ScrollContainer>
	);
};

Peers.propTypes =
{
	peers: PropTypes.arrayOf(appPropTypes.Peer).isRequired,
	activeSpeakerId: PropTypes.string
};

const mapStateToProps = (state) => {
	const peersArray = Object.values(state.peers);

	return {
		peers: peersArray,
		activeSpeakerId: state.room.activeSpeakerId
	};
};

const PeersContainer = connect(
	mapStateToProps,
	null,
	null,
	{
		areStatesEqual: (next, prev) => {
			return (
				prev.peers === next.peers &&
				prev.room.activeSpeakerId === next.room.activeSpeakerId
			);
		}
	}
)(Peers);

export default PeersContainer;
