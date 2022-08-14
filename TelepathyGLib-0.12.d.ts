
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TelepathyGLib-0.12
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * <![CDATA[         A type for communication access control. These control           policies are used in           CommunicationPolicy.DRAFT           as well as most rich presence interfaces.          New interfaces should use this type, and NOT           Rich_Presence_Access_Control_Type.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum AccessControlType {
    /**
     * <![CDATA[           Only allow contacts that are in a certain whitelist.            The associated variant             in Access_Control is a list of             Contact_Handle representing             the whitelist, with signature au.         ]]>
     */
    WHITELIST,
    /**
     * <![CDATA[           Allow contacts in the user's 'publish' list. The associated           variant in Access_Control is ignored.         ]]>
     */
    PUBLISH_LIST,
    /**
     * <![CDATA[           Only allow contacts that are in a certain group.            The associated variant in Access_Control is a             Group_Handle representing the permitted             group.         ]]>
     */
    GROUP,
    /**
     * <![CDATA[           Allow all contacts.  The associated           variant in Access_Control is ignored.         ]]>
     */
    OPEN,
    /**
     * <![CDATA[           Allow all contacts in the user's 'subscribe' or 'publish'           list. The associated variant in Access_Control is           ignored.         ]]>
     */
    SUBSCRIBE_OR_PUBLISH_LIST,
    /**
     * <![CDATA[           Forbid all contacts. The associated variant in           Access_Control is ignored.         ]]>
     */
    CLOSED,
    /**
     * <![CDATA[           The access control rule is too complex to be represented             in the current Telepathy API. The associated variant is             meaningless. Setting this mode is never valid; the             connection manager MUST raise an error if this is attempted.                         XEP-0016 Privacy Lists can easily produce access control             mechanisms that can't be expressed in a simpler API. We             need to be able to at least indicate that fact.                       The associated variant in Access_Control is             ignored.         ]]>
     */
    NOT_UNDERSTOOD,
}
/**
 * Describes possible sources of information on connection managers'
 * supported protocols.
 * 
 * Since 0.11.5, there is a corresponding #GEnumClass type,
 * %TP_TYPE_CM_INFO_SOURCE.
 */
export enum CMInfoSource {
    /**
     * no information available
     */
    NONE,
    /**
     * information came from a .manager file
     */
    FILE,
    /**
     * information came from the connection manager
     */
    LIVE,
}
/**
 * <![CDATA[         The disposition of this content, which defines whether to         automatically start sending data on the streams when         Accept is         called on the channel.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CallContentDisposition {
    /**
     * <![CDATA[           The content has no specific disposition.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The content was initially part of the call. When           Accept           is called on the channel, all streams of this content with           LocalSendingState           set to Pending_Send will be           moved to Sending as if           SetSending           (True) had been called.         ]]>
     */
    INITIAL,
}
/**
 * <![CDATA[         A packetization method that can be used for a content.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CallContentPacketizationType {
    /**
     * <![CDATA[           Real-time Transport Protocol, as documented by RFC 3550.         ]]>
     */
    RTP,
    /**
     * <![CDATA[           Raw media.         ]]>
     */
    RAW,
    /**
     * <![CDATA[           MSN webcam. This is the video-only one-way type which was           used in earlier versions of WLM. Although no longer used,           modern WLM clients still support the MSN webcam protocol.         ]]>
     */
    MSN_WEBCAM,
}
/**
 * <![CDATA[         The state of a call, as a whole.          The allowed transitions are:                     Pending_Initiator → Initialising (for outgoing calls,             when Accept is called)           Initialising → Initialised (for outgoing calls, when             the remote client indicates that the user has been notified about             the call. If the network is known not to provide feedback about whether             the remote side is ringing, then the call should immediately be             set to Initialised.           Initialising → Initialised (for incoming calls, when e.g. the             implementation has been initialised far enough that it is sensible             to notify the user about the call (to reduce the probability that             the user will pick up the call and have it immediately fail).             The UI should then alert the user about the call, and call             SetRinging)           Initialised → Accepted (for outgoing calls to a contact,             when the remote contact accepts the call; for incoming calls, when             Accept is called.)           Accepted → Active (when the local user successfully             joins the call/conference, and media is known to be flowing             successfully; also, when temporary connection problems are             resolved (See below)). If the network is known not to provide             feedback about when the call is properly connected, the call             should immediately be set to Active.           Active → Accepted (when there are temporary connection problems             that the CM is aware of and able to recover from)           any state → Ended (when the call is terminated             normally, or when an error occurs that the CM is unable to recover             from)                   Clients MAY consider unknown values from this enum to be an           error - additional values will not be defined after the Call           specification is declared to be stable.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CallState {
    /**
     * <![CDATA[           The call state is not known. This call state MUST NOT appear as a           value of the CallState property, but           MAY be used by client code to represent calls whose state is as yet           unknown.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           The initiator of the call hasn't accepted the call yet. This state           only makes sense for outgoing calls, where it means that the local           user has not yet sent any signalling messages to the remote user(s),           and will not do so until Accept is           called.         ]]>
     */
    PENDING_INITIATOR,
    /**
     * <![CDATA[           Progress has been made in placing the call, but the           contact has not been made aware of the call yet. This corresponds to SIP's           status code 183 Session Progress, and should be used for the period           where the CM is waiting for the streaming implementation to           initialise (before sending the initial INVITE or equivalent) and when the           outgoing call has reached a gateway or ICE negotiation is pending.           UIs should not produce a dialtone or start ringing if the call is in           this state.         ]]>
     */
    INITIALISING,
    /**
     * <![CDATA[           In the outgoing case: at least one called user has been alerted           about the call (a SIP 180 (Ringing) packet or equivalent has been           received) but none have answered, so the call cannot go to Accepted           (use Ringing to determine which           members have been informed and which haven't, if you care). UIs           SHOULD produce a dialtone for outgoing calls in this state.            In the incoming case, the local user should be informed of the call           as soon as the call reaches this state (and           SetRinging should be called           to inform the CM that this has happened, so that it can relay this           fact to the caller using a SIP 180 (Ringing) packet or equivalent).         ]]>
     */
    INITIALISED,
    /**
     * <![CDATA[           The contact being called has accepted the call, but the call is not           in the Active state (The most common reason for this is that the           streaming implementation hasn't connected yet).         ]]>
     */
    ACCEPTED,
    /**
     * <![CDATA[           The contact being called has accepted the call, and discourse between           at least two parties should now be possible.         ]]>
     */
    ACTIVE,
    /**
     * <![CDATA[           The call has ended, either via normal termination or an error.         ]]>
     */
    ENDED,
}
/**
 * <![CDATA[         A simple representation of the reason for a change in the call's         state, which may be used by simple clients, or used as a fallback         when the DBus_Reason member of a Call_State_Reason         struct is not understood.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CallStateChangeReason {
    /**
     * <![CDATA[           We just don't know. Unknown values of this enum SHOULD also be           treated like this.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           Situation normal. Progress has been made in the setup/teardown of           the call (and it didn't require any user interaction).         ]]>
     */
    PROGRESS_MADE,
    /**
     * <![CDATA[           The change was requested by the contact indicated by the Actor             member of a Call_State_Reason struct.            The DBus_Reason SHOULD be the empty string if the call             was terminated normally, but MAY be a non-empty error name             to indicate error-like call termination reasons (kicked from             a conference by a moderator, etc.).         ]]>
     */
    USER_REQUESTED,
    /**
     * <![CDATA[           The call was forwarded. If known, the handle of the           contact the call was forwarded to will be indicated by the           "forwarded-to" member of a           CallStateDetails dictionnary           in the CallStateChanged           signal.         ]]>
     */
    FORWARDED,
    /**
     * <![CDATA[           The CallState changed from             Initialised or             Ended (or a content's direction             changed) because it was rejected by the remote user.           Corresponds to Rejected         ]]>
     */
    REJECTED,
    /**
     * <![CDATA[           The CallState changed from             Initialised or             Ended because the initiator             ended the call before the receiver accepted it. With an             incoming call this state change reason signifies a missed             call, or one that was picked up elsewhere before it was             picked up here.           Corresponds to NoAnswer or             PickedUpElsewhere         ]]>
     */
    NO_ANSWER,
    /**
     * <![CDATA[           The CallState changed because one             of the addresses does not exist on the network.           Corresponds to DoesNotExist         ]]>
     */
    INVALID_CONTACT,
    /**
     * <![CDATA[           The CallState changed because the           local user is not authorised.           Corresponds to PermissionDenied or             InsufficientBalance                      ]]>
     */
    PERMISSION_DENIED,
    /**
     * <![CDATA[           The CallState changed from             Initialised             Ended because the receiver is busy             (e.g. is already engaged in another call, and has not placed the             initiator in a call-waiting queue).           Corresponds to Busy         ]]>
     */
    BUSY,
    /**
     * <![CDATA[           There has been an unexpected error in either the CM or some other             local component.           Corresponds to Confused or           Media.StreamingError                    ]]>
     */
    INTERNAL_ERROR,
    /**
     * <![CDATA[           There has been an unexpected error in the server or some other             remote component.           Corresponds to             ServiceConfused                    ]]>
     */
    SERVICE_ERROR,
    /**
     * <![CDATA[           There has been a network error related to the CM or the             signalling part of the call (compare and contrast:             Streaming_Error).           Corresponds to             NetworkError         ]]>
     */
    NETWORK_ERROR,
    /**
     * <![CDATA[           Some aspect of the content is unsupported so has to be             removed from the call.           Corresponds to Media.UnsupportedType             or Media.CodecsIncompatible                    ]]>
     */
    MEDIA_ERROR,
    /**
     * <![CDATA[           It was not possible for the streaming implementation to connect             to any of the users participating in this call or content.           Corresponds to ConnectionFailed or             ConnectionLost         ]]>
     */
    CONNECTIVITY_ERROR,
}
/**
 * <![CDATA[         The network topology that an IP candidate represents. This can         sometimes be used to infer what kind of performance characteristics         (latency, bandwith, etc) can be expected of connections made to this         candidate.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CallStreamCandidateType {
    /**
     * <![CDATA[           This is not an IP candidate. This is a reserved value, and should           not be seen on the bus.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           This candidate represents a direct connection to the host, as its           address is taken directly the host's IP stack.         ]]>
     */
    HOST,
    /**
     * <![CDATA[           This candidate probably represents a connection to the host through           a NAT device, as its address was discovered by sending a binding           request to a STUN server or similar.         ]]>
     */
    SERVER_REFLEXIVE,
    /**
     * <![CDATA[           This candidate probably represents a good route between the host and           its peer, as its address was discovered by sending a STUN binding           request to one of the candidates advertised by the peer.         ]]>
     */
    PEER_REFLEXIVE,
    /**
     * <![CDATA[           This candidate represents the address of a relay server (usually           somewhere on the public internet). This candidate is the most likely           to work, but all media will go via a relay server, so latency is           likely to be higher than other types of candidate.         ]]>
     */
    RELAY,
    /**
     * <![CDATA[           This candidate represents a Multicast group. This value should only           appear if the Stream's Transport is           set to Multicast.         ]]>
     */
    MULTICAST,
}
/**
 * <![CDATA[         A reason why captcha authentication was aborted by the client.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CaptchaCancelReason {
    /**
     * <![CDATA[           The user aborted the authentication. If this is used, the           CaptchaError SHOULD be set to           Cancelled         ]]>
     */
    USER_CANCELLED,
    /**
     * <![CDATA[           The Handler doesn't support the given/required captcha types.           If this is used, the CaptchaError           SHOULD be set to CaptchaNotSupported.           This SHOULD also be used if           Close is called           before CancelCaptcha.                        If no Handler supports captcha channels,             the ChannelDispatcher will just call             Close,             because it has no knowledge of specific channel types.                    ]]>
     */
    NOT_SUPPORTED,
    /**
     * <![CDATA[           The Handler doesn't understand the captcha data received. The           challenger may be sending gibberish.           If this is used, the CaptchaError           SHOULD be set to ServiceConfused.         ]]>
     */
    SERVICE_CONFUSED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum CaptchaStatus {
    /**
     * <![CDATA[           The challenge/response exchange is in progress and waiting for           a local action. Call AnswerCaptchas           to go to the Remote_Pending state, or call           CancelCaptcha followed by            Close           to give up.         ]]>
     */
    LOCAL_PENDING,
    /**
     * <![CDATA[           The challenge/response exchange is in progress and waiting for           a response from the server. Wait for a reply from the server,           which will result in the Succeeded, Try_Again, or Failed state,           or call CancelCaptcha followed by           Close           to give up.         ]]>
     */
    REMOTE_PENDING,
    /**
     * <![CDATA[           Everyone is happy. Connection to the server will proceed as soon as           this state is reached. There is nothing useful to do in this state           except to call Close           to close the channel.         ]]>
     */
    SUCCEEDED,
    /**
     * <![CDATA[           The server has indicated an authentication failure.           Call GetCaptchas again to get           a new captcha, or           CancelCaptcha followed by           Close           to give up.         ]]>
     */
    TRY_AGAIN,
    /**
     * <![CDATA[           Authentication has failed in some way. There is nothing           useful to do in this state except to close the channel with           Close.         ]]>
     */
    FAILED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ChannelChatState {
    /**
     * <![CDATA[         The contact has effectively ceased participating in the chat.         ]]>
     */
    GONE,
    /**
     * <![CDATA[         The contact has not been active for some time.         ]]>
     */
    INACTIVE,
    /**
     * <![CDATA[         The contact is actively participating in the chat.         ]]>
     */
    ACTIVE,
    /**
     * <![CDATA[         The contact has paused composing a message.         ]]>
     */
    PAUSED,
    /**
     * <![CDATA[         The contact is composing a message to be sent to the chat.         ]]>
     */
    COMPOSING,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ChannelContactSearchState {
    /**
     * <![CDATA[The search has not started]]>
     */
    NOT_STARTED,
    /**
     * <![CDATA[The search is in progress]]>
     */
    IN_PROGRESS,
    /**
     * <![CDATA[The search has paused, but more results can be retrieved           by calling More.]]>
     */
    MORE_AVAILABLE,
    /**
     * <![CDATA[The search has been completed]]>
     */
    COMPLETED,
    /**
     * <![CDATA[The search has failed]]>
     */
    FAILED,
}
/**
 * <![CDATA[         The reason for a set of handles to move to one of           Members,           LocalPendingMembers or           RemotePendingMembers, or to be removed           from the group. A client may supply a reason when attempting to           remove members from a group with           RemoveMembersWithReason, and reasons           are supplied by the CM when emitting           MembersChanged and           MembersChangedDetailed. Some reason           codes have different meanings depending on the Actor in a           MembersChanged signal.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ChannelGroupChangeReason {
    /**
     * <![CDATA[           No reason was provided for this change.            In particular, this reason SHOULD be used when representing             users joining a named chatroom in the usual way, users leaving             a chatroom by their own request, and normal termination of a             StreamedMedia call by the remote user.            If the SelfHandle is removed from             a group for this reason and the actor is not the SelfHandle, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Terminated.            If the SelfHandle is removed from a group for this reason and             the actor is also the SelfHandle, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cancelled.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The change is due to a user going offline. Also used when             user is already offline, but this wasn't known previously.            If a one-to-one StreamedMedia             call fails because the contact being called is offline, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason Offline.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If a handle is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Offline.         ]]>
     */
    OFFLINE,
    /**
     * <![CDATA[           The change is due to a kick operation.            If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Channel.Kicked.                    ]]>
     */
    KICKED,
    /**
     * <![CDATA[           The change is due to a busy indication.            If a one-to-one StreamedMedia             call fails because the contact being called is busy, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason Busy.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Busy.                    ]]>
     */
    BUSY,
    /**
     * <![CDATA[           The change is due to an invitation. This reason SHOULD only be used           when contacts are added to the remote-pending set (to indicate that           the contact has been invited) or to the members (to indicate that           the contact has accepted the invitation).                         Otherwise, what would it mean?                    ]]>
     */
    INVITED,
    /**
     * <![CDATA[           The change is due to a kick+ban operation.            If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Channel.Banned.                    ]]>
     */
    BANNED,
    /**
     * <![CDATA[             The change is due to an error occurring.         ]]>
     */
    ERROR,
    /**
     * <![CDATA[           The change is because the requested contact does not exist.            For instance, if the user invites a nonexistent contact to a             chatroom or attempts to call a nonexistent contact, this could             be indicated by the CM adding that contact's handle to             remote-pending for reason None or Invited, then removing it for             reason Invalid_Contact. In the case of a 1-1 StreamedMedia             call, the CM SHOULD remove the self handle from the Group             in the same signal.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.DoesNotExist.                    ]]>
     */
    INVALID_CONTACT,
    /**
     * <![CDATA[           The change is because the requested contact did not respond.            If a one-to-one StreamedMedia             call fails because the contact being called did not respond, or the             local user did not respond to an incoming call, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason No_Answer.                         Documenting existing practice.                       If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.NoAnswer.                    ]]>
     */
    NO_ANSWER,
    /**
     * <![CDATA[           The change is because a contact's unique identifier changed.           There must be exactly one handle in the removed set and exactly           one handle in one of the added sets. The Renamed           signal on the           Renaming           interface will have been emitted for the same handles,           shortly before this MembersChanged signal is emitted.         ]]>
     */
    RENAMED,
    /**
     * <![CDATA[           The change is because there was no permission to contact the             requested handle.            If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.PermissionDenied.                    ]]>
     */
    PERMISSION_DENIED,
    /**
     * <![CDATA[           If members are removed with this reason code, the change is             because the group has split into unconnected parts which can only             communicate within themselves (e.g. netsplits on IRC use this             reason code).                                   If members are added with this reason code, the change is because             unconnected parts of the group have rejoined. If this channel             carries messages (e.g. Text             or Tubes             channels) applications must             assume that the contacts being added are likely to have missed some             messages as a result of the separation, and that the contacts             in the group are likely to have missed some messages from the             contacts being added.                      Note that from the added contacts' perspective, they have been             in the group all along, and the contacts we indicate to be in             the group (including the local user) have just rejoined             the group with reason Separated. Application protocols in Tubes             should be prepared to cope with this situation.                       The SelfHandle SHOULD NOT be             removed from channels with this reason.         ]]>
     */
    SEPARATED,
}
/**
 * <![CDATA[         The type of message.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ChannelTextMessageType {
    /**
     * <![CDATA[         An ordinary chat message. Unknown types SHOULD be treated like this.         ]]>
     */
    NORMAL,
    /**
     * <![CDATA[         An action which might be presented to the user as         "* <sender> <action>", such as an IRC CTCP         ACTION (typically selected by the "/me" command). For example, the         text of the message might be "drinks more coffee".         ]]>
     */
    ACTION,
    /**
     * <![CDATA[         A one-off or automated message not necessarily expecting a reply         ]]>
     */
    NOTICE,
    /**
     * <![CDATA[         An automatically-generated reply message.         ]]>
     */
    AUTO_REPLY,
    /**
     * <![CDATA[           A delivery report. This message type MUST NOT appear unless the           channel supports the Messages           interface; see Message_Part for the format that           delivery reports must take.         ]]>
     */
    DELIVERY_REPORT,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ChannelTextSendError {
    /**
     * <![CDATA[         An unknown error occurred         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[         The requested contact was offline         ]]>
     */
    OFFLINE,
    /**
     * <![CDATA[         The requested contact is not valid         ]]>
     */
    INVALID_CONTACT,
    /**
     * <![CDATA[         The user does not have permission to speak on this channel         ]]>
     */
    PERMISSION_DENIED,
    /**
     * <![CDATA[         The outgoing message was too long and was rejected by the server         ]]>
     */
    TOO_LONG,
    /**
     * <![CDATA[         The channel doesn't support sending text messages to the requested         contact         ]]>
     */
    NOT_IMPLEMENTED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ConnectionPresenceType {
    /**
     * <![CDATA[           An invalid presence type used as a null value. This value MUST NOT           appear in the Statuses property,           or in the result of GetStatuses           on the deprecated Presence           interface.         ]]>
     */
    UNSET,
    /**
     * <![CDATA[           Offline         ]]>
     */
    OFFLINE,
    /**
     * <![CDATA[           Available         ]]>
     */
    AVAILABLE,
    /**
     * <![CDATA[           Away         ]]>
     */
    AWAY,
    /**
     * <![CDATA[           Away for an extended time         ]]>
     */
    EXTENDED_AWAY,
    /**
     * <![CDATA[           Hidden (invisible)         ]]>
     */
    HIDDEN,
    /**
     * <![CDATA[           Busy, Do Not Disturb.         ]]>
     */
    BUSY,
    /**
     * <![CDATA[           Unknown, unable to determine presence for this contact, for example           if the protocol only allows presence of subscribed contacts.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           Error, an error occurred while trying to determine presence.  The           message, if set, is an error from the server.         ]]>
     */
    ERROR,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ConnectionStatus {
    /**
     * <![CDATA[           The connection is fully connected and all methods are available.         ]]>
     */
    CONNECTED,
    /**
     * <![CDATA[           Connect has been called but the           connection has not yet been established. Some methods may fail           until the connection has been established.         ]]>
     */
    CONNECTING,
    /**
     * <![CDATA[           If this is retrieved from GetStatus or           Status, it indicates that connection           has not yet been attempted. If seen in a           StatusChanged signal, it indicates           that the connection has failed; the Connection object SHOULD be           removed from D-Bus immediately, and all subsequent method calls           SHOULD fail.         ]]>
     */
    DISCONNECTED,
}
/**
 * <![CDATA[         A reason why the status of the connection changed. Apart from           Requested, the values of this enumeration only make sense as           reasons why the status changed to Disconnected.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ConnectionStatusReason {
    /**
     * <![CDATA[           There is no reason set for this state change. Unknown status             reasons SHOULD be treated like this reason.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Disconnected.         ]]>
     */
    NONE_SPECIFIED,
    /**
     * <![CDATA[           The change is in response to a user request. Changes to the             Connecting or Connected status SHOULD always indicate this reason;             changes to the Disconnected status SHOULD indicate this reason             if and only if the disconnection was requested by the user.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cancelled.         ]]>
     */
    REQUESTED,
    /**
     * <![CDATA[           There was an error sending or receiving on the network socket.            When the status changes from Connecting to Disconnected for this             reason, the equivalent D-Bus error is either             org.freedesktop.Telepathy.Error.NetworkError,             org.freedesktop.Telepathy.Error.ConnectionRefused,             org.freedesktop.Telepathy.Error.ConnectionFailed             or some more specific error.            When the status changes from Connected to Disconnected for this             reason, the equivalent D-Bus error is either             org.freedesktop.Telepathy.Error.NetworkError,             org.freedesktop.Telepathy.Error.ConnectionLost             or some more specific error.         ]]>
     */
    NETWORK_ERROR,
    /**
     * <![CDATA[           The username or password was invalid.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.AuthenticationFailed.                    ]]>
     */
    AUTHENTICATION_FAILED,
    /**
     * <![CDATA[           There was an error negotiating SSL on this connection, or             encryption was unavailable and require-encryption was set when the             connection was created.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.EncryptionNotAvailable             if encryption was not available at all, or             org.freedesktop.Telepathy.Error.EncryptionError             if encryption failed.         ]]>
     */
    ENCRYPTION_ERROR,
    /**
     * <![CDATA[           In general, this reason indicates that the requested account             name or other identification could not be used due to conflict             with another connection. It can be divided into three cases:                         If the status change is from Connecting to Disconnected               and the 'register' parameter to RequestConnection was present               and true, the requested account could not be created on the               server because it already exists.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.RegistrationExists.                           If the status change is from Connecting to Disconnected               but the 'register' parameter is absent or false, the connection               manager could not connect to the specified account because               a connection to that account already exists.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.AlreadyConnected.                                 In some protocols, like XMPP (when connecting with the same                 JID and resource as an existing connection), the existing                 connection "wins" and the new one fails to connect.                                          If the status change is from Connected to Disconnected,               the existing connection was automatically disconnected because               a new connection to the same account (perhaps from a different               client or location) was established.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.ConnectionReplaced.                                 In some protocols, like MSNP (when connecting twice with the                 same Passport), the new connection "wins" and the                 existing one is automatically disconnected.                                                ]]>
     */
    NAME_IN_USE,
    /**
     * <![CDATA[           The server did not provide a SSL certificate.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.NotProvided.                    ]]>
     */
    CERT_NOT_PROVIDED,
    /**
     * <![CDATA[           The server's SSL certificate is signed by an untrusted certifying             authority. This error SHOULD NOT be used to represent a self-signed             certificate: use the more specific Cert_Self_Signed reason for             that.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Untrusted.                    ]]>
     */
    CERT_UNTRUSTED,
    /**
     * <![CDATA[           The server's SSL certificate has expired.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Expired.                    ]]>
     */
    CERT_EXPIRED,
    /**
     * <![CDATA[           The server's SSL certificate is not yet valid.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.NotActivated.                    ]]>
     */
    CERT_NOT_ACTIVATED,
    /**
     * <![CDATA[           The server's SSL certificate did not match its hostname.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.HostnameMismatch.                    ]]>
     */
    CERT_HOSTNAME_MISMATCH,
    /**
     * <![CDATA[           The server's SSL certificate does not have the expected             fingerprint.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.FingerprintMismatch.                    ]]>
     */
    CERT_FINGERPRINT_MISMATCH,
    /**
     * <![CDATA[           The server's SSL certificate is self-signed.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.SelfSigned.                    ]]>
     */
    CERT_SELF_SIGNED,
    /**
     * <![CDATA[           There was some other error validating the server's SSL             certificate.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Invalid.                    ]]>
     */
    CERT_OTHER_ERROR,
    /**
     * <![CDATA[           The server's SSL certificate has been revoked.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Revoked.                    ]]>
     */
    CERT_REVOKED,
    /**
     * <![CDATA[           The server's SSL certificate uses an insecure algorithm, 	  or is cryptographically weak.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Insecure.                    ]]>
     */
    CERT_INSECURE,
    /**
     * <![CDATA[ 	  The length in bytes of the server certificate, or the depth of the 	  sever certificate chain exceed the limits imposed by the crypto 	  library.  	  When disconnected for this reason, the equivalent D-Bus error is 	    org.freedesktop.Telepathy.Error.Cert.LimitExceeded 	   	]]>
     */
    CERT_LIMIT_EXCEEDED,
}
/**
 * Enumeration representing the features a #TpContact can optionally support.
 * When requesting a #TpContact, library users specify the desired features;
 * the #TpContact code will only initialize state for those features, to
 * avoid unwanted D-Bus round-trips and signal connections.
 * 
 * Since 0.11.5, there is a corresponding #GEnumClass type,
 * %TP_TYPE_CONTACT_FEATURE.
 */
export enum ContactFeature {
    /**
     * #TpContact:alias
     */
    ALIAS,
    /**
     * #TpContact:avatar-token
     */
    AVATAR_TOKEN,
    /**
     * #TpContact:presence-type,
     *  #TpContact:presence-status and #TpContact:presence-message
     */
    PRESENCE,
    /**
     * #TpContact:location (available since 0.11.1)
     *  and #TpContact:location-vardict (since 0.19.10)
     */
    LOCATION,
    /**
     * #TpContact:capabilities
     *  (available since 0.11.3)
     */
    CAPABILITIES,
    /**
     * #TpContact:avatar-file and
     *  #TpContact:avatar-mime-type. Implies %TP_CONTACT_FEATURE_AVATAR_TOKEN
     *  (available since 0.11.6)
     */
    AVATAR_DATA,
    /**
     * #TpContact:contact-info
     *  (available since 0.11.7)
     */
    CONTACT_INFO,
    /**
     * #TpContact:client-types
     *  (available since 0.13.1)
     */
    CLIENT_TYPES,
    /**
     * #TpContact:subscribe-state,
     *  #TpContact:publish-state and #TpContact:publish-request. Require a
     *  Connection implementing the %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST
     *  interface. (available since 0.13.12)
     */
    SUBSCRIPTION_STATES,
    /**
     * #TpContact:contact-groups
     *  (available since 0.13.14)
     */
    CONTACT_GROUPS,
    /**
     * #TpContact:is-blocked. Require
     *  Connection implementing the %TP_IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING
     *  interface. (available since 0.17.0)
     */
    CONTACT_BLOCKING,
}
/**
 * <![CDATA[         The progress made in retrieving the contact list.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ContactListState {
    /**
     * <![CDATA[The connection has not started to retrieve the contact           list. If GetContactListAttributes is           called in this state, it will raise NotYet.]]>
     */
    NONE,
    /**
     * <![CDATA[The connection has started to retrieve the contact           list, but has not yet succeeded or failed.           If GetContactListAttributes is called           in this state, it will raise NotYet.]]>
     */
    WAITING,
    /**
     * <![CDATA[           The connection has tried and failed to retrieve the contact             list. If GetContactListAttributes             is called in this state, it will immediately raise an error             indicating the reason for failure.            The connection manager SHOULD try again to obtain the contact             list, if appropriate for the protocol. If it succeeds later,             the ContactListState MUST advance             to Success.         ]]>
     */
    FAILURE,
    /**
     * <![CDATA[The connection has successfully retrieved the contact           list. If GetContactListAttributes           is called in this state, it will return successfully.]]>
     */
    SUCCESS,
}
/**
 * <![CDATA[         Values of this enumeration indicate the extent to which metadata           such as aliases and group memberships can be stored for the contacts           on a particular connection.          On some protocols, certain metadata (for instance, contact aliases)           can only be stored for contacts on the contact list, or contacts           with a particular contact list state.          To make it easier to deal with such protocols, if clients set           metadata on a contact who is not in the required state, the           Connection MUST cache the metadata for the duration of the session.           If clients request the attributes of that contact after the           appropriate "set" method has returned successfully, the Connection           MUST return the new (cached) value.          If the contact is later placed in the required state to store           metadata (for instance, if subscription to the contact's presence           is requested, on a protocol like MSN where the alias has storage type           Subscribed_Or_Pending), the connection MUST store the cached           metadata at that time.                     If the Connection didn't cache changes in this way, a client             intending to change the alias on MSN would have to wait until             the server acknowledged the subscription request; in the meantime,             other clients would still display the old alias.                   The only exception to that general rule is that if the Connection           cannot store particular metadata at all (i.e. the           storage type is None), it MUST reject attempts to set it.                     If the implementation knows that metadata can't be stored at             all, it's useful to report that, which can be done             synchronously. In general, user interfaces should detect             storage type None and not display editing controls at all.                ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ContactMetadataStorageType {
    /**
     * <![CDATA[           This connection cannot store this type of metadata at all, and             attempting to do so will fail with NotImplemented.                         Link-local XMPP can't store aliases or group memberships at               all, and subscription and presence states are implicit (all               contacts on the local network have subscribe = publish = Yes               and no other contacts exist).              As of April 2010, the XMPP server for Facebook Chat provides a               read-only view of the user's Facebook contacts, so it could also               usefully have this storage type.                    ]]>
     */
    NONE,
    /**
     * <![CDATA[           This type of metadata can only be stored permanently for contacts             whose subscribe attribute is Ask or Yes.                         Contact aliases and groups on MSN have this behaviour.                    ]]>
     */
    SUBSCRIBED_OR_PENDING,
    /**
     * <![CDATA[           This type of metadata can only be stored permanently for contacts             whose subscribe attribute is Yes.                         No service with this behaviour is currently known, but it's a               stricter form of Subscribed_Or_Pending.                    ]]>
     */
    SUBSCRIBED,
    /**
     * <![CDATA[           The user can set this metadata for any valid contact identifier,             whether or not they have any presence subscription relationship             to it, and it will be stored on their contact list.                         Contact aliases and groups on XMPP have this behaviour; it               is possible to put a contact in a group, or assign an alias               to them, without requesting that presence be shared.                    ]]>
     */
    ANYONE,
}
/**
 * #GError codes for use with the %TP_DBUS_ERRORS domain.
 * 
 * Since 0.11.5, there is a corresponding #GEnumClass type,
 * %TP_TYPE_DBUS_ERROR.
 */
export enum DBusError {
    /**
     * Raised if the error raised by
     *  a remote D-Bus object is not recognised
     */
    UNKNOWN_REMOTE_ERROR,
    /**
     * Emitted in #TpProxy::invalidated
     *  when the #TpProxy has lost its last reference
     */
    PROXY_UNREFERENCED,
    /**
     * Raised by #TpProxy methods if the remote
     *  object does not appear to have the required interface
     */
    NO_INTERFACE,
    /**
     * Emitted in #TpProxy::invalidated if the
     *  remote process loses ownership of its bus name, and raised by
     *  any #TpProxy methods that have not had a reply at that time or are called
     *  after the proxy becomes invalid in this way (usually meaning it crashed)
     */
    NAME_OWNER_LOST,
    /**
     * Raised if a D-Bus bus name given is not
     *  valid, or is of an unacceptable type (e.g. well-known vs. unique)
     */
    INVALID_BUS_NAME,
    /**
     * Raised if a D-Bus interface or
     *  error name given is not valid
     */
    INVALID_INTERFACE_NAME,
    /**
     * Raised if a D-Bus object path
     *  given is not valid
     */
    INVALID_OBJECT_PATH,
    /**
     * Raised if a D-Bus method or signal
     *  name given is not valid
     */
    INVALID_MEMBER_NAME,
    /**
     * A generic error which can be used with
     *  #TpProxy::invalidated to indicate an application-specific indication
     *  that the remote object no longer exists, if no more specific error
     *  is available.
     */
    OBJECT_REMOVED,
    /**
     * Raised from calls that re-enter the main
     *  loop (*_run_*) if they are cancelled
     */
    CANCELLED,
    /**
     * Raised if information received from a remote
     *  object is inconsistent or otherwise obviously wrong (added in 0.7.17).
     *  See also %TP_ERROR_CONFUSED.
     */
    INCONSISTENT,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum DTMFEvent {
    /**
     * <![CDATA[0]]>
     */
    DIGIT_0,
    /**
     * <![CDATA[1]]>
     */
    DIGIT_1,
    /**
     * <![CDATA[2]]>
     */
    DIGIT_2,
    /**
     * <![CDATA[3]]>
     */
    DIGIT_3,
    /**
     * <![CDATA[4]]>
     */
    DIGIT_4,
    /**
     * <![CDATA[5]]>
     */
    DIGIT_5,
    /**
     * <![CDATA[6]]>
     */
    DIGIT_6,
    /**
     * <![CDATA[7]]>
     */
    DIGIT_7,
    /**
     * <![CDATA[8]]>
     */
    DIGIT_8,
    /**
     * <![CDATA[9]]>
     */
    DIGIT_9,
    /**
     * <![CDATA[*]]>
     */
    ASTERISK,
    /**
     * <![CDATA[#]]>
     */
    HASH,
    /**
     * <![CDATA[A]]>
     */
    LETTER_A,
    /**
     * <![CDATA[B]]>
     */
    LETTER_B,
    /**
     * <![CDATA[C]]>
     */
    LETTER_C,
    /**
     * <![CDATA[D]]>
     */
    LETTER_D,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum DebugLevel {
    /**
     * <![CDATA[           Log level for errors. Error messages are always fatal, resulting           in the service terminating after something completely           unexpected occurred.         ]]>
     */
    ERROR,
    /**
     * <![CDATA[           Log level for critical messages. Critical messages are messages           that the service might predict and it is up to the service itself           to decide whether to terminate following a critical message.         ]]>
     */
    CRITICAL,
    /**
     * <![CDATA[           Log level for warnings.         ]]>
     */
    WARNING,
    /**
     * <![CDATA[           Log level for messages.         ]]>
     */
    MESSAGE,
    /**
     * <![CDATA[           Log level for information messages.         ]]>
     */
    INFO,
    /**
     * <![CDATA[           Log level for debug messages.         ]]>
     */
    DEBUG,
}
/**
 * <![CDATA[         The status of a message as indicated by a delivery report.          If this enum is extended in future specifications, this should           only be to add new, non-overlapping conditions (i.e. all failures           should still be signalled as either Temporarily_Failed           or Permanently_Failed). If additional detail is required (e.g.           distinguishing between the various types of permanent failure) this           will be done using additional           Delivery_Report_Header_Keys.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum DeliveryStatus {
    /**
     * <![CDATA[           The message's disposition is unknown.           Clients SHOULD consider all messages to have status           Delivery_Status_Unknown unless otherwise specified; connection           managers SHOULD NOT signal this delivery status explicitly.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           The message has been delivered to the intended recipient.         ]]>
     */
    DELIVERED,
    /**
     * <![CDATA[           Delivery of the message has failed. Clients SHOULD notify the user,           but MAY automatically try sending another copy of the message.                         Similar to errors with type="wait" in XMPP; analogous to             4xx errors in SMTP.                    ]]>
     */
    TEMPORARILY_FAILED,
    /**
     * <![CDATA[           Delivery of the message has failed. Clients SHOULD NOT try again           unless by specific user action. If the user does not modify the           message or alter configuration before re-sending, this error is           likely to happen again.                         Similar to errors with type="cancel", type="modify"             or type="auth" in XMPP; analogous to 5xx errors in SMTP.                    ]]>
     */
    PERMANENTLY_FAILED,
    /**
     * <![CDATA[           An intermediate server has accepted the message but the message           has not been yet delivered to the ultimate recipient. The           connection manager might send a Failed report or Delivered report           later.                         Similar to "202 Accepted" success code in SIP; analogous to             251 and 252 responses in SMTP.                    ]]>
     */
    ACCEPTED,
    /**
     * <![CDATA[           The message has been read by the intended recipient.         ]]>
     */
    READ,
    /**
     * <![CDATA[           The message has been deleted by the intended recipient. This MAY be           signalled on its own if the message is deleted without being read, or           after Read if the message was read before being deleted.         ]]>
     */
    DELETED,
}
/**
 * Enumerated type representing the Telepathy D-Bus errors.
 */
export enum Error {
    /**
     * org.freedesktop.Telepathy.Error.NetworkError:
     *     Raised when there is an error reading from or writing to the network.
     */
    NETWORK_ERROR,
    /**
     * org.freedesktop.Telepathy.Error.NotImplemented:
     *     Raised when the requested method, channel, etc is not available on this
     *     connection.
     */
    NOT_IMPLEMENTED,
    /**
     * org.freedesktop.Telepathy.Error.InvalidArgument:
     *     Raised when one of the provided arguments is invalid.
     */
    INVALID_ARGUMENT,
    /**
     * org.freedesktop.Telepathy.Error.NotAvailable:
     *     Raised when the requested functionality is temporarily unavailable.
     */
    NOT_AVAILABLE,
    /**
     * org.freedesktop.Telepathy.Error.PermissionDenied:
     *     The user is not permitted to perform the requested operation.
     */
    PERMISSION_DENIED,
    /**
     * org.freedesktop.Telepathy.Error.Disconnected:
     *     The connection is not currently connected and cannot be used.
     *     This error may also be raised when operations are performed on a
     *     Connection for which StatusChanged has signalled status Disconnected
     *     for reason None.
     */
    DISCONNECTED,
    /**
     * org.freedesktop.Telepathy.Error.InvalidHandle:
     *     An identifier being converted to a handle was syntactically invalid,
     *     or an invalid handle was used.
     */
    INVALID_HANDLE,
    /**
     * org.freedesktop.Telepathy.Error.Channel.Banned:
     *     You are banned from the channel.
     */
    CHANNEL_BANNED,
    /**
     * org.freedesktop.Telepathy.Error.Channel.Full:
     *     The channel is full.
     */
    CHANNEL_FULL,
    /**
     * org.freedesktop.Telepathy.Error.Channel.InviteOnly:
     *     The requested channel is invite-only.
     */
    CHANNEL_INVITE_ONLY,
    /**
     * org.freedesktop.Telepathy.Error.NotYours:
     *     The requested channel or other resource already exists, and another
     *     client is responsible for it
     */
    NOT_YOURS,
    /**
     * org.freedesktop.Telepathy.Error.Cancelled:
     *     Raised by an ongoing request if it is cancelled by user request before
     *     it has completed, or when operations are performed on an object which
     *     the user has asked to close (for instance, a Connection where the user
     *     has called Disconnect, or a Channel where the user has called Close).
     */
    CANCELLED,
    /**
     * org.freedesktop.Telepathy.Error.AuthenticationFailed:
     *     Raised when authentication with a service was unsuccessful.
     */
    AUTHENTICATION_FAILED,
    /**
     * org.freedesktop.Telepathy.Error.EncryptionNotAvailable:
     *     Raised if a user request insisted that encryption should be used,
     *     but encryption was not actually available.
     */
    ENCRYPTION_NOT_AVAILABLE,
    /**
     * org.freedesktop.Telepathy.Error.EncryptionError:
     *     Raised if encryption appears to be available, but could not actually be
     *     used (for instance if SSL/TLS negotiation fails).
     */
    ENCRYPTION_ERROR,
    /**
     * org.freedesktop.Telepathy.Error.Cert.NotProvided:
     *     Raised if the server did not provide a SSL/TLS certificate.
     */
    CERT_NOT_PROVIDED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.Untrusted:
     *     Raised if the server provided a SSL/TLS certificate signed by an
     *     untrusted certifying authority.
     */
    CERT_UNTRUSTED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.Expired:
     *     Raised if the server provided an expired SSL/TLS certificate.
     */
    CERT_EXPIRED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.NotActivated:
     *     Raised if the server provided an SSL/TLS certificate that will become
     *     valid at some point in the future.
     */
    CERT_NOT_ACTIVATED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.FingerprintMismatch:
     *     Raised if the server provided an SSL/TLS certificate that did not have
     *     the expected fingerprint.
     */
    CERT_FINGERPRINT_MISMATCH,
    /**
     * org.freedesktop.Telepathy.Error.Cert.HostnameMismatch:
     *     Raised if the server provided an SSL/TLS certificate that did not
     *     match its hostname.
     */
    CERT_HOSTNAME_MISMATCH,
    /**
     * org.freedesktop.Telepathy.Error.Cert.SelfSigned:
     *     Raised if the server provided an SSL/TLS certificate that is
     *     self-signed and untrusted.
     */
    CERT_SELF_SIGNED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.Invalid:
     *     Raised if the server provided an SSL/TLS certificate that is
     *     unacceptable in some way that does not have a more specific error.
     */
    CERT_INVALID,
    /**
     * org.freedesktop.Telepathy.Error.NotCapable:
     *     Raised when requested functionality is unavailable due to a contact
     *     not having the required capabilities.
     */
    NOT_CAPABLE,
    /**
     * org.freedesktop.Telepathy.Error.Offline:
     *     Raised when requested functionality is unavailable because a contact is
     *     offline.
     */
    OFFLINE,
    /**
     * org.freedesktop.Telepathy.Error.Channel.Kicked:
     *     Used to represent a user being ejected from a channel by another user,
     *     for instance being kicked from a chatroom.
     */
    CHANNEL_KICKED,
    /**
     * org.freedesktop.Telepathy.Error.Busy:
     *     Used to represent a user being removed from a channel because of a
     *     "busy" indication.
     */
    BUSY,
    /**
     * org.freedesktop.Telepathy.Error.NoAnswer:
     *     Used to represent a user being removed from a channel because they did
     *     not respond, e.g. to a StreamedMedia call.
     */
    NO_ANSWER,
    /**
     * org.freedesktop.Telepathy.Error.DoesNotExist:
     *     Raised when the requested user does not, in fact, exist.
     */
    DOES_NOT_EXIST,
    /**
     * org.freedesktop.Telepathy.Error.Terminated:
     *     Raised when a channel is terminated for an unspecified reason. In
     *     particular, this error SHOULD be used whenever normal termination of a
     *     1-1 StreamedMedia call by the remote user is represented as a D-Bus
     *     error name.
     */
    TERMINATED,
    /**
     * org.freedesktop.Telepathy.Error.ConnectionRefused:
     *     Raised when a connection is refused.
     */
    CONNECTION_REFUSED,
    /**
     * org.freedesktop.Telepathy.Error.ConnectionFailed:
     *     Raised when a connection can't be established.
     */
    CONNECTION_FAILED,
    /**
     * org.freedesktop.Telepathy.Error.ConnectionLost:
     *     Raised when a connection is broken.
     */
    CONNECTION_LOST,
    /**
     * org.freedesktop.Telepathy.Error.AlreadyConnected:
     *     Raised on attempts to connect again to an account that is already
     *     connected, if the protocol or server does not allow this.
     *     Since 0.7.34
     */
    ALREADY_CONNECTED,
    /**
     * org.freedesktop.Telepathy.Error.ConnectionReplaced:
     *     Used as disconnection reason for an existing connection if it is
     *     disconnected because a second connection to the same account is made.
     *     Since 0.7.34
     */
    CONNECTION_REPLACED,
    /**
     * org.freedesktop.Telepathy.Error.RegistrationExists:
     *     Raised on attempts to register an account on a server when the account
     *     already exists.
     *     Since 0.7.34
     */
    REGISTRATION_EXISTS,
    /**
     * org.freedesktop.Telepathy.Error.ServiceBusy:
     *     Raised when a server or other infrastructure rejects a request because
     *     it is too busy.
     *     Since 0.7.34
     */
    SERVICE_BUSY,
    /**
     * org.freedesktop.Telepathy.Error.ResourceUnavailable:
     *     Raised when a local process rejects a request because it does not have
     *     enough of a resource, such as memory.
     *     Since 0.7.34
     */
    RESOURCE_UNAVAILABLE,
    /**
     * org.freedesktop.Telepathy.Error.WouldBreakAnonymity:
     *     Raised when a request cannot be satisfied without violating an
     *     earlier request for anonymity, and the earlier request specified
     *     that raising an error is preferable to disclosing the user's
     *     identity
     *     Since 0.11.7
     */
    WOULD_BREAK_ANONYMITY,
    /**
     * org.freedesktop.Telepathy.Error.Cert.Revoked:
     *     Raised if the server provided an SSL/TLS certificate that has been
     *     revoked.
     *     Since 0.11.12
     */
    CERT_REVOKED,
    /**
     * org.freedesktop.Telepathy.Error.Cert.Insecure:
     *     Raised if the server provided an SSL/TLS certificate that uses an
     *     insecure cipher algorithm or is cryptographically weak.
     *     Since 0.11.12
     */
    CERT_INSECURE,
    /**
     * org.freedesktop.Telepathy.Error.Cert.LimitExceeded:
     *     Raised if the length in bytes of the server certificate, or the depth
     *     of the server certificate chain, exceed the limits imposed by the
     *     crypto library.
     *     Since 0.11.12
     */
    CERT_LIMIT_EXCEEDED,
    /**
     * org.freedesktop.Telepathy.Error.NotYet:
     *     Raised when the requested functionality is not yet available, but is
     *     likely to become available after some time has passed.
     *     Since 0.11.15
     */
    NOT_YET,
    /**
     * org.freedesktop.Telepathy.Error.Rejected:
     *     Raised when an incoming or outgoing call is rejected by the receiving
     *     contact.
     *     Since 0.13.2
     */
    REJECTED,
    /**
     * org.freedesktop.Telepathy.Error.PickedUpElsewhere:
     *     Raised when a call was terminated as a result of the local user
     *     picking up the call on a different resource.
     *     Since 0.13.3
     */
    PICKED_UP_ELSEWHERE,
    /**
     * org.freedesktop.Telepathy.Error.Confused:
     *     Raised if a server rejects protocol messages from a connection manager
     *     claiming that they do not make sense, two local processes fail to
     *     understand each other, or an apparently impossible situation is
     *     reached. This has a similar meaning to %TP_DBUS_ERROR_INCONSISTENT but
     *     can be passed between processes via D-Bus.
     *     Since 0.13.7
     */
    CONFUSED,
    /**
     * org.freedesktop.Telepathy.Error.ServiceConfused:
     *     Raised when a server or other piece of infrastructure indicates an
     *     internal error, or when a message that makes no sense is received from
     *     a server or other piece of infrastructure.
     *     Since 0.13.7
     */
    SERVICE_CONFUSED,
    /**
     * org.freedesktop.Telepathy.Error.EmergencyCallsNotSupported:
     *     Raised when a client attempts to dial a number that is recognized as an
     *     emergency number (e.g. '911' in the USA), but the Connection
     *     Manager or provider does not support dialling emergency numbers.
     */
    EMERGENCY_CALLS_NOT_SUPPORTED,
    /**
     * org.freedesktop.Telepathy.Error.SoftwareUpgradeRequired:
     *     Raised when a Connection cannot be established because either the
     *     Connection Manager or its support library (e.g. wocky, papyon, sofiasip)
     *     requires upgrading to support a newer protocol version.
     */
    SOFTWARE_UPGRADE_REQUIRED,
    /**
     * <code>org.freedesktop.Telepathy.Error.InsufficientBalance</code>:
     *     Raised if the user has insufficient balance to place a call.  The key
     *     'balance-required' MAY be included in CallStateDetails on a Call channel
     *     (with the same units and scale as AccountBalance) to indicate how much
     *     credit is required to make this call.
     */
    INSUFFICIENT_BALANCE,
    /**
     * <code>org.freedesktop.Telepathy.Error.Media.CodecsIncompatible</code>:
     *     Raised when the local streaming implementation has no codecs in common
     *     with the remote side.
     *     Since 0.15.6
     */
    MEDIA_CODECS_INCOMPATIBLE,
    /**
     * <code>org.freedesktop.Telepathy.Error.Media.UnsupportedType</code>:
     *     The media stream type requested is not supported by either the local or
     *     remote side.
     *     Since 0.15.6
     */
    MEDIA_UNSUPPORTED_TYPE,
    /**
     * <code>org.freedesktop.Telepathy.Error.Media.StreamingError</code>:
     *     Raised when the call's streaming implementation has some kind of internal
     *     error.
     *     Since 0.15.6
     */
    MEDIA_STREAMING_ERROR,
    /**
     * <code>org.freedesktop.Telepathy.Error.Media.CaptchaNotSupported</code>:
     *     Raised if no UI is available to present captchas, or if one is
     *     available but it is unable to answer any of the captchas given.
     */
    CAPTCHA_NOT_SUPPORTED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum FileHashType {
    /**
     * <![CDATA[           No hash.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           MD5 digest as a string of 32 ASCII hex digits.         ]]>
     */
    MD5,
    /**
     * <![CDATA[           SHA1 digest as a string of ASCII hex digits.         ]]>
     */
    SHA1,
    /**
     * <![CDATA[           SHA256 digest as a string of ASCII hex digits.         ]]>
     */
    SHA256,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum FileTransferState {
    /**
     * <![CDATA[           An invalid state type used as a null value. This value MUST NOT           appear in the State property.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The file transfer is waiting to be accepted/closed by the receiver.           The receiver has to call AcceptFile,           then wait for the state to change to Open and check the offset value.         ]]>
     */
    PENDING,
    /**
     * <![CDATA[           The receiver has accepted the transfer. The sender now has to           call ProvideFile to actually start the transfer.           The receiver should now wait for the state to change to Open           and check the offset value.         ]]>
     */
    ACCEPTED,
    /**
     * <![CDATA[           The file transfer is open for traffic.         ]]>
     */
    OPEN,
    /**
     * <![CDATA[           The file transfer has been completed successfully.         ]]>
     */
    COMPLETED,
    /**
     * <![CDATA[           The file transfer has been cancelled.         ]]>
     */
    CANCELLED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum FileTransferStateChangeReason {
    /**
     * <![CDATA[           No reason was specified.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The change in state was requested.         ]]>
     */
    REQUESTED,
    /**
     * <![CDATA[           The file transfer was cancelled by the local user.         ]]>
     */
    LOCAL_STOPPED,
    /**
     * <![CDATA[           The file transfer was cancelled by the remote user.         ]]>
     */
    REMOTE_STOPPED,
    /**
     * <![CDATA[           The file transfer was cancelled because of a local error.         ]]>
     */
    LOCAL_ERROR,
    /**
     * <![CDATA[           The file transfer was cancelled because of a remote error.         ]]>
     */
    REMOTE_ERROR,
}
/**
 * <![CDATA[         The HTTP Method with which to request a URL.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum HTTPMethod {
    /**
     * <![CDATA[           Use the GET method when opening the URL.         ]]>
     */
    GET,
    /**
     * <![CDATA[           Use the POST method when opening the URL. Refer to           HTTP_Post_Data for more details.         ]]>
     */
    POST,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum HandleType {
    /**
     * <![CDATA[           A "null" handle type used to indicate the absence of a handle.           When a handle type and a handle appear as a pair, if the handle           type is zero, the handle must also be zero.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           A contact         ]]>
     */
    CONTACT,
    /**
     * <![CDATA[           A chat room         ]]>
     */
    ROOM,
    /**
     * <![CDATA[           A server-generated contact list (see Channel.Interface.Group)         ]]>
     */
    LIST,
    /**
     * <![CDATA[           A user-defined contact list (see Channel.Interface.Group)         ]]>
     */
    GROUP,
}
/**
 * <![CDATA[         The hold state of a channel.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum LocalHoldState {
    /**
     * <![CDATA[           All streams are unheld (the call is active). New channels SHOULD           have this hold state.         ]]>
     */
    UNHELD,
    /**
     * <![CDATA[           All streams are held (the call is on hold)         ]]>
     */
    HELD,
    /**
     * <![CDATA[           The connection manager is attempting to move to state Held, but           has not yet completed that operation. It is unspecified whether           any, all or none of the streams making up the channel are on hold.           Examining the Hold state of Call Contents (if applicable) may           provide more useful information.         ]]>
     */
    PENDING_HOLD,
    /**
     * <![CDATA[           The connection manager is attempting to move to state Unheld, but           has not yet completed that operation. It is unspecified whether           any, all or none of the streams making up the channel are on hold.           Examining the Hold state of Call Contents (if applicable) may           provide more useful information.         ]]>
     */
    PENDING_UNHOLD,
}
/**
 * <![CDATA[         The reason for a change to the Local_Hold_State. Clients MUST         treat unknown values as equivalent to Local_Hold_State_Reason_None.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum LocalHoldStateReason {
    /**
     * <![CDATA[           The reason cannot be described by any of the predefined values           (connection managers SHOULD avoid this reason, but clients MUST           handle it gracefully)         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The change is in response to a user request         ]]>
     */
    REQUESTED,
    /**
     * <![CDATA[           The change is because some resource was not available         ]]>
     */
    RESOURCE_NOT_AVAILABLE,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamBaseProto {
    /**
     * <![CDATA[UDP (User Datagram Protocol)]]>
     */
    UDP,
    /**
     * <![CDATA[TCP (Transmission Control Protocol)]]>
     */
    TCP,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamDirection {
    /**
     * <![CDATA[Media are not being sent or received]]>
     */
    NONE,
    /**
     * <![CDATA[Media are being sent, but not received]]>
     */
    SEND,
    /**
     * <![CDATA[Media are being received, but not sent]]>
     */
    RECEIVE,
    /**
     * <![CDATA[Media are being sent and received]]>
     */
    BIDIRECTIONAL,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamError {
    /**
     * <![CDATA[           An unknown error occured.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           The end of the stream was reached.         ]]>
     */
    EOS,
    /**
     * <![CDATA[           There are no common codecs between the local side           and the other particpants in the call. The possible codecs are not           signalled here: the streaming implementation is assumed to report           them in an implementation-dependent way, e.g. Farsight should use           GstMissingElement.         ]]>
     */
    CODEC_NEGOTIATION_FAILED,
    /**
     * <![CDATA[           A network connection for the Media could not be established or was           lost.         ]]>
     */
    CONNECTION_FAILED,
    /**
     * <![CDATA[           There was an error in the networking stack           (other than the connection failure).         ]]>
     */
    NETWORK_ERROR,
    /**
     * <![CDATA[           There are no installed codecs for this media type.         ]]>
     */
    NO_CODECS,
    /**
     * <![CDATA[           The CM is doing something wrong.         ]]>
     */
    INVALID_CM_BEHAVIOR,
    /**
     * <![CDATA[           There was an error in the media processing stack.         ]]>
     */
    MEDIA_ERROR,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamState {
    /**
     * <![CDATA[The stream is disconnected.]]>
     */
    DISCONNECTED,
    /**
     * <![CDATA[The stream is trying to connect.]]>
     */
    CONNECTING,
    /**
     * <![CDATA[The stream is connected.]]>
     */
    CONNECTED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamTransportType {
    /**
     * <![CDATA[           A local address         ]]>
     */
    LOCAL,
    /**
     * <![CDATA[           An external address derived by a method such as STUN         ]]>
     */
    DERIVED,
    /**
     * <![CDATA[           An external stream relay         ]]>
     */
    RELAY,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum MediaStreamType {
    /**
     * <![CDATA[An audio stream]]>
     */
    AUDIO,
    /**
     * <![CDATA[A video stream]]>
     */
    VIDEO,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum RCPTXRRTTMode {
    /**
     * <![CDATA[           Both RTP data senders and data receivers MAY send DLRR           blocks.         ]]>
     */
    ALL,
    /**
     * <![CDATA[           Only active RTP senders MAY send DLRR blocks, i.e., non RTP           senders SHALL NOT send DLRR blocks.         ]]>
     */
    SENDER,
}
/**
 * <![CDATA[         A type of access control for Rich_Presence_Access_Control.           For most types, the exact access control is given by an associated           variant.                     These are the access control types from XMPP publish/subscribe           (XEP-0060).                   Location           uses this for historical reasons, new interfaces will use           Access_Control_Type.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum RichPresenceAccessControlType {
    /**
     * <![CDATA[           The associated variant is a list of contacts (signature 'au',           Contact_Handle[]) who can see the extended presence information.         ]]>
     */
    WHITELIST,
    /**
     * <![CDATA[           All contacts in the user's 'publish' contact list can see the           extended presence information. The associated variant is ignored.         ]]>
     */
    PUBLISH_LIST,
    /**
     * <![CDATA[           The associated variant is a handle of type Group (signature 'u',           Group_Handle) representing a group of contacts who can see the           extended presence information.         ]]>
     */
    GROUP,
    /**
     * <![CDATA[           Anyone with access to the service can see the extended presence           information.         ]]>
     */
    OPEN,
}
/**
 * <![CDATA[         A reason why SASL authentication was aborted by the client.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SASLAbortReason {
    /**
     * <![CDATA[           The server sent an invalid challenge or data.         ]]>
     */
    INVALID_CHALLENGE,
    /**
     * <![CDATA[           The user aborted the authentication.         ]]>
     */
    USER_ABORT,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SASLStatus {
    /**
     * <![CDATA[           The initial state. The Handler SHOULD either           call AbortSASL, or connect to the           NewChallenge signal then call           StartMechanism or           StartMechanismWithData.         ]]>
     */
    NOT_STARTED,
    /**
     * <![CDATA[           The challenge/response exchange is in progress. The Handler SHOULD           call either Respond or           AcceptSASL exactly once per emission           of NewChallenge, or call           AbortSASL at any time.         ]]>
     */
    IN_PROGRESS,
    /**
     * <![CDATA[           The server has indicated successful authentication, and the           connection manager is waiting for confirmation from the Handler.           The Handler must call either AcceptSASL or           AbortSASL to indicate whether it           considers authentication to have been successful.         ]]>
     */
    SERVER_SUCCEEDED,
    /**
     * <![CDATA[           The Handler has indicated successful authentication, and the           connection manager is waiting for confirmation from the server.           The state will progress to either Succeeded or Server_Failed when           confirmation is received.         ]]>
     */
    CLIENT_ACCEPTED,
    /**
     * <![CDATA[           Everyone is happy (the server sent success, and the client has called           AcceptSASL). Connection to the server           will proceed as soon as this state is reached. The Handler SHOULD           call Close           to close the channel.         ]]>
     */
    SUCCEEDED,
    /**
     * <![CDATA[           The server has indicated an authentication failure.           If CanTryAgain is true,           the client may try to authenticate again, by calling           StartMechanism or           StartMechanismWithData again.           Otherwise, it should give up completely, by calling Close           on the channel.         ]]>
     */
    SERVER_FAILED,
    /**
     * <![CDATA[           The client has indicated an authentication failure. The           possible actions are the same as for Server_Failed.         ]]>
     */
    CLIENT_FAILED,
}
/**
 * <![CDATA[         Enum indicating whether a contact is sending media.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SendingState {
    /**
     * <![CDATA[           The contact is not sending media and has not been asked to           do so.         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The contact has been asked to start sending media.         ]]>
     */
    PENDING_SEND,
    /**
     * <![CDATA[           The contact is sending media.         ]]>
     */
    SENDING,
    /**
     * <![CDATA[           The contact has been asked to stop sending media.         ]]>
     */
    PENDING_STOP_SENDING,
}
/**
 * <![CDATA[         The various types of service points a channel might connect to.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum ServicePointType {
    /**
     * <![CDATA[           The channel is not communicating with a service point, or it is not           known whether it is communicating with a service point (e.g. an           ordinary call).         ]]>
     */
    NONE,
    /**
     * <![CDATA[           The service point is a generic emergency point.         ]]>
     */
    EMERGENCY,
    /**
     * <![CDATA[           The service point is some kind of counseling service (ie, mental health           or child-services counseling).         ]]>
     */
    COUNSELING,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SocketAccessControl {
    /**
     * <![CDATA[           The IP or Unix socket can be accessed by any local user (e.g.             a Unix socket that accepts all local connections, or an IP socket             listening on 127.0.0.1 (or ::1) or rejecting connections not from             that address). The associated variant must be ignored.            For a D-Bus tube, this means that the "same user" access             control typically provided by default in D-Bus implementations             SHOULD be disabled. If the socket is only available to local users             (e.g. a Unix socket, an IPv4 socket bound to 127.0.0.1, or an             IPv6 socket bound to ::1), the ANONYMOUS             authentication mechanism MAY be enabled.         ]]>
     */
    LOCALHOST,
    /**
     * <![CDATA[           May only be used on IP sockets, and only for Stream tubes.                      The associated variant must contain           a struct Socket_Address_IPv4 (or Socket_Address_IPv6)           containing the string form of an IP address of the appropriate           version, and a port number. The socket can only be accessed if the           connecting process has that address and port number; all other           connections will be rejected.         ]]>
     */
    PORT,
    /**
     * <![CDATA[           May only be used on IP sockets. The associated variant must contain           a struct Socket_Netmask_IPv4 (or Socket_Netmask_IPv6) with           signature (sy), containing the string form of an           IP address of the appropriate version, and a prefix length "n".           The socket can only be accessed if the first n bits of the           connecting address match the first n bits of the given address.         ]]>
     */
    NETMASK,
    /**
     * <![CDATA[           The high-level meaning of this access control type is that             only the same user (e.g. same numeric Unix uid) is allowed to             interact with the tube. Exactly how this is achieved varies by             channel type.            For StreamTube channels, this access control type             may only be used on UNIX sockets.             The connecting process must send a byte when             it first connects, which is not considered to be part of the data             stream. If the operating system uses sendmsg() with SCM_CREDS or             SCM_CREDENTIALS to pass credentials over sockets, the connecting             process must do so if possible; if not, it must still send the             byte, without any attached credentials. (This mechanism is             very similar to the first byte of a D-Bus connection, except that             in D-Bus the byte is always zero, whereas in Tubes it can be             nonzero.)            For DBusTube channels, this access control type             may be used on any type of socket, and there is no extra byte             added by Telepathy at the beginning of the stream: all bytes in             the stream are part of the D-Bus tube connection. The connecting             process should prove its identity via any of the SASL             authentication mechanisms usually used for D-Bus (in typical             D-Bus implementations this involves either sending and receiving             credentials as above, or demonstrating the ability to write to a             file in the user's home directory).            In either case, the listening process will disconnect the             connection unless it can determine by OS-specific means that             the connecting process has the same user ID as the listening             process.            In either tube type, the associated variant must be ignored.         ]]>
     */
    CREDENTIALS,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SocketAddressType {
    /**
     * <![CDATA[           A Unix socket. The address variant contains a byte-array, signature 'ay',           containing the path of the socket.         ]]>
     */
    UNIX,
    /**
     * <![CDATA[           An abstract Unix socket. The address variant contains a byte-array,           signature 'ay', containing the path of the socket including the           leading null byte.         ]]>
     */
    ABSTRACT_UNIX,
    /**
     * <![CDATA[           An IPv4 socket. The address variant contains a Socket_Address_IPv4,           i.e. a structure with signature (sq)           in which the string is an IPv4 dotted-quad address literal           (and must not be a DNS name), while the 16-bit unsigned integer is           the port number.         ]]>
     */
    IPV4,
    /**
     * <![CDATA[           An IPv6 socket. The address variant contains a Socket_Address_IPv6,           i.e. a structure with signature (sq)           in which the string is an IPv6 address literal as specified in           RFC2373 (and must not be a DNS name), while the 16-bit unsigned           integer is the port number.         ]]>
     */
    IPV6,
}
/**
 * <![CDATA[         Media streams can use more than one UDP socket: one for RTP (data)         and one for RTCP (control). Most of the time, they are adjacent         to each other, but some protocols (xmpp) signal each port separately.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum StreamComponent {
    /**
     * <![CDATA[           The stream transport type is unknown or not applicable           (should not appear over dbus).         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           This is the high-traffic data socket, containing the audio/video           data for the stream.         ]]>
     */
    DATA,
    /**
     * <![CDATA[           This is the low-traffic control socket, usually containing feedback           about packet loss etc.         ]]>
     */
    CONTROL,
}
/**
 * <![CDATA[         Represents the state of ICE negotiation for a single component of a         stream to an endpoint.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum StreamEndpointState {
    /**
     * <![CDATA[           Candidate gathering and connectivity checks are in progress.         ]]>
     */
    CONNECTING,
    /**
     * <![CDATA[           The streaming implementation has found at least one working           candidate pair. It is possible to send media at this point, but the           controlling side has yet to negotiate the final candidates for use           in this call.         ]]>
     */
    PROVISIONALLY_CONNECTED,
    /**
     * <![CDATA[           This component of the stream is connected, and an updated offer has           been sent and accepted (finalising the candidates to be used for the           call). This should be set by the CM in response to           AcceptSelectedCandidatePair.         ]]>
     */
    FULLY_CONNECTED,
    /**
     * <![CDATA[           The streaming implementation has tried connecting to all of the           available candidates and none of them have connected. This is           distinct from Failed, because the CM might be able to provide more           candidates later (more likely in XMPP than SIP).         ]]>
     */
    EXHAUSTED_CANDIDATES,
    /**
     * <![CDATA[           The CM and streaming implementation are in agreement that it is           impossible to connect to this endpoint. This value should only be           set by the CM.         ]]>
     */
    FAILED,
}
/**
 * <![CDATA[         The type of SendingState         and ReceivingState.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum StreamFlowState {
    /**
     * <![CDATA[           No data is flowing (or expected to be flowing) at this time.         ]]>
     */
    STOPPED,
    /**
     * <![CDATA[           The streaming implementation has been told to start or receiving,           but has not yet indicated that it is doing so.         ]]>
     */
    PENDING_START,
    /**
     * <![CDATA[           The streaming implementation has been told to stop sending or           receiving data, but it has not yet indicated that it has done so.         ]]>
     */
    PENDING_STOP,
    /**
     * <![CDATA[           The streaming implementation is successfully sending or receiving           data, and everything is going swimmingly.         ]]>
     */
    STARTED,
}
/**
 * <![CDATA[         A transport that can be used for streaming.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum StreamTransportType {
    /**
     * <![CDATA[           The stream transport type is unknown or not applicable           (for streams that do not have a configurable transport).         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           Raw UDP, with or without STUN. All streaming clients are assumed to           support this transport, so there is no handler capability token for           it in the Call1 interface.           [This corresponds to "none" or "stun" in the old Media.StreamHandler           interface.]         ]]>
     */
    RAW_UDP,
    /**
     * <![CDATA[           Interactive Connectivity Establishment, as defined by RFC           5245. Note that this value covers ICE-UDP only.           [This corresponds to "ice-udp" in the old           Media.StreamHandler interface.]         ]]>
     */
    ICE,
    /**
     * <![CDATA[           Google Talk peer-to-peer connectivity establishment, as implemented           by libjingle 0.3.           [This corresponds to "gtalk-p2p" in the old Media.StreamHandler           interface.]         ]]>
     */
    GTALK_P2P,
    /**
     * <![CDATA[           The transport used by Windows Live Messenger 2009 or later, which           resembles ICE draft 19.           [This corresponds to "wlm-2009" in the old Media.StreamHandler           interface.]         ]]>
     */
    WLM_2009,
    /**
     * <![CDATA[           Shared memory transport, as implemented by the GStreamer           shmsrc and shmsink plugins.         ]]>
     */
    SHM,
    /**
     * <![CDATA[           Multicast transport.         ]]>
     */
    MULTICAST,
}
/**
 * <![CDATA[         An enumeration indicating whether presence subscription is denied,           denied but pending permission, or allowed. The exact semantics           vary according to where this type is used: see the           subscribe and           publish contact attributes for           details.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum SubscriptionState {
    /**
     * <![CDATA[The presence subscription state is           unknown.]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[Presence information cannot be seen, and either the           subscription state Removed_Remotely does not apply, or it is           not known whether that state applies.         ]]>
     */
    NO,
    /**
     * <![CDATA[Presence information cannot be seen because the           remote contact took action: either the local user's request to           see the remote contact's presence was denied, or the remote           contact requested to see the local user's presence but then           cancelled their request.]]>
     */
    REMOVED_REMOTELY,
    /**
     * <![CDATA[Presence information cannot be seen. Permission           to see presence information has been requested, and the request           has not yet been declined or accepted.]]>
     */
    ASK,
    /**
     * <![CDATA[Presence information can be seen.]]>
     */
    YES,
}
/**
 * <![CDATA[         Possible reasons to reject a TLS certificate.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum TLSCertificateRejectReason {
    /**
     * <![CDATA[           The certificate has been rejected for another reason           not listed in this enumeration.         ]]>
     */
    UNKNOWN,
    /**
     * <![CDATA[           The certificate is not trusted.         ]]>
     */
    UNTRUSTED,
    /**
     * <![CDATA[           The certificate is expired.         ]]>
     */
    EXPIRED,
    /**
     * <![CDATA[           The certificate is not active yet.         ]]>
     */
    NOT_ACTIVATED,
    /**
     * <![CDATA[           The certificate provided does not have the expected           fingerprint.         ]]>
     */
    FINGERPRINT_MISMATCH,
    /**
     * <![CDATA[           The hostname certified does not match the provided one.         ]]>
     */
    HOSTNAME_MISMATCH,
    /**
     * <![CDATA[           The certificate is self-signed.         ]]>
     */
    SELF_SIGNED,
    /**
     * <![CDATA[           The certificate has been revoked.         ]]>
     */
    REVOKED,
    /**
     * <![CDATA[           The certificate uses an insecure cipher algorithm, or is           cryptographically weak.         ]]>
     */
    INSECURE,
    /**
     * <![CDATA[           The length in bytes of the certificate, or the depth of the           certificate chain exceed the limits imposed by the crypto           library.         ]]>
     */
    LIMIT_EXCEEDED,
}
/**
 * <![CDATA[         The possible states for a TLSCertificate         object.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum TLSCertificateState {
    /**
     * <![CDATA[           The certificate is currently waiting to be accepted or rejected.         ]]>
     */
    PENDING,
    /**
     * <![CDATA[           The certificate has been verified.         ]]>
     */
    ACCEPTED,
    /**
     * <![CDATA[           The certificate has been rejected.         ]]>
     */
    REJECTED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum TubeChannelState {
    /**
     * <![CDATA[           The initiator offered the tube. The tube is waiting to be           accepted/closed locally. If the client accepts the tube, the tube's           state will be Open.         ]]>
     */
    LOCAL_PENDING,
    /**
     * <![CDATA[           The tube is waiting to be accepted/closed remotely. If the           recipient accepts the tube, the tube's state will be Open.         ]]>
     */
    REMOTE_PENDING,
    /**
     * <![CDATA[           The initiator offered the tube and the recipient accepted it. The           tube is open for traffic. The tube's state stays in this state until           it is closed.         ]]>
     */
    OPEN,
    /**
     * <![CDATA[           The tube channel has been requested but the tube is not yet offered.           The client should offer the tube to the recipient and the tube's           state will be Remote_Pending. The method used to offer the tube           depends on the tube type.         ]]>
     */
    NOT_OFFERED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum TubeState {
    /**
     * <![CDATA[           The tube is waiting to be accepted/closed locally.         ]]>
     */
    LOCAL_PENDING,
    /**
     * <![CDATA[           The tube is waiting to be accepted/closed remotely.         ]]>
     */
    REMOTE_PENDING,
    /**
     * <![CDATA[           The tube is open for traffic.         ]]>
     */
    OPEN,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 */
export enum TubeType {
    /**
     * <![CDATA[           The tube is D-Bus tube as described by the             org.freedesktop.Telepathy.Channel.Type.DBusTube interface.         ]]>
     */
    DBUS,
    /**
     * <![CDATA[           The tube is stream tube as described by the             org.freedesktop.Telepathy.Channel.Type.StreamTube interface.         ]]>
     */
    STREAM,
}
/**
 * <![CDATA[         Flags for the various types of anonymity modes.  These modes are solely to         inform the CM of the desired anonymous settings.  It is up to the         CM to determine whether the anonymity modes should be handled within         the CM itself, or whether the network that a CM might be talking to         should be enforcing anonymity.          CMs MAY support only a subset of these modes, and specific         connections MAY support none at all.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum AnonymityModeFlags {
    /**
     * <![CDATA[           Obscure any information that provides user identification,           user-agent identification or personal details. Examples of this           information might be GSM CallerID, SIP from address, various           informational email headers, etc.            The CM should scrub/replace any of this information before           passing messages or data onto the network. Note that a CM which           has the option of obscuring the information at the CM or privacy           service level would choose both (anonymity services are opaque           to clients of this interface).            Clients SHOULD NOT set both Client_Info and Show_Client_Info modes.           If they are set, the CM MUST respect Client_Info and ignore           Show_Client_Info.         ]]>
     */
    CLIENT_INFO,
    /**
     * <![CDATA[           Explicitly request showing of client information. In connection           context, this can be used to override service default. In channel           context, this overrides connection anonymity modes.                         In GSM, it's possible to have CLIR enabled by default, and               explicitly suppress CLIR for a single phone call.                       Clients SHOULD NOT set both Client_Info and Show_Client_Info modes.           If they are set, the CM MUST respect Client_Info and ignore           Show_Client_Info. The CM MAY set both Client_Info and Show_Client_Info           in SupportedAnonymityModes to indicate           its support for explicitly hiding and publicising client information.                    ]]>
     */
    SHOW_CLIENT_INFO,
    /**
     * <![CDATA[           Obscure any originating IP address information, contact URIs,           and anonymize all traffic involved with sending/receiving any           media streams or call content.           Examples of this include the "headers" portions of           RFC 3323 as           well as the History-Info (described in           RFC 4244)           for a SIP CM.            This SHOULD have the effect of hiding address information from           the remote contact (ie, the contact cannot know what IP address           the session is originated from). Obviously the network still needs           to be able to route information between contacts, so this provides           no guarantees of what can be seen by intermediaries.         ]]>
     */
    NETWORK_INFO,
}
/**
 * <![CDATA[         A set of flags representing additional information than is available         in CallState. Many of these flags only make         sense in a particular (or may explain why a call is in a specific         state).       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum CallFlags {
    /**
     * <![CDATA[           The call has been put on hold by the local user, e.g. using           the Hold interface. This flag SHOULD only be set           if there is at least one Content, and all Contents are           locally held.                         Otherwise, in transient situations where some but not all contents             are on hold, UIs would falsely indicate that the call as a whole             is on hold, which could lead to the user saying something they'll             regret, while under the impression that the other contacts can't             hear them!              This flag exists as a simplified proxy for HoldStateChanged,             to reduce the number of signals that need to be             listened to by a simple UI.                    ]]>
     */
    LOCALLY_HELD,
    /**
     * <![CDATA[           This flag exists for observability of the           SetRinging method (e.g. so that           loggers can tell whether the call got as far as alerting the user,           or whether something went wrong before then). It should be set when           the SetRinging is called, and unset when the call leaves           Initialised.         ]]>
     */
    LOCALLY_RINGING,
    /**
     * <![CDATA[           This flag exists for observability of the           SetQueued method. It should be set           when the SetQueued is called, and unset when the call leaves           Initialising or           Initialised.         ]]>
     */
    LOCALLY_QUEUED,
    /**
     * <![CDATA[           The initiator of the call originally called a contact other than the           current recipient of the call, but the call was then forwarded or           diverted. This flag only makes sense on outgoing calls. It SHOULD be           set or unset according to informational messages from other           contacts.         ]]>
     */
    FORWARDED,
    /**
     * <![CDATA[           This flag only occurs when the CallState is Ended. The call with           this flag set has ended, but not all resources corresponding to the           call have been freed yet.            Depending on the protocol there might be some audible feedback while           the clearing flag is set.                         In calls following the ITU-T Q.931 standard there is a period of             time between the call ending and the underlying channel being             completely free for re-use.                    ]]>
     */
    CLEARING,
}
/**
 * <![CDATA[         A set of flags representing the status of a remote contact in a           call.          It is protocol- and client-specific whether a particular contact           will ever have a particular flag set on them, and Telepathy clients           SHOULD NOT assume that a flag will ever be set.                     180 Ringing in SIP, and its equivalent in XMPP, are optional             informational messages, and implementations are not required             to send them. The same applies to the messages used to indicate             hold state.                ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum CallMemberFlags {
    /**
     * <![CDATA[           The remote contact's client has told us that the contact has been             alerted about the call but has not responded.                         This is a flag per member, not a flag for the call as a whole,               because in Muji conference calls, you could invite someone and               have their state be "ringing" for a while.                    ]]>
     */
    RINGING,
    /**
     * <![CDATA[           The call member has put this call on hold.                         This is a flag per member, not a flag for the call as a whole,               because in conference calls, any member could put the conference               on hold.                    ]]>
     */
    HELD,
    /**
     * <![CDATA[           This contact has merged this call into a conference. Note that GSM           provides a notification when the remote party merges a call into a           conference, but not when it is split out again; thus, this flag can           only indicate that the call has been part of a conference at some           point. If a GSM connection manager receives a notification that a           call has been merged into a conference a second time, it SHOULD           represent this by clearing and immediately re-setting this flag on           the remote contact.         ]]>
     */
    CONFERENCE_HOST,
}
/**
 * <![CDATA[         Extra flags to include with Captcha information       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum CaptchaFlags {
    /**
     * <![CDATA[           This captcha mechanism is required to be successfully           answered in order to pass this captcha challenge.         ]]>
     */
    CAPTCHA_FLAGS_REQUIRED,
}
/**
 * <![CDATA[         A set of flags representing call states.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ChannelCallStateFlags {
    /**
     * <![CDATA[           The contact has been alerted about the call but has not responded           (e.g. 180 Ringing in SIP).         ]]>
     */
    RINGING,
    /**
     * <![CDATA[           The contact is temporarily unavailable, and the call has been placed           in a queue (e.g. 182 Queued in SIP, or call-waiting in telephony).         ]]>
     */
    QUEUED,
    /**
     * <![CDATA[           The contact has placed the call on hold, and will not receive           media from the local user or any other participants until they           unhold the call again.         ]]>
     */
    HELD,
    /**
     * <![CDATA[           The initiator of the call originally called a contact other than the           current recipient of the call, but the call was then forwarded or           diverted.         ]]>
     */
    FORWARDED,
    /**
     * <![CDATA[           Progress has been made in placing the outgoing call, but the           destination contact may not have been made aware of the call yet           (so the Ringing state is not appropriate). This corresponds to SIP's           status code 183 Session Progress, and could be used when the           outgoing call has reached a gateway, for instance.         ]]>
     */
    IN_PROGRESS,
    /**
     * <![CDATA[           This contact has merged this call into a conference. Note that GSM           provides a notification when the remote party merges a call into a           conference, but not when it is split out again; thus, this flag can           only indicate that the call has been part of a conference at some           point. If a GSM connection manager receives a notification that a           call has been merged into a conference a second time, it SHOULD           represent this by clearing and immediately re-setting this flag on           the remote contact.         ]]>
     */
    CONFERENCE_HOST,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ChannelGroupFlags {
    /**
     * <![CDATA[             The AddMembers method can be used to             add or invite members who are             not already in the local pending list (which is always valid).         ]]>
     */
    CAN_ADD,
    /**
     * <![CDATA[             The RemoveMembers method can be used             to remove channel members             (removing those on the pending local list is always valid).         ]]>
     */
    CAN_REMOVE,
    /**
     * <![CDATA[             The RemoveMembers method can be used             on people on the remote             pending list.         ]]>
     */
    CAN_RESCIND,
    /**
     * <![CDATA[             A message may be sent to the server when calling             AddMembers on             contacts who are not currently pending members.         ]]>
     */
    MESSAGE_ADD,
    /**
     * <![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are currently channel members.         ]]>
     */
    MESSAGE_REMOVE,
    /**
     * <![CDATA[             A message may be sent to the server when calling             AddMembers on             contacts who are locally pending.         ]]>
     */
    MESSAGE_ACCEPT,
    /**
     * <![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are locally pending.         ]]>
     */
    MESSAGE_REJECT,
    /**
     * <![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are remote pending.         ]]>
     */
    MESSAGE_RESCIND,
    /**
     * <![CDATA[                        The members of this group have handles which are specific to             this channel, and are not valid as general-purpose handles on             the connection. Depending on the channel, it may be possible to             check the HandleOwners property or             call GetHandleOwners to find the             owners of these handles, which should be done if you wish to (e.g.)             subscribe to the contact's presence.                                    Connection managers must ensure that any given handle is not             simultaneously a general-purpose handle and a channel-specific             handle.                    ]]>
     */
    CHANNEL_SPECIFIC_HANDLES,
    /**
     * <![CDATA[             Placing a contact in multiple groups of this type is not allowed             and will raise NotAvailable (on services where contacts may only             be in one user-defined group, user-defined groups will have             this flag).         ]]>
     */
    ONLY_ONE_GROUP,
    /**
     * <![CDATA[           In rooms with channel specific handles (ie Channel_Specific_Handles           flag is set), this flag indicates that no handle owners are           available, apart from the owner of the           SelfHandle.                         This used to be an important optimization to avoid repeated             GetHandleOwners calls, before we introduced the             HandleOwners property and             HandleOwnersChanged signal.                    ]]>
     */
    HANDLE_OWNERS_NOT_AVAILABLE,
    /**
     * <![CDATA[           This flag indicates that all the properties introduced in           specification 0.17.6 are fully supported.         ]]>
     */
    PROPERTIES,
    /**
     * <![CDATA[           Indicates that MembersChangedDetailed           will be emitted for changes to this group's members in addition to           MembersChanged.           Clients can then connect to the former and ignore emission of the           latter. This flag's state MUST NOT change over the lifetime of a           channel.                         If it were allowed to change, client bindings would have to always             connect to MembersChanged just in case the flag ever went away (and             generally be unnecessarily complicated), which would mostly negate             the point of having this flag in the first place.                    ]]>
     */
    MEMBERS_CHANGED_DETAILED,
    /**
     * <![CDATA[           A message may be sent to the server when calling           RemoveMembers on           the SelfHandle.                         This would be set for XMPP Multi-User Chat or IRC channels,             but not for a typical implementation of streamed media calls.                    ]]>
     */
    MESSAGE_DEPART,
}
/**
 * <![CDATA[         The channel-type-specific capability flags used for         Channel.Type.StreamedMedia in the Connection.Interface.Capabilities         interface. See the InitialAudio         property for details of the mechanisms that will replace this.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ChannelMediaCapabilities {
    /**
     * <![CDATA[           The handle is capable of using audio streams within a media channel.         ]]>
     */
    AUDIO,
    /**
     * <![CDATA[           The handle is capable of using video streams within a media channel.         ]]>
     */
    VIDEO,
    /**
     * <![CDATA[           The handle is capable of performing STUN to traverse NATs.         ]]>
     */
    NAT_TRAVERSAL_STUN,
    /**
     * <![CDATA[           The handle is capable of establishing Google Talk peer-to-peer           connections (as implemented in libjingle 0.3) to traverse NATs.         ]]>
     */
    NAT_TRAVERSAL_GTALK_P2P,
    /**
     * <![CDATA[           The handle is capable of establishing ICE UDP peer-to-peer           connections (as defined by the IETF MMUSIC working group) to traverse           NATs.         ]]>
     */
    NAT_TRAVERSAL_ICE_UDP,
    /**
     * <![CDATA[           Channels whose target handle is this contact will have           ImmutableStreams = True.         ]]>
     */
    IMMUTABLE_STREAMS,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ChannelPasswordFlags {
    /**
     * <![CDATA[           The ProvidePassword method must be           called now for the user to join the channel         ]]>
     */
    PROVIDE,
    /**
     * <![CDATA[           The RoomConfig1.PasswordHint           contains a hint for the password.         ]]>
     */
    HINT,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ChannelTextMessageFlags {
    /**
     * <![CDATA[         The incoming message was truncated to a shorter length by the         server or the connection manager.         ]]>
     */
    TRUNCATED,
    /**
     * <![CDATA[           The incoming message contained non-text content which cannot be             represented by this interface, but has been signalled             in the Messages             interface.            Connection managers SHOULD only set this flag if the non-text             content appears to be relatively significant (exactly how             significant is up to the implementor). The intention is that             if this flag is set, clients using this interface SHOULD inform             the user that part of the message was not understood.         ]]>
     */
    NON_TEXT_CONTENT,
    /**
     * <![CDATA[           The incoming message was part of a replay of message history.                         In XMPP multi-user chat, a few past messages are replayed               when you join a chatroom. A sufficiently capable IRC connection               manager could also set this flag on historical messages when               connected to a proxy like bip or irssi-proxy. The existence               of this flag allows loggers and UIs to use better heuristics               when eliminating duplicates (a simple implementation made               possible by this flag would be to avoid logging scrollback               at all).                    ]]>
     */
    SCROLLBACK,
    /**
     * <![CDATA[           The incoming message has been seen in a previous channel during             the lifetime of the Connection, but             had not been acknowledged             when that channel closed, causing an identical channel (the             channel in which the message now appears) to open.                         This means that a logger (which should already have seen the               message in the previous channel) is able to recognise and ignore               these replayed messages.                    ]]>
     */
    RESCUED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ConnMgrParamFlags {
    /**
     * <![CDATA[           This parameter is required for connecting to the server.         ]]>
     */
    REQUIRED,
    /**
     * <![CDATA[           This parameter is required for registering an account on the           server.         ]]>
     */
    REGISTER,
    /**
     * <![CDATA[           This parameter has a default value, which is returned in           GetParameters; not providing this parameter is equivalent to           providing the default.         ]]>
     */
    HAS_DEFAULT,
    /**
     * <![CDATA[           This parameter should be considered private or secret; for             instance, clients should store it in a "password safe" like             gnome-keyring or kwallet, omit it from debug logs, and use a             text input widget that hides the value of the parameter.            (Clients that support older connection managers may also treat             any parameter whose name contains "password" as though it had this             flag.)         ]]>
     */
    SECRET,
    /**
     * <![CDATA[           This parameter is also a D-Bus property on the resulting             Connection; a             parameter named com.example.Duck.Macaroni with this             flag corresponds to the Macaroni property on the             com.example.Duck interface.  Its value can be queried             and possibly changed on an existing Connection using methods on the             org.freedesktop.DBus.Properties interface.            When a new value for a parameter with this flag is passed to             Account.UpdateParameters,             the account manager will attempt to update its value on any running             connections. Similarly, if the parameter also has the             Has_Default flag, and is passed in the second argument             to UpdateParameters, the default value will be applied             to any running             connections. Thus, clients generally do not need to directly access             or update the connection property; instead, they SHOULD manipulate             Account.Parameters.                         This allows runtime-configurable options to be stored and               maintained by the AccountManager, without needing to               invent a separate account preference for “properties that should               be set on the connection as soon as it is created”. It was               originally invented to manage Cellular               preferences.                    ]]>
     */
    DBUS_PROPERTY,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ConnectionAliasFlags {
    /**
     * <![CDATA[           The aliases of contacts on this connection may be changed by the             user of the service, not just by the contacts themselves. This is             the case on Jabber, for instance.           It is possible that aliases can be changed by the contacts too -             which alias takes precedence is not defined by this             specification, and depends on the server and/or connection manager             implementation.           This flag only applies to the aliases of "globally valid" contact             handles. At this time, clients should not expect to be able to             change the aliases corresponding to any channel-specific             handles. If this becomes possible in future, a new flag will             be defined.         ]]>
     */
    CONNECTION_ALIAS_FLAG_USER_SET,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ConnectionCapabilityFlags {
    /**
     * <![CDATA[           The given channel type and handle can be given to RequestChannel           to create a new channel of this type.         ]]>
     */
    CREATE,
    /**
     * <![CDATA[           The given contact can be invited to an existing channel of this type.         ]]>
     */
    INVITE,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ContactBlockingCapabilities {
    /**
     * <![CDATA[           When calling BlockContacts, the           contacts may be reporting as abusive to the server administrators by           setting Report_Abusive to True.         ]]>
     */
    CONTACT_BLOCKING_CAPABILITY_CAN_REPORT_ABUSIVE,
}
/**
 * <![CDATA[         Flags describing the behaviour of a vCard field.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ContactInfoFieldFlags {
    /**
     * <![CDATA[           If present, exactly the parameters indicated must be set on this             field; in the case of an empty list of parameters, this implies that             parameters may not be used.            If absent, and the list of allowed parameters is non-empty,             any (possibly empty) subset of that list may be             used.            If absent, and the list of allowed parameters is empty,             any parameters may be used.         ]]>
     */
    PARAMETERS_EXACT,
    /**
     * <![CDATA[           Indicates that this field will be overwritten when the user's alias             is changed with SetAliases             or when the Account's Nickname             is updated.  Clients that allow the editing of the Alias and the             ContactInfo in the same location should hide fields with this flag.                        If a client allowed the user to edit both the nickname and the               ContactInfo field at the same time, the user could set them to two               different values even though they map to the same property.  This               would result in surprising behavior where the second value would               win over the first.                      In addition to hiding this field when editing ContactInfo together             with the user's nickname, it is recommended that clients call             SetContactInfo before setting the             user's nickname.                        This ensures that if the user changes the nickname, the correct               value will get set even if the stale nickname is mistakenly sent               along with SetContactInfo.                      If used, this flag typically appears on either the 'nickname' or             'fn' field.         ]]>
     */
    OVERWRITTEN_BY_NICKNAME,
}
/**
 * <![CDATA[         Flags defining the behaviour of contact information on this protocol.         Some protocols provide no information on contacts without an explicit         request; others always push information to the connection manager as         and when it changes.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum ContactInfoFlags {
    /**
     * <![CDATA[           Indicates that SetContactInfo is           supported on this connection.         ]]>
     */
    CAN_SET,
    /**
     * <![CDATA[           Indicates that the protocol pushes all contacts' information to the           connection manager without prompting. If set,           ContactInfoChanged will be emitted           whenever contacts' information changes.         ]]>
     */
    PUSH,
}
/**
 * A set of flags indicating which D-Bus bus names are acceptable.
 * They can be combined with the bitwise-or operator to accept multiple
 * types. %TP_DBUS_NAME_TYPE_NOT_BUS_DAEMON and %TP_DBUS_NAME_TYPE_ANY are
 * the bitwise-or of other appropriate types, for convenience.
 * 
 * Since 0.11.5, there is a corresponding #GFlagsClass type,
 * %TP_TYPE_DBUS_NAME_TYPE.
 * @bitfield 
 */
export enum DBusNameType {
    /**
     * accept unique names like :1.123
     *  (not including the name of the bus daemon itself)
     */
    UNIQUE,
    /**
     * accept well-known names like
     *  com.example.Service (not including the name of the bus daemon itself)
     */
    WELL_KNOWN,
    /**
     * accept the name of the bus daemon
     *  itself, which has the syntax of a well-known name, but behaves like a
     *  unique name
     */
    BUS_DAEMON,
    /**
     * accept either unique or well-known
     *  names, but not the bus daemon
     */
    NOT_BUS_DAEMON,
    /**
     * accept any of the above
     */
    ANY,
}
/**
 * Bitfield representing allowed access to a property. At most one of
 * %TP_DBUS_PROPERTIES_MIXIN_FLAG_EMITS_CHANGED and
 * %TP_DBUS_PROPERTIES_MIXIN_FLAG_EMITS_INVALIDATED may be specified for a
 * property.
 * 
 * Since 0.11.5, there is a corresponding #GFlagsClass type,
 * %TP_TYPE_DBUS_PROPERTIES_MIXIN_FLAGS.
 * @bitfield 
 */
export enum DBusPropertiesMixinFlags {
    /**
     * The property can be read using Get and
     *  GetAll
     */
    READ,
    /**
     * The property can be written using Set
     */
    WRITE,
    /**
     * The property's new value is
     *  included in emissions of PropertiesChanged
     */
    EMITS_CHANGED,
    /**
     * The property is announced
     *  as invalidated, without its value, in emissions of PropertiesChanged
     */
    EMITS_INVALIDATED,
}
/**
 * <![CDATA[         Flags indicating the level of support for delivery reporting on this         channel, as found on the         DeliveryReportingSupport property. Any         future flags added to this set will conform to the         convention that the presence of an extra flag implies that         more operations will succeed. Note that CMs may always provide more         reports than are requested in the         Message_Sending_Flags passed to         SendMessage.                     If senders want delivery reports, they should ask for them.  If they           don't want delivery reports, they can just ignore them, so there's no           need to have capability discovery for what will happen if a delivery           report isn't requested.                ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum DeliveryReportingSupportFlags {
    /**
     * <![CDATA[           Clients MAY expect to receive negative delivery reports if           Message_Sending_Flag_Report_Delivery is specified when sending.         ]]>
     */
    FAILURES,
    /**
     * <![CDATA[           Clients MAY expect to receive positive delivery reports if           Message_Sending_Flag_Report_Delivery is specified when sending.         ]]>
     */
    SUCCESSES,
    /**
     * <![CDATA[           Clients MAY expect to receive Delivery_Status           Read reports if Message_Sending_Flag_Report_Read           is specified when sending.         ]]>
     */
    READ,
    /**
     * <![CDATA[           Clients MAY expect to receive Delivery_Status           Deleted reports if Message_Sending_Flag_Report_Deleted           is specified when sending.         ]]>
     */
    DELETED,
}
/**
 * <![CDATA[         Flags describing the Location features which may be supported on any         given connection.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum LocationFeatures {
    /**
     * <![CDATA[           Indicates that setting your own location with           SetLocation is supported on this           connection.         ]]>
     */
    LOCATION_FEATURE_CAN_SET,
}
/**
 * <![CDATA[         Flags representing capabilities provided by a connection manager.           Those values can be used as bitfield. Some flags depend on, or           conflict with, each other.          Connections SHOULD implement as many of these features as the           underlying protocol allows, preferring to implement           Supports_Unread_Mails instead of Emits_Mails_Received if both are           possible.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum MailNotificationFlags {
    /**
     * <![CDATA[           This Connection provides the number of unread e-mails (or e-mail           threads) in the main folder of your e-mail account, as the           UnreadMailCount property. The           connection manager will update this value by emitting the           UnreadMailsChanged signal.         ]]>
     */
    SUPPORTS_UNREAD_MAIL_COUNT,
    /**
     * <![CDATA[           This Connection provides a detailed list of unread e-mails, as the           UnreadMails property. If this flag           is set, Supports_Unread_Mail_Count MUST be set, and           Emits_Mails_Received MUST NOT be set.           The Connection will update the list by emitting the           UnreadMailsChanged signals.         ]]>
     */
    SUPPORTS_UNREAD_MAILS,
    /**
     * <![CDATA[           This Connection emits the MailsReceived           signal, which provides details about newly arrived e-mails but does           not maintain their read/unread status afterwards. This flag MUST NOT           be combined with Supports_Unread_Mails.         ]]>
     */
    EMITS_MAILS_RECEIVED,
    /**
     * <![CDATA[           This Connection can provide a URL (with optional POST data) to           open the the inbox of the e-mail account in a web-based client, via           the RequestInboxURL method.         ]]>
     */
    SUPPORTS_REQUEST_INBOX_URL,
    /**
     * <![CDATA[           This Connection can provide a URL (with optional POST data) to open             a specific mail in a web-based client, via the             RequestMailURL method. This feature             is not useful unless either Emits_Mails_Received or             Supports_Unread_Mails is set.            If this flag is not set, clients SHOULD fall back to using             RequestInboxURL if available.         ]]>
     */
    SUPPORTS_REQUEST_MAIL_URL,
    /**
     * <![CDATA[           Each Mail represents a thread of e-mails, which             MAY have more than one sender.                         Google Talk notifies users about new mail in terms of unread               threads, rather than unread e-mails.                    ]]>
     */
    THREAD_BASED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum MediaStreamPendingSend {
    /**
     * <![CDATA[             The local user has been asked to send media by the remote user.             Call RequestStreamDirection to             indicate whether or not this is acceptable.         ]]>
     */
    LOCAL_SEND,
    /**
     * <![CDATA[             The remote user has been asked to send media by the local user.             The StreamDirectionChanged signal             will be emitted when the remote user accepts or rejects this             change.         ]]>
     */
    REMOTE_SEND,
}
/**
 * <![CDATA[         Flags indicating the level of support for message parts on this           channel. They are designed such that setting more flags always           implies that the channel has more capabilities.          If no flags are set, this indicates that messages may contain           a single message part whose content-type is any of the types           from SupportedContentTypes, possibly with some alternatives.          There is no flag indicating support for alternatives. This is           because the SendMessage implementation can always accept messages           containing alternatives, even if the underlying protocol does not,           by deleting all alternatives except the first (most preferred)           that is supported.                     Each of the flags so far implies the previous flag, so we could           have used a simple enumeration here; however, we've defined           the message-part support indicator as a flag set for future           expansion.                   See SupportedContentTypes for some           examples.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum MessagePartSupportFlags {
    /**
     * <![CDATA[           SendMessage will accept messages           containing a textual message body,           plus a single attachment of any type listed in the           SupportedContentTypes property. It does not make sense for this           flag to be set if Message_Part_Support_Flag_Data_Only is not also set           (because the connection manager can trivially provide an empty text           part if necessary).         ]]>
     */
    ONE_ATTACHMENT,
    /**
     * <![CDATA[           SendMessage will accept messages containing a textual message body,           plus an arbitrary number of attachments of any type listed in the           SupportedContentTypes property. It does not make sense for this           flag to be set if Message_Part_Support_Flag_One_Attachment is not           also set.         ]]>
     */
    MULTIPLE_ATTACHMENTS,
}
/**
 * <![CDATA[         Flags altering the way a message is sent. The "most usual" action         should always be to have these flags unset. Some indication of which         flags are supported is provided by the         DeliveryReportingSupport property.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum MessageSendingFlags {
    /**
     * <![CDATA[           Provide a successful delivery report if possible, even if this is             not the default for this protocol. Ignored if delivery reports are             not possible on this protocol.                         In some protocols, like XMPP, it is not conventional to request               or send positive delivery notifications.                       Delivery failure reports SHOULD always be sent, but if this flag             is present, the connection manager MAY also try harder to obtain             failed delivery reports or allow them to be matched to outgoing             messages.         ]]>
     */
    DELIVERY,
    /**
     * <![CDATA[           Provide a delivery report when the message is read by the             recipient, even if this is not the default for this protocol.             Ignored if read reports are not possible on this protocol.         ]]>
     */
    READ,
    /**
     * <![CDATA[           Provide a delivery report when the message is deleted by the             recipient, even if this is not the default for this protocol.             Ignored if such reports are not possible on this protocol.         ]]>
     */
    DELETED,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum PropertyFlags {
    /**
     * <![CDATA[The property can be read]]>
     */
    READ,
    /**
     * <![CDATA[The property can be written]]>
     */
    WRITE,
}
/**
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum RTCPXRStatisticsFlags {
    /**
     * <![CDATA[           Loss report flag, as defined in RFC3611 section 4.6.         ]]>
     */
    LOSS,
    /**
     * <![CDATA[           Duplicate report flag, as defined in RFC3611 section 4.6.         ]]>
     */
    DUPLICATE,
    /**
     * <![CDATA[           Jitter flag, as defined in RFC3611 section 4.6.         ]]>
     */
    JITTER,
    /**
     * <![CDATA[           First bit of TTL or Hop Limit flag, as defined in RFC3611 section           4.6.         ]]>
     */
    TTL,
    /**
     * <![CDATA[           Second bit of TTL or Hop Limit flag, as defined in RFC3611 section           4.6.         ]]>
     */
    HL,
}
/**
 * <![CDATA[         Flags indicating restrictions imposed on an Account by its storage         method.       ]]>
 * 
 * Bitfield/set of flags generated from the Telepathy specification.
 * @bitfield 
 */
export enum StorageRestrictionFlags {
    /**
     * <![CDATA[           The account's Parameters property can't be changed by calling           UpdateParameters.         ]]>
     */
    PARAMETERS,
    /**
     * <![CDATA[           The account can't be enabled/disabled by setting the Enabled property.         ]]>
     */
    ENABLED,
    /**
     * <![CDATA[           The account's presence can't be changed by setting the RequestedPresence and AutomaticPresence properties.         ]]>
     */
    PRESENCE,
    /**
     * <![CDATA[           The account's Service           property cannot be changed.         ]]>
     */
    SERVICE,
}
/**
 * The account manager's well-known bus name
 */
export const ACCOUNT_MANAGER_BUS_NAME: string
/**
 * The account manager's standard object path
 */
export const ACCOUNT_MANAGER_OBJECT_PATH: string
/**
 * The common prefix of the object path for all Account objects.
 */
export const ACCOUNT_OBJECT_PATH_BASE: string
/**
 * The channel dispatcher's well-known bus name
 */
export const CHANNEL_DISPATCHER_BUS_NAME: string
/**
 * The channel dispatcher's standard object path
 */
export const CHANNEL_DISPATCHER_OBJECT_PATH: string
/**
 * The common prefix of the well-known bus name for any Telepathy Client.
 */
export const CLIENT_BUS_NAME_BASE: string
/**
 * The common prefix of the well-known object path for any Telepathy Client.
 */
export const CLIENT_OBJECT_PATH_BASE: string
/**
 * The prefix for a connection manager's bus name, to which the CM's name
 * (e.g. "gabble") should be appended.
 */
export const CM_BUS_NAME_BASE: string
/**
 * The prefix for a connection manager's object path, to which the CM's name
 * (e.g. "gabble") should be appended.
 */
export const CM_OBJECT_PATH_BASE: string
/**
 * The prefix for a connection's bus name, to which the CM's name
 * (e.g. "gabble"), the protocol (e.g. "jabber") and an element or sequence
 * of elements representing the account should be appended.
 */
export const CONN_BUS_NAME_BASE: string
/**
 * The prefix for a connection's object path, to which the CM's name
 * (e.g. "gabble"), the protocol (e.g. "jabber") and an element or sequence
 * of elements representing the account should be appended.
 */
export const CONN_OBJECT_PATH_BASE: string
/**
 * The standard path for objects implementing the Telepathy Debug interface
 * (#TpSvcDebug).
 */
export const DEBUG_OBJECT_PATH: string
/**
 * The common prefix of Telepathy errors, as a string constant, without
 * the trailing '.' character.
 */
export const ERROR_PREFIX: string
export const IFACE_ACCOUNT: string
export const IFACE_ACCOUNT_INTERFACE_ADDRESSING: string
export const IFACE_ACCOUNT_INTERFACE_AVATAR: string
export const IFACE_ACCOUNT_INTERFACE_STORAGE: string
export const IFACE_ACCOUNT_MANAGER: string
export const IFACE_AUTHENTICATION_TLS_CERTIFICATE: string
export const IFACE_CALL_CONTENT: string
export const IFACE_CALL_CONTENT_INTERFACE_AUDIO_CONTROL: string
export const IFACE_CALL_CONTENT_INTERFACE_DTMF: string
export const IFACE_CALL_CONTENT_INTERFACE_MEDIA: string
export const IFACE_CALL_CONTENT_INTERFACE_VIDEO_CONTROL: string
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION: string
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS: string
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK: string
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS: string
export const IFACE_CALL_STREAM: string
export const IFACE_CALL_STREAM_ENDPOINT: string
export const IFACE_CALL_STREAM_INTERFACE_MEDIA: string
export const IFACE_CHANNEL: string
export const IFACE_CHANNEL_DISPATCHER: string
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_MESSAGES1: string
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST: string
export const IFACE_CHANNEL_DISPATCH_OPERATION: string
export const IFACE_CHANNEL_INTERFACE_ANONYMITY: string
export const IFACE_CHANNEL_INTERFACE_CALL_STATE: string
export const IFACE_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION: string
export const IFACE_CHANNEL_INTERFACE_CHAT_STATE: string
export const IFACE_CHANNEL_INTERFACE_CONFERENCE: string
export const IFACE_CHANNEL_INTERFACE_DESTROYABLE: string
export const IFACE_CHANNEL_INTERFACE_DTMF: string
export const IFACE_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA: string
export const IFACE_CHANNEL_INTERFACE_GROUP: string
export const IFACE_CHANNEL_INTERFACE_HOLD: string
export const IFACE_CHANNEL_INTERFACE_MEDIA_SIGNALLING: string
export const IFACE_CHANNEL_INTERFACE_MESSAGES: string
export const IFACE_CHANNEL_INTERFACE_PASSWORD: string
export const IFACE_CHANNEL_INTERFACE_ROOM: string
export const IFACE_CHANNEL_INTERFACE_ROOM_CONFIG: string
export const IFACE_CHANNEL_INTERFACE_SASL_AUTHENTICATION: string
export const IFACE_CHANNEL_INTERFACE_SECURABLE: string
export const IFACE_CHANNEL_INTERFACE_SERVICE_POINT: string
export const IFACE_CHANNEL_INTERFACE_SMS: string
export const IFACE_CHANNEL_INTERFACE_SUBJECT: string
export const IFACE_CHANNEL_INTERFACE_TUBE: string
export const IFACE_CHANNEL_REQUEST: string
export const IFACE_CHANNEL_TYPE_CALL: string
export const IFACE_CHANNEL_TYPE_CONTACT_LIST: string
export const IFACE_CHANNEL_TYPE_CONTACT_SEARCH: string
export const IFACE_CHANNEL_TYPE_DBUS_TUBE: string
export const IFACE_CHANNEL_TYPE_FILE_TRANSFER: string
export const IFACE_CHANNEL_TYPE_ROOM_LIST: string
export const IFACE_CHANNEL_TYPE_SERVER_AUTHENTICATION: string
export const IFACE_CHANNEL_TYPE_SERVER_TLS_CONNECTION: string
export const IFACE_CHANNEL_TYPE_STREAMED_MEDIA: string
export const IFACE_CHANNEL_TYPE_STREAM_TUBE: string
export const IFACE_CHANNEL_TYPE_TEXT: string
export const IFACE_CHANNEL_TYPE_TUBES: string
export const IFACE_CLIENT: string
export const IFACE_CLIENT_APPROVER: string
export const IFACE_CLIENT_HANDLER: string
export const IFACE_CLIENT_INTERFACE_REQUESTS: string
export const IFACE_CLIENT_OBSERVER: string
export const IFACE_CONNECTION: string
export const IFACE_CONNECTION_INTERFACE_ADDRESSING: string
export const IFACE_CONNECTION_INTERFACE_ALIASING: string
export const IFACE_CONNECTION_INTERFACE_ANONYMITY: string
export const IFACE_CONNECTION_INTERFACE_AVATARS: string
export const IFACE_CONNECTION_INTERFACE_BALANCE: string
export const IFACE_CONNECTION_INTERFACE_CAPABILITIES: string
export const IFACE_CONNECTION_INTERFACE_CELLULAR: string
export const IFACE_CONNECTION_INTERFACE_CLIENT_TYPES: string
export const IFACE_CONNECTION_INTERFACE_CONTACTS: string
export const IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING: string
export const IFACE_CONNECTION_INTERFACE_CONTACT_CAPABILITIES: string
export const IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS: string
export const IFACE_CONNECTION_INTERFACE_CONTACT_INFO: string
export const IFACE_CONNECTION_INTERFACE_CONTACT_LIST: string
export const IFACE_CONNECTION_INTERFACE_LOCATION: string
export const IFACE_CONNECTION_INTERFACE_MAIL_NOTIFICATION: string
export const IFACE_CONNECTION_INTERFACE_POWER_SAVING: string
export const IFACE_CONNECTION_INTERFACE_PRESENCE: string
export const IFACE_CONNECTION_INTERFACE_RENAMING: string
export const IFACE_CONNECTION_INTERFACE_REQUESTS: string
export const IFACE_CONNECTION_INTERFACE_SERVICE_POINT: string
export const IFACE_CONNECTION_INTERFACE_SIDECARS1: string
export const IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE: string
export const IFACE_CONNECTION_MANAGER: string
export const IFACE_DBUS_DAEMON: string
export const IFACE_DBUS_INTROSPECTABLE: string
export const IFACE_DBUS_PEER: string
export const IFACE_DBUS_PROPERTIES: string
export const IFACE_DEBUG: string
export const IFACE_MEDIA_SESSION_HANDLER: string
export const IFACE_MEDIA_STREAM_HANDLER: string
export const IFACE_PROPERTIES_INTERFACE: string
export const IFACE_PROTOCOL: string
export const IFACE_PROTOCOL_INTERFACE_ADDRESSING: string
export const IFACE_PROTOCOL_INTERFACE_AVATARS: string
export const IFACE_PROTOCOL_INTERFACE_PRESENCE: string
/**
 * 1 higher than the highest valid value of #TpAccessControlType.
 */
export const NUM_ACCESS_CONTROL_TYPES: number
/**
 * 1 higher than the highest valid value of #TpCallContentDisposition.
 */
export const NUM_CALL_CONTENT_DISPOSITIONS: number
/**
 * 1 higher than the highest valid value of #TpCallContentPacketizationType.
 */
export const NUM_CALL_CONTENT_PACKETIZATION_TYPES: number
/**
 * 1 higher than the highest valid value of #TpCallState.
 */
export const NUM_CALL_STATES: number
/**
 * 1 higher than the highest valid value of #TpCallStateChangeReason.
 */
export const NUM_CALL_STATE_CHANGE_REASONS: number
/**
 * 1 higher than the highest valid value of #TpCallStreamCandidateType.
 */
export const NUM_CALL_STREAM_CANDIDATE_TYPES: number
/**
 * 1 higher than the highest valid value of #TpCaptchaCancelReason.
 */
export const NUM_CAPTCHA_CANCEL_REASONS: number
/**
 * 1 higher than the highest valid value of #TpCaptchaStatus.
 */
export const NUM_CAPTCHA_STATUSES: number
/**
 * 1 higher than the highest valid value of #TpChannelChatState.
 */
export const NUM_CHANNEL_CHAT_STATES: number
/**
 * 1 higher than the highest valid value of #TpChannelContactSearchState.
 */
export const NUM_CHANNEL_CONTACT_SEARCH_STATES: number
/**
 * 1 higher than the highest valid value of #TpChannelGroupChangeReason.
 */
export const NUM_CHANNEL_GROUP_CHANGE_REASONS: number
/**
 * 1 higher than the highest valid value of #TpChannelTextMessageType.
 */
export const NUM_CHANNEL_TEXT_MESSAGE_TYPES: number
/**
 * 1 higher than the highest valid value of #TpChannelTextSendError.
 */
export const NUM_CHANNEL_TEXT_SEND_ERRORS: number
/**
 * 1 higher than the highest valid value of #TpConnectionPresenceType.
 */
export const NUM_CONNECTION_PRESENCE_TYPES: number
/**
 * 1 higher than the highest valid value of #TpConnectionStatus.
 */
export const NUM_CONNECTION_STATUSES: number
/**
 * 1 higher than the highest valid value of #TpConnectionStatusReason.
 */
export const NUM_CONNECTION_STATUS_REASONS: number
/**
 * 1 higher than the highest #TpContactFeature supported by this version of
 * telepathy-glib.
 */
export const NUM_CONTACT_FEATURES: number
/**
 * 1 higher than the highest valid value of #TpContactListState.
 */
export const NUM_CONTACT_LIST_STATES: number
/**
 * 1 higher than the highest valid value of #TpContactMetadataStorageType.
 */
export const NUM_CONTACT_METADATA_STORAGE_TYPES: number
/**
 * 1 more than the highest valid #TpDBusError at the time of compilation
 */
export const NUM_DBUS_ERRORS: number
/**
 * 1 higher than the highest valid value of #TpDebugLevel.
 */
export const NUM_DEBUG_LEVELS: number
/**
 * 1 higher than the highest valid value of #TpDeliveryStatus.
 */
export const NUM_DELIVERY_STATUSES: number
/**
 * 1 higher than the highest valid value of #TpDTMFEvent.
 */
export const NUM_DTMF_EVENTS: number
/**
 * 1 higher than the highest valid value of #TpFileHashType.
 */
export const NUM_FILE_HASH_TYPES: number
/**
 * 1 higher than the highest valid value of #TpFileTransferState.
 */
export const NUM_FILE_TRANSFER_STATES: number
/**
 * 1 higher than the highest valid value of #TpFileTransferStateChangeReason.
 */
export const NUM_FILE_TRANSFER_STATE_CHANGE_REASONS: number
/**
 * 1 higher than the highest valid value of #TpHandleType.
 */
export const NUM_HANDLE_TYPES: number
/**
 * 1 higher than the highest valid value of #TpHTTPMethod.
 */
export const NUM_HTTP_METHODS: number
/**
 * 1 higher than the highest valid value of #TpLocalHoldState.
 */
export const NUM_LOCAL_HOLD_STATES: number
/**
 * 1 higher than the highest valid value of #TpLocalHoldStateReason.
 */
export const NUM_LOCAL_HOLD_STATE_REASONS: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamBaseProto.
 */
export const NUM_MEDIA_STREAM_BASE_PROTOS: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamDirection.
 */
export const NUM_MEDIA_STREAM_DIRECTIONS: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamError.
 */
export const NUM_MEDIA_STREAM_ERRORS: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamState.
 */
export const NUM_MEDIA_STREAM_STATES: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamTransportType.
 */
export const NUM_MEDIA_STREAM_TRANSPORT_TYPES: number
/**
 * 1 higher than the highest valid value of #TpMediaStreamType.
 */
export const NUM_MEDIA_STREAM_TYPES: number
/**
 * 1 higher than the highest valid value of #TpRCPTXRRTTMode.
 */
export const NUM_RCPT_XR_RTT_MODES: number
/**
 * 1 higher than the highest valid value of #TpRichPresenceAccessControlType.
 */
export const NUM_RICH_PRESENCE_ACCESS_CONTROL_TYPES: number
/**
 * 1 higher than the highest valid value of #TpSASLAbortReason.
 */
export const NUM_SASL_ABORT_REASONS: number
/**
 * 1 higher than the highest valid value of #TpSASLStatus.
 */
export const NUM_SASL_STATUSES: number
/**
 * 1 higher than the highest valid value of #TpSendingState.
 */
export const NUM_SENDING_STATES: number
/**
 * 1 higher than the highest valid value of #TpServicePointType.
 */
export const NUM_SERVICE_POINT_TYPES: number
/**
 * 1 higher than the highest valid value of #TpSocketAccessControl.
 */
export const NUM_SOCKET_ACCESS_CONTROLS: number
/**
 * 1 higher than the highest valid value of #TpSocketAddressType.
 */
export const NUM_SOCKET_ADDRESS_TYPES: number
/**
 * 1 higher than the highest valid value of #TpStreamComponent.
 */
export const NUM_STREAM_COMPONENTS: number
/**
 * 1 higher than the highest valid value of #TpStreamEndpointState.
 */
export const NUM_STREAM_ENDPOINT_STATES: number
/**
 * 1 higher than the highest valid value of #TpStreamFlowState.
 */
export const NUM_STREAM_FLOW_STATES: number
/**
 * 1 higher than the highest valid value of #TpStreamTransportType.
 */
export const NUM_STREAM_TRANSPORT_TYPES: number
/**
 * 1 higher than the highest valid value of #TpSubscriptionState.
 */
export const NUM_SUBSCRIPTION_STATES: number
/**
 * 1 higher than the highest valid value of #TpTLSCertificateRejectReason.
 */
export const NUM_TLS_CERTIFICATE_REJECT_REASONS: number
/**
 * 1 higher than the highest valid value of #TpTLSCertificateState.
 */
export const NUM_TLS_CERTIFICATE_STATES: number
/**
 * 1 higher than the highest valid value of #TpTubeChannelState.
 */
export const NUM_TUBE_CHANNEL_STATES: number
/**
 * 1 higher than the highest valid value of #TpTubeState.
 */
export const NUM_TUBE_STATES: number
/**
 * 1 higher than the highest valid value of #TpTubeType.
 */
export const NUM_TUBE_TYPES: number
export const PROP_ACCOUNT_AUTOMATIC_PRESENCE: string
export const PROP_ACCOUNT_CHANGING_PRESENCE: string
export const PROP_ACCOUNT_CONNECTION: string
export const PROP_ACCOUNT_CONNECTION_ERROR: string
export const PROP_ACCOUNT_CONNECTION_ERROR_DETAILS: string
export const PROP_ACCOUNT_CONNECTION_STATUS: string
export const PROP_ACCOUNT_CONNECTION_STATUS_REASON: string
export const PROP_ACCOUNT_CONNECT_AUTOMATICALLY: string
export const PROP_ACCOUNT_CURRENT_PRESENCE: string
export const PROP_ACCOUNT_DISPLAY_NAME: string
export const PROP_ACCOUNT_ENABLED: string
export const PROP_ACCOUNT_HAS_BEEN_ONLINE: string
export const PROP_ACCOUNT_ICON: string
export const PROP_ACCOUNT_INTERFACES: string
export const PROP_ACCOUNT_INTERFACE_ADDRESSING_URI_SCHEMES: string
export const PROP_ACCOUNT_INTERFACE_AVATAR_AVATAR: string
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_IDENTIFIER: string
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_PROVIDER: string
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_RESTRICTIONS: string
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_SPECIFIC_INFORMATION: string
export const PROP_ACCOUNT_MANAGER_INTERFACES: string
export const PROP_ACCOUNT_MANAGER_INVALID_ACCOUNTS: string
export const PROP_ACCOUNT_MANAGER_SUPPORTED_ACCOUNT_PROPERTIES: string
export const PROP_ACCOUNT_MANAGER_VALID_ACCOUNTS: string
export const PROP_ACCOUNT_NICKNAME: string
export const PROP_ACCOUNT_NORMALIZED_NAME: string
export const PROP_ACCOUNT_PARAMETERS: string
export const PROP_ACCOUNT_REQUESTED_PRESENCE: string
export const PROP_ACCOUNT_SERVICE: string
export const PROP_ACCOUNT_SUPERSEDES: string
export const PROP_ACCOUNT_VALID: string
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_CHAIN_DATA: string
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_TYPE: string
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_REJECTIONS: string
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_STATE: string
export const PROP_CALL_CONTENT_DISPOSITION: string
export const PROP_CALL_CONTENT_INTERFACES: string
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_INPUT_VOLUME: string
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_OUTPUT_VOLUME: string
export const PROP_CALL_CONTENT_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string
export const PROP_CALL_CONTENT_INTERFACE_DTMF_DEFERRED_TONES: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_EVENT: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_STATE: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_LOCAL_MEDIA_DESCRIPTIONS: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_MEDIA_DESCRIPTION_OFFER: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_PACKETIZATION: string
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_REMOTE_MEDIA_DESCRIPTIONS: string
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_BITRATE: string
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_FRAMERATE: string
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MANUAL_KEY_FRAMES: string
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MTU: string
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_VIDEO_RESOLUTION: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_CODECS: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_FURTHER_NEGOTIATION_REQUIRED: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_HAS_REMOTE_INFORMATION: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACES: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DLRR_MAX_SIZE: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DUPLICATE_RLE_MAX_SIZE: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_ENABLE_METRICS: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_LOSS_RLE_MAX_SIZE: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_PACKET_RECEIPT_TIMES_MAX_SIZE: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_RTT_MODE: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_STATISTICS_FLAGS: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_DOES_AVPF: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_FEEDBACK_MESSAGES: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS_HEADER_EXTENSIONS: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_REMOTE_CONTACT: string
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_SSRCS: string
export const PROP_CALL_CONTENT_NAME: string
export const PROP_CALL_CONTENT_STREAMS: string
export const PROP_CALL_CONTENT_TYPE: string
export const PROP_CALL_STREAM_CAN_REQUEST_RECEIVING: string
export const PROP_CALL_STREAM_ENDPOINT_CONTROLLING: string
export const PROP_CALL_STREAM_ENDPOINT_ENDPOINT_STATE: string
export const PROP_CALL_STREAM_ENDPOINT_IS_ICE_LITE: string
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CANDIDATES: string
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CREDENTIALS: string
export const PROP_CALL_STREAM_ENDPOINT_SELECTED_CANDIDATE_PAIRS: string
export const PROP_CALL_STREAM_ENDPOINT_TRANSPORT: string
export const PROP_CALL_STREAM_INTERFACES: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ENDPOINTS: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_HAS_SERVER_INFO: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ICE_RESTART_PENDING: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CANDIDATES: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CREDENTIALS: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RECEIVING_STATE: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RELAY_INFO: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_SENDING_STATE: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_STUN_SERVERS: string
export const PROP_CALL_STREAM_INTERFACE_MEDIA_TRANSPORT: string
export const PROP_CALL_STREAM_LOCAL_SENDING_STATE: string
export const PROP_CALL_STREAM_REMOTE_MEMBERS: string
export const PROP_CALL_STREAM_REMOTE_MEMBER_IDENTIFIERS: string
export const PROP_CHANNEL_CHANNEL_TYPE: string
export const PROP_CHANNEL_DISPATCHER_INTERFACES: string
export const PROP_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST_DISPATCH_OPERATIONS: string
export const PROP_CHANNEL_DISPATCHER_SUPPORTS_REQUEST_HINTS: string
export const PROP_CHANNEL_DISPATCH_OPERATION_ACCOUNT: string
export const PROP_CHANNEL_DISPATCH_OPERATION_CHANNELS: string
export const PROP_CHANNEL_DISPATCH_OPERATION_CONNECTION: string
export const PROP_CHANNEL_DISPATCH_OPERATION_INTERFACES: string
export const PROP_CHANNEL_DISPATCH_OPERATION_POSSIBLE_HANDLERS: string
export const PROP_CHANNEL_INITIATOR_HANDLE: string
export const PROP_CHANNEL_INITIATOR_ID: string
export const PROP_CHANNEL_INTERFACES: string
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MODES: string
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMOUS_ID: string
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAN_RETRY_CAPTCHA: string
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR: string
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR_DETAILS: string
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_STATUS: string
export const PROP_CHANNEL_INTERFACE_CHAT_STATE_CHAT_STATES: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_CHANNELS: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_CHANNELS: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_HANDLES: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_IDS: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INVITATION_MESSAGE: string
export const PROP_CHANNEL_INTERFACE_CONFERENCE_ORIGINAL_CHANNELS: string
export const PROP_CHANNEL_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string
export const PROP_CHANNEL_INTERFACE_DTMF_DEFERRED_TONES: string
export const PROP_CHANNEL_INTERFACE_DTMF_INITIAL_TONES: string
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_METADATA: string
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME: string
export const PROP_CHANNEL_INTERFACE_GROUP_GROUP_FLAGS: string
export const PROP_CHANNEL_INTERFACE_GROUP_HANDLE_OWNERS: string
export const PROP_CHANNEL_INTERFACE_GROUP_LOCAL_PENDING_MEMBERS: string
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBERS: string
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBER_IDENTIFIERS: string
export const PROP_CHANNEL_INTERFACE_GROUP_REMOTE_PENDING_MEMBERS: string
export const PROP_CHANNEL_INTERFACE_GROUP_SELF_HANDLE: string
export const PROP_CHANNEL_INTERFACE_MESSAGES_DELIVERY_REPORTING_SUPPORT: string
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_PART_SUPPORT_FLAGS: string
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_TYPES: string
export const PROP_CHANNEL_INTERFACE_MESSAGES_PENDING_MESSAGES: string
export const PROP_CHANNEL_INTERFACE_MESSAGES_SUPPORTED_CONTENT_TYPES: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_ANONYMOUS: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CAN_UPDATE_CONFIGURATION: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CONFIGURATION_RETRIEVED: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_DESCRIPTION: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_INVITEONLY: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_LIMIT: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MODERATED: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MUTABLE_PROPERTIES: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_HINT: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_PROTECTED: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PERSISTENT: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PRIVATE: string
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_TITLE: string
export const PROP_CHANNEL_INTERFACE_ROOM_CREATION_TIMESTAMP: string
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR: string
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR_HANDLE: string
export const PROP_CHANNEL_INTERFACE_ROOM_ROOM_NAME: string
export const PROP_CHANNEL_INTERFACE_ROOM_SERVER: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AUTHORIZATION_IDENTITY: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AVAILABLE_MECHANISMS: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_CAN_TRY_AGAIN: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_REALM: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_USERNAME: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_HAS_INITIAL_DATA: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_MAY_SAVE_RESPONSE: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR_DETAILS: string
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_STATUS: string
export const PROP_CHANNEL_INTERFACE_SECURABLE_ENCRYPTED: string
export const PROP_CHANNEL_INTERFACE_SECURABLE_VERIFIED: string
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_CURRENT_SERVICE_POINT: string
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_INITIAL_SERVICE_POINT: string
export const PROP_CHANNEL_INTERFACE_SMS_FLASH: string
export const PROP_CHANNEL_INTERFACE_SMS_SMS_CHANNEL: string
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR: string
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR_HANDLE: string
export const PROP_CHANNEL_INTERFACE_SUBJECT_CAN_SET: string
export const PROP_CHANNEL_INTERFACE_SUBJECT_SUBJECT: string
export const PROP_CHANNEL_INTERFACE_SUBJECT_TIMESTAMP: string
export const PROP_CHANNEL_INTERFACE_TUBE_PARAMETERS: string
export const PROP_CHANNEL_INTERFACE_TUBE_STATE: string
export const PROP_CHANNEL_REQUESTED: string
export const PROP_CHANNEL_REQUEST_ACCOUNT: string
export const PROP_CHANNEL_REQUEST_HINTS: string
export const PROP_CHANNEL_REQUEST_INTERFACES: string
export const PROP_CHANNEL_REQUEST_PREFERRED_HANDLER: string
export const PROP_CHANNEL_REQUEST_REQUESTS: string
export const PROP_CHANNEL_REQUEST_USER_ACTION_TIME: string
export const PROP_CHANNEL_TARGET_HANDLE: string
export const PROP_CHANNEL_TARGET_HANDLE_TYPE: string
export const PROP_CHANNEL_TARGET_ID: string
export const PROP_CHANNEL_TYPE_CALL_CALL_FLAGS: string
export const PROP_CHANNEL_TYPE_CALL_CALL_MEMBERS: string
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE: string
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_DETAILS: string
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_REASON: string
export const PROP_CHANNEL_TYPE_CALL_CONTENTS: string
export const PROP_CHANNEL_TYPE_CALL_HARDWARE_STREAMING: string
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO: string
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO_NAME: string
export const PROP_CHANNEL_TYPE_CALL_INITIAL_TRANSPORT: string
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO: string
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO_NAME: string
export const PROP_CHANNEL_TYPE_CALL_MEMBER_IDENTIFIERS: string
export const PROP_CHANNEL_TYPE_CALL_MUTABLE_CONTENTS: string
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_AVAILABLE_SEARCH_KEYS: string
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_LIMIT: string
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SEARCH_STATE: string
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SERVER: string
export const PROP_CHANNEL_TYPE_DBUS_TUBE_DBUS_NAMES: string
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME: string
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SUPPORTED_ACCESS_CONTROLS: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_AVAILABLE_SOCKET_TYPES: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH_TYPE: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_TYPE: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DATE: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DESCRIPTION: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILENAME: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILE_COLLECTION: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_INITIAL_OFFSET: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_SIZE: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_STATE: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_TRANSFERRED_BYTES: string
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_URI: string
export const PROP_CHANNEL_TYPE_ROOM_LIST_SERVER: string
export const PROP_CHANNEL_TYPE_SERVER_AUTHENTICATION_AUTHENTICATION_METHOD: string
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_HOSTNAME: string
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_REFERENCE_IDENTITIES: string
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_SERVER_CERTIFICATE: string
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_IMMUTABLE_STREAMS: string
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_AUDIO: string
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_VIDEO: string
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE: string
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SUPPORTED_SOCKET_TYPES: string
export const PROP_CLIENT_APPROVER_APPROVER_CHANNEL_FILTER: string
export const PROP_CLIENT_HANDLER_BYPASS_APPROVAL: string
export const PROP_CLIENT_HANDLER_CAPABILITIES: string
export const PROP_CLIENT_HANDLER_HANDLED_CHANNELS: string
export const PROP_CLIENT_HANDLER_HANDLER_CHANNEL_FILTER: string
export const PROP_CLIENT_INTERFACES: string
export const PROP_CLIENT_OBSERVER_DELAY_APPROVERS: string
export const PROP_CLIENT_OBSERVER_OBSERVER_CHANNEL_FILTER: string
export const PROP_CLIENT_OBSERVER_RECOVER: string
export const PROP_CONNECTION_HAS_IMMORTAL_HANDLES: string
export const PROP_CONNECTION_INTERFACES: string
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MODES: string
export const PROP_CONNECTION_INTERFACE_ANONYMITY_SUPPORTED_ANONYMITY_MODES: string
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string
export const PROP_CONNECTION_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string
export const PROP_CONNECTION_INTERFACE_BALANCE_ACCOUNT_BALANCE: string
export const PROP_CONNECTION_INTERFACE_BALANCE_MANAGE_CREDIT_URI: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_IMSI: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_NATIONAL_CHARACTER_SET: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_REDUCED_CHARACTER_SET: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_SERVICE_CENTRE: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_VALIDITY_PERIOD: string
export const PROP_CONNECTION_INTERFACE_CELLULAR_OVERRIDE_MESSAGE_SERVICE_CENTRE: string
export const PROP_CONNECTION_INTERFACE_CONTACTS_CONTACT_ATTRIBUTE_INTERFACES: string
export const PROP_CONNECTION_INTERFACE_CONTACT_BLOCKING_CONTACT_BLOCKING_CAPABILITIES: string
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_DISJOINT_GROUPS: string
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUP_STORAGE: string
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_CONTACT_INFO_FLAGS: string
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_SUPPORTED_FIELDS: string
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CAN_CHANGE_CONTACT_LIST: string
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_PERSISTS: string
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_STATE: string
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_DOWNLOAD_AT_CONNECTION: string
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_REQUEST_USES_MESSAGE: string
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL: string
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL_TYPES: string
export const PROP_CONNECTION_INTERFACE_LOCATION_SUPPORTED_LOCATION_FEATURES: string
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_ADDRESS: string
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_NOTIFICATION_FLAGS: string
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAILS: string
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAIL_COUNT: string
export const PROP_CONNECTION_INTERFACE_POWER_SAVING_POWER_SAVING_ACTIVE: string
export const PROP_CONNECTION_INTERFACE_REQUESTS_CHANNELS: string
export const PROP_CONNECTION_INTERFACE_REQUESTS_REQUESTABLE_CHANNEL_CLASSES: string
export const PROP_CONNECTION_INTERFACE_SERVICE_POINT_KNOWN_SERVICE_POINTS: string
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_MAXIMUM_STATUS_MESSAGE_LENGTH: string
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_STATUSES: string
export const PROP_CONNECTION_MANAGER_INTERFACES: string
export const PROP_CONNECTION_MANAGER_PROTOCOLS: string
export const PROP_CONNECTION_SELF_HANDLE: string
export const PROP_CONNECTION_SELF_ID: string
export const PROP_CONNECTION_STATUS: string
export const PROP_DEBUG_ENABLED: string
export const PROP_MEDIA_STREAM_HANDLER_CREATED_LOCALLY: string
export const PROP_MEDIA_STREAM_HANDLER_NAT_TRAVERSAL: string
export const PROP_MEDIA_STREAM_HANDLER_RELAY_INFO: string
export const PROP_MEDIA_STREAM_HANDLER_STUN_SERVERS: string
export const PROP_PROTOCOL_AUTHENTICATION_TYPES: string
export const PROP_PROTOCOL_CONNECTION_INTERFACES: string
export const PROP_PROTOCOL_ENGLISH_NAME: string
export const PROP_PROTOCOL_ICON: string
export const PROP_PROTOCOL_INTERFACES: string
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_URI_SCHEMES: string
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_VCARD_FIELDS: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string
export const PROP_PROTOCOL_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string
export const PROP_PROTOCOL_INTERFACE_PRESENCE_STATUSES: string
export const PROP_PROTOCOL_PARAMETERS: string
export const PROP_PROTOCOL_REQUESTABLE_CHANNEL_CLASSES: string
export const PROP_PROTOCOL_VCARD_FIELD: string
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_GTALK_P2P: string
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_ICE_UDP: string
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_2009: string
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_8_5: string
export const TOKEN_CHANNEL_TYPE_CALL_AUDIO: string
export const TOKEN_CHANNEL_TYPE_CALL_GTALK_P2P: string
export const TOKEN_CHANNEL_TYPE_CALL_ICE: string
export const TOKEN_CHANNEL_TYPE_CALL_SHM: string
export const TOKEN_CHANNEL_TYPE_CALL_VIDEO: string
export const TOKEN_CHANNEL_TYPE_CALL_WLM_2009: string
export const TOKEN_CONNECTION_CONTACT_ID: string
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_ADDRESSES: string
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_URIS: string
export const TOKEN_CONNECTION_INTERFACE_ALIASING_ALIAS: string
export const TOKEN_CONNECTION_INTERFACE_AVATARS_TOKEN: string
export const TOKEN_CONNECTION_INTERFACE_CAPABILITIES_CAPS: string
export const TOKEN_CONNECTION_INTERFACE_CLIENT_TYPES_CLIENT_TYPES: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_BLOCKING_BLOCKED: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_CAPABILITIES_CAPABILITIES: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_INFO_INFO: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH_REQUEST: string
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_SUBSCRIBE: string
export const TOKEN_CONNECTION_INTERFACE_LOCATION_LOCATION: string
export const TOKEN_CONNECTION_INTERFACE_SIMPLE_PRESENCE_PRESENCE: string
/**
 * An invalid connection status used in #TpConnection to indicate that the
 * status has not yet been discovered.
 */
export const UNKNOWN_CONNECTION_STATUS: ConnectionStatus
/**
 * An invalid handle type (-1 cast to TpHandleType) used to represent an
 * unknown handle type.
 */
export const UNKNOWN_HANDLE_TYPE: HandleType
/**
 * The "user action time" used by methods like
 * tp_account_channel_request_new() to represent channel requests that are
 * not a result of user action.
 * 
 * See also #TpAccountChannelRequest:user-action-time,
 * tp_user_action_time_from_x11(), tp_user_action_time_should_present() and
 * %TP_USER_ACTION_TIME_CURRENT_TIME.
 */
export const USER_ACTION_TIME_NOT_USER_ACTION: number
/**
 * If a value for `key` in `asv` is present and boolean, return it,
 * and set *`valid` to %TRUE if `valid` is not %NULL.
 * 
 * Otherwise return %FALSE, and set *`valid` to %FALSE if `valid` is not %NULL.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetBoolean(asv: GLib.HashTable, key: string): [ /* returnType */ boolean, /* valid */ boolean ]
/**
 * If a value for `key` in `asv` is present and is of the desired type,
 * return it.
 * 
 * Otherwise return %NULL.
 * 
 * The returned value is not copied, and is only valid as long as the value
 * for `key` in `asv` is not removed or altered. Copy it, for instance with
 * g_boxed_copy(), if you need to keep it for longer.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 * @param type The type that the key's value should have, which must be derived  from %G_TYPE_BOXED
 */
export function asvGetBoxed(asv: GLib.HashTable, key: string, type: GObject.GType): object | null
/**
 * If a value for `key` in `asv` is present and is an array of bytes
 * (its GType is %DBUS_TYPE_G_UCHAR_ARRAY), return it.
 * 
 * Otherwise return %NULL.
 * 
 * The returned value is not copied, and is only valid as long as the value
 * for `key` in `asv` is not removed or altered. Copy it with
 * g_boxed_copy (DBUS_TYPE_G_UCHAR_ARRAY, ...) if you need to keep
 * it for longer.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetBytes(asv: GLib.HashTable, key: string): Uint8Array | null
/**
 * If a value for `key` in `asv` is present and has any numeric type used by
 * dbus-glib (guchar, gint, guint, gint64, guint64 or gdouble),
 * return it as a double, and if `valid` is not %NULL, set *`valid` to %TRUE.
 * 
 * Otherwise, return 0.0, and if `valid` is not %NULL, set *`valid` to %FALSE.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetDouble(asv: GLib.HashTable, key: string): [ /* returnType */ number, /* valid */ boolean ]
/**
 * If a value for `key` in `asv` is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a gint32, return it, and if `valid` is not %NULL, set *`valid` to
 * %TRUE.
 * 
 * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetInt32(asv: GLib.HashTable, key: string): [ /* returnType */ number, /* valid */ boolean ]
/**
 * If a value for `key` in `asv` is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a gint64, return it, and if `valid` is not %NULL, set *`valid` to
 * %TRUE.
 * 
 * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetInt64(asv: GLib.HashTable, key: string): [ /* returnType */ number, /* valid */ boolean ]
/**
 * If a value for `key` in `asv` is present and is an object path, return it.
 * 
 * Otherwise return %NULL.
 * 
 * The returned value is not copied, and is only valid as long as the value
 * for `key` in `asv` is not removed or altered. Copy it with g_strdup() if you
 * need to keep it for longer.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetObjectPath(asv: GLib.HashTable, key: string): string | null
/**
 * If a value for `key` in `asv` is present and is a string, return it.
 * 
 * Otherwise return %NULL.
 * 
 * The returned value is not copied, and is only valid as long as the value
 * for `key` in `asv` is not removed or altered. Copy it with g_strdup() if you
 * need to keep it for longer.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetString(asv: GLib.HashTable, key: string): string | null
/**
 * If a value for `key` in `asv` is present and is an array of strings (strv),
 * return it.
 * 
 * Otherwise return %NULL.
 * 
 * The returned value is not copied, and is only valid as long as the value
 * for `key` in `asv` is not removed or altered. Copy it with g_strdupv() if you
 * need to keep it for longer.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetStrv(asv: GLib.HashTable, key: string): string[] | null
/**
 * If a value for `key` in `asv` is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a guint32, return it, and if `valid` is not %NULL, set *`valid` to
 * %TRUE.
 * 
 * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetUint32(asv: GLib.HashTable, key: string): [ /* returnType */ number, /* valid */ boolean ]
/**
 * If a value for `key` in `asv` is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and is non-negative,
 * return it, and if `valid` is not %NULL, set *`valid` to %TRUE.
 * 
 * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
 * @param asv A GHashTable where the keys are strings and the values are GValues
 * @param key The key to look up
 */
export function asvGetUint64(asv: GLib.HashTable, key: string): [ /* returnType */ number, /* valid */ boolean ]
/**
 * Check that the given string is a valid D-Bus bus name of an appropriate
 * type.
 * @param name a possible bus name
 * @param allowTypes some combination of %TP_DBUS_NAME_TYPE_UNIQUE,  %TP_DBUS_NAME_TYPE_WELL_KNOWN or %TP_DBUS_NAME_TYPE_BUS_DAEMON  (often this will be %TP_DBUS_NAME_TYPE_NOT_BUS_DAEMON or  %TP_DBUS_NAME_TYPE_ANY)
 */
export function dbusCheckValidBusName(name: string, allowTypes: DBusNameType): boolean
/**
 * Check that the given string is a valid D-Bus interface name. This is
 * also appropriate to use to check for valid error names.
 * 
 * Since GIO 2.26, g_dbus_is_interface_name() should always return the same
 * thing, although the GLib function does not raise an error explaining why
 * the interface name is incorrect.
 * @param name a possible interface name
 */
export function dbusCheckValidInterfaceName(name: string): boolean
/**
 * Check that the given string is a valid D-Bus member (method or signal) name.
 * 
 * Since GIO 2.26, g_dbus_is_member_name() should always return the same
 * thing, although the GLib function does not raise an error explaining why
 * the interface name is incorrect.
 * @param name a possible member name
 */
export function dbusCheckValidMemberName(name: string): boolean
/**
 * Check that the given string is a valid D-Bus object path. Since GLib 2.24,
 * g_variant_is_object_path() should always return the same thing as this
 * function, although it doesn't provide an error explaining why the object
 * path is invalid.
 * @param path a possible object path
 */
export function dbusCheckValidObjectPath(path: string): boolean
export function dbusErrorsQuark(): GLib.Quark
/**
 * Initialize the class `cls` to use the D-Bus Properties mixin.
 * The given struct member, of size sizeof(TpDBusPropertiesMixinClass),
 * will be used to store property implementation information.
 * 
 * Each property and each interface must have been declared as a member of
 * a GInterface implemented by `cls,` using
 * tp_svc_interface_set_dbus_properties_info().
 * 
 * Before calling this function, the array `interfaces` must have been
 * placed in the #TpDBusPropertiesMixinClass structure; if it would be empty,
 * it may instead be %NULL.
 * 
 * This function should be called from the class_init callback in such a way
 * that it will only be called once, even if the class is subclassed.
 * 
 * Changed in 0.7.9: TpDBusPropertiesMixinClass::interfaces may now be %NULL,
 * which means that only interfaces whose properties are set up using
 * tp_dbus_properties_mixin_implement_interface() will be used.
 * 
 * Changed in 0.7.15: `offset` may now be 0, in which case the
 * #TpDBusPropertiesMixinClass can be omitted from `cls`.  It is treated as if
 * it were present, but with all fields (including
 * TpDBusPropertiesMixinClass::interfaces) being %NULL, so only interfaces
 * whose properties are set using
 * tp_dbus_properties_mixin_implement_interface() will be used.
 * @param cls a subclass of #GObjectClass
 * @param offset the offset within `cls` of a TpDBusPropertiesMixinClass structure
 */
export function dbusPropertiesMixinClassInit(cls: GObject.ObjectClass, offset: number): void
/**
 * Get all the properties of a particular interface. This implementation
 * never returns an error: it will return an empty map if the interface
 * is unknown.
 * @param self an object with this mixin
 * @param interfaceName a D-Bus interface name
 */
export function dbusPropertiesMixinDupAll(self: GObject.Object, interfaceName: string): GLib.HashTable
/**
 * Emits the PropertiesChanged signal for the provided properties. Depending on
 * the EmitsChangedSignal annotations in the introspection XML, either the new
 * value of the property will be included in the signal, or merely the fact
 * that the property has changed.
 * 
 * For example, the MPRIS specification defines a TrackList interface with two
 * properties, one of which is annotated with EmitsChangedSignal=true and one
 * annotated with EmitsChangedSignal=invalidates. The following call would
 * include the new value of CanEditTracks and list Tracks as invalidated:
 * 
 * |[
 *    const gchar *properties[] = { "CanEditTracks", "Tracks", NULL };
 * 
 *    tp_dbus_properties_mixin_emit_properties_changed (G_OBJECT (self),
 *        "org.mpris.MediaPlayer2.TrackList", properties);
 * ```
 * 
 * 
 * It is an error to pass a property to this
 * function if the property is annotated with EmitsChangedSignal=false, or is
 * unannotated.
 * @param object an object which uses the D-Bus properties mixin
 * @param interfaceName the interface on which properties have changed
 * @param properties a %NULL-terminated array of (unqualified)  property names whose values have changed.
 */
export function dbusPropertiesMixinEmitPropertiesChanged(object: GObject.Object, interfaceName: string, properties: string | null): void
/**
 * Initialize `value` with the type of the property `property_name` on
 * `interface_name,` and write the value of that property into it as if
 * by calling the D-Bus method org.freedesktop.DBus.Properties.Get.
 * 
 * If Get would return a D-Bus error, `value` remains unset and `error`
 * is filled in instead.
 * @param self an object with this mixin
 * @param interfaceName a D-Bus interface name
 * @param propertyName a D-Bus property name
 * @param value an unset GValue (initialized to all zeroes)
 */
export function dbusPropertiesMixinGet(self: GObject.Object, interfaceName: string, propertyName: string, value: any): boolean
/**
 * An implementation of #TpDBusPropertiesMixinGetter which assumes that
 * the `getter_data` is the name of a readable #GObject property of an
 * appropriate type, and uses it for the value of the D-Bus property.
 * @param object The exported object with the properties
 * @param iface A quark representing the D-Bus interface name
 * @param name A quark representing the D-Bus property name
 * @param value A GValue pre-initialized to the right type, into which to put  the value
 * @param getterData The getter_data from the #TpDBusPropertiesMixinPropImpl,  which must be a string containing the GObject property's name
 */
export function dbusPropertiesMixinGetterGobjectProperties(object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: any, getterData: object | null): void
/**
 * Declare that the DBus.Properties interface represented by `g_iface`
 * is implemented using this mixin.
 * @param gIface a pointer to a #TpSvcDBusPropertiesClass structure
 * @param ifaceData ignored
 */
export function dbusPropertiesMixinIfaceInit(gIface: object | null, ifaceData: object | null): void
/**
 * Sets a property to the value specified by `value,` as if by
 * calling the D-Bus method org.freedesktop.DBus.Properties.Set.
 * 
 * If Set would return a D-Bus error, sets `error` and returns %FALSE
 * @param self an object with this mixin
 * @param interfaceName a D-Bus interface name
 * @param propertyName a D-Bus property name
 * @param value a GValue containing the new value for this property.
 */
export function dbusPropertiesMixinSet(self: GObject.Object, interfaceName: string, propertyName: string, value: any): boolean
/**
 * An implementation of #TpDBusPropertiesMixinSetter which assumes that the
 * `setter_data` is the name of a writable #GObject property of an appropriate
 * type, and sets that property to the given value.
 * @param object The exported object with the properties
 * @param iface A quark representing the D-Bus interface name
 * @param name A quark representing the D-Bus property name
 * @param value The new value for the property
 * @param setterData The setter_data from the #TpDBusPropertiesMixinPropImpl,  which must be a string containing the GObject property's name
 */
export function dbusPropertiesMixinSetterGobjectProperties(object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: any, setterData: object | null): boolean
/**
 * Open the given file for writing and duplicate its file descriptor to
 * be used for stdout and stderr. This has the effect of closing the previous
 * stdout and stderr, and sending all messages that would have gone there
 * to the given file instead.
 * 
 * By default the file is truncated and hence overwritten each time the
 * process is executed.
 * Since version 0.7.14, if the filename is prefixed with '+' then the
 * file is not truncated and output is added at the end of the file.
 * 
 * Passing %NULL to this function is guaranteed to have no effect. This is
 * so you can call it with the recommended usage
 * <literal>tp_debug_divert_messages (g_getenv ("MYAPP_LOGFILE"))</literal>
 * and it won't do anything if the environment variable is not set.
 * 
 * This function still works if telepathy-glib was compiled without debug
 * support.
 * @param filename A file to which to divert stdout and stderr, or %NULL to  do nothing
 */
export function debugDivertMessages(filename: string): void
/**
 * Set the debug flags indicated by `flags_string,` in addition to any already
 * set.
 * 
 * The parsing matches that of g_parse_debug_string().
 * 
 * If telepathy-glib was compiled with --disable-debug (not recommended),
 * this function has no practical effect, since the debug messages it would
 * enable were removed at compile time.
 * @param flagsString The flags to set, comma-separated. If %NULL or empty,  no additional flags are set.
 */
export function debugSetFlags(flagsString: string): void
/**
 * Used to enable persistent operation of the connection manager process for
 * debugging purposes.
 * @param persistent TRUE prevents the connection manager mainloop from exiting,              FALSE enables exiting if there are no connections              (the default behavior).
 */
export function debugSetPersistent(persistent: boolean): void
/**
 * A #GLogFunc that prepends the UTC time (currently in ISO 8601 format,
 * with microsecond resolution) to the message, then calls
 * g_log_default_handler.
 * 
 * Intended usage is:
 * 
 * <informalexample><programlisting>if (g_getenv ("MYPROG_TIMING") != NULL)
 *   g_log_set_default_handler (tp_debug_timestamped_log_handler, NULL);
 * </programlisting></informalexample>
 * 
 * If telepathy-glib was compiled with --disable-debug (not recommended),
 * this function is equivalent to g_log_default_handler().
 * 
 * Changed in 0.9.0: timestamps are now printed in UTC, in
 * RFC-3339 format. Previously, they were printed in local time, in a
 * format similar to RFC-3339.
 * @param logDomain the message's log domain
 * @param logLevel the log level of the message
 * @param message the message to process
 * @param ignored not used
 */
export function debugTimestampedLogHandler(logDomain: string, logLevel: GLib.LogLevelFlags, message: string, ignored: object | null): void
/**
 * <!-- -->
 * @param error a member of the #TpError enum.
 */
export function errorGetDbusName(error: Error): string
/**
 * Return the error domain quark for #TpError.
 */
export function errorQuark(): GLib.Quark
export function errorsDisconnectedQuark(): GLib.Quark
export function errorsRemovedFromGroupQuark(): GLib.Quark
/**
 * Escape an arbitrary string so it follows the rules for a C identifier,
 * and hence an object path component, interface element component,
 * bus name component or member name in D-Bus.
 * 
 * Unlike g_strcanon this is a reversible encoding, so it preserves
 * distinctness.
 * 
 * The escaping consists of replacing all non-alphanumerics, and the first
 * character if it's a digit, with an underscore and two lower-case hex
 * digits:
 * 
 *    "0123abc_xyz\x01\xff" -> _30123abc_5fxyz_01_ff
 * 
 * i.e. similar to URI encoding, but with _ taking the role of %, and a
 * smaller allowed set. As a special case, "" is escaped to "_" (just for
 * completeness, really).
 * @param name The string to be escaped
 */
export function escapeAsIdentifier(name: string): string
/**
 * Return a handle for the given string, creating one if necessary. The string
 * is normalized, if possible.
 * @param self A handle repository implementation
 * @param id A string whose handle is required
 * @param context User data to be passed to the normalization callback
 */
export function handleEnsure(self: HandleRepoIface, id: string, context: object | null): Handle
/**
 * If the given handle type is valid, return %TRUE. If not, set `error`
 * and return %FALSE.
 * @param type A handle type, valid or not, to be checked
 */
export function handleTypeIsValid(type: HandleType): boolean
/**
 * <!---->
 * @param type A handle type, which need not be valid
 */
export function handleTypeToString(type: HandleType): string
export function ifaceQuarkAccount(): GLib.Quark
export function ifaceQuarkAccountInterfaceAddressing(): GLib.Quark
export function ifaceQuarkAccountInterfaceAvatar(): GLib.Quark
export function ifaceQuarkAccountInterfaceStorage(): GLib.Quark
export function ifaceQuarkAccountManager(): GLib.Quark
export function ifaceQuarkAuthenticationTlsCertificate(): GLib.Quark
export function ifaceQuarkCallContent(): GLib.Quark
export function ifaceQuarkCallContentInterfaceAudioControl(): GLib.Quark
export function ifaceQuarkCallContentInterfaceDtmf(): GLib.Quark
export function ifaceQuarkCallContentInterfaceMedia(): GLib.Quark
export function ifaceQuarkCallContentInterfaceVideoControl(): GLib.Quark
export function ifaceQuarkCallContentMediaDescription(): GLib.Quark
export function ifaceQuarkCallContentMediaDescriptionInterfaceRtcpExtendedReports(): GLib.Quark
export function ifaceQuarkCallContentMediaDescriptionInterfaceRtcpFeedback(): GLib.Quark
export function ifaceQuarkCallContentMediaDescriptionInterfaceRtpHeaderExtensions(): GLib.Quark
export function ifaceQuarkCallStream(): GLib.Quark
export function ifaceQuarkCallStreamEndpoint(): GLib.Quark
export function ifaceQuarkCallStreamInterfaceMedia(): GLib.Quark
export function ifaceQuarkChannel(): GLib.Quark
export function ifaceQuarkChannelDispatchOperation(): GLib.Quark
export function ifaceQuarkChannelDispatcher(): GLib.Quark
export function ifaceQuarkChannelDispatcherInterfaceMessages1(): GLib.Quark
export function ifaceQuarkChannelDispatcherInterfaceOperationList(): GLib.Quark
export function ifaceQuarkChannelInterfaceAnonymity(): GLib.Quark
export function ifaceQuarkChannelInterfaceCallState(): GLib.Quark
export function ifaceQuarkChannelInterfaceCaptchaAuthentication(): GLib.Quark
export function ifaceQuarkChannelInterfaceChatState(): GLib.Quark
export function ifaceQuarkChannelInterfaceConference(): GLib.Quark
export function ifaceQuarkChannelInterfaceDestroyable(): GLib.Quark
export function ifaceQuarkChannelInterfaceDtmf(): GLib.Quark
export function ifaceQuarkChannelInterfaceFileTransferMetadata(): GLib.Quark
export function ifaceQuarkChannelInterfaceGroup(): GLib.Quark
export function ifaceQuarkChannelInterfaceHold(): GLib.Quark
export function ifaceQuarkChannelInterfaceMediaSignalling(): GLib.Quark
export function ifaceQuarkChannelInterfaceMessages(): GLib.Quark
export function ifaceQuarkChannelInterfacePassword(): GLib.Quark
export function ifaceQuarkChannelInterfaceRoom(): GLib.Quark
export function ifaceQuarkChannelInterfaceRoomConfig(): GLib.Quark
export function ifaceQuarkChannelInterfaceSaslAuthentication(): GLib.Quark
export function ifaceQuarkChannelInterfaceSecurable(): GLib.Quark
export function ifaceQuarkChannelInterfaceServicePoint(): GLib.Quark
export function ifaceQuarkChannelInterfaceSms(): GLib.Quark
export function ifaceQuarkChannelInterfaceSubject(): GLib.Quark
export function ifaceQuarkChannelInterfaceTube(): GLib.Quark
export function ifaceQuarkChannelRequest(): GLib.Quark
export function ifaceQuarkChannelTypeCall(): GLib.Quark
export function ifaceQuarkChannelTypeContactList(): GLib.Quark
export function ifaceQuarkChannelTypeContactSearch(): GLib.Quark
export function ifaceQuarkChannelTypeDbusTube(): GLib.Quark
export function ifaceQuarkChannelTypeFileTransfer(): GLib.Quark
export function ifaceQuarkChannelTypeRoomList(): GLib.Quark
export function ifaceQuarkChannelTypeServerAuthentication(): GLib.Quark
export function ifaceQuarkChannelTypeServerTlsConnection(): GLib.Quark
export function ifaceQuarkChannelTypeStreamTube(): GLib.Quark
export function ifaceQuarkChannelTypeStreamedMedia(): GLib.Quark
export function ifaceQuarkChannelTypeText(): GLib.Quark
export function ifaceQuarkChannelTypeTubes(): GLib.Quark
export function ifaceQuarkClient(): GLib.Quark
export function ifaceQuarkClientApprover(): GLib.Quark
export function ifaceQuarkClientHandler(): GLib.Quark
export function ifaceQuarkClientInterfaceRequests(): GLib.Quark
export function ifaceQuarkClientObserver(): GLib.Quark
export function ifaceQuarkConnection(): GLib.Quark
export function ifaceQuarkConnectionInterfaceAddressing(): GLib.Quark
export function ifaceQuarkConnectionInterfaceAliasing(): GLib.Quark
export function ifaceQuarkConnectionInterfaceAnonymity(): GLib.Quark
export function ifaceQuarkConnectionInterfaceAvatars(): GLib.Quark
export function ifaceQuarkConnectionInterfaceBalance(): GLib.Quark
export function ifaceQuarkConnectionInterfaceCapabilities(): GLib.Quark
export function ifaceQuarkConnectionInterfaceCellular(): GLib.Quark
export function ifaceQuarkConnectionInterfaceClientTypes(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContactBlocking(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContactCapabilities(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContactGroups(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContactInfo(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContactList(): GLib.Quark
export function ifaceQuarkConnectionInterfaceContacts(): GLib.Quark
export function ifaceQuarkConnectionInterfaceLocation(): GLib.Quark
export function ifaceQuarkConnectionInterfaceMailNotification(): GLib.Quark
export function ifaceQuarkConnectionInterfacePowerSaving(): GLib.Quark
export function ifaceQuarkConnectionInterfacePresence(): GLib.Quark
export function ifaceQuarkConnectionInterfaceRenaming(): GLib.Quark
export function ifaceQuarkConnectionInterfaceRequests(): GLib.Quark
export function ifaceQuarkConnectionInterfaceServicePoint(): GLib.Quark
export function ifaceQuarkConnectionInterfaceSidecars1(): GLib.Quark
export function ifaceQuarkConnectionInterfaceSimplePresence(): GLib.Quark
export function ifaceQuarkConnectionManager(): GLib.Quark
export function ifaceQuarkDbusDaemon(): GLib.Quark
export function ifaceQuarkDbusIntrospectable(): GLib.Quark
export function ifaceQuarkDbusPeer(): GLib.Quark
export function ifaceQuarkDbusProperties(): GLib.Quark
export function ifaceQuarkDebug(): GLib.Quark
export function ifaceQuarkMediaSessionHandler(): GLib.Quark
export function ifaceQuarkMediaStreamHandler(): GLib.Quark
export function ifaceQuarkPropertiesInterface(): GLib.Quark
export function ifaceQuarkProtocol(): GLib.Quark
export function ifaceQuarkProtocolInterfaceAddressing(): GLib.Quark
export function ifaceQuarkProtocolInterfaceAvatars(): GLib.Quark
export function ifaceQuarkProtocolInterfacePresence(): GLib.Quark
/**
 * <!--Returns: says it all-->
 * @param array An array of guint
 */
export function intsetFromArray(array: number[]): Intset
/**
 * List the available (running or installed) connection managers. Call the
 * callback when done.
 * 
 * Since 0.7.26, this function will wait for each #TpConnectionManager
 * to be ready, so all connection managers passed to `callback` will have
 * their %TP_CONNECTION_MANAGER_FEATURE_CORE feature prepared, unless an error
 * occurred while launching that connection manager.
 * @param busDaemon proxy for the D-Bus daemon
 * @param callback callback to be called when listing the CMs  succeeds or fails; not called if the `weak_object` goes away
 * @param weakObject if not %NULL, will be weakly  referenced; the callback will not be called, and the call will be  cancelled, if the object has vanished
 */
export function listConnectionManagers(busDaemon: DBusDaemon, callback: ConnectionManagerListCb, weakObject: GObject.Object | null): void
/**
 * List the available (running or installed) connection managers,
 * asynchronously, and wait for their %TP_CONNECTION_MANAGER_FEATURE_CORE
 * feature to be ready.
 * @param dbusDaemon a #TpDBusDaemon, or %NULL to use  tp_dbus_daemon_dup()
 * @param callback a callback to call with a list of CMs
 */
export function listConnectionManagersAsync(dbusDaemon: DBusDaemon | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finish listing the available connection managers.
 * 
 * Free the list after use, for instance with
 * <literal>g_list_free_full (list, g_object_unref)</literal>.
 * @param result the result of tp_list_connection_managers_async()
 */
export function listConnectionManagersFinish(result: Gio.AsyncResult): ConnectionManager[]
/**
 * List the bus names of all the connections that currently exist, together
 * with the connection manager name and the protocol name for each connection.
 * Call the callback when done.
 * 
 * The bus names passed to the callback can be used to construct #TpConnection
 * objects for any connections that are of interest.
 * @param busDaemon proxy for the D-Bus daemon
 * @param callback callback to be called when listing the connections succeeds or   fails; not called if the D-Bus connection fails completely or if the   `weak_object` goes away
 * @param weakObject if not %NULL, will be weakly referenced; the callback will   not be called if the object has vanished
 */
export function listConnectionNames(busDaemon: DBusDaemon, callback: ConnectionNameListCb, weakObject: GObject.Object | null): void
/**
 * Create a new #GSimpleAsyncResult with no operation result, and call
 * g_simple_async_result_complete_in_idle() on it.
 * 
 * This is like a successful version of g_simple_async_report_error_in_idle(),
 * suitable for asynchronous functions that (conceptually) either succeed and
 * return nothing, or raise an error, such as tp_proxy_prepare_async().
 * 
 * The corresponding finish function should not call a function that attempts
 * to get a result, such as g_simple_async_result_get_op_res_gpointer().
 * @param source the source object
 * @param callback the callback
 * @param sourceTag the source tag for the #GSimpleAsyncResult
 */
export function simpleAsyncReportSuccessInIdle(source: GObject.Object | null, callback: Gio.AsyncReadyCallback | null, sourceTag: object | null): void
/**
 * Declare that `g_interface` implements the given D-Bus interface, with the
 * given properties. This may only be called once per GInterface, usually from
 * a section of its base_init function that only runs once.
 * 
 * This is typically only used within generated code; there is normally no
 * reason to call it manually.
 * @param gInterface The #GType of a service interface
 * @param info an interface description
 */
export function svcInterfaceSetDbusPropertiesInfo(gInterface: GObject.GType, info: DBusPropertiesMixinIfaceInfo): void
/**
 * Convert an X11 timestamp into a user action time as used in Telepathy.
 * 
 * This also works for the timestamps used by GDK 2, GDK 3 and Clutter 1.0;
 * it may or may not work with other toolkits or versions.
 * @param x11Time an X11 timestamp, or 0 to indicate the current time
 */
export function userActionTimeFromX11(x11Time: number): number
/**
 * Interpret a Telepathy user action time to decide whether a Handler should
 * attempt to gain focus. If %TRUE is returned, it would be appropriate to
 * call gtk_window_present_with_time() using `x1`1_time as input, for instance.
 * 
 * `x1`1_time is used to return a timestamp in the right format for X11,
 * GDK 2, GDK 3 and Clutter 1.0; it may or may not work with other
 * toolkits or versions.
 * @param userActionTime the Telepathy user action time
 */
export function userActionTimeShouldPresent(userActionTime: number): [ /* returnType */ boolean, /* x11Time */ number ]
/**
 * Validate that the provided string is valid UTF8. If not,
 * replace all invalid bytes with unicode replacement
 * character (U+FFFD).
 * 
 * This method is a verbatim copy of glib's internal
 * _g_utf8_make_valid<!-- -->() function, and will be deprecated as
 * soon as the glib one becomes public.
 * @param name string to coerce into UTF8
 */
export function utf8MakeValid(name: string): string
/**
 * Free `va`. This is exactly the same as g_value_array_free(), but does not
 * provoke deprecation warnings from GLib when used in conjunction with
 * tp_value_array_build() and tp_value_array_unpack().
 * @param va a #GValueArray
 */
export function valueArrayFree(va: GObject.ValueArray): void
/**
 * Called when a client asked us to delegate `channel` to another Handler.
 * When this function is called you are no longer handling `channel`.
 * @callback 
 * @param request a #TpAccountChannelRequest instance
 * @param channel a #TpChannel
 */
export interface AccountChannelRequestDelegatedChannelCb {
    (request: AccountChannelRequest, channel: Channel): void
}
/**
 * Signature of the implementation of the AddDispatchOperation method.
 * 
 * This function must call either tp_add_dispatch_operation_context_accept(),
 * tp_add_dispatch_operation_context_delay() or
 * tp_add_dispatch_operation_context_fail() on `context` before it returns.
 * 
 * The implementation can then use
 * tp_channel_dispatch_operation_handle_with_async() to approve handling of the
 * channels, or tp_channel_dispatch_operation_claim_async() to take
 * responsibility for handling or closing them".
 * @callback 
 * @param client a #TpBaseClient instance
 * @param account a #TpAccount with %TP_ACCOUNT_FEATURE_CORE, and any other  features added via tp_base_client_add_account_features() or  tp_simple_client_factory_add_account_features(), prepared if  possible
 * @param connection a #TpConnection with %TP_CONNECTION_FEATURE_CORE,  and any other features added via tp_base_client_add_connection_features(),  or tp_simple_client_factory_add_connection_features(), prepared if possible
 * @param channels a #GList of #TpChannel,  each with %TP_CHANNEL_FEATURE_CORE, and any other features added via  tp_base_client_add_channel_features() or  tp_simple_client_factory_add_channel_features(), prepared if possible
 * @param dispatchOperation a #TpChannelDispatchOperation having %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE prepared if possible
 * @param context a #TpObserveChannelsContext representing the context of this  D-Bus call
 */
export interface BaseClientClassAddDispatchOperationImpl {
    (client: BaseClient, account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation, context: AddDispatchOperationContext): void
}
/**
 * Signature of the implementation of the HandleChannels method.
 * 
 * This function must call either tp_handle_channels_context_accept(),
 * tp_handle_channels_context_delay() or tp_handle_channels_context_fail()
 * on `context` before it returns.
 * @callback 
 * @param client a #TpBaseClient instance
 * @param account a #TpAccount with %TP_ACCOUNT_FEATURE_CORE, and any other  features added via tp_base_client_add_account_features() or  tp_simple_client_factory_add_account_features(), prepared if  possible
 * @param connection a #TpConnection with %TP_CONNECTION_FEATURE_CORE,  and any other features added via tp_base_client_add_connection_features(),  or tp_simple_client_factory_add_connection_features(), prepared if possible
 * @param channels a #GList of #TpChannel,  each with %TP_CHANNEL_FEATURE_CORE, and any other features added via  tp_base_client_add_channel_features() or  tp_simple_client_factory_add_channel_features(), prepared if possible
 * @param requestsSatisfied a #GList of  #TpChannelRequest having their object-path defined but are not guaranteed  to be prepared.
 * @param userActionTime the time at which user action occurred, or one of the  special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME  (see #TpAccountChannelRequest:user-action-time for details)
 * @param context a #TpHandleChannelsContext representing the context of this  D-Bus call
 */
export interface BaseClientClassHandleChannelsImpl {
    (client: BaseClient, account: Account, connection: Connection, channels: Channel[], requestsSatisfied: ChannelRequest[], userActionTime: number, context: HandleChannelsContext): void
}
/**
 * Signature of the implementation of the ObserveChannels method.
 * 
 * This function must call either tp_observe_channels_context_accept(),
 * tp_observe_channels_context_delay() or tp_observe_channels_context_fail()
 * on `context` before it returns.
 * @callback 
 * @param client a #TpBaseClient instance
 * @param account a #TpAccount with %TP_ACCOUNT_FEATURE_CORE, and any other  features added via tp_base_client_add_account_features() or  tp_simple_client_factory_add_account_features(), prepared if  possible
 * @param connection a #TpConnection with %TP_CONNECTION_FEATURE_CORE,  and any other features added via tp_base_client_add_connection_features(),  or tp_simple_client_factory_add_connection_features(), prepared if possible
 * @param channels a #GList of #TpChannel,  each with %TP_CHANNEL_FEATURE_CORE, and any other features added via  tp_base_client_add_channel_features() or  tp_simple_client_factory_add_channel_features(), prepared if possible
 * @param dispatchOperation a #TpChannelDispatchOperation or %NULL;  the dispatch_operation is not guaranteed to be prepared
 * @param requests a #GList of  #TpChannelRequest having their object-path defined but are not guaranteed  to be prepared.
 * @param context a #TpObserveChannelsContext representing the context of this  D-Bus call
 */
export interface BaseClientClassObserveChannelsImpl {
    (client: BaseClient, account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation | null, requests: ChannelRequest[], context: ObserveChannelsContext): void
}
/**
 * Called when a client asked us to delegate `channels` to another Handler.
 * When this function is called `client` is not longer handling `channels`.
 * @callback 
 * @param client a #TpBaseClient instance
 * @param channels a #GPtrArray of #TpChannel
 */
export interface BaseClientDelegatedChannelsCb {
    (client: BaseClient, channels: Channel[]): void
}
/**
 * Signature of the `get_unique_connection_name` virtual method
 * on #TpBaseConnection.
 * @callback 
 * @param self The implementation, a subclass of TpBaseConnection
 */
export interface BaseConnectionGetUniqueConnectionNameImpl {
    (self: BaseConnection): string
}
/**
 * Signature of a virtual method on #TpBaseConnection that takes no
 * additional parameters and returns nothing.
 * @callback 
 * @param self The connection object
 */
export interface BaseConnectionProc {
    (self: BaseConnection): void
}
/**
 * Signature of an implementation of the start_connecting method
 * of #TpBaseConnection.
 * 
 * On entry, the implementation may assume that it is in state NEW.
 * 
 * If %TRUE is returned, the Connect D-Bus method succeeds; the
 * implementation must either have already set the status to CONNECTED by
 * calling tp_base_connection_change_status(), or have arranged for a
 * status change to either state DISCONNECTED or CONNECTED to be signalled by
 * calling tp_base_connection_change_status() at some later time.
 * If the status is still NEW after returning %TRUE, #TpBaseConnection will
 * automatically change it to CONNECTING for reason REQUESTED.
 * 
 * If %FALSE is returned, the error will be raised from Connect as an
 * exception. If the status is not DISCONNECTED after %FALSE is returned,
 * #TpBaseConnection will automatically change it to DISCONNECTED
 * with a reason appropriate to the error; NetworkError results in
 * NETWORK_ERROR, PermissionDenied results in AUTHENTICATION_FAILED, and all
 * other errors currently result in NONE_SPECIFIED.
 * 
 * All except the simplest connection managers are expected to implement this
 * asynchronously, returning %TRUE in most cases and changing the status
 * to CONNECTED or DISCONNECTED later.
 * @callback 
 * @param self The connection object
 */
export interface BaseConnectionStartConnectingImpl {
    (self: BaseConnection): boolean
}
/**
 * Signature of a callback passed to tp_channel_call_when_ready(), which
 * will be called exactly once, when the channel becomes ready or
 * invalid (whichever happens first)
 * @callback 
 * @param channel the channel (which may be in the middle of being disposed,  if error is non-%NULL, error->domain is TP_DBUS_ERRORS and error->code is  TP_DBUS_ERROR_PROXY_UNREFERENCED)
 * @param error %NULL if the channel is ready for use, or the error with which  it was invalidated if it is now invalid
 */
export interface ChannelWhenReadyCb {
    (channel: Channel, error: GLib.Error): void
}
/**
 * Signature of a callback used to receive the result of
 * tp_connection_get_contacts_by_handle().
 * 
 * If an unrecoverable error occurs (for instance, if `connection`
 * becomes disconnected) the whole operation fails, and no contacts or
 * invalid handles are returned.
 * 
 * If some or even all of the `handles` passed to
 * tp_connection_get_contacts_by_handle() were not valid, this is not
 * considered to be a failure. `error` will be %NULL in this situation,
 * `contacts` will contain contact objects for those handles that were
 * valid (possibly none of them), and `invalid` will contain the handles
 * that were not valid.
 * @callback 
 * @param connection The connection
 * @param contacts An array of `n_contacts` TpContact  objects (this callback is not given a reference to any of these objects,  and must call g_object_ref() on any that it will keep), or %NULL on  unrecoverable errors
 * @param failed An array of `n_failed` handles that were  passed to tp_connection_get_contacts_by_handle() but turned out to be  invalid (or on unrecoverable errors, all the handles that were given)
 * @param error %NULL on success, or an unrecoverable error that caused everything  to fail
 * @param weakObject the `weak_object` that was passed to  tp_connection_get_contacts_by_handle()
 */
export interface ConnectionContactsByHandleCb {
    (connection: Connection, contacts: Contact[], failed: Handle[], error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of a callback used to receive the result of
 * tp_connection_get_contacts_by_id().
 * 
 * `requested_ids` contains the IDs that were converted to handles successfully.
 * The normalized form of requested_ids[i] is
 * tp_contact_get_identifier (contacts[i]).
 * 
 * If some or even all of the `ids` passed to
 * tp_connection_get_contacts_by_id() were not valid, this is not
 * considered to be a fatal error. `error` will be %NULL in this situation,
 * `contacts` will contain contact objects for those IDs that were
 * valid (it may be empty), and `failed_id_errors` will map the IDs
 * that were not valid to a corresponding #GError (if the connection manager
 * complies with the Telepathy spec, it will have domain %TP_ERROR and code
 * %TP_ERROR_INVALID_HANDLE).
 * 
 * If an unrecoverable error occurs (for instance, if `connection`
 * becomes disconnected) the whole operation fails, and no contacts
 * or requested IDs are returned. `failed_id_errors` will contain all the IDs
 * that were requested, mapped to a corresponding #GError (either one
 * indicating that the ID was invalid, if that was determined before the
 * fatal error occurred, or a copy of `error)`.
 * @callback 
 * @param connection The connection
 * @param contacts An array of `n_contacts` TpContact  objects (this callback is  not given a reference to any of these objects, and must call  g_object_ref() on any that it will keep), or %NULL on unrecoverable errors
 * @param requestedIds An array of `n_contacts` valid IDs  (JIDs, SIP URIs etc.)  that were passed to tp_connection_get_contacts_by_id(), in an order  corresponding to `contacts,` or %NULL on unrecoverable errors
 * @param failedIdErrors A hash table in which  the keys are IDs and the values are errors (#GError)
 * @param error %NULL on success, or an unrecoverable error that caused everything  to fail
 * @param weakObject the `weak_object` that was passed to  tp_connection_get_contacts_by_id()
 */
export interface ConnectionContactsByIdCb {
    (connection: Connection, contacts: Contact[], requestedIds: string[], failedIdErrors: GLib.HashTable, error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of the callback called when tp_connection_hold_handles() succeeds
 * or fails.
 * 
 * On success, the caller has a reference to each handle in `handles`.
 * 
 * Since telepathy-glib version 0.13.8,
 * the handles will remain valid until `connection` becomes invalid
 * (signalled by #TpProxy::invalidated). In earlier versions, they could be
 * released with tp_connection_unref_handles().
 * 
 * For convenience, the handle type and handles requested by the caller are
 * passed through to this callback on success, so the caller does not have to
 * include them in `user_data`.
 * @callback 
 * @param connection the connection
 * @param handleType the handle type that was passed to  tp_connection_hold_handles()
 * @param nHandles the number of handles that were passed to  tp_connection_hold_handles() on success, or 0 on failure
 * @param handles a copy of the array of `n_handles` handles that was passed to  tp_connection_hold_handles() on success, or %NULL on failure
 * @param error %NULL on success, or an error on failure
 * @param weakObject the same object that was passed to  tp_connection_hold_handles()
 */
export interface ConnectionHoldHandlesCb {
    (connection: Connection, handleType: HandleType, nHandles: number, handles: Handle, error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of the callback supplied to tp_list_connection_managers().
 * 
 * Since 0.11.3, tp_list_connection_managers() will
 * wait for %TP_CONNECTION_MANAGER_FEATURE_CORE to be prepared on each
 * connection manager passed to `callback,` unless an error occurred while
 * launching that connection manager.
 * @callback 
 * @param cms %NULL-terminated array of   #TpConnectionManager (the objects will   be unreferenced and the array will be freed after the callback returns,   so the callback must reference any CMs it stores a pointer to),   or %NULL on error
 * @param nCms number of connection managers in `cms` (not including the final  %NULL)
 * @param error %NULL on success, or an error that occurred
 * @param weakObject user-supplied weakly referenced object
 */
export interface ConnectionManagerListCb {
    (cms: ConnectionManager[], nCms: number, error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Called as the result of tp_connection_manager_call_when_ready(). If the
 * connection manager's protocol and parameter information could be retrieved,
 * `error` is %NULL and `cm` is considered to be ready. Otherwise, `error` is
 * non-%NULL and `cm` is not ready.
 * @callback 
 * @param cm a connection manager
 * @param error %NULL on success, or the reason why tp_connection_manager_is_ready()         would return %FALSE
 * @param weakObject the `weak_object` passed to               tp_connection_manager_call_when_ready()
 */
export interface ConnectionManagerWhenReadyCb {
    (cm: ConnectionManager, error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of the callback supplied to tp_list_connection_names().
 * @callback 
 * @param names %NULL-terminated array of `n`  connection bus names, or %NULL on error
 * @param n number of names (not including the final %NULL), or 0 on error
 * @param cms %NULL-terminated array of `n`  connection manager names (e.g. "gabble") in the same order as `names,` or  %NULL on error
 * @param protocols %NULL-terminated array of  `n` protocol names as defined in the Telepathy spec (e.g. "jabber") in the  same order as `names,` or %NULL on error
 * @param error %NULL on success, or an error that occurred
 * @param weakObject user-supplied weakly referenced object
 */
export interface ConnectionNameListCb {
    (names: string[], n: number, cms: string[], protocols: string[], error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of the callback called when tp_connection_request_handles()
 * succeeds or fails.
 * 
 * On success, the caller has a reference to each handle in `handles`.
 * 
 * Since telepathy-glib version 0.13.8,
 * the handles will remain valid until `connection` becomes invalid
 * (signalled by #TpProxy::invalidated). In earlier versions, they could be
 * released with tp_connection_unref_handles().
 * 
 * For convenience, the handle type and IDs requested by the caller are
 * passed through to this callback, so the caller does not have to include
 * them in `user_data`.
 * @callback 
 * @param connection the connection
 * @param handleType the handle type that was passed to  tp_connection_request_handles()
 * @param handles the `n_handles`  handles corresponding to `ids,` in the same order, or %NULL on failure
 * @param ids a copy of the array of  `n_handles` IDs that was passed to tp_connection_request_handles() on  success, or %NULL on failure
 * @param error %NULL on success, or an error on failure
 * @param weakObject the same object that was passed to  tp_connection_request_handles()
 */
export interface ConnectionRequestHandlesCb {
    (connection: Connection, handleType: HandleType, handles: number[], ids: string[], error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of a callback used to receive the result of
 * tp_connection_upgrade_contacts().
 * 
 * If an unrecoverable error occurs (for instance, if `connection` becomes
 * disconnected) it is indicated by `error,` but the contacts in `contacts`
 * are still provided.
 * @callback 
 * @param connection The connection
 * @param contacts An array of `n_contacts` TpContact  objects (this callback is  not given an extra reference to any of these objects, and must call  g_object_ref() on any that it will keep)
 * @param error An unrecoverable error, or %NULL if the connection remains valid
 * @param weakObject the `weak_object` that was passed to  tp_connection_upgrade_contacts()
 */
export interface ConnectionUpgradeContactsCb {
    (connection: Connection, contacts: Contact[], error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * Signature of a callback passed to tp_connection_call_when_ready(), which
 * will be called exactly once, when the connection becomes ready or
 * invalid (whichever happens first)
 * @callback 
 * @param connection the connection (which may be in the middle of being disposed,  if error is non-%NULL, error->domain is TP_DBUS_ERRORS and error->code is  TP_DBUS_ERROR_PROXY_UNREFERENCED)
 * @param error %NULL if the connection is ready for use, or the error with which  it was invalidated if it is now invalid
 */
export interface ConnectionWhenReadyCb {
    (connection: Connection, error: GLib.Error): void
}
/**
 * Signature of a callback for functions that list bus names.
 * @callback 
 * @param busDaemon object representing a connection to a bus
 * @param names constant %NULL-terminated array of constant strings representing  bus names, or %NULL on error
 * @param error the error that occurred, or %NULL on success
 * @param weakObject the same object that was passed to  tp_dbus_daemon_list_names or tp_dbus_daemon_list_activatable_names
 */
export interface DBusDaemonListNamesCb {
    (busDaemon: DBusDaemon, names: string, error: GLib.Error, weakObject: GObject.Object): void
}
/**
 * The signature of the callback called by tp_dbus_daemon_watch_name_owner().
 * @callback 
 * @param busDaemon The D-Bus daemon
 * @param name The name whose ownership has changed or been discovered
 * @param newOwner The unique name that now owns `name`
 */
export interface DBusDaemonNameOwnerChangedCb {
    (busDaemon: DBusDaemon, name: string, newOwner: string): void
}
/**
 * Signature of a callback used to get the value of a property.
 * 
 * For simplicity, in this mixin we don't allow getting a property to fail;
 * implementations must always be prepared to return *something*.
 * @callback 
 * @param object The exported object with the properties
 * @param iface A quark representing the D-Bus interface name
 * @param name A quark representing the D-Bus property name
 * @param value A GValue pre-initialized to the right type, into which to put  the value
 * @param getterData The getter_data from the #TpDBusPropertiesMixinPropImpl
 */
export interface DBusPropertiesMixinGetter {
    (object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: any, getterData: object | null): void
}
/**
 * Signature of a callback used to get the value of a property.
 * @callback 
 * @param object The exported object with the properties
 * @param iface A quark representing the D-Bus interface name
 * @param name A quark representing the D-Bus property name
 * @param value The new value for the property
 * @param setterData The setter_data from the #TpDBusPropertiesMixinPropImpl
 */
export interface DBusPropertiesMixinSetter {
    (object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: any, setterData: object | null): boolean
}
/**
 * Signature of the callback used to add a member to the group.
 * This should perform the necessary operations in the underlying IM protocol
 * to cause the member to be added.
 * @callback 
 * @param obj An object implementing the group interface with this mixin
 * @param handle The handle of the contact to be added
 * @param message A message to be sent if the protocol supports it
 */
export interface GroupMixinAddMemberFunc {
    (obj: GObject.Object, handle: Handle, message: string): boolean
}
/**
 * Signature of the callback used to remove a member from the group.
 * This should perform the necessary operations in the underlying IM protocol
 * to cause the member to be removed.
 * @callback 
 * @param obj An object implementing the group interface with this mixin
 * @param handle The handle of the contact to be removed
 * @param message A message to be sent if the protocol supports it
 */
export interface GroupMixinRemMemberFunc {
    (obj: GObject.Object, handle: Handle, message: string): boolean
}
/**
 * Signature of the callback used to remove a member from the group.
 * This should perform the necessary operations in the underlying IM protocol
 * to cause the member to be removed.
 * 
 * Set this with tp_group_mixin_class_set_remove_with_reason_func(), .
 * @callback 
 * @param obj An object implementing the group interface with this mixin
 * @param handle The handle of the contact to be removed
 * @param message A message to be sent if the protocol supports it
 * @param reason A #TpChannelGroupChangeReason indicating the reason
 */
export interface GroupMixinRemMemberWithReasonFunc {
    (obj: GObject.Object, handle: Handle, message: string, reason: number): boolean
}
/**
 * A callback function acting on unsigned integers.
 * @callback 
 * @param i The relevant integer
 * @param userdata Opaque user data
 */
export interface IntFunc {
    (i: number, userdata: object | null): void
}
/**
 * Signature of a callback used to determine the maximum length of status
 * messages. If this callback is provided and returns non-zero, the
 * #TpPresenceMixinSetOwnStatusFunc implementation is responsible for
 * truncating the message to fit this limit, if necessary.
 * @callback 
 * @param obj An object with this mixin.
 */
export interface PresenceMixinGetMaximumStatusMessageLengthFunc {
    (obj: GObject.Object): number
}
/**
 * Signature of the callback used to commit changes to the user's own presence
 * status in SetStatuses. It is also used in ClearStatus and RemoveStatus to
 * reset the user's own status back to the "default" one with a %NULL status
 * argument.
 * 
 * The optional_arguments hash table in `status,` if not NULL, will have been
 * filtered so it only contains recognised parameters, so the callback
 * need not (and cannot) check for unrecognised parameters. However, the
 * types of the parameters are not currently checked, so the callback is
 * responsible for doing so.
 * 
 * The callback is responsible for emitting PresenceUpdate, if appropriate,
 * by calling tp_presence_mixin_emit_presence_update().
 * @callback 
 * @param obj An object with this mixin.
 * @param status The status to set, or NULL for whatever the protocol defines as a  "default" status
 */
export interface PresenceMixinSetOwnStatusFunc {
    (obj: GObject.Object, status: PresenceStatus): boolean
}
/**
 * Signature of a callback to be used to determine if a given presence
 * status can be set on the connection. Most users of this mixin do not need to
 * supply an implementation of this callback: the value of
 * #TpPresenceStatusSpec.self is enough to determine whether this is a
 * user-settable presence, so %NULL should be passed to
 * tp_presence_mixin_class_init() for this callback.
 * 
 * One place where this callback may be needed is on XMPP: not all server
 * implementation support the user becoming invisible. So an XMPP
 * implementation would implement this function, so that—once connected—the
 * hidden status is only available if the server supports it. Before the
 * connection is connected, this callback should return %TRUE for every status
 * that might possibly be supported: this allows the user to at least try to
 * sign in as invisible.
 * @callback 
 * @param obj An instance of a #TpBaseConnection subclass implementing the presence  interface with this mixin
 * @param which An index into the array of #TpPresenceStatusSpec provided to  tp_presence_mixin_class_init()
 */
export interface PresenceMixinStatusAvailableFunc {
    (obj: GObject.Object, which: number): boolean
}
/**
 * Function called when `feature` has to be prepared for `proxy`.
 * @callback 
 * @param proxy the object on which `feature` has to be prepared
 * @param feature a #GQuark representing the feature to prepare
 * @param callback called when the feature has been prepared, or the preparation failed
 */
export interface ProxyPrepareAsync {
    (proxy: Proxy, feature: ProxyFeature, callback: Gio.AsyncReadyCallback | null): void
}
/**
 * Signature of the implementation of the AddDispatchOperation method.
 * 
 * This function must call either tp_add_dispatch_operation_context_accept(),
 * tp_add_dispatch_operation_context_delay() or
 * tp_add_dispatch_operation_context_fail() on `context` before it returns.
 * @callback 
 * @param approver a #TpSimpleApprover instance
 * @param account a #TpAccount having %TP_ACCOUNT_FEATURE_CORE prepared if possible
 * @param connection a #TpConnection having %TP_CONNECTION_FEATURE_CORE prepared if possible
 * @param channels a #GList of #TpChannel,  all having %TP_CHANNEL_FEATURE_CORE prepared
 * @param dispatchOperation a #TpChannelDispatchOperation or %NULL;  the dispatch_operation is not guaranteed to be prepared
 * @param context a #TpAddDispatchOperationContext representing the context of this  D-Bus call
 */
export interface SimpleApproverAddDispatchOperationImpl {
    (approver: SimpleApprover, account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation | null, context: AddDispatchOperationContext): void
}
/**
 * Signature of the implementation of the HandleChannels method.
 * 
 * This function must call either tp_handle_channels_context_accept(),
 * tp_handle_channels_context_delay() or tp_handle_channels_context_fail()
 * on `context` before it returns.
 * @callback 
 * @param handler a #TpSimpleHandler instance
 * @param account a #TpAccount having %TP_ACCOUNT_FEATURE_CORE prepared if possible
 * @param connection a #TpConnection having %TP_CONNECTION_FEATURE_CORE prepared if possible
 * @param channels a #GList of #TpChannel,  all having %TP_CHANNEL_FEATURE_CORE prepared if possible
 * @param requestsSatisfied a #GList of #TpChannelRequest having their object-path defined but are not guaranteed to be prepared.
 * @param userActionTime the time at which user action occurred, or one of the  special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME  (see #TpAccountChannelRequest:user-action-time for details)
 * @param context a #TpHandleChannelsContext representing the context of this  D-Bus call
 */
export interface SimpleHandlerHandleChannelsImpl {
    (handler: SimpleHandler, account: Account, connection: Connection, channels: Channel[], requestsSatisfied: ChannelRequest[], userActionTime: number, context: HandleChannelsContext): void
}
/**
 * Signature of the implementation of the ObserveChannels method.
 * 
 * This function must call either tp_observe_channels_context_accept(),
 * tp_observe_channels_context_delay() or tp_observe_channels_context_fail()
 * on `context` before it returns.
 * @callback 
 * @param observer a #TpSimpleObserver instance
 * @param account a #TpAccount having %TP_ACCOUNT_FEATURE_CORE prepared if possible
 * @param connection a #TpConnection having %TP_CONNECTION_FEATURE_CORE prepared if possible
 * @param channels a #GList of #TpChannel,  all having %TP_CHANNEL_FEATURE_CORE prepared if possible
 * @param dispatchOperation a #TpChannelDispatchOperation or %NULL;  the dispatch_operation is not guaranteed to be prepared
 * @param requests a #GList of  #TpChannelRequest, all having their object-path defined but are not  guaranteed to be prepared.
 * @param context a #TpObserveChannelsContext representing the context of this  D-Bus call
 */
export interface SimpleObserverObserveChannelsImpl {
    (observer: SimpleObserver, account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation | null, requests: ChannelRequest[], context: ObserveChannelsContext): void
}
export module ClientChannelFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientChannelFactory {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactory

    /**
     * Function called when a channel need to be created.
     * Implementation can return a subclass of #TpChannel if they need to.
     * 
     * Changed in 0.13.6: the function's signature was previously wrong;
     * it expected an object instance as its first parameter, but the type of the
     * parameter was the type of the interface vtable.
     * @param conn a #TpConnection
     * @param path the object path of the channel
     * @param properties  the immutable properties of the channel
     */
    createChannel(conn: Connection, path: string, properties: GLib.HashTable): Channel
    /**
     * Return a zero terminated #GArray containing the #TpChannel features that
     * should be prepared on `channel`.
     * 
     * Changed in 0.13.6: the function's signature was previously wrong;
     * it expected an object instance as its first parameter, but the type of the
     * parameter was the type of the interface vtable.
     * @param channel a #TpChannel
     */
    dupChannelFeatures(channel: Channel): GLib.Quark[]

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque typedef representing a #GObject that implements
 * the %TP_TYPE_CLIENT_CHANNEL_FACTORY interface.
 * @interface 
 */
export class ClientChannelFactory extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactory

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactory

    constructor(config?: ClientChannelFactory.ConstructorProperties) 
    _init(config?: ClientChannelFactory.ConstructorProperties): void
}

export module HandleRepoIface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIface

        handleType?: number | null
    }

}

export interface HandleRepoIface {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIface

    readonly handleType: number

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIface

    connect(sigName: "notify::handle-type", callback: any): number
    on(sigName: "notify::handle-type", callback: any): number
    once(sigName: "notify::handle-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Dummy typedef representing any implementation of this interface.
 * @interface 
 */
export class HandleRepoIface extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIface

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIface

    constructor(config?: HandleRepoIface.ConstructorProperties) 
    _init(config?: HandleRepoIface.ConstructorProperties): void
}

export module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `avatar-changed`
     */
    export interface AvatarChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `presence-changed`
     */
    export interface PresenceChangedSignalCallback {
        (presence: number, status: string, statusMessage: string): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    export interface StatusChangedSignalCallback {
        (oldStatus: number, newStatus: number, reason: number, dbusErrorName: string | null, details: GLib.HashTable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface Account {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Account

    /**
     * The account's automatic presence type (a #TpConnectionPresenceType).
     * 
     * When the account is put online automatically, for instance to make a
     * channel request or because network connectivity becomes available,
     * the automatic presence type, status and message will be copied to
     * their "requested" counterparts.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for automatic-presence-type,
     * automatic-status and automatic-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
     */
    readonly automaticPresenceType: number
    /**
     * The string status name to use in conjunction with the
     * #TpAccount:automatic-presence-type.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for automatic-presence-type,
     * automatic-status and automatic-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly automaticStatus: string
    /**
     * The user-defined message to use in conjunction with the
     * #TpAccount:automatic-presence-type.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for automatic-presence-type,
     * automatic-status and automatic-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly automaticStatusMessage: string
    /**
     * %TRUE if an attempt is currently being made to change the account's
     * presence (#TpAccount:current-presence-type, #TpAccount:current-status
     * and #TpAccount:current-status-message) to match its requested presence
     * (#TpAccount:requested-presence-type, #TpAccount:requested-status
     * and #TpAccount:requested-status-message).
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %FALSE.
     */
    readonly changingPresence: boolean
    /**
     * The account's connection manager name.
     */
    readonly cmName: string
    /**
     * Whether the account should connect automatically or not. To change this
     * property, use tp_account_set_connect_automatically_async().
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %FALSE.
     */
    readonly connectAutomatically: boolean
    /**
     * The connection of the account, or %NULL if account is offline.
     * Note that the returned #TpConnection is not guaranteed to have any
     * features pre-prepared (not even %TP_CONNECTION_FEATURE_CORE) unless
     * %TP_ACCOUNT_FEATURE_CONNECTION has been prepared on the account
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. If %TP_ACCOUNT_FEATURE_CONNECTION has been prepared, this signal
     * will be delayed until the connection is ready.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly connection: Connection
    /**
     * The D-Bus error name for the last disconnection or connection failure,
     * (in particular, %TP_ERROR_STR_CANCELLED if it was disconnected by user
     * request), or %NULL if the account is connected.
     * 
     * One can receive change notifications on this property by connecting
     * to the #TpAccount::status-changed signal, or by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly connectionError: string
    /**
     * A map from string to #GValue containing extensible error details
     * related to #TpAccount:connection-error. Functions like tp_asv_get_string()
     * can be used to read from this map.
     * 
     * The keys for this map are defined by
     * <ulink url="http://telepathy.freedesktop.org/spec/">the Telepathy D-Bus
     * Interface Specification</ulink>. They will typically include
     * <literal>debug-message</literal>, which is a debugging message in the C
     * locale, analogous to #GError<!-- -->.message.
     * 
     * One can receive change notifications on this property by connecting
     * to the #TpAccount::status-changed signal, or by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * an empty map.
     */
    readonly connectionErrorDetails: GLib.HashTable
    /**
     * The account's connection manager name.
     */
    readonly connectionManager: string
    /**
     * The account's connection status type (a %TpConnectionStatus).
     * 
     * One can receive change notifications on this property by connecting
     * to the #TpAccount::status-changed signal, or by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %TP_CONNECTION_STATUS_DISCONNECTED.
     */
    readonly connectionStatus: number
    /**
     * The account's connection status reason (a %TpConnectionStatusReason).
     * 
     * One can receive change notifications on this property by connecting
     * to the #TpAccount::status-changed signal, or by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED.
     */
    readonly connectionStatusReason: number
    /**
     * The account connection's current presence type
     * (a %TpConnectionPresenceType).
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for current-presence-type,
     * current-status and current-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
     */
    readonly currentPresenceType: number
    /**
     * The current Status string of the account.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for current-presence-type,
     * current-status and current-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly currentStatus: string
    /**
     * The current status message message of the account.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for current-presence-type,
     * current-status and current-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly currentStatusMessage: string
    /**
     * The account's display name, from the DisplayName property.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly displayName: string
    /**
     * Whether this account is enabled or not.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is FALSE.
     */
    readonly enabled: boolean
    /**
     * Whether this account has been online or not.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %FALSE.
     */
    readonly hasBeenOnline: boolean
    /**
     * The account's icon name. To change this propery, use
     * tp_account_set_icon_name_async().
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly iconName: string
    /**
     * The nickname that should be set for the user on this account.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly nickname: string
    /**
     * The normalized form of the user's own unique identifier on this
     * protocol. For example, on XMPP accounts this is the user's JID; on
     * ICQ this is the user's UIN; and so on.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly normalizedName: string
    /**
     * The account's machine-readable protocol name, such as "jabber", "msn" or
     * "local-xmpp". Recommended names for most protocols can be found in the
     * Telepathy D-Bus Interface Specification.
     */
    readonly protocol: string
    /**
     * The account's machine-readable protocol name, such as "jabber", "msn" or
     * "local-xmpp". Recommended names for most protocols can be found in the
     * Telepathy D-Bus Interface Specification.
     */
    readonly protocolName: string
    /**
     * The account's requested presence type (a #TpConnectionPresenceType).
     * 
     * Since 0.13.8,
     * one can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for requested-presence-type,
     * requested-status and requested-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly requestedPresenceType: number
    /**
     * The requested Status string of the account.
     * 
     * Since 0.13.8,
     * one can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for requested-presence-type,
     * requested-status and requested-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly requestedStatus: string
    /**
     * The requested status message message of the account.
     * 
     * Since 0.13.8,
     * one can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail. Change notifications for requested-presence-type,
     * requested-status and requested-status-message are always emitted together,
     * so it is sufficient to connect to one of the notification signals.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %NULL.
     */
    readonly requestedStatusMessage: string
    /**
     * A machine-readable name identifying a specific service to which this
     * account connects, or a copy of #TpAccount:protocol if there is no more
     * specific service.
     * 
     * Well-known names for various services can be found in the Telepathy D-Bus
     * Interface Specification.
     * 
     * For instance, accounts for the "jabber" protocol should have the service
     * names "google-talk", "ovi-chat", "facebook" and "lj-talk" for accounts
     * that connect to Google Talk, Ovi Chat, Facebook and Livejournal,
     * respectively, and this property will be "jabber" for accounts that
     * connect to a generic Jabber server.
     * 
     * To change this property, use
     * tp_account_set_service_async().
     */
    readonly service: string
    /**
     * The storage identifier for this account.
     * 
     * A provider-specific variant type used to identify this account with the
     * provider. This value will be %NULL if #TpAccount:storage-provider is
     * an empty string.
     * 
     * This property cannot change once an Account has been created.
     * 
     * This is not guaranteed to have been retrieved until the
     * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
     * the value is %NULL.
     */
    readonly storageIdentifier: any
    /**
     * Provider-specific information used to identify this
     * account. Use g_variant_get_type() to check that the type
     * is what you expect. For instance, if you use a
     * #TpAccount:storage-provider with numeric identifiers for accounts,
     * this variant might have type %G_VARIANT_TYPE_UINT32;
     * if the storage provider has string-based identifiers, it should
     * have type %G_VARIANT_TYPE_STRING.
     * 
     * This property cannot change once an Account has been created.
     * 
     * This is not guaranteed to have been retrieved until the
     * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
     * the value is %NULL.
     */
    readonly storageIdentifierVariant: GLib.Variant
    /**
     * The storage provider for this account.
     * 
     * The name of the account storage implementation. When this
     * is the empty string the account is internally stored.
     * 
     * This property cannot change once an Account has been created.
     * 
     * This is not guaranteed to have been retrieved until the
     * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
     * the value is %NULL.
     */
    readonly storageProvider: string
    /**
     * The storage restrictions for this account.
     * 
     * A bitfield of #TpStorageRestrictionFlags that give the limitations of
     * this account imposed by the storage provider. This value will be 0
     * if #TpAccount:storage-provider is an empty string.
     * 
     * This property cannot change once an Account has been created.
     * 
     * This is not guaranteed to have been retrieved until the
     * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
     * the value is 0.
     */
    readonly storageRestrictions: number
    /**
     * The object paths of previously-active accounts superseded by this one.
     * For instance, this can be used in a logger to read old logs for an
     * account that has been migrated from one connection manager to another.
     * 
     * This is not guaranteed to have been retrieved until the
     * %TP_ACCOUNT_FEATURE_CORE feature has been prepared; until then,
     * the value is NULL.
     */
    readonly supersedes: string[]
    /**
     * If the %TP_ACCOUNT_FEATURE_ADDRESSING feature has been prepared
     * successfully, a list of additional URI schemes for which this
     * account should be used if possible. Otherwise %NULL.
     * 
     * For instance, a SIP or Skype account might have "tel" in this list if the
     * user would like to use that account to call phone numbers.
     * 
     * This list should not contain the primary URI scheme(s) for the account's
     * protocol (for instance, "xmpp" for XMPP, or "sip" or "sips" for SIP),
     * since it should be assumed to be useful for those schemes in any case.
     * 
     * The notify::uri-schemes signal cannot be relied on if the Account Manager
     * is Mission Control version 5.14.0 or older.
     */
    readonly uriSchemes: string[]
    /**
     * Whether this account is valid.
     * 
     * One can receive change notifications on this property by connecting
     * to the #GObject::notify signal and using this property as the signal
     * detail.
     * 
     * This is not guaranteed to have been retrieved until
     * tp_proxy_prepare_async() has finished; until then, the value is
     * %FALSE.
     */
    readonly valid: boolean

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Account

    /**
     * <!-- -->
     * @param scheme a URI scheme such as "tel", "sip" or "xmpp"
     */
    associatedWithUriScheme(scheme: string): boolean
    /**
     * Binds the :connection-status of `self` to the boolean property of another
     * object using a #GBinding such that the `target_property` will be set to
     * %TRUE when `self` is connected (and `invert` is %FALSE).
     * 
     * `target_property` will be synchronised immediately (%G_BINDING_SYNC_CREATE).
     * `invert` can be interpreted as analogous to %G_BINDING_INVERT_BOOLEAN.
     * 
     * For instance, this function can be used to bind the GtkWidget:sensitive
     * property to only make a widget sensitive when the account is connected.
     * 
     * See g_object_bind_property() for more information.
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind (must be %G_TYPE_BOOLEAN)
     * @param invert %TRUE if you wish to invert the value of `target_property`   (i.e. %FALSE if connected)
     */
    bindConnectionStatusToProperty(target: object | null, targetProperty: string, invert: boolean): GObject.Binding
    /**
     * If the account's connection is not connected, return the D-Bus error name
     * with which it last disconnected or failed to connect (in particular, this
     * is %TP_ERROR_STR_CANCELLED if it was disconnected by a user request).
     * This is the same as #TpAccount:connection-error.
     * 
     * If `details` is not %NULL, it will be used to return additional details about
     * the error (the same as #TpAccount:connection-error-details).
     * 
     * Otherwise, return %NULL, without altering `details`.
     * 
     * The returned string and `details` may become invalid when the main loop is
     * re-entered or the account is destroyed.
     */
    dupDetailedErrorVardict(): [ /* returnType */ string | null, /* details */ GLib.Variant ]
    /**
     * Returns the parameters of the account, in a variant of type
     * %G_VARIANT_TYPE_VARDICT where the keys
     * are parameter names (account, password, require-encryption etc.).
     * Use g_variant_lookup() or g_variant_lookup_value() for convenient
     * access to the values.
     * 
     * The allowed parameters depend on the connection manager, and can be found
     * via tp_connection_manager_get_protocol() and
     * tp_connection_manager_protocol_get_param(). Well-known parameters are
     * listed
     * <ulink url="http://telepathy.freedesktop.org/spec/org.freedesktop.Telepathy.ConnectionManager.html#org.freedesktop.Telepathy.ConnectionManager.RequestConnection">in
     * the Telepathy D-Bus Interface Specification</ulink>.
     */
    dupParametersVardict(): GLib.Variant
    /**
     * Return provider-specific information used to identify this
     * account. Use g_variant_get_type() to check that the type
     * is what you expect; for instance, if the
     * #TpAccount:storage-provider has string-based user identifiers,
     * this variant should have type %G_VARIANT_TYPE_STRING.
     */
    dupStorageIdentifierVariant(): GLib.Variant
    /**
     * Makes an asynchronous request of `self'`s StorageSpecificInformation
     * property (part of the Account.Interface.Storage interface).
     * 
     * When the operation is finished, `callback` will be called. You must then
     * call tp_account_dup_storage_specific_information_vardict_finish() to get the
     * result of the request.
     * @param callback a callback to call when the request is satisfied
     */
    dupStorageSpecificInformationVardictAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieve the value of the request begun with
     * tp_account_dup_storage_specific_information_vardict_async().
     * @param result a #GAsyncResult
     */
    dupStorageSpecificInformationVardictFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Set the connection of the account by specifying the connection object path.
     * This function does not return a new ref and it is not guaranteed that the
     * returned #TpConnection object is ready.
     * 
     * The use-case for this function is in a HandleChannels callback and you
     * already know the object path for the connection, so you can let `account`
     * create its #TpConnection and return it for use.
     * @param path the path to connection object for #TpAccount
     */
    ensureConnection(path: string): Connection
    /**
     * Gets the automatic presence, status and status message of `account`. These
     * values are the same as the #TpAccount:automatic-presence-type,
     * #TpAccount:automatic-status and #TpAccount:automatic-status-message
     * properties, and are the values that will be used if the account should
     * be put online automatically.
     */
    getAutomaticPresence(): [ /* returnType */ ConnectionPresenceType, /* status */ string, /* statusMessage */ string ]
    /**
     * Requests an asynchronous get of `account'`s avatar. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_get_avatar_finish() to get the result of the operation.
     * @param callback a callback to call when the request is satisfied
     */
    getAvatarAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async get operation of `account'`s avatar.
     * 
     * Beware that the returned value is only valid until `result` is freed.
     * Copy it with g_array_ref() if you need to keep it for longer.
     * @param result a #GAsyncResult
     */
    getAvatarFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * <!-- -->
     */
    getChangingPresence(): boolean
    /**
     * <!-- -->
     */
    getCmName(): string
    /**
     * <!-- -->
     */
    getConnectAutomatically(): boolean
    /**
     * <!-- -->
     */
    getConnection(): Connection
    /**
     * <!-- -->
     */
    getConnectionManager(): string
    /**
     * Gets the connection status and reason from `account`. The two values
     * are the same as the #TpAccount:connection-status and
     * #TpAccount:connection-status-reason properties.
     */
    getConnectionStatus(): [ /* returnType */ ConnectionStatus, /* reason */ ConnectionStatusReason ]
    /**
     * Gets the current presence, status and status message of `account`. These
     * values are the same as the #TpAccount:current-presence-type,
     * #TpAccount:current-status and #TpAccount:current-status-message properties.
     */
    getCurrentPresence(): [ /* returnType */ ConnectionPresenceType, /* status */ string, /* statusMessage */ string ]
    /**
     * <!-- -->
     */
    getDisplayName(): string
    /**
     * <!-- -->
     */
    getHasBeenOnline(): boolean
    /**
     * <!-- -->
     */
    getIconName(): string
    /**
     * <!-- -->
     */
    getNickname(): string
    /**
     * <!-- -->
     */
    getNormalizedName(): string
    /**
     * Returns the parameters of the account, in a hash table where each string
     * is the parameter name (account, password, require-encryption etc.), and
     * each value is a #GValue. Using the tp_asv_get family of functions
     * (tp_asv_get_uint32(), tp_asv_get_string() etc.) to access the parameters is
     * recommended.
     * 
     * The allowed parameters depend on the connection manager, and can be found
     * via tp_connection_manager_get_protocol() and
     * tp_connection_manager_protocol_get_param(). Well-known parameters are
     * listed
     * <ulink url="http://telepathy.freedesktop.org/spec/org.freedesktop.Telepathy.ConnectionManager.html#org.freedesktop.Telepathy.ConnectionManager.RequestConnection">in
     * the Telepathy D-Bus Interface Specification</ulink>.
     */
    getParameters(): GLib.HashTable
    /**
     * Returns the portion of `account'`s object path after the standard
     * #TP_ACCOUNT_OBJECT_PATH_BASE prefix, of the form "cm/protocol/acct". This
     * string uniquely identifies the account.
     * 
     * This function is only intended to be used when printing debug messages or in
     * tools for developer. For a string suitable for displaying to the user, see
     * tp_account_get_display_name(). To retrieve the connection manager and
     * protocol name parts of the object path, see
     * tp_account_get_connection_manager() and tp_account_get_protocol(). For
     * persistent identification of the account, use tp_proxy_get_object_path().
     */
    getPathSuffix(): string
    /**
     * <!-- -->
     */
    getProtocol(): string
    /**
     * <!-- -->
     */
    getProtocolName(): string
    /**
     * Gets the requested presence, status and status message of `account`. These
     * values are the same as the #TpAccount:requested-presence-type,
     * #TpAccount:requested-status and #TpAccount:requested-status-message
     * properties.
     */
    getRequestedPresence(): [ /* returnType */ ConnectionPresenceType, /* status */ string, /* statusMessage */ string ]
    /**
     * <!-- -->
     */
    getService(): string
    /**
     * <!-- -->
     */
    getStorageIdentifier(): any
    /**
     * <!-- -->
     */
    getStorageProvider(): string
    /**
     * <!-- -->
     */
    getStorageRestrictions(): StorageRestrictionFlags
    /**
     * Makes an asynchronous request of `self'`s StorageSpecificInformation
     * property (part of the Account.Interface.Storage interface).
     * 
     * When the operation is finished, `callback` will be called. You must then
     * call tp_account_get_storage_specific_information_finish() to get the
     * result of the request.
     * @param callback a callback to call when the request is satisfied
     */
    getStorageSpecificInformationAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieve the value of the request begun with
     * tp_account_get_storage_specific_information_async().
     * 
     * Beware that the returned value is only valid until `result` is freed.
     * Copy it with g_hash_table_ref() if you need to keep it for longer.
     * @param result a #GAsyncResult
     */
    getStorageSpecificInformationFinish(result: Gio.AsyncResult): GLib.HashTable
    /**
     * Return the same thing as the #TpAccount:supersedes property, in a way
     * that may be more convenient for C code.
     * 
     * The returned pointers are not guaranteed to remain valid after the
     * main loop has been re-entered.
     */
    getSupersedes(): string[]
    /**
     * Return the #TpAccount:uri-schemes property
     */
    getUriSchemes(): string[]
    /**
     * <!-- -->
     */
    isEnabled(): boolean
    /**
     * <!-- -->
     */
    isValid(): boolean
    /**
     * Requests an asynchronous reconnect of `account`. When the operation is
     * finished, `callback` will be called. You can then call
     * tp_account_reconnect_finish() to get the result of the operation.
     * @param callback a callback to call when the request is satisfied
     */
    reconnectAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async reconnect of `account`.
     * @param result a #GAsyncResult
     */
    reconnectFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous removal of `account`. When the operation is
     * finished, `callback` will be called. You can then call
     * tp_account_remove_finish() to get the result of the operation.
     * @param callback a callback to call when the request is satisfied
     */
    removeAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async removal of `account`.
     * @param result a #GAsyncResult
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous change of presence on `account`. When the
     * operation is finished, `callback` will be called. You can then call
     * tp_account_request_presence_finish() to get the result of the operation.
     * @param type the requested presence
     * @param status a status message to set, or %NULL
     * @param message a message for the change, or %NULL
     * @param callback a callback to call when the request is satisfied
     */
    requestPresenceAsync(type: ConnectionPresenceType, status: string, message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async presence change request on `account`.
     * @param result a #GAsyncResult
     */
    requestPresenceFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous change of `account'`s automatic presence. When the
     * operation is finished, `callback` will be called. You can then call
     * tp_account_set_automatic_presence_finish() to get the result of the
     * operation.
     * @param type the requested presence
     * @param status a status message to set, or %NULL
     * @param message a message for the change, or %NULL
     * @param callback a callback to call when the request is satisfied
     */
    setAutomaticPresenceAsync(type: ConnectionPresenceType, status: string, message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request to change the automatic presence of
     * `account`.
     * @param result a #GAsyncResult
     */
    setAutomaticPresenceFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous change of the Avatar parameter on `self`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_set_avatar_finish() to get the result of the operation.
     * 
     * If `len` equals 0, the avatar is cleared.
     * @param avatar a new avatar to set; can be %NULL  only if `len` equals 0
     * @param mimeType the MIME type of the new avatar; can be %NULL  only if `len` equals 0
     * @param callback a callback to call when the request is satisfied
     */
    setAvatarAsync(avatar: Uint8Array | null, mimeType: string | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async avatar change request on `account`.
     * @param result a #GAsyncResult
     */
    setAvatarFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the ConnectAutomatically property of
     * `account`. When the operation is finished, `callback` will be called. You can
     * then call tp_account_set_display_name_finish() to get the result of the
     * operation.
     * @param connectAutomatically new value for the parameter
     * @param callback a callback to call when the request is satisfied
     */
    setConnectAutomaticallyAsync(connectAutomatically: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of the ConnectAutomatically property.
     * @param result a #GAsyncResult
     */
    setConnectAutomaticallyFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the DisplayName property of `account`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_set_display_name_finish() to get the result of the operation.
     * @param displayName a new display name, or %NULL to unset the display name
     * @param callback a callback to call when the request is satisfied
     */
    setDisplayNameAsync(displayName: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of the DisplayName property.
     * @param result a #GAsyncResult
     */
    setDisplayNameFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the Enabled property of `account`. When the
     * operation is finished, `callback` will be called. You can then call
     * tp_account_set_enabled_finish() to get the result of the operation.
     * @param enabled the new enabled value of `account`
     * @param callback a callback to call when the request is satisfied
     */
    setEnabledAsync(enabled: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of the Enabled property.
     * @param result a #GAsyncResult
     */
    setEnabledFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the Icon property of `account`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_set_icon_name_finish() to get the result of the operation.
     * @param iconName a new icon name, or %NULL to unset the icon name
     * @param callback a callback to call when the request is satisfied
     */
    setIconNameAsync(iconName: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of the Icon parameter.
     * @param result a #GAsyncResult
     */
    setIconNameFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous change of the Nickname parameter on `account`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_set_nickname_finish() to get the result of the operation.
     * @param nickname a new nickname to set
     * @param callback a callback to call when the request is satisfied
     */
    setNicknameAsync(nickname: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async nickname change request on `account`.
     * @param result a #GAsyncResult
     */
    setNicknameFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the Service property on `self`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_account_set_service_finish() to get the result of the operation.
     * @param service a new service name, or %NULL or the empty string to unset the  service name (which will result in the #TpAccount:service property  becoming the same as #TpAccount:protocol)
     * @param callback a callback to call when the request is satisfied
     */
    setServiceAsync(service: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of the Service parameter.
     * @param result a #GAsyncResult
     */
    setServiceFinish(result: Gio.AsyncResult): boolean
    /**
     * Add `scheme` to the list of additional URI schemes that would be returned
     * by tp_account_get_uri_schemes(), or remove it from that list.
     * 
     * `scheme` should not be the primary URI scheme for the account's
     * protocol (for instance, "xmpp" for XMPP, or "sip" or "sips" for SIP),
     * since the account should be assumed to be useful for those schemes
     * regardless of the contents of the list.
     * 
     * Calling this method does not require the %TP_ACCOUNT_FEATURE_ADDRESSING
     * feature to be enabled, but the change will not be reflected in the result
     * of tp_account_get_uri_schemes() or tp_account_associated_with_uri_scheme()
     * unless that feature has been enabled.
     * @param scheme a non-%NULL URI scheme such as "tel"
     * @param associate %TRUE to use this account for `scheme,` or %FALSE to not use it
     * @param callback a callback to call when the request is satisfied
     */
    setUriSchemeAssociationAsync(scheme: string, associate: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_account_set_uri_scheme_association_async().
     * @param result a #GAsyncResult
     */
    setUriSchemeAssociationFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous update of parameters of `account`. When the
     * operation is finished, `callback` will be called. You can then call
     * tp_account_update_parameters_finish() to get the result of the operation.
     * @param parameters new  parameters to set on `account`
     * @param unsetParameters list of parameters to unset on `account`
     * @param callback a callback to call when the request is satisfied
     */
    updateParametersAsync(parameters: GLib.HashTable, unsetParameters: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async update of the parameters on `account`.
     * @param result a #GAsyncResult
     */
    updateParametersFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* reconnectRequired */ string[] ]
    /**
     * Requests an asynchronous update of parameters of `account`. When the
     * operation is finished, `callback` will be called. You can then call
     * tp_account_update_parameters_finish() to get the result of the operation.
     * 
     * If `parameters` is a floating reference (see g_variant_ref_sink()),
     * ownership of `parameters` is taken by this function. This means
     * you can pass the result of g_variant_new() or g_variant_new_parsed()
     * directly to this function without additional reference-count management.
     * @param parameters a variant of type %G_VARIANT_TYPE_VARDICT  containing new parameters to set on `account`
     * @param unsetParameters list of parameters to unset on `account`
     * @param callback a callback to call when the request is satisfied
     */
    updateParametersVardictAsync(parameters: GLib.Variant, unsetParameters: string[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async update of the parameters on `account`.
     * @param result a #GAsyncResult
     */
    updateParametersVardictFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* reconnectRequired */ string[] ]

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.Account

    connect(sigName: "avatar-changed", callback: Account.AvatarChangedSignalCallback): number
    on(sigName: "avatar-changed", callback: Account.AvatarChangedSignalCallback): number
    once(sigName: "avatar-changed", callback: Account.AvatarChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "avatar-changed", ...args: any[]): void
    connect(sigName: "presence-changed", callback: Account.PresenceChangedSignalCallback): number
    on(sigName: "presence-changed", callback: Account.PresenceChangedSignalCallback): number
    once(sigName: "presence-changed", callback: Account.PresenceChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "presence-changed", status: string, statusMessage: string, ...args: any[]): void
    connect(sigName: "status-changed", callback: Account.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Account.StatusChangedSignalCallback): number
    once(sigName: "status-changed", callback: Account.StatusChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "status-changed", newStatus: number, reason: number, dbusErrorName: string | null, details: GLib.HashTable, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Account

    connect(sigName: "notify::automatic-presence-type", callback: any): number
    on(sigName: "notify::automatic-presence-type", callback: any): number
    once(sigName: "notify::automatic-presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-presence-type", ...args: any[]): void
    connect(sigName: "notify::automatic-status", callback: any): number
    on(sigName: "notify::automatic-status", callback: any): number
    once(sigName: "notify::automatic-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-status", ...args: any[]): void
    connect(sigName: "notify::automatic-status-message", callback: any): number
    on(sigName: "notify::automatic-status-message", callback: any): number
    once(sigName: "notify::automatic-status-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-status-message", ...args: any[]): void
    connect(sigName: "notify::changing-presence", callback: any): number
    on(sigName: "notify::changing-presence", callback: any): number
    once(sigName: "notify::changing-presence", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changing-presence", ...args: any[]): void
    connect(sigName: "notify::cm-name", callback: any): number
    on(sigName: "notify::cm-name", callback: any): number
    once(sigName: "notify::cm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cm-name", ...args: any[]): void
    connect(sigName: "notify::connect-automatically", callback: any): number
    on(sigName: "notify::connect-automatically", callback: any): number
    once(sigName: "notify::connect-automatically", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connect-automatically", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::connection-error", callback: any): number
    on(sigName: "notify::connection-error", callback: any): number
    once(sigName: "notify::connection-error", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-error", ...args: any[]): void
    connect(sigName: "notify::connection-error-details", callback: any): number
    on(sigName: "notify::connection-error-details", callback: any): number
    once(sigName: "notify::connection-error-details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-error-details", ...args: any[]): void
    connect(sigName: "notify::connection-manager", callback: any): number
    on(sigName: "notify::connection-manager", callback: any): number
    once(sigName: "notify::connection-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-manager", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: any): number
    on(sigName: "notify::connection-status", callback: any): number
    once(sigName: "notify::connection-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::connection-status-reason", callback: any): number
    on(sigName: "notify::connection-status-reason", callback: any): number
    once(sigName: "notify::connection-status-reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-status-reason", ...args: any[]): void
    connect(sigName: "notify::current-presence-type", callback: any): number
    on(sigName: "notify::current-presence-type", callback: any): number
    once(sigName: "notify::current-presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-presence-type", ...args: any[]): void
    connect(sigName: "notify::current-status", callback: any): number
    on(sigName: "notify::current-status", callback: any): number
    once(sigName: "notify::current-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-status", ...args: any[]): void
    connect(sigName: "notify::current-status-message", callback: any): number
    on(sigName: "notify::current-status-message", callback: any): number
    once(sigName: "notify::current-status-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-status-message", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::has-been-online", callback: any): number
    on(sigName: "notify::has-been-online", callback: any): number
    once(sigName: "notify::has-been-online", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-been-online", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::normalized-name", callback: any): number
    on(sigName: "notify::normalized-name", callback: any): number
    once(sigName: "notify::normalized-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::normalized-name", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::protocol-name", callback: any): number
    on(sigName: "notify::protocol-name", callback: any): number
    once(sigName: "notify::protocol-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol-name", ...args: any[]): void
    connect(sigName: "notify::requested-presence-type", callback: any): number
    on(sigName: "notify::requested-presence-type", callback: any): number
    once(sigName: "notify::requested-presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-presence-type", ...args: any[]): void
    connect(sigName: "notify::requested-status", callback: any): number
    on(sigName: "notify::requested-status", callback: any): number
    once(sigName: "notify::requested-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-status", ...args: any[]): void
    connect(sigName: "notify::requested-status-message", callback: any): number
    on(sigName: "notify::requested-status-message", callback: any): number
    once(sigName: "notify::requested-status-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-status-message", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::storage-identifier", callback: any): number
    on(sigName: "notify::storage-identifier", callback: any): number
    once(sigName: "notify::storage-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-identifier", ...args: any[]): void
    connect(sigName: "notify::storage-identifier-variant", callback: any): number
    on(sigName: "notify::storage-identifier-variant", callback: any): number
    once(sigName: "notify::storage-identifier-variant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-identifier-variant", ...args: any[]): void
    connect(sigName: "notify::storage-provider", callback: any): number
    on(sigName: "notify::storage-provider", callback: any): number
    once(sigName: "notify::storage-provider", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-provider", ...args: any[]): void
    connect(sigName: "notify::storage-restrictions", callback: any): number
    on(sigName: "notify::storage-restrictions", callback: any): number
    once(sigName: "notify::storage-restrictions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-restrictions", ...args: any[]): void
    connect(sigName: "notify::supersedes", callback: any): number
    on(sigName: "notify::supersedes", callback: any): number
    once(sigName: "notify::supersedes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::supersedes", ...args: any[]): void
    connect(sigName: "notify::uri-schemes", callback: any): number
    on(sigName: "notify::uri-schemes", callback: any): number
    once(sigName: "notify::uri-schemes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri-schemes", ...args: any[]): void
    connect(sigName: "notify::valid", callback: any): number
    on(sigName: "notify::valid", callback: any): number
    once(sigName: "notify::valid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Telepathy Account Manager stores the user's configured real-time
 * communication accounts. This object represents a stored account.
 * 
 * If this account is deleted from the account manager, the
 * #TpProxy::invalidated signal will be emitted
 * with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_OBJECT_REMOVED.
 * 
 * One can connect to the #GObject::notify signal to get change notifications
 * for many of the properties on this object. Refer to each property's
 * documentation for whether it can be used in this way.
 * 
 * #TpAccount objects should normally be obtained from the #TpAccountManager.
 * 
 * Since 0.16, #TpAccount always has a non-%NULL #TpProxy:factory, and its
 * #TpProxy:factory will be propagated to its #TpConnection
 * (if any). If a #TpAccount is created without going via the
 * #TpAccountManager or specifying a #TpProxy:factory, the default
 * is to use a new #TpAutomaticClientFactory.
 * @class 
 */
export class Account extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Account

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Account

    constructor(config?: Account.ConstructorProperties) 
    /**
     * Convenience function to create a new account proxy. The returned #TpAccount
     * is not guaranteed to be ready at the point of return.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this account
     */
    constructor(busDaemon: DBusDaemon, objectPath: string) 
    /**
     * Convenience function to create a new account proxy. The returned #TpAccount
     * is not guaranteed to be ready at the point of return.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this account
     */
    static new(busDaemon: DBusDaemon, objectPath: string): Account
    _init(config?: Account.ConstructorProperties): void
    static getFeatureQuarkAddressing(): GLib.Quark
    /**
     * <!-- -->
     */
    static getFeatureQuarkConnection(): GLib.Quark
    /**
     * <!-- -->
     */
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * <!-- -->
     */
    static getFeatureQuarkStorage(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpAccount have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_ACCOUNT.
     */
    static initKnownInterfaces(): void
    /**
     * Validates and parses a Telepathy Account's object path, extracting the
     * connection manager's name, the protocol, and the account's unique identifier
     * from the path. This includes replacing underscores with hyphens in the
     * protocol name, as defined in the Account specification.
     * 
     * Any of the out parameters may be %NULL if not needed. If %TRUE is returned,
     * the caller is responsible for freeing the strings stored in any non-%NULL
     * out parameters, using g_free().
     * @param objectPath a Telepathy Account's object path
     */
    static parseObjectPath(objectPath: string): [ /* returnType */ boolean, /* cm */ string, /* protocol */ string, /* accountId */ string ]
}

export module AccountChannelRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `re-handled`
     */
    export interface ReHandledSignalCallback {
        (channel: Channel, userActionTime: number, context: HandleChannelsContext): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

        /**
         * The #TpAccount used to request the channel.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        account?: Account | null
        /**
         * The desired D-Bus properties for the channel.
         * 
         * When constructing a new object, one of
         * #TpAccountChannelRequest:request or
         * #TpAccountChannelRequest:request-vardict must be set to a non-%NULL
         * value, and the other must remain unspecified.
         */
        requestVardict?: GLib.Variant | null
        /**
         * The user action time that will be passed to the channel dispatcher when
         * requesting the channel.
         * 
         * This may be the time at which user action occurred, or one of the special
         * values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME.
         * 
         * If %TP_USER_ACTION_TIME_NOT_USER_ACTION, the action doesn't involve any
         * user action. Clients should avoid stealing focus when presenting the
         * channel.
         * 
         * If %TP_USER_ACTION_TIME_CURRENT_TIME, clients SHOULD behave as though the
         * user action happened at the current time, e.g. a client may
         * request that its window gains focus.
         * 
         * On X11-based systems, GDK 2, GDK 3, Clutter 1.0 etc.,
         * tp_user_action_time_from_x11() can be used to convert an X11 timestamp to
         * a Telepathy user action time.
         * 
         * If the channel request succeeds, this user action time will be passed on
         * to the channel's handler. If the handler is a GUI, it may use
         * tp_user_action_time_should_present() to decide whether to bring its
         * window to the foreground.
         */
        userActionTime?: number | null
    }

}

export interface AccountChannelRequest {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    /**
     * The #TpAccount used to request the channel.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly account: Account
    /**
     * The #TpChannelRequest used to request the channel, or %NULL if the
     * channel has not be requested yet.
     * 
     * This can be useful for example to compare with the #TpChannelRequest
     * objects received from the requests_satisfied argument of
     * #TpSimpleHandlerHandleChannelsImpl to check if the client is asked to
     * handle the channel it just requested.
     * 
     * Note that the #TpChannelRequest objects may be different while still
     * representing the same ChannelRequest on D-Bus. You have to compare
     * them using their object paths (tp_proxy_get_object_path()).
     * 
     * Since 0.13.13
     */
    readonly channelRequest: ChannelRequest
    /**
     * The desired D-Bus properties for the channel.
     * 
     * When constructing a new object, one of
     * #TpAccountChannelRequest:request or
     * #TpAccountChannelRequest:request-vardict must be set to a non-%NULL
     * value, and the other must remain unspecified.
     */
    readonly requestVardict: GLib.Variant
    /**
     * The user action time that will be passed to the channel dispatcher when
     * requesting the channel.
     * 
     * This may be the time at which user action occurred, or one of the special
     * values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
     * %TP_USER_ACTION_TIME_CURRENT_TIME.
     * 
     * If %TP_USER_ACTION_TIME_NOT_USER_ACTION, the action doesn't involve any
     * user action. Clients should avoid stealing focus when presenting the
     * channel.
     * 
     * If %TP_USER_ACTION_TIME_CURRENT_TIME, clients SHOULD behave as though the
     * user action happened at the current time, e.g. a client may
     * request that its window gains focus.
     * 
     * On X11-based systems, GDK 2, GDK 3, Clutter 1.0 etc.,
     * tp_user_action_time_from_x11() can be used to convert an X11 timestamp to
     * a Telepathy user action time.
     * 
     * If the channel request succeeds, this user action time will be passed on
     * to the channel's handler. If the handler is a GUI, it may use
     * tp_user_action_time_should_present() to decide whether to bring its
     * window to the foreground.
     */
    readonly userActionTime: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    /**
     * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * that you are going to handle yourself.
     * When the operation is finished, `callback` will be called. You can then call
     * tp_account_channel_request_create_and_handle_channel_finish() to get the
     * result of the operation.
     * 
     * (Behind the scenes, this works by creating a temporary #TpBaseClient, then
     * acting like tp_account_channel_request_create_channel_async() with the
     * temporary #TpBaseClient as the `preferred_handler`.)
     * 
     * The caller is responsible for closing the channel with
     * tp_cli_channel_call_close() when it has finished handling it.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    createAndHandleChannelAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_create_and_handle_channel_async().
     * 
     * See tp_account_channel_request_ensure_and_handle_channel_finish()
     * for details of how `context` can be used.
     * 
     * The caller is responsible for closing the channel with
     * tp_cli_channel_call_close() when it has finished handling it.
     * @param result a #GAsyncResult
     */
    createAndHandleChannelFinish(result: Gio.AsyncResult): [ /* returnType */ Channel | null, /* context */ HandleChannelsContext ]
    /**
     * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * and let the ChannelDispatcher dispatch it to an handler.
     * `callback` will be called when the channel has been created and dispatched,
     * or the request has failed.
     * You can then call tp_account_channel_request_create_channel_finish() to
     * get the result of the operation and a #TpChannel representing the channel
     * which has been created. Note that you are <emphasis>not</emphasis> handling
     * this channel and so should interact with the channel as an Observer.
     * See <ulink url="http://telepathy.freedesktop.org/doc/book/sect.channel-dispatcher.clients.html">
     * the Telepathy book</ulink> for details about how clients should interact
     * with channels.
     * @param preferredHandler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    createAndObserveChannelAsync(preferredHandler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_create_and_observe_channel_async().
     * @param result a #GAsyncResult
     */
    createAndObserveChannelFinish(result: Gio.AsyncResult): Channel
    /**
     * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * and let the ChannelDispatcher dispatch it to an handler.
     * `callback` will be called when the channel has been created and dispatched,
     * or the request has failed.
     * You can then call tp_account_channel_request_create_channel_finish() to
     * get the result of the operation.
     * @param preferredHandler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    createChannelAsync(preferredHandler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_create_channel_async().
     * @param result a #GAsyncResult
     */
    createChannelFinish(result: Gio.AsyncResult): boolean
    /**
     * Return the #TpAccountChannelRequest:request-vardict construct-only
     * property.
     */
    dupRequest(): GLib.Variant
    /**
     * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * that you are going to handle yourself.
     * When the operation is finished, `callback` will be called. You can then call
     * tp_account_channel_request_ensure_and_handle_channel_finish() to get the
     * result of the operation.
     * 
     * If the channel already exists and is already being handled, or if a
     * newly created channel is sent to a different handler, this operation
     * will fail with the error %TP_ERROR_NOT_YOURS. The other handler
     * will be notified that the channel was requested again (for instance
     * with #TpAccountChannelRequest::re-handled,
     * #TpBaseClientClassHandleChannelsImpl or #TpSimpleHandler:callback),
     * and can move its window to the foreground, if applicable.
     * 
     * (Behind the scenes, this works by creating a temporary #TpBaseClient, then
     * acting like tp_account_channel_request_ensure_channel_async() with the
     * temporary #TpBaseClient as the `preferred_handler`.)
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    ensureAndHandleChannelAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_ensure_and_handle_channel_async().
     * 
     * If the channel already exists and is already being handled, or if a
     * newly created channel is sent to a different handler, this operation
     * will fail with the error %TP_ERROR_NOT_YOURS.
     * 
     * `context` can be used to obtain extensible information about the channel
     * via tp_handle_channels_context_get_handler_info(), and any similar methods
     * that are added in future. It is not valid for the caller of this method
     * to call tp_handle_channels_context_accept(),
     * tp_handle_channels_context_delay() or tp_handle_channels_context_fail().
     * @param result a #GAsyncResult
     */
    ensureAndHandleChannelFinish(result: Gio.AsyncResult): [ /* returnType */ Channel | null, /* context */ HandleChannelsContext ]
    /**
     * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * and let the ChannelDispatcher dispatch it to an handler.
     * `callback` will be called when the channel has been created and dispatched,
     * or the request has failed.
     * You can then call tp_account_channel_request_create_channel_finish() to
     * get the result of the operation and a #TpChannel representing the channel
     * which has been created. Note that you are <emphasis>not</emphasis> handling
     * this channel and so should interact with the channel as an Observer.
     * See <ulink url="http://telepathy.freedesktop.org/doc/book/sect.channel-dispatcher.clients.html">
     * the Telepathy book</ulink> for details about how clients should interact
     * with channels.
     * 
     * If a suitable channel already existed, its handler will be notified that
     * the channel was requested again (for instance with
     * #TpAccountChannelRequest::re-handled, #TpBaseClientClassHandleChannelsImpl
     * or #TpSimpleHandler:callback, if it is implemented using Telepathy-GLib),
     * so that it can re-present the window to the user, for example.
     * Otherwise, a new channel will be created and dispatched to a handler.
     * @param preferredHandler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    ensureAndObserveChannelAsync(preferredHandler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_create_and_observe_channel_async().
     * @param result a #GAsyncResult
     */
    ensureAndObserveChannelFinish(result: Gio.AsyncResult): Channel
    /**
     * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
     * channel with the properties defined in #TpAccountChannelRequest:request
     * and let the ChannelDispatcher dispatch it to an handler.
     * 
     * If a suitable channel already existed, its handler will be notified that
     * the channel was requested again (for instance with
     * #TpAccountChannelRequest::re-handled, #TpBaseClientClassHandleChannelsImpl
     * or #TpSimpleHandler:callback, if it is implemented using Telepathy-GLib),
     * so that it can re-present the window to the user, for example.
     * Otherwise, a new channel will be created and dispatched to a handler.
     * 
     * `callback` will be called when an existing channel's handler has been
     * notified, a new channel has been created and dispatched, or the request
     * has failed.
     * You can then call tp_account_channel_request_ensure_channel_finish() to
     * get the result of the operation.
     * @param preferredHandler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the request is satisfied
     */
    ensureChannelAsync(preferredHandler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel creation started using
     * tp_account_channel_request_ensure_channel_async().
     * @param result a #GAsyncResult
     */
    ensureChannelFinish(result: Gio.AsyncResult): boolean
    /**
     * Return the #TpAccountChannelRequest:account construct-only property
     */
    getAccount(): Account
    /**
     * Return the #TpAccountChannelRequest:channel-request property
     */
    getChannelRequest(): ChannelRequest
    /**
     * Return the #TpAccountChannelRequest:request construct-only property
     */
    getRequest(): GLib.HashTable
    /**
     * Return the #TpAccountChannelRequest:user-action-time construct-only property
     */
    getUserActionTime(): number
    /**
     * Set `factory` as the #TpClientChannelFactory that will be used to
     * create the channel requested by `self`.
     * By default #TpAutomaticProxyFactory is used.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param factory a #TpClientChannelFactory
     */
    setChannelFactory(factory: ClientChannelFactory): void
    /**
     * Indicate that the channel which is going to be requested using `self`
     * is an upgrade of the channels whose object paths is listed in `channels`.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param channels a #NULL-terminated array of channel paths
     */
    setConferenceInitialChannels(channels: string): void
    /**
     * If `delegate` is %TRUE, asks to the client currently handling the channels to
     * delegate them to the preferred handler (passed when calling
     * tp_account_channel_request_ensure_channel_async() for example).
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param delegate %TRUE to request to delegate channels
     */
    setDelegateToPreferredHandler(delegate: boolean): void
    /**
     * Turn on support for
     * the org.freedesktop.Telepathy.ChannelRequest.DelegateToPreferredHandler
     * hint.
     * 
     * When receiving a request containing this hint, `self` will automatically
     * delegate the channel to the preferred handler of the request and then call
     * `callback` to inform the client that it is no longer handling this channel.
     * 
     * `callback` may be called any time after (and only after) requesting and
     * handling the channel (i.e. you have called create_and_handle or
     * ensure_and_handle).
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * 
     * See also: tp_base_client_set_delegated_channels_callback()
     * @param callback function called the channel requested using `self` is delegated, may not be %NULL
     */
    setDelegatedChannelCallback(callback: AccountChannelRequestDelegatedChannelCb): void
    /**
     * Configure this channel request to provide the recipient of the file
     * with the given description.
     * 
     * If file descriptions are not supported by the protocol, or if this
     * method is used on a request that is not actually a file transfer, the
     * channel request will fail. Use
     * tp_capabilities_supports_file_transfer_description() to determine
     * whether outgoing file transfers can have a description.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param description a description of the file
     */
    setFileTransferDescription(description: string): void
    /**
     * Configure this channel request to accompany the file transfer with
     * the hash of the file.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param hashType a type of `hash`
     * @param hash hash of the contents of the file transfer
     */
    setFileTransferHash(hashType: FileHashType, hash: string): void
    /**
     * Configure this channel request to inform the recipient of the file
     * that this channel will not send the first `offset` bytes of the file.
     * In some protocols, this can be used to resume an interrupted transfer.
     * 
     * If this method is not called, the default is to start from the
     * beginning of the file (equivalent to `offset` = 0).
     * 
     * If offsets greater than 0 are not supported by the protocol, or if this
     * method is used on a request that is not actually a file transfer, the
     * channel request will fail. Use
     * tp_capabilities_supports_file_transfer_initial_offset() to determine
     * whether offsets greater than 0 are available.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param offset the offset into the file at which the transfer will start
     */
    setFileTransferInitialOffset(offset: number): void
    /**
     * Configure this channel request to accompany the file transfer with
     * the given modification timestamp for the file.
     * 
     * If file timestamps are not supported by the protocol, or if this
     * method is used on a request that is not actually a file transfer, the
     * channel request will fail. Use
     * tp_capabilities_supports_file_transfer_date() to determine
     * whether outgoing file transfers can have a timestamp.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param timestamp the modification timestamp of the file, in seconds since the  Unix epoch (the beginning of 1970 in the UTC time zone), as returned  by g_date_time_to_unix()
     */
    setFileTransferTimestamp(timestamp: number): void
    /**
     * Configure this channel request to provide other local Telepathy
     * components with the URI of the file being sent. Unlike most
     * properties on a file transfer channel, this information is not
     * sent to the recipient of the file; instead, it is signalled on
     * D-Bus for use by other Telepathy components.
     * 
     * The URI should usually be a <code>file</code> URI as defined by
     * <ulink url="http://www.apps.ietf.org/rfc/rfc1738.html#sec-3.10">RFC 1738
     * §3.10</ulink> (for instance, <code>file:///path/to/file</code> or
     * <code>file://localhost/path/to/file</code>). If a remote resource
     * is being transferred to a contact, it may have a different scheme,
     * such as <code>http</code>.
     * 
     * Even if this method is used, the connection manager will not read
     * the file from disk: the handler for the channel is still
     * responsible for streaming the file. However, providing the URI
     * allows a local logger to log which file was transferred, for instance.
     * 
     * If this functionality is not supported by the connection manager, or
     * if this method is used on a request that is not actually a file transfer,
     * the channel request will fail. Use
     * tp_capabilities_supports_file_transfer_uri() to determine
     * whether outgoing file transfers can have a URI.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param uri the source URI for the file
     */
    setFileTransferUri(uri: string): void
    /**
     * Set additional information about the channel request, which will be used
     * in the resulting request's #TpChannelRequest:hints property.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param key the key used for the hint
     * @param value a variant containting the hint value
     */
    setHint(key: string, value: GLib.Variant): void
    /**
     * Set additional information about the channel request, which will be used
     * as the value for the resulting request's #TpChannelRequest:hints property.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * 
     * In high-level language bindings, use tp_account_channel_request_set_hint()
     * instead.
     * @param hints a #TP_HASH_TYPE_STRING_VARIANT_MAP
     */
    setHints(hints: GLib.HashTable): void
    /**
     * Indicate that the contacts listed in `ids` have to be invited to the
     * conference represented by the channel which is going to be requested
     * using `self`.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param ids a #NULL-terminated array of contact ids
     */
    setInitialInviteeIds(ids: string): void
    /**
     * Indicate that the contacts listed in `contacts` have to be invited to the
     * conference represented by the channel which is going to be requested
     * using `self`.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param contacts a #GPtrArray of #TpContact
     */
    setInitialInvitees(contacts: Contact[]): void
    /**
     * Configure this channel request to include the given property, as
     * documented in the Telepathy D-Bus API Specification or an
     * implementation-specific extension.
     * 
     * Using this method is not recommended, but it can be necessary for
     * experimental or implementation-specific interfaces.
     * 
     * If the property is not supported by the protocol or channel type, the
     * channel request will fail. Use #TpCapabilities and the Telepathy
     * D-Bus API Specification to determine which properties are available.
     * 
     * If `value` is a floating reference, this method takes ownership of it
     * by using g_variant_ref_sink(). This allows convenient inline use of
     * #GVariant constructors:
     * 
     * |[
     * tp_account_channel_request_set_request_property (acr, "com.example.Int",
     *     g_variant_new_int32 (17));
     * tp_account_channel_request_set_request_property (acr, "com.example.String",
     *     g_variant_new_string ("ferret"));
     * ```
     * 
     * 
     * It is an error to provide a `value` which contains types not supported by
     * D-Bus.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param name a D-Bus property name
     * @param value an arbitrary value for the property
     */
    setRequestProperty(name: string, value: GLib.Variant): void
    /**
     * If `is_sms_channel` is set to #TRUE, messages sent and received on the
     * requested channel will be transmitted via SMS.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param isSmsChannel #TRUE if the channel should use SMS
     */
    setSmsChannel(isSmsChannel: boolean): void
    /**
     * Configure this request to create a peer-to-peer channel with `contact` as
     * the other peer.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param contact the contact to be contacted
     */
    setTargetContact(contact: Contact): void
    /**
     * Configure this request to create a channel with `identifier,`
     * an identifier of type `handle_type`.
     * 
     * This function can't be called once `self` has been used to request a
     * channel.
     * @param handleType the type of `identifier,` typically %TP_HANDLE_TYPE_CONTACT  or %TP_HANDLE_TYPE_ROOM
     * @param identifier the unique identifier of the contact, room etc. to be  contacted
     */
    setTargetId(handleType: HandleType, identifier: string): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    connect(sigName: "re-handled", callback: AccountChannelRequest.ReHandledSignalCallback): number
    on(sigName: "re-handled", callback: AccountChannelRequest.ReHandledSignalCallback): number
    once(sigName: "re-handled", callback: AccountChannelRequest.ReHandledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "re-handled", userActionTime: number, context: HandleChannelsContext, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channel-request", callback: any): number
    on(sigName: "notify::channel-request", callback: any): number
    once(sigName: "notify::channel-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-request", ...args: any[]): void
    connect(sigName: "notify::request-vardict", callback: any): number
    on(sigName: "notify::request-vardict", callback: any): number
    once(sigName: "notify::request-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-vardict", ...args: any[]): void
    connect(sigName: "notify::user-action-time", callback: any): number
    on(sigName: "notify::user-action-time", callback: any): number
    once(sigName: "notify::user-action-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-action-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpAccountChannelRequest object.
 * @class 
 */
export class AccountChannelRequest extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequest

    constructor(config?: AccountChannelRequest.ConstructorProperties) 
    /**
     * Convenience function to create a new #TpAccountChannelRequest object.
     * @constructor 
     * @param account a #TpAccount
     * @param request the requested  properties of the channel (see #TpAccountChannelRequest:request)
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    constructor(account: Account, request: GLib.HashTable, userActionTime: number) 
    /**
     * Convenience function to create a new #TpAccountChannelRequest object.
     * @constructor 
     * @param account a #TpAccount
     * @param request the requested  properties of the channel (see #TpAccountChannelRequest:request)
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static new(account: Account, request: GLib.HashTable, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object
     * which will yield a Call channel, initially carrying audio only.
     * 
     * After creating the request, you will usually also need to set the "target"
     * of the channel by calling one of the following functions:
     * 
     * - tp_account_channel_request_set_target_contact()
     * - tp_account_channel_request_set_target_id()
     * 
     * To call a contact, either use
     * tp_account_channel_request_set_target_contact() or one of the generic
     * methods that takes a handle type argument. To check whether this
     * is possible, use tp_capabilities_supports_audio_call() with
     * `handle_type` set to %TP_HANDLE_TYPE_CONTACT.
     * 
     * <!-- reinstate this when we have CMs that actually allow it:
     * In some protocols it is possible to create a conference call which
     * takes place in a named chatroom, by calling
     * tp_account_channel_request_set_target_id() with `handle_type`
     * set to %TP_HANDLE_TYPE_ROOM. To test whether this is possible, use
     * tp_capabilities_supports_audio_call() with `handle_type` set to
     * %TP_HANDLE_TYPE_ROOM.
     * -->
     * 
     * In some protocols, it is possible to create a Call channel without
     * setting a target at all, which will result in a new, empty
     * conference call. To test whether this is possible, use
     * tp_capabilities_supports_audio_call() with `handle_type` set to
     * %TP_HANDLE_TYPE_NONE.
     * @constructor 
     * @param account a #TpAccount
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newAudioCall(account: Account, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object
     * which will yield a Call channel, initially carrying both audio
     * and video.
     * 
     * This is the same as tp_account_channel_request_new_audio_call(),
     * except that the channel will initially carry video as well as audio,
     * and instead of using tp_capabilities_supports_audio_call()
     * you should test capabilities with
     * tp_capabilities_supports_audio_video_call().
     * 
     * See the documentation of tp_account_channel_request_new_audio_call()
     * for details of how to set the target (contact, chatroom etc.) for the call.
     * @constructor 
     * @param account a #TpAccount
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newAudioVideoCall(account: Account, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object,
     * which will yield a DBusTube channel.
     * 
     * After creating the request, you will also need to set the "target"
     * of the channel by calling one of the following functions:
     * 
     * - tp_account_channel_request_set_target_contact()
     * - tp_account_channel_request_set_target_id()
     * @constructor 
     * @param account a #TpAccount
     * @param serviceName the service name that will be used over the tube. It should be
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newDbusTube(account: Account, serviceName: string, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object,
     * which will yield a FileTransfer channel to send a file to a contact.
     * 
     * After creating the request, you will also need to set the "target"
     * of the channel by calling one of the following functions:
     * 
     * - tp_account_channel_request_set_target_contact()
     * - tp_account_channel_request_set_target_id()
     * @constructor 
     * @param account a #TpAccount
     * @param filename a suggested name for the file, which should not contain  directories or directory separators (for example, if you are sending a file called /home/user/monkey.pdf, set this to monkey.pdf)
     * @param mimeType the MIME type (content-type) of the file;  a %NULL value is allowed, and is treated as  "application/octet-stream"
     * @param size the file's size in bytes
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newFileTransfer(account: Account, filename: string, mimeType: string | null, size: number, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object,
     * which will yield a StreamTube channel.
     * 
     * After creating the request, you will also need to set the "target"
     * of the channel by calling one of the following functions:
     * 
     * - tp_account_channel_request_set_target_contact()
     * - tp_account_channel_request_set_target_id()
     * @constructor 
     * @param account a #TpAccount
     * @param service the service name that will be used over the tube. It should be a well-known TCP service name as defined by http://www.iana.org/assignments/port-numbers or http://www.dns-sd.org/ServiceTypes.html, for instance "rsync" or "daap".
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newStreamTube(account: Account, service: string, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object
     * which will yield a Text channel.
     * 
     * After creating the request, you will also need to set the "target"
     * of the channel by calling one of the following functions:
     * 
     * - tp_account_channel_request_set_target_contact()
     * - tp_account_channel_request_set_target_id()
     * @constructor 
     * @param account a #TpAccount
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newText(account: Account, userActionTime: number): AccountChannelRequest
    /**
     * Convenience function to create a new #TpAccountChannelRequest object.
     * 
     * If `request` is a floating reference, this function will
     * take ownership of it, much like g_variant_ref_sink(). See documentation of
     * that function for details.
     * @constructor 
     * @param account a #TpAccount
     * @param request the requested  properties of the channel (see #TpAccountChannelRequest:request)  as a %G_VARIANT_TYPE_VARDICT
     * @param userActionTime the time of the user action that caused this request,  or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME (see  #TpAccountChannelRequest:user-action-time)
     */
    static newVardict(account: Account, request: GLib.Variant, userActionTime: number): AccountChannelRequest
    _init(config?: AccountChannelRequest.ConstructorProperties): void
}

export module AccountManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `account-disabled`
     */
    export interface AccountDisabledSignalCallback {
        (account: Account): void
    }

    /**
     * Signal callback interface for `account-enabled`
     */
    export interface AccountEnabledSignalCallback {
        (account: Account): void
    }

    /**
     * Signal callback interface for `account-removed`
     */
    export interface AccountRemovedSignalCallback {
        (account: Account): void
    }

    /**
     * Signal callback interface for `account-validity-changed`
     */
    export interface AccountValidityChangedSignalCallback {
        (account: Account, valid: boolean): void
    }

    /**
     * Signal callback interface for `most-available-presence-changed`
     */
    export interface MostAvailablePresenceChangedSignalCallback {
        (presence: number, status: string, message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface AccountManager {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.AccountManager

    /**
     * Requests an asynchronous create of an account on the account manager
     * `manager`. When the operation is finished, `callback` will be called. You can
     * then call tp_account_manager_create_account_finish() to get the result of
     * the operation.
     * 
     * The #TpAccount returned by tp_account_manager_create_account_finish()
     * will already have %TP_ACCOUNT_FEATURE_CORE prepared, along with all
     * features previously passed to
     * tp_simple_client_factory_add_account_features() for the account
     * manager's #TpProxy:factory.
     * 
     * It is usually better to use #TpAccountRequest instead, particularly when
     * using high-level language bindings.
     * @param connectionManager the name of a connection manager
     * @param protocol the name of a protocol
     * @param displayName the display name for the account
     * @param parameters parameters  for the new account
     * @param properties properties  for the new account
     * @param callback a callback to call when the request is satisfied
     */
    createAccountAsync(connectionManager: string, protocol: string, displayName: string, parameters: GLib.HashTable, properties: GLib.HashTable, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async create account operation, and returns a new #TpAccount
     * object. It has %TP_ACCOUNT_FEATURE_CORE prepared, along with all
     * features previously passed to
     * tp_simple_client_factory_add_account_features() for the account
     * manager's #TpProxy:factory.
     * 
     * The caller must keep a ref to the returned object using g_object_ref() if
     * it is to be kept beyond the lifetime of `result`.
     * @param result a #GAsyncResult
     */
    createAccountFinish(result: Gio.AsyncResult): Account
    /**
     * Returns a newly allocated #GList of reffed valid accounts in `manager`.
     * The list must be freed with g_list_free_full() and g_object_unref() after
     * used.
     * 
     * The returned #TpAccount<!-- -->s are guaranteed to have
     * %TP_ACCOUNT_FEATURE_CORE prepared, along with all features previously passed
     * to tp_simple_client_factory_add_account_features() for the account
     * manager's #TpProxy:factory.
     * 
     * The list of valid accounts returned is not guaranteed to have been retrieved
     * until %TP_ACCOUNT_MANAGER_FEATURE_CORE is prepared
     * (tp_proxy_prepare_async() has returned). Until this feature has
     * been prepared, an empty list (%NULL) will be returned.
     */
    dupValidAccounts(): Account[]
    /**
     * Enable autostarting the account manager D-Bus service. This means
     * that the account manager will be restarted if it disappears from
     * the bus.
     */
    enableRestart(): void
    /**
     * Lookup an account in the account manager `manager`. If the desired account
     * has already been ensured then the same object will be returned, otherwise
     * it will create a new #TpAccount and add it to `manager`. As a result, if
     * `manager` thinks that the account doesn't exist, this will still add it to
     * `manager` to avoid races.
     * 
     * The account will be constructed via this account manager's #TpProxy:factory
     * (so it will be of an appropriate #TpAccount subclass if the factory
     * returns one), but does not necessarily have any features prepared yet.
     * Use tp_proxy_prepare_async() to prepare features, using
     * the contents of tp_simple_client_factory_dup_account_features() as a
     * parameter if you want to prepare the same features that would
     * normally be used.
     * 
     * The caller must keep a ref to the returned object using g_object_ref() if
     * it is to be kept.
     * @param path the object path for an account
     */
    ensureAccount(path: string): Account
    /**
     * Gets the most available presence over all accounts in `manager`. This
     * function does not average presences across all accounts, but it merely
     * finds the "most available" presence. As a result, there is a guarantee
     * that there exists at least one account in `manager` with the returned
     * presence.
     * 
     * If no accounts are enabled or valid the output will be
     * (%TP_CONNECTION_PRESENCE_TYPE_OFFLINE, "offline", "").
     * 
     * Since 0.17.5, if the only connected accounts does not implement
     * %TP_IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE, the output will be
     * (%TP_CONNECTION_PRESENCE_TYPE_AVAILABLE, "available", "").
     * 
     * The return value of this function is not guaranteed to have been retrieved
     * until tp_proxy_prepare_async() has finished; until then, the
     * value will be the same as if no accounts are enabled or valid.
     */
    getMostAvailablePresence(): [ /* returnType */ ConnectionPresenceType, /* status */ string, /* message */ string ]
    /**
     * Returns a newly allocated #GList of valid accounts in `manager`. The list
     * must be freed with g_list_free() after used. None of the accounts in the
     * returned list are guaranteed to be ready.
     * 
     * Note that the #TpAccount<!-- -->s in the returned #GList are not reffed
     * before returning from this function. One could ref every item in the list
     * like the following example:
     * |[
     * GList *accounts;
     * account = tp_account_manager_get_valid_accounts (manager);
     * g_list_foreach (accounts, (GFunc) g_object_ref, NULL);
     * ```
     * 
     * 
     * The returned #TpAccount<!-- -->s are guaranteed to have
     * %TP_ACCOUNT_FEATURE_CORE prepared, along with all features previously passed
     * to tp_simple_client_factory_add_account_features() for the account
     * manager's #TpProxy:factory.
     * 
     * The list of valid accounts returned is not guaranteed to have been retrieved
     * until %TP_ACCOUNT_MANAGER_FEATURE_CORE is prepared
     * (tp_proxy_prepare_async() has returned). Until this feature has
     * been prepared, an empty list (%NULL) will be returned.
     */
    getValidAccounts(): Account[]
    /**
     * Iterates through the accounts in `manager` and requests the presence
     * (`type,` `status` and `message)`. Note that the presence requested here is
     * merely a request, and if might not be satisfiable.
     * 
     * You can find the most available presence across all accounts by calling
     * tp_account_manager_get_most_available_presence().
     * 
     * Setting a requested presence on all accounts will have no effect
     * until tp_proxy_prepare_async()
     * (or the older tp_account_manager_prepare_async()) has finished.
     * @param type a presence type to request
     * @param status a status to request
     * @param message a status message to request
     */
    setAllRequestedPresences(type: ConnectionPresenceType, status: string, message: string): void
    /**
     * Define the #TpAccountManager singleton that will be returned by
     * tp_account_manager_dup().
     * 
     * This function may only be called before the first call to
     * tp_account_manager_dup(), and may not be called more than once. Applications
     * which use a custom #TpSimpleClientFactory and want the default
     * #TpAccountManager to use that factory should call this after calling
     * tp_account_manager_new_with_factory().
     * 
     * Unlike tp_account_manager_dup(), this function will keep an internal
     * reference to `manager,` so it will never be destroyed.
     * 
     * Note that `manager` must use the default #TpDBusDaemon as returned by
     * tp_dbus_daemon_dup()
     */
    setDefault(): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.AccountManager

    connect(sigName: "account-disabled", callback: AccountManager.AccountDisabledSignalCallback): number
    on(sigName: "account-disabled", callback: AccountManager.AccountDisabledSignalCallback): number
    once(sigName: "account-disabled", callback: AccountManager.AccountDisabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-disabled", ...args: any[]): void
    connect(sigName: "account-enabled", callback: AccountManager.AccountEnabledSignalCallback): number
    on(sigName: "account-enabled", callback: AccountManager.AccountEnabledSignalCallback): number
    once(sigName: "account-enabled", callback: AccountManager.AccountEnabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-enabled", ...args: any[]): void
    connect(sigName: "account-removed", callback: AccountManager.AccountRemovedSignalCallback): number
    on(sigName: "account-removed", callback: AccountManager.AccountRemovedSignalCallback): number
    once(sigName: "account-removed", callback: AccountManager.AccountRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-removed", ...args: any[]): void
    connect(sigName: "account-validity-changed", callback: AccountManager.AccountValidityChangedSignalCallback): number
    on(sigName: "account-validity-changed", callback: AccountManager.AccountValidityChangedSignalCallback): number
    once(sigName: "account-validity-changed", callback: AccountManager.AccountValidityChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-validity-changed", valid: boolean, ...args: any[]): void
    connect(sigName: "most-available-presence-changed", callback: AccountManager.MostAvailablePresenceChangedSignalCallback): number
    on(sigName: "most-available-presence-changed", callback: AccountManager.MostAvailablePresenceChangedSignalCallback): number
    once(sigName: "most-available-presence-changed", callback: AccountManager.MostAvailablePresenceChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "most-available-presence-changed", status: string, message: string, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AccountManager

    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Telepathy Account Manager stores real-time communication accounts and
 * their configuration, places accounts online on request, and manipulates
 * accounts' presence, nicknames and avatars.
 * 
 * #TpAccountManager is the "top level" object. Since 0.16 it always has a
 * non-%NULL #TpProxy:factory, and its #TpProxy:factory will be
 * propagated to all other objects like #TpAccountManager -> #TpAccount ->
 * #TpConnection -> #TpContact and #TpChannel. This means that desired features
 * set on that factory will be prepared on all those objects.
 * If a #TpProxy:factory is not specified when the #TpAccountManager is
 * constructed, it will use a #TpAutomaticClientFactory.
 * 
 * <example id="account-manager"><title>TpAccountManager example</title><programlisting><xi:include xmlns:xi="http://www.w3.org/2001/XInclude" parse="text" href="../../../examples/client/contact-list.c"><xi:fallback>FIXME: MISSING XINCLUDE CONTENT</xi:fallback></xi:include></programlisting></example>
 * @class 
 */
export class AccountManager extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountManager

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AccountManager

    constructor(config?: AccountManager.ConstructorProperties) 
    /**
     * Convenience function to create a new account manager proxy. The returned
     * #TpAccountManager is not guaranteed to be prepared on return.
     * Its #TpProxy:factory will be a new #TpAutomaticClientFactory for
     * `bus_daemon`.
     * 
     * Use tp_account_manager_dup() instead if you want an account manager proxy
     * on the starter or session bus (which is almost always the right thing for
     * Telepathy).
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     */
    constructor(busDaemon: DBusDaemon) 
    /**
     * Convenience function to create a new account manager proxy. The returned
     * #TpAccountManager is not guaranteed to be prepared on return.
     * Its #TpProxy:factory will be a new #TpAutomaticClientFactory for
     * `bus_daemon`.
     * 
     * Use tp_account_manager_dup() instead if you want an account manager proxy
     * on the starter or session bus (which is almost always the right thing for
     * Telepathy).
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     */
    static new(busDaemon: DBusDaemon): AccountManager
    /**
     * Convenience function to create a new account manager proxy. The returned
     * #TpAccountManager is not guaranteed to be ready on return.
     * 
     * Should be used only by applications having their own #TpSimpleClientFactory
     * subclass. Usually this should be done at application startup and followed by
     * a call to tp_account_manager_set_default() to ensure other libraries/plugins
     * will use this custom factory as well.
     * @constructor 
     * @param factory a #TpSimpleClientFactory
     */
    static newWithFactory(factory: SimpleClientFactory): AccountManager
    _init(config?: AccountManager.ConstructorProperties): void
    /**
     * Check if tp_account_manager_set_default() has already successfully been
     * called.
     */
    static canSetDefault(): boolean
    /**
     * Returns an account manager proxy on the D-Bus daemon on which this
     * process was activated (if it was launched by D-Bus service activation), or
     * the session bus (otherwise). This account manager will always have
     * the result of tp_dbus_daemon_dup() as its #TpProxy:dbus-daemon.
     * 
     * The returned #TpAccountManager is cached; the same #TpAccountManager object
     * will be returned by this function repeatedly, as long as at least one
     * reference exists. Note that the returned #TpAccountManager is not guaranteed
     * to be ready on return.
     * 
     * If tp_account_manager_set_default() has been called successfully,
     * that #TpAccountManager will be returned. Otherwise, a new #TpAccountManager
     * will be created the first time this function is called, using a new
     * #TpAutomaticClientFactory as its #TpProxy:factory.
     */
    static dup(): AccountManager
    /**
     * <!-- -->
     */
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpAccountManager have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_ACCOUNT_MANAGER.
     */
    static initKnownInterfaces(): void
}

export module AccountRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

        /**
         * The #TpAccountManager to create the account on.
         */
        accountManager?: AccountManager | null
        /**
         * The account's connection manager name.
         */
        connectionManager?: string | null
        /**
         * The account's display name. To change this property use
         * tp_account_request_set_display_name().
         */
        displayName?: string | null
        /**
         * The account's machine-readable protocol name, such as "jabber", "msn" or
         * "local-xmpp". Recommended names for most protocols can be found in the
         * Telepathy D-Bus Interface Specification.
         */
        protocol?: string | null
    }

}

export interface AccountRequest {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

    /**
     * The #TpAccountManager to create the account on.
     */
    readonly accountManager: AccountManager
    /**
     * The account's automatic presence type (a
     * #TpConnectionPresenceType). To change this property use
     * tp_account_request_set_automatic_presence().
     * 
     * When the account is put online automatically, for instance to
     * make a channel request or because network connectivity becomes
     * available, the automatic presence type, status and message will
     * be copied to their "requested" counterparts.
     */
    readonly automaticPresenceType: number
    /**
     * The string status name to use in conjunction with the
     * #TpAccountRequest:automatic-presence-type. To change this property
     * use tp_account_request_set_automatic_presence().
     */
    readonly automaticStatus: string
    /**
     * The user-defined message to use in conjunction with the
     * #TpAccount:automatic-presence-type. To change this property use
     * tp_account_request_set_automatic_presence().
     */
    readonly automaticStatusMessage: string
    /**
     * The avatar set on the account. The avatar's mime type can be read
     * in the #TpAccountRequest:avatar-mime-type property. To change this
     * property, use tp_account_request_set_avatar().
     */
    readonly avatar: object[]
    /**
     * The mime type of the #TpAccountRequest:avatar property. To change
     * this property, use tp_account_request_set_avatar().
     */
    readonly avatarMimeType: string
    /**
     * Whether the account should connect automatically or not. To change this
     * property, use tp_account_request_set_connect_automatically().
     */
    readonly connectAutomatically: boolean
    /**
     * The account's connection manager name.
     */
    readonly connectionManager: string
    /**
     * The account's display name. To change this property use
     * tp_account_request_set_display_name().
     */
    readonly displayName: string
    /**
     * Whether the account is enabled or not. To change this property
     * use tp_account_request_set_enabled().
     */
    readonly enabled: boolean
    /**
     * The account's icon name. To change this propery, use
     * tp_account_request_set_icon_name().
     */
    readonly iconName: string
    /**
     * The account's nickname. To change this property use
     * tp_account_request_set_nickname().
     */
    readonly nickname: string
    /**
     * The account's connection parameters. To add a parameter, use
     * tp_account_request_set_parameter() or another convience function.
     */
    readonly parameters: GLib.Variant
    /**
     * The account's properties.
     */
    readonly properties: GLib.Variant
    /**
     * The account's machine-readable protocol name, such as "jabber", "msn" or
     * "local-xmpp". Recommended names for most protocols can be found in the
     * Telepathy D-Bus Interface Specification.
     */
    readonly protocol: string
    /**
     * The account's requested presence type (a
     * #TpConnectionPresenceType). To change this property use
     * tp_account_request_set_requested_presence().
     */
    readonly requestedPresenceType: number
    /**
     * The requested Status string of the account. To change this
     * property use tp_account_request_set_requested_presence().
     */
    readonly requestedStatus: string
    /**
     * The requested status message message of the account. To change
     * this property use tp_account_request_set_requested_presence().
     */
    readonly requestedStatusMessage: string
    /**
     * A string describing the service of the account, which must
     * consist only of ASCII letters, numbers and hyphen/minus signs,
     * and start with a letter (matching the requirements for
     * Protocol). To change this property, use
     * tp_account_request_set_service().
     */
    readonly service: string
    /**
     * The account's storage provider. To change this property use
     * tp_account_request_set_storage_provider().
     */
    readonly storageProvider: string
    /**
     * The object paths of previously-active accounts superseded by this one.
     * For instance, this can be used in a logger to read old logs for an
     * account that has been migrated from one connection manager to another.
     * 
     * To add to this property use tp_account_request_add_supersedes().
     */
    readonly supersedes: string[]

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

    /**
     * Add an account object path to the list of superseded accounts which
     * this new account will supersede. Use the
     * #TpAccountRequest:supersedes property to read the current list of
     * superseded accounts.
     * @param supersededPath an account object path to add to the supersedes   list
     */
    addSupersedes(supersededPath: string): void
    /**
     * Start an asynchronous operation to create the account `self` on the
     * account manager.
     * 
     * `callback` will only be called when the newly created #TpAccount has
     * the %TP_ACCOUNT_FEATURE_CORE feature ready on it, so when calling
     * tp_account_request_create_account_finish(), one can guarantee this
     * feature.
     * @param callback a function to call when the account has been created
     */
    createAccountAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous account creation operation and returns a
     * new ref to a #TpAccount object. The returned account will have the
     * features listed in tp_simple_client_factory_dup_account_features()
     * (with the proxy factory from #TpAccountRequest:account-manager)
     * prepared on it.
     * @param result a #GAsyncResult
     */
    createAccountFinish(result: Gio.AsyncResult): Account
    /**
     * Set the automatic presence for the new account, `self,` to the type
     * (`presence,` `status)`, with message `message`. Use the
     * #TpAccountRequest:automatic-presence-type,
     * #TpAccountRequest:automatic-status, and
     * #TpAccountRequest:automatic-status-message properties to read the
     * current automatic presence.
     * @param presence the automatic presence type
     * @param status the automatic presence status
     * @param message the automatic presence message
     */
    setAutomaticPresence(presence: ConnectionPresenceType, status: string, message: string): void
    /**
     * Set the avatar of the account `self` to `avatar`. Use the
     * #TpAccountRequest:avatar and #TpAccountRequest:avatar-mime-type
     * properties to read the current avatar.
     * @param avatar a new avatar to set; can   be %NULL only if %len equals 0
     * @param mimeType the MIME type of the new avatar; can be %NULL  only if `len` equals 0
     */
    setAvatar(avatar: Uint8Array | null, mimeType: string | null): void
    /**
     * Set the connect automatically property of the account on creation
     * to `connect_automatically` so that the account is brought online to
     * the automatic presence. Use the
     * #TpAccountRequest:connect-automatically property to read the current
     * connect automatically value.
     * @param connectAutomatically %TRUE if the account is to connect automatically
     */
    setConnectAutomatically(connectAutomatically: boolean): void
    /**
     * Set the display name for the new account, `self,` to `name`. Use the
     * #TpAccountRequest:display-name property to read the current display
     * name.
     * @param name a display name for the account
     */
    setDisplayName(name: string): void
    /**
     * Set the enabled property of the account on creation to
     * `enabled`. Use the #TpAccountRequest:enabled property to read the
     * current enabled value.
     * @param enabled %TRUE if the account is to be enabled
     */
    setEnabled(enabled: boolean): void
    /**
     * Set the icon name for the new account, `self,` to `icon`. Use the
     * #TpAccountRequest:icon-name property to read the current icon name.
     * @param icon an icon name for the account
     */
    setIconName(icon: string): void
    /**
     * Set the nickname for the new account, `self,` to `nickname`. Use the
     * #TpAccountRequest:nickname property to read the current nickname.
     * @param nickname a nickname for the account
     */
    setNickname(nickname: string): void
    /**
     * Set an account parameter, `key,` to `value`. Use the
     * #TpAccountRequest:parameters property to read the current list of
     * set parameters.
     * 
     * Parameters can be unset using tp_account_request_unset_parameter().
     * @param key the parameter key
     * @param value a variant containing the parameter value
     */
    setParameter(key: string, value: GLib.Variant): void
    /**
     * Set the requested presence for the new account, `self,` to the type
     * (`presence,` `status)`, with message `message`. Use the
     * #TpAccountRequest:requested-presence-type,
     * #TpAccountRequest:requested-status, and
     * #TpAccountRequest:requested-status-message properties to read the
     * current requested presence.
     * @param presence the requested presence type
     * @param status the requested presence status
     * @param message the requested presence message
     */
    setRequestedPresence(presence: ConnectionPresenceType, status: string, message: string): void
    /**
     * Set the service property of the account to `service`. Use the
     * #TpAccountRequest:service property to read the current value.
     * @param service the service name for
     */
    setService(service: string): void
    /**
     * Set the account storage to use when creating the account. Use the
     * #TpAccountRequest:storage-provider property to read the current value.
     * @param provider the name of an account storage implementation
     */
    setStorageProvider(provider: string): void
    /**
     * Unset the account parameter `key` which has previously been set
     * using tp_account_request_set_parameter() or another convenience
     * function.
     * @param key the parameter key
     */
    unsetParameter(key: string): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

    connect(sigName: "notify::account-manager", callback: any): number
    on(sigName: "notify::account-manager", callback: any): number
    once(sigName: "notify::account-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-manager", ...args: any[]): void
    connect(sigName: "notify::automatic-presence-type", callback: any): number
    on(sigName: "notify::automatic-presence-type", callback: any): number
    once(sigName: "notify::automatic-presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-presence-type", ...args: any[]): void
    connect(sigName: "notify::automatic-status", callback: any): number
    on(sigName: "notify::automatic-status", callback: any): number
    once(sigName: "notify::automatic-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-status", ...args: any[]): void
    connect(sigName: "notify::automatic-status-message", callback: any): number
    on(sigName: "notify::automatic-status-message", callback: any): number
    once(sigName: "notify::automatic-status-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-status-message", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: any): number
    on(sigName: "notify::avatar", callback: any): number
    once(sigName: "notify::avatar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::avatar-mime-type", callback: any): number
    on(sigName: "notify::avatar-mime-type", callback: any): number
    once(sigName: "notify::avatar-mime-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar-mime-type", ...args: any[]): void
    connect(sigName: "notify::connect-automatically", callback: any): number
    on(sigName: "notify::connect-automatically", callback: any): number
    once(sigName: "notify::connect-automatically", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connect-automatically", ...args: any[]): void
    connect(sigName: "notify::connection-manager", callback: any): number
    on(sigName: "notify::connection-manager", callback: any): number
    once(sigName: "notify::connection-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-manager", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::properties", callback: any): number
    on(sigName: "notify::properties", callback: any): number
    once(sigName: "notify::properties", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::properties", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::requested-presence-type", callback: any): number
    on(sigName: "notify::requested-presence-type", callback: any): number
    once(sigName: "notify::requested-presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-presence-type", ...args: any[]): void
    connect(sigName: "notify::requested-status", callback: any): number
    on(sigName: "notify::requested-status", callback: any): number
    once(sigName: "notify::requested-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-status", ...args: any[]): void
    connect(sigName: "notify::requested-status-message", callback: any): number
    on(sigName: "notify::requested-status-message", callback: any): number
    once(sigName: "notify::requested-status-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-status-message", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::storage-provider", callback: any): number
    on(sigName: "notify::storage-provider", callback: any): number
    once(sigName: "notify::storage-provider", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-provider", ...args: any[]): void
    connect(sigName: "notify::supersedes", callback: any): number
    on(sigName: "notify::supersedes", callback: any): number
    once(sigName: "notify::supersedes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::supersedes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object for representing a currently non-existent account which
 * is to be created on a #TpAccountManager.
 * @class 
 */
export class AccountRequest extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AccountRequest

    constructor(config?: AccountRequest.ConstructorProperties) 
    /**
     * Convenience function to create a new account request object which
     * will assist in the creation of a new account on `account_manager,`
     * using connection manager `manager,` and protocol `protocol`.
     * @constructor 
     * @param accountManager the #TpAccountManager to create the account on
     * @param manager the name of the connection manager
     * @param protocol the name of the protocol on `manager`
     * @param displayName the user-visible name of this account
     */
    constructor(accountManager: AccountManager, manager: string, protocol: string, displayName: string) 
    /**
     * Convenience function to create a new account request object which
     * will assist in the creation of a new account on `account_manager,`
     * using connection manager `manager,` and protocol `protocol`.
     * @constructor 
     * @param accountManager the #TpAccountManager to create the account on
     * @param manager the name of the connection manager
     * @param protocol the name of the protocol on `manager`
     * @param displayName the user-visible name of this account
     */
    static new(accountManager: AccountManager, manager: string, protocol: string, displayName: string): AccountRequest
    /**
     * Convenience function to create a new #TpAccountRequest object using
     * a #TpProtocol instance, instead of specifying connection manager
     * and protocol name specifically. See tp_account_request_new() for
     * more details.
     * @constructor 
     * @param accountManager the #TpAccountManager to create the account on
     * @param protocol a #TpProtocol
     * @param displayName the user-visible name of this account
     */
    static newFromProtocol(accountManager: AccountManager, protocol: Protocol, displayName: string): AccountRequest
    _init(config?: AccountRequest.ConstructorProperties): void
}

export module AddDispatchOperationContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

        /**
         * A #TpAccount object representing the Account of the DispatchOperation
         * that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        account?: Account | null
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to AddDispatchOperation.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        channels?: object[] | null
        /**
         * A #TpConnection object representing the Connection of the DispatchOperation
         * that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        connection?: Connection | null
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        dispatchOperation?: ChannelDispatchOperation | null
    }

}

export interface AddDispatchOperationContext {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

    /**
     * A #TpAccount object representing the Account of the DispatchOperation
     * that has been passed to AddDispatchOperation.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly account: Account
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels
     * that have been passed to AddDispatchOperation.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly channels: object[]
    /**
     * A #TpConnection object representing the Connection of the DispatchOperation
     * that has been passed to AddDispatchOperation.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly connection: Connection
    /**
     * A #TpChannelDispatchOperation object representing the
     * ChannelDispatchOperation that has been passed to AddDispatchOperation.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly dispatchOperation: ChannelDispatchOperation

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl when it's done so
     * the D-Bus method can return.
     */
    accept(): void
    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl to indicate that it
     * implements the method in an async way. The caller must take a reference
     * to the #TpAddDispatchOperationContext before calling this function, and
     * is responsible for calling either
     * tp_add_dispatch_operation_context_accept() or
     * tp_add_dispatch_operation_context_fail() later.
     */
    delay(): void
    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl to raise a D-Bus error.
     * @param error the error to return from the method
     */
    fail(error: GLib.Error): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channels", callback: any): number
    on(sigName: "notify::channels", callback: any): number
    once(sigName: "notify::channels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::dispatch-operation", callback: any): number
    on(sigName: "notify::dispatch-operation", callback: any): number
    once(sigName: "notify::dispatch-operation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dispatch-operation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing the context of a Approver.AddDispatchOperation()
 * call.
 * @class 
 */
export class AddDispatchOperationContext extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContext

    constructor(config?: AddDispatchOperationContext.ConstructorProperties) 
    _init(config?: AddDispatchOperationContext.ConstructorProperties): void
}

export module AutomaticClientFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends SimpleClientFactory.ConstructorProperties {
    }

}

export interface AutomaticClientFactory {

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AutomaticClientFactory

    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpAutomaticClientFactory
 * @class 
 */
export class AutomaticClientFactory extends SimpleClientFactory {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AutomaticClientFactory

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AutomaticClientFactory

    constructor(config?: AutomaticClientFactory.ConstructorProperties) 
    /**
     * Returns a new #TpAutomaticClientFactory instance. If `dbus` is %NULL,
     * tp_dbus_daemon_dup() will be used.
     * @constructor 
     * @param dbus a #TpDBusDaemon, or %NULL
     */
    constructor(dbus: DBusDaemon | null) 
    /**
     * Returns a new #TpAutomaticClientFactory instance. If `dbus` is %NULL,
     * tp_dbus_daemon_dup() will be used.
     * @constructor 
     * @param dbus a #TpDBusDaemon, or %NULL
     */
    static new(dbus: DBusDaemon | null): AutomaticClientFactory

    // Overloads of new

    /**
     * Creates a new #TpSimpleClientFactory instance. If `dbus` is %NULL,
     * tp_dbus_daemon_dup() will be used.
     * @constructor 
     * @param dbus a #TpDBusDaemon, or %NULL
     */
    static new(dbus: DBusDaemon | null): SimpleClientFactory
    _init(config?: AutomaticClientFactory.ConstructorProperties): void
}

export module AutomaticProxyFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends ClientChannelFactory.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AutomaticProxyFactory extends ClientChannelFactory {

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.AutomaticProxyFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpAutomaticProxyFactory
 * @class 
 */
export class AutomaticProxyFactory extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AutomaticProxyFactory

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AutomaticProxyFactory

    constructor(config?: AutomaticProxyFactory.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpAutomaticProxyFactory instance.
     * @constructor 
     */
    constructor() 
    /**
     * Convenient function to create a new #TpAutomaticProxyFactory instance.
     * @constructor 
     */
    static new(): AutomaticProxyFactory
    _init(config?: AutomaticProxyFactory.ConstructorProperties): void
    /**
     * Returns a cached #TpAutomaticProxyFactory; the same
     * #TpAutomaticProxyFactory object will be returned by this function repeatedly,
     * as long as at least one reference exists.
     */
    static dup(): AutomaticProxyFactory
}

export module BaseClient {

    // Signal callback interfaces

    /**
     * Signal callback interface for `request-added`
     */
    export interface RequestAddedSignalCallback {
        (account: Account, request: ChannelRequest): void
    }

    /**
     * Signal callback interface for `request-removed`
     */
    export interface RequestRemovedSignalCallback {
        (request: ChannelRequest, error: string, message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.BaseClient

        /**
         * Account manager for this base client, used to look up or create
         * #TpAccount objects. This may be specified in the constructor in order
         * to get existing #TpAccount objects.
         * 
         * It is not guaranteed that any of its features have been prepared, and
         * it is not necessary to wait for any features before specifying this
         * property in the constructor.
         * 
         * Clients that interact with the #TpAccount should usually
         * set this property instead of #TpBaseClient:dbus-daemon. Doing this
         * will ensure that each account, connection or contact is represented by
         * a single #TpAccount, #TpConnection or #TpContact object, shared between
         * all the cooperating modules that have the same #TpAccountManager.
         * 
         * If the #TpBaseClient:dbus-daemon is set to the result of
         * tp_dbus_daemon_dup(), then this property defaults to
         * the result of tp_account_manager_dup().
         * 
         * This property may be %NULL initially, but will always be non-%NULL
         * after the #TpBaseClient has been constructed.
         * 
         * It is an error to specify both a non-%NULL account manager, and a
         * non-%NULL #TpBaseClient:dbus-daemon that is not the same as the
         * account manager's #TpProxy:dbus-daemon.
         */
        accountManager?: AccountManager | null
        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies. While
         * tp_base_client_register() has not yet been called, this property can be
         * changed using tp_base_client_set_channel_factory().
         * 
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channelFactory?: GObject.Object | null
        /**
         * #TpDBusDaemon object encapsulating this object's connection to D-Bus.
         * Read-only except during construction.
         * 
         * This property can't be %NULL after construction.
         * 
         * Since 0.11.14 this property may be %NULL or unspecified in
         * g_object_new(), but only if #TpBaseClient:account-manager is provided
         * instead, in which case its #TpProxy:dbus-daemon property will be
         * used.
         */
        dbusDaemon?: DBusDaemon | null
        /**
         * Factory for this base client, used to look up or create
         * #TpAccount objects.
         */
        factory?: SimpleClientFactory | null
        /**
         * The name of the client. This is used to register the D-Bus service name
         * and object path of the service.
         * 
         * This property can't be %NULL.
         */
        name?: string | null
        /**
         * If %TRUE, tp_base_client_register() will append an unique token to the
         * service bus name and object path to ensure they are unique.
         */
        uniquifyName?: boolean | null
    }

}

export interface BaseClient {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    /**
     * Account manager for this base client, used to look up or create
     * #TpAccount objects. This may be specified in the constructor in order
     * to get existing #TpAccount objects.
     * 
     * It is not guaranteed that any of its features have been prepared, and
     * it is not necessary to wait for any features before specifying this
     * property in the constructor.
     * 
     * Clients that interact with the #TpAccount should usually
     * set this property instead of #TpBaseClient:dbus-daemon. Doing this
     * will ensure that each account, connection or contact is represented by
     * a single #TpAccount, #TpConnection or #TpContact object, shared between
     * all the cooperating modules that have the same #TpAccountManager.
     * 
     * If the #TpBaseClient:dbus-daemon is set to the result of
     * tp_dbus_daemon_dup(), then this property defaults to
     * the result of tp_account_manager_dup().
     * 
     * This property may be %NULL initially, but will always be non-%NULL
     * after the #TpBaseClient has been constructed.
     * 
     * It is an error to specify both a non-%NULL account manager, and a
     * non-%NULL #TpBaseClient:dbus-daemon that is not the same as the
     * account manager's #TpProxy:dbus-daemon.
     */
    readonly accountManager: AccountManager
    /**
     * The object implementing the #TpClientChannelFactoryInterface interface
     * that will be used to create channel proxies. While
     * tp_base_client_register() has not yet been called, this property can be
     * changed using tp_base_client_set_channel_factory().
     * 
     * If no channel factory is specified then #TpAutomaticProxyFactory is used.
     */
    readonly channelFactory: GObject.Object
    /**
     * #TpDBusDaemon object encapsulating this object's connection to D-Bus.
     * Read-only except during construction.
     * 
     * This property can't be %NULL after construction.
     * 
     * Since 0.11.14 this property may be %NULL or unspecified in
     * g_object_new(), but only if #TpBaseClient:account-manager is provided
     * instead, in which case its #TpProxy:dbus-daemon property will be
     * used.
     */
    readonly dbusDaemon: DBusDaemon
    /**
     * Factory for this base client, used to look up or create
     * #TpAccount objects.
     */
    readonly factory: SimpleClientFactory
    /**
     * The name of the client. This is used to register the D-Bus service name
     * and object path of the service.
     * 
     * This property can't be %NULL.
     */
    readonly name: string
    /**
     * If %TRUE, tp_base_client_register() will append an unique token to the
     * service bus name and object path to ensure they are unique.
     */
    readonly uniquifyName: boolean

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    /**
     * Request that the given features are prepared on each #TpAccount (in
     * addition to %TP_ACCOUNT_FEATURE_CORE) before calling
     * #TpBaseClientClass.observe_channels,
     * #TpBaseClientClass.add_dispatch_operation or
     * #TpBaseClientClass.handle_channels, or emitting
     * #TpBaseClient::request-added.
     * @param features the features
     */
    addAccountFeatures(features: GLib.Quark[]): void
    /**
     * Register a new channel class as Approver.ApproverChannelFilter.
     * The #TpBaseClientClass.add_dispatch_operation virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.add_dispatch_operation.
     * @param filter  a %TP_HASH_TYPE_CHANNEL_CLASS
     */
    addApproverFilter(filter: GLib.HashTable): void
    /**
     * Register a new channel class as Approver.ApproverChannelFilter.
     * The #TpBaseClientClass.add_dispatch_operation virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.add_dispatch_operation.
     * 
     * If the variant is floating (see g_variant_ref_sink()), ownership
     * will be taken. See tp_base_client_add_observer_filter_vardict() for
     * more details.
     * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
     */
    addApproverFilterVardict(filter: GLib.Variant): void
    /**
     * Request that the given features are prepared on each #TpChannel (in
     * addition to %TP_CHANNEL_FEATURE_CORE) before calling
     * #TpBaseClientClass.observe_channels,
     * #TpBaseClientClass.add_dispatch_operation or
     * #TpBaseClientClass.handle_channels.
     * @param features the features
     */
    addChannelFeatures(features: GLib.Quark[]): void
    /**
     * Request that the given features are prepared on each #TpConnection (in
     * addition to %TP_CONNECTION_FEATURE_CORE) before calling
     * #TpBaseClientClass.observe_channels,
     * #TpBaseClientClass.add_dispatch_operation or
     * #TpBaseClientClass.handle_channels.
     * @param features the features
     */
    addConnectionFeatures(features: GLib.Quark[]): void
    /**
     * Add several capability tokens to this client. These are used to signal
     * that Telepathy connection managers should advertise certain capabilities
     * to other contacts, such as the ability to receive audio/video calls using
     * particular streaming protocols and codecs.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     * @param tokens capability  tokens as defined by the Telepathy D-Bus API Specification
     */
    addHandlerCapabilities(tokens: string[]): void
    /**
     * Add one capability token to this client, as if via
     * tp_base_client_add_handler_capabilities().
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     * @param token a capability token as defined by the Telepathy D-Bus API  Specification
     */
    addHandlerCapability(token: string): void
    /**
     * Register a new channel class as Handler.HandlerChannelFilter.
     * The #TpBaseClientClass.handle_channels virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     * @param filter  a %TP_HASH_TYPE_CHANNEL_CLASS
     */
    addHandlerFilter(filter: GLib.HashTable): void
    /**
     * Register a new channel class as Handler.HandlerChannelFilter.
     * The #TpBaseClientClass.handle_channels virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     * 
     * If the variant is floating (see g_variant_ref_sink()), ownership
     * will be taken. See tp_base_client_add_observer_filter_vardict() for
     * more details.
     * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
     */
    addHandlerFilterVardict(filter: GLib.Variant): void
    /**
     * Register a new channel class as Observer.ObserverChannelFilter.
     * The #TpBaseClientClass.observe_channels virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.observe_channels.
     * @param filter  a %TP_HASH_TYPE_CHANNEL_CLASS
     */
    addObserverFilter(filter: GLib.HashTable): void
    /**
     * Register a new channel class as Observer.ObserverChannelFilter.
     * The #TpBaseClientClass.observe_channels virtual method will be called
     * whenever a new channel's properties match the ones in `filter`.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.observe_channels.
     * 
     * If the variant is floating (see g_variant_ref_sink()), ownership
     * will be taken, allowing for uses like this:
     * 
     * |[
     * tp_base_client_add_observer_filter_vardict (client,
     *    g_variant_new_parsed ("{ %s: <%s>, %s: <%u>, ... }",
     *        TP_PROP_CHANNEL_CHANNEL_TYPE, TP_IFACE_CHANNEL_TYPE_TEXT,
     *        TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, (guint32) TP_HANDLE_TYPE_CONTACT,
     *        ...));
     * ```
     * 
     * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
     */
    addObserverFilterVardict(filter: GLib.Variant): void
    /**
     * Register `self` as a Client.Handler with an empty list of filters.
     * This is useful if you want to create a client that only handle channels
     * for which it's the PreferredHandler.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     */
    beAHandler(): void
    /**
     * Asynchronously calls DelegateChannels on the ChannelDispatcher to try
     * stopping handling `channels` and pass them to another Handler.
     * You can then call tp_base_client_delegate_channels_finish() to
     * get the result of the operation.
     * @param channels a #GList of #TpChannel handled by `self`
     * @param userActionTime the time at which user action occurred, or #TP_USER_ACTION_TIME_NOT_USER_ACTION if this delegation request is for some reason not involving user action.
     * @param preferredHandler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channels, or %NULL to indicate that any handler but `self` would be acceptable.
     * @param callback a callback to call when the request is satisfied
     */
    delegateChannelsAsync(channels: Channel[], userActionTime: number, preferredHandler: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channels delegation request started using
     * tp_base_client_delegate_channels_async().
     * @param result a #GAsyncResult
     */
    delegateChannelsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* delegated */ Channel[], /* notDelegated */ GLib.HashTable ]
    /**
     * Returns the set of channels currently handled by this base client or by any
     * other #TpBaseClient with which it shares a unique name.
     */
    dupHandledChannels(): Channel[]
    /**
     * Only works if tp_base_client_set_handler_request_notification() has been
     * called.
     * Returns the list of requests `self` is likely be asked to handle.
     */
    dupPendingRequests(): ChannelRequest[]
    /**
     * Return the bus name of `self`. Note that doesn't mean the client is
     * actually owning this name; for example if tp_base_client_register()
     * has not been called yet or failed.
     */
    getBusName(): string
    /**
     * Return the #TpBaseClient:dbus-daemon construct-only property, which
     * represents the D-Bus connection used to export this client object.
     * 
     * The returned object's reference count is not incremented, so it is not
     * necessarily valid after `self` is destroyed.
     */
    getDbusDaemon(): DBusDaemon
    /**
     * Returns the set of channels currently handled by this base client or by any
     * other #TpBaseClient with which it shares a unique name.
     */
    getHandledChannels(): Channel[]
    /**
     * Return the #TpBaseClient:name construct-only property, which is used as
     * part of the bus name and object path.
     */
    getName(): string
    /**
     * Return the object path of `self`. Note that doesn't mean the client is
     * actually registered on this path; for example if tp_base_client_register()
     * has not been called yet or failed.
     */
    getObjectPath(): string
    /**
     * Only works if tp_base_client_set_handler_request_notification() has been
     * called.
     * Returns the list of requests `self` is likely be asked to handle.
     */
    getPendingRequests(): ChannelRequest[]
    /**
     * Return the #TpBaseClient:uniquify-name construct-only property; if this
     * is true, the bus name and object path will be made unique by appending
     * a suffix that includes the D-Bus unique name and a per-process counter.
     */
    getUniquifyName(): boolean
    /**
     * Check if `self` is currently handling `channel`.
     * @param channel a #TpChannel
     */
    isHandlingChannel(channel: Channel): boolean
    /**
     * Publish `self` as an available client. After this method is called, as long
     * as it continues to exist, it will receive and process whatever events were
     * requested via the various filters.
     * 
     * Methods that set the filters and other immutable state, such as
     * tp_base_client_add_observer_filter(), cannot be called after this one.
     */
    register(): boolean
    /**
     * Change the value of the #TpBaseClient:channel-factory property.
     * It can't be changed once `self` has been registered.
     * @param factory an object implementing the #TpClientChannelFactoryInterface interface
     */
    setChannelFactory(factory: ClientChannelFactory): void
    /**
     * Turn on support for
     * the org.freedesktop.Telepathy.ChannelRequest.DelegateToPreferredHandler
     * hint.
     * 
     * When receiving a request containing this hint, `self` will automatically
     * delegate the channels to the preferred handler of the request and then call
     * `callback` to inform the client that it is no longer handling those
     * channels.
     * @param callback function called when channels currently handled by `self` are delegated, may not be %NULL
     */
    setDelegatedChannelsCallback(callback: BaseClientDelegatedChannelsCb): void
    /**
     * Set whether the channels destined for this handler are automatically
     * handled, without invoking approvers.
     * (This is implemented by setting the value of its BypassApproval
     * D-Bus property.)
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     * @param bypassApproval the value of the Handler.BypassApproval property
     */
    setHandlerBypassApproval(bypassApproval: boolean): void
    /**
     * Indicate that `self` is a Handler willing to be notified about requests for
     * channels that it is likely to be asked to handle. This means that the
     * #TpBaseClient::request-added and #TpBaseClient::request-removed signals will
     * be fired and tp_base_client_get_pending_requests() will return the list of
     * pending requests.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.handle_channels.
     */
    setHandlerRequestNotification(): void
    /**
     * Set whether the channel dispatcher should wait for
     * tp_observe_channels_context_accept() or tp_observe_channels_context_fail()
     * to be called before calling
     * #TpBaseClientClass.add_dispatch_operation on appropriate Approvers.
     * 
     * This is implemented by setting the value of the DelayApprovers
     * D-Bus property.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.observe_channels.
     * @param delay the value of the Observer.DelayApprovers property
     */
    setObserverDelayApprovers(delay: boolean): void
    /**
     * Set whether the channel dispatcher should attempt to recover
     * this Observer if it crashes. (This is implemented by setting
     * the value of its Recover D-Bus property.)
     * 
     * Normally, Observers are only notified when new channels
     * appear. If an Observer is set to recover, when it registers with
     * tp_base_client_register(), it will also be told about any channels
     * that already existed before it started.
     * 
     * For Observers that are activatable as a D-Bus service, if the
     * Observer exits or crashes while there are any channels that match
     * its filter, it will automatically be restarted by service-activation.
     * 
     * This method may only be called before tp_base_client_register() is
     * called, and may only be called on objects whose class implements
     * #TpBaseClientClass.observe_channels.
     * @param recover the value of the Observer.Recover property
     */
    setObserverRecover(recover: boolean): void
    /**
     * Remove this client object from D-Bus, if tp_base_client_register()
     * has already been called.
     * 
     * If the object is not registered, this method may be called, but has
     * no effect.
     * 
     * Releasing the last reference to the object also has the same effect
     * as calling this method, but this method should be preferred, as it
     * has more deterministic behaviour.
     * 
     * If the object still exists, tp_base_client_register() may be used to
     * attempt to register it again.
     */
    unregister(): void

    // Own virtual methods of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    addDispatchOperation(account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation, context: AddDispatchOperationContext): void
    handleChannels(account: Account, connection: Connection, channels: Channel[], requestsSatisfied: ChannelRequest[], userActionTime: number, context: HandleChannelsContext): void
    observeChannels(account: Account, connection: Connection, channels: Channel[], dispatchOperation: ChannelDispatchOperation | null, requests: ChannelRequest[], context: ObserveChannelsContext): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    connect(sigName: "request-added", callback: BaseClient.RequestAddedSignalCallback): number
    on(sigName: "request-added", callback: BaseClient.RequestAddedSignalCallback): number
    once(sigName: "request-added", callback: BaseClient.RequestAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-added", request: ChannelRequest, ...args: any[]): void
    connect(sigName: "request-removed", callback: BaseClient.RequestRemovedSignalCallback): number
    on(sigName: "request-removed", callback: BaseClient.RequestRemovedSignalCallback): number
    once(sigName: "request-removed", callback: BaseClient.RequestRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-removed", error: string, message: string, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    connect(sigName: "notify::account-manager", callback: any): number
    on(sigName: "notify::account-manager", callback: any): number
    once(sigName: "notify::account-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-manager", ...args: any[]): void
    connect(sigName: "notify::channel-factory", callback: any): number
    on(sigName: "notify::channel-factory", callback: any): number
    once(sigName: "notify::channel-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-factory", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uniquify-name", callback: any): number
    on(sigName: "notify::uniquify-name", callback: any): number
    once(sigName: "notify::uniquify-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uniquify-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a generic #TpSvcClient implementation.
 * @class 
 */
export class BaseClient extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.BaseClient

    constructor(config?: BaseClient.ConstructorProperties) 
    _init(config?: BaseClient.ConstructorProperties): void
}

export module BaseConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `clients-interested`
     */
    export interface ClientsInterestedSignalCallback {
        (token: string): void
    }

    /**
     * Signal callback interface for `clients-uninterested`
     */
    export interface ClientsUninterestedSignalCallback {
        (token: string): void
    }



    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

        /**
         * The suffix of the account object path such as
         * "gabble/jabber/chris_40example_2ecom0" for the account whose object path is
         * %TP_ACCOUNT_OBJECT_PATH_BASE + "gabble/jabber/chris_40example_2ecom0".
         * The same as returned by tp_account_get_path_suffix().
         * 
         * It is given by the AccountManager in the connection parameters. Or %NULL if
         * the ConnectionManager or the AccountManager are too old.
         */
        accountPathSuffix?: string | null
    }

}

export interface BaseConnection {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    /**
     * The suffix of the account object path such as
     * "gabble/jabber/chris_40example_2ecom0" for the account whose object path is
     * %TP_ACCOUNT_OBJECT_PATH_BASE + "gabble/jabber/chris_40example_2ecom0".
     * The same as returned by tp_account_get_path_suffix().
     * 
     * It is given by the AccountManager in the connection parameters. Or %NULL if
     * the ConnectionManager or the AccountManager are too old.
     */
    readonly accountPathSuffix: string
    /**
     * This property is not useful to use directly. Its value is %TRUE, to
     * indicate that this version of telepathy-glib never unreferences handles
     * until the connection becomes disconnected.
     */
    readonly hasImmortalHandles: boolean

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    /**
     * Add a "client interest" for `token` on behalf of the given client.
     * 
     * This emits #TpBaseConnection::clients-interested if this was the first
     * time a client expressed an interest in this token.
     * @param uniqueName the unique bus name of a D-Bus client
     * @param token a D-Bus interface or a token representing part of an interface,  added with tp_base_connection_add_possible_client_interest()
     * @param onlyIfUninterested only add to the interest count if the client is not  already interested (appropriate for APIs that implicitly subscribe on first  use if this has not been done already, like Location)
     */
    addClientInterest(uniqueName: string, token: string, onlyIfUninterested: boolean): void
    /**
     * Add `token` to the set of tokens for which this connection will emit
     * #TpBaseConnection::clients-interested and
     * #TpBaseConnection::clients-uninterested.
     * 
     * This method must be called from the #GObjectClass<!--
     * -->.constructed or #GObjectClass<!-- -->.constructor callback
     * (otherwise, it will run too late to be useful).
     * @param token a quark corresponding to a D-Bus interface, or a token  representing part of a D-Bus interface, for which this connection wishes  to be notified when clients register an interest
     */
    addPossibleClientInterest(token: GLib.Quark): void
    /**
     * Change the status of the connection. The allowed state transitions are:
     * 
     * <itemizedlist>
     * <listitem>#TP_INTERNAL_CONNECTION_STATUS_NEW →
     *    #TP_CONNECTION_STATUS_CONNECTING</listitem>
     * <listitem>#TP_CONNECTION_STATUS_CONNECTING →
     *    #TP_CONNECTION_STATUS_CONNECTED</listitem>
     * <listitem>#TP_INTERNAL_CONNECTION_STATUS_NEW →
     *    #TP_CONNECTION_STATUS_CONNECTED (exactly equivalent to both of the above
     *    one after the other; see below)</listitem>
     * <listitem>anything except #TP_CONNECTION_STATUS_DISCONNECTED →
     *    #TP_CONNECTION_STATUS_DISCONNECTED</listitem>
     * </itemizedlist>
     * 
     * Before the transition to #TP_CONNECTION_STATUS_CONNECTED, the implementation
     * must have discovered the handle for the local user and passed it to
     * tp_base_connection_set_self_handle().
     * 
     * Changing from NEW to CONNECTED is implemented by doing the transition from
     * NEW to CONNECTING, followed by the transition from CONNECTING to CONNECTED;
     * it's exactly equivalent to calling tp_base_connection_change_status for
     * those two transitions one after the other.
     * 
     * Any other valid transition does the following, in this order:
     * 
     * <itemizedlist>
     * <listitem>Update #TpBaseConnection<!-- -->.status;</listitem>
     * <listitem>If the new state is #TP_CONNECTION_STATUS_DISCONNECTED, call
     *    tp_channel_factory_iface_close_all() on all channel factories</listitem>
     * <listitem>Emit the D-Bus StatusChanged signal;</listitem>
     * <listitem>Call #TpBaseConnectionClass.connecting,
     *    #TpBaseConnectionClass.connected or #TpBaseConnectionClass.disconnected
     *    as appropriate;</listitem>
     * <listitem>Call the channel factories' status change callbacks;</listitem>
     * <listitem>If the new state is #TP_CONNECTION_STATUS_DISCONNECTED, call the
     *    subclass' #TpBaseConnectionClass.shut_down callback.</listitem>
     * </itemizedlist>
     * 
     * To provide more details about what happened when moving to `status`
     * #TP_CONNECTION_STATUS_DISCONNECTED due to an error, consider calling
     * tp_base_connection_disconnect_with_dbus_error() instead of this function.
     * 
     * Changed in 0.7.35: the `self_handle` member of #TpBaseConnection was
     * previously set to 0 at this stage. It now remains non-zero until the object
     * is disposed.
     * @param status The new status
     * @param reason The reason for the status change
     */
    changeStatus(status: ConnectionStatus, reason: ConnectionStatusReason): void
    /**
     * Return whether this connection is fully active and connected.
     * If it is not, raise %TP_ERROR_DISCONNECTED.
     * 
     * This is equivalent to checking whether tp_base_connection_get_status()
     * returns %TP_CONNECTION_STATUS_CONNECTED; it is provided because methods
     * on the connection often need to make this check, and return a
     * #GError if it fails.
     */
    checkConnected(): boolean
    /**
     * <!-- -->
     */
    getAccountPathSuffix(): string
    /**
     * Return the bus name starting with %TP_CONN_BUS_NAME_BASE that represents
     * this connection on D-Bus.
     * 
     * The returned string belongs to the #TpBaseConnection and must be copied
     * by the caller if it will be kept.
     * 
     * If this connection has never been present on D-Bus
     * (tp_base_connection_register() has never been called), return %NULL
     * instead.
     */
    getBusName(): string | null
    /**
     * <!---->
     * @param handleType The handle type
     */
    getHandles(handleType: HandleType): HandleRepoIface
    /**
     * Return the object path starting with %TP_CONN_OBJECT_PATH_BASE that
     * represents this connection on D-Bus.
     * 
     * The returned string belongs to the #TpBaseConnection and must be copied
     * by the caller if it will be kept.
     * 
     * If this connection has never been present on D-Bus
     * (tp_base_connection_register() has never been called), return %NULL
     * instead.
     */
    getObjectPath(): string | null
    /**
     * Return the status of this connection, as set by
     * tp_base_connection_change_status() or similar functions like
     * tp_base_connection_disconnect_with_dbus_error().
     * 
     * Like the corresponding D-Bus property, this method returns
     * %TP_CONNECTION_STATUS_DISCONNECTED in two situations:
     * either the connection is newly-created (and has never emitted
     * #TpSvcConnection::status-changed), or D-Bus clients have already been
     * told that it has been destroyed (by the Disconnect D-Bus method,
     * a failed attempt to connect, or loss of an established connection).
     * Use tp_base_connection_is_destroyed() to distinguish between the two.
     */
    getStatus(): ConnectionStatus
    /**
     * Return whether this connection has already emitted the D-Bus signal
     * indicating that it has been destroyed.
     * 
     * In particular, this can be used to distinguish between the two reasons
     * why tp_base_connection_get_status() would return
     * %TP_CONNECTION_STATUS_DISCONNECTED: it will return %FALSE if the
     * connection is newly-created, and %TRUE if the Disconnect D-Bus method
     * has been called, an attempt to connect has failed, or an established
     * connection has encountered an error.
     */
    isDestroyed(): boolean
    /**
     * Make the connection object appear on the bus, returning the bus
     * name and object path used. If %TRUE is returned, the connection owns the
     * bus name, and will release it when destroyed.
     * 
     * Since 0.11.11, `bus_name` and `object_path` may be %NULL if the
     * strings are not needed.
     * @param cmName The name of the connection manager in the Telepathy protocol
     */
    register(cmName: string): [ /* returnType */ boolean, /* busName */ string, /* objectPath */ string ]
    /**
     * Sets the #TpBaseConnection:self-handle property.  self_handle may not be 0
     * once the connection has moved to the CONNECTED state.
     * @param selfHandle The new self handle for the connection.
     */
    setSelfHandle(selfHandle: Handle): void

    // Own virtual methods of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    connected(): void
    connecting(): void
    disconnected(): void
    getUniqueConnectionName(): string
    shutDown(): void
    startConnecting(): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    connect(sigName: "clients-interested", callback: BaseConnection.ClientsInterestedSignalCallback): number
    on(sigName: "clients-interested", callback: BaseConnection.ClientsInterestedSignalCallback): number
    once(sigName: "clients-interested", callback: BaseConnection.ClientsInterestedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "clients-interested", ...args: any[]): void
    connect(sigName: "clients-uninterested", callback: BaseConnection.ClientsUninterestedSignalCallback): number
    on(sigName: "clients-uninterested", callback: BaseConnection.ClientsUninterestedSignalCallback): number
    once(sigName: "clients-uninterested", callback: BaseConnection.ClientsUninterestedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "clients-uninterested", ...args: any[]): void
    connect(sigName: "shutdown-finished", callback: (...args: any[]) => void): number
    on(sigName: "shutdown-finished", callback: (...args: any[]) => void): number
    once(sigName: "shutdown-finished", callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: "shutdown-finished", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    connect(sigName: "notify::account-path-suffix", callback: any): number
    on(sigName: "notify::account-path-suffix", callback: any): number
    once(sigName: "notify::account-path-suffix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-path-suffix", ...args: any[]): void
    connect(sigName: "notify::has-immortal-handles", callback: any): number
    on(sigName: "notify::has-immortal-handles", callback: any): number
    once(sigName: "notify::has-immortal-handles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-immortal-handles", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a generic #TpSvcConnection implementation.
 * 
 * Since 0.19.1, accessing the fields of this structure is deprecated.
 * Use tp_base_connection_get_bus_name(), tp_base_connection_get_object_path(),
 * tp_base_connection_get_status(), tp_base_connection_get_self_handle()
 * instead.
 * @class 
 */
export class BaseConnection extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.BaseConnection

    constructor(config?: BaseConnection.ConstructorProperties) 
    _init(config?: BaseConnection.ConstructorProperties): void
}

export module BasicProxyFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends ClientChannelFactory.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BasicProxyFactory extends ClientChannelFactory {

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.BasicProxyFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpBasicProxyFactory
 * @class 
 */
export class BasicProxyFactory extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BasicProxyFactory

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.BasicProxyFactory

    constructor(config?: BasicProxyFactory.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpBasicProxyFactory instance.
     * @constructor 
     */
    constructor() 
    /**
     * Convenient function to create a new #TpBasicProxyFactory instance.
     * @constructor 
     */
    static new(): BasicProxyFactory
    _init(config?: BasicProxyFactory.ConstructorProperties): void
    /**
     * Returns a cached #TpBasicProxyFactory; the same #TpBasicProxyFactory object
     * will be returned by this function repeatedly, as long as at least one
     * reference exists.
     */
    static dup(): BasicProxyFactory
}

export module CallChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `content-added`
     */
    export interface ContentAddedSignalCallback {
        (content: GObject.Object): void
    }

    /**
     * Signal callback interface for `content-removed`
     */
    export interface ContentRemovedSignalCallback {
        (content: GObject.Object, reason: CallStateReason): void
    }

    /**
     * Signal callback interface for `members-changed`
     */
    export interface MembersChangedSignalCallback {
        (updates: GLib.HashTable, removed: Contact[], reason: CallStateReason): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (state: number, flags: number, reason: CallStateReason, details: GLib.HashTable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface CallChannel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    /**
     * #GPtrArray of #TpCallContent objects. The list of content objects that are
     * part of this call.
     * 
     * It is NOT guaranteed that %TP_CALL_CONTENT_FEATURE_CORE is prepared on
     * those objects.
     */
    readonly contents: object[]
    /**
     * A #TpCallFlags specifying the flags of the call state.
     */
    readonly flags: number
    /**
     * Whether or not the streaming is done by dedicated hardware.
     */
    readonly hardwareStreaming: boolean
    /**
     * A #TpLocalHoldState specifying if the Call is currently held
     */
    readonly holdState: number
    /**
     * A #TpLocalHoldStateReason specifying why the Call is currently held.
     */
    readonly holdStateReason: number
    /**
     * Whether or not the Call was started with audio.
     */
    readonly initialAudio: boolean
    /**
     * If #TpCallChannel:initial-audio is set to %TRUE, then this property will
     * is the name of the intial audio content, %NULL otherwise.
     */
    readonly initialAudioName: string
    /**
     * Whether or not the Call was started with video.
     */
    readonly initialVideo: boolean
    /**
     * If #TpCallChannel:initial-video is set to %TRUE, then this property will
     * is the name of the intial video content, %NULL otherwise.
     */
    readonly initialVideoName: string
    /**
     * Whether or not call contents can be added or removed.
     */
    readonly mutableContents: boolean
    /**
     * A #TpCallState specifying the state of the call.
     */
    readonly state: number
    /**
     * Detailed infoermation about #TpCallChannel:state. It is a #GHashTable
     * mapping gchar*->GValue, it can be accessed using the tp_asv_* functions.
     */
    readonly stateDetails: GLib.HashTable
    /**
     * Reason why #TpCallChannel:state last changed.
     */
    readonly stateReason: CallStateReason

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    /**
     * For incoming calls with #TpCallChannel:state set to
     * %TP_CALL_STATE_INITIALISED, accept the incoming call. This changes
     * #TpCallChannel:state to %TP_CALL_STATE_ACCEPTED.
     * 
     * For outgoing calls with #TpCallChannel:state set to
     * %TP_CALL_STATE_PENDING_INITIATOR, actually call the remote contact; this
     * changes #TpCallChannel:state to
     * %TP_CALL_STATE_INITIALISING.
     * @param callback a callback to call when the operation finishes
     */
    acceptAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_accept_async().
     * @param result a #GAsyncResult
     */
    acceptFinish(result: Gio.AsyncResult): boolean
    /**
     * Request that a new Content of type `type` is added to `self`. Callers should
     * check the value of the #TpCallChannel:mutable-contents property before trying
     * to add another content as it might not be allowed.
     * @param name the suggested name of the content to add
     * @param type the media stream type of the content to be added to the call, from  #TpMediaStreamType
     * @param initialDirection The initial direction of the content
     * @param callback a callback to call when the operation finishes
     */
    addContentAsync(name: string, type: MediaStreamType, initialDirection: MediaStreamDirection, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_add_content_async().
     * 
     * The returned #TpCallContent is NOT guaranteed to have
     * %TP_CALL_CONTENT_FEATURE_CORE prepared.
     * @param result a #GAsyncResult
     */
    addContentFinish(result: Gio.AsyncResult): CallContent
    /**
     * <!-- -->
     */
    getContents(): CallContent[]
    /**
     * Get the members of this call.
     * 
     * The #TpContact objects are guaranteed to have all of the features
     * previously passed to tp_simple_client_factory_add_contact_features()
     * prepared.
     */
    getMembers(): GLib.HashTable
    /**
     * <!-- -->
     */
    getState(): [ /* returnType */ CallState, /* flags */ CallFlags, /* details */ GLib.HashTable, /* reason */ CallStateReason ]
    /**
     * Request that the call is ended. All contents will be removed from `self` so
     * that the #TpCallChannel:contents property will be the empty list.
     * @param reason a TpCallStateChangeReason
     * @param detailedReason a more specific reason for the call hangup, if one is  available, or an empty or %NULL string otherwise
     * @param message a human-readable message to be sent to the remote contact(s)
     * @param callback a callback to call when the operation finishes
     */
    hangupAsync(reason: CallStateChangeReason, detailedReason: string, message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_hangup_async().
     * @param result a #GAsyncResult
     */
    hangupFinish(result: Gio.AsyncResult): boolean
    /**
     * Whether or not `self` can send DTMF tones using
     * tp_call_channel_send_tones_async(). To be able to send DTMF tones, at least
     * one of `self'`s #TpCallChannel:contents must implement
     * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
     */
    hasDtmf(): boolean
    /**
     * <!-- -->
     */
    hasHardwareStreaming(): boolean
    /**
     * Whether or not `self` has the %TP_IFACE_CHANNEL_INTERFACE_HOLD
     * interfaces
     */
    hasHold(): boolean
    /**
     * <!-- -->
     */
    hasInitialAudio(): [ /* returnType */ boolean, /* initialAudioName */ string ]
    /**
     * <!-- -->
     */
    hasInitialVideo(): [ /* returnType */ boolean, /* initialVideoName */ string ]
    /**
     * <!-- -->
     */
    hasMutableContents(): boolean
    /**
     * Requests that the connection manager holds or unholds the call. Watch
     * #TpCallChannel:hold-state property to know when the channel goes on
     * hold or is unheld. Unholding may fail if the streaming implementation
     * can not obtain all the resources needed to restart the call.
     * @param hold Whether to request a hold or a unhold
     * @param callback a callback to call when the operation finishes
     */
    requestHoldAsync(hold: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_request_hold_async
     * @param result a #GAsyncResult
     */
    requestHoldFinish(result: Gio.AsyncResult): boolean
    /**
     * Send `tones` on every of `self'`s contents which have the
     * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
     * 
     * For more details, see tp_call_content_send_tones_async().
     * @param tones a string representation of one or more DTMF events.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the operation finishes
     */
    sendTonesAsync(tones: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_send_tones_async().
     * @param result a #GAsyncResult
     */
    sendTonesFinish(result: Gio.AsyncResult): boolean
    /**
     * Notifies the CM that the local user is already in a call, so this call has
     * been put in a call-waiting style queue.
     * @param callback a callback to call when the operation finishes
     */
    setQueuedAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_set_queued_async().
     * @param result a #GAsyncResult
     */
    setQueuedFinish(result: Gio.AsyncResult): boolean
    /**
     * Indicate that the local user has been alerted about the incoming call.
     * @param callback a callback to call when the operation finishes
     */
    setRingingAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_channel_set_ringing_async().
     * @param result a #GAsyncResult
     */
    setRingingFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    connect(sigName: "content-added", callback: CallChannel.ContentAddedSignalCallback): number
    on(sigName: "content-added", callback: CallChannel.ContentAddedSignalCallback): number
    once(sigName: "content-added", callback: CallChannel.ContentAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "content-added", ...args: any[]): void
    connect(sigName: "content-removed", callback: CallChannel.ContentRemovedSignalCallback): number
    on(sigName: "content-removed", callback: CallChannel.ContentRemovedSignalCallback): number
    once(sigName: "content-removed", callback: CallChannel.ContentRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "content-removed", reason: CallStateReason, ...args: any[]): void
    connect(sigName: "members-changed", callback: CallChannel.MembersChangedSignalCallback): number
    on(sigName: "members-changed", callback: CallChannel.MembersChangedSignalCallback): number
    once(sigName: "members-changed", callback: CallChannel.MembersChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "members-changed", removed: Contact[], reason: CallStateReason, ...args: any[]): void
    connect(sigName: "state-changed", callback: CallChannel.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: CallChannel.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: CallChannel.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", flags: number, reason: CallStateReason, details: GLib.HashTable, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::hardware-streaming", callback: any): number
    on(sigName: "notify::hardware-streaming", callback: any): number
    once(sigName: "notify::hardware-streaming", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hardware-streaming", ...args: any[]): void
    connect(sigName: "notify::hold-state", callback: any): number
    on(sigName: "notify::hold-state", callback: any): number
    once(sigName: "notify::hold-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hold-state", ...args: any[]): void
    connect(sigName: "notify::hold-state-reason", callback: any): number
    on(sigName: "notify::hold-state-reason", callback: any): number
    once(sigName: "notify::hold-state-reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hold-state-reason", ...args: any[]): void
    connect(sigName: "notify::initial-audio", callback: any): number
    on(sigName: "notify::initial-audio", callback: any): number
    once(sigName: "notify::initial-audio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-audio", ...args: any[]): void
    connect(sigName: "notify::initial-audio-name", callback: any): number
    on(sigName: "notify::initial-audio-name", callback: any): number
    once(sigName: "notify::initial-audio-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-audio-name", ...args: any[]): void
    connect(sigName: "notify::initial-video", callback: any): number
    on(sigName: "notify::initial-video", callback: any): number
    once(sigName: "notify::initial-video", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-video", ...args: any[]): void
    connect(sigName: "notify::initial-video-name", callback: any): number
    on(sigName: "notify::initial-video-name", callback: any): number
    once(sigName: "notify::initial-video-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-video-name", ...args: any[]): void
    connect(sigName: "notify::mutable-contents", callback: any): number
    on(sigName: "notify::mutable-contents", callback: any): number
    once(sigName: "notify::mutable-contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mutable-contents", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::state-details", callback: any): number
    on(sigName: "notify::state-details", callback: any): number
    once(sigName: "notify::state-details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state-details", ...args: any[]): void
    connect(sigName: "notify::state-reason", callback: any): number
    on(sigName: "notify::state-reason", callback: any): number
    once(sigName: "notify::state-reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state-reason", ...args: any[]): void
    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpCallChannel.
 * @class 
 */
export class CallChannel extends Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.CallChannel

    constructor(config?: CallChannel.ConstructorProperties) 
    _init(config?: CallChannel.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
}

export module CallContent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `streams-added`
     */
    export interface StreamsAddedSignalCallback {
        (streams: CallStream[]): void
    }

    /**
     * Signal callback interface for `streams-removed`
     */
    export interface StreamsRemovedSignalCallback {
        (streams: CallStream[], reason: CallStateReason): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.CallContent

        /**
         * The parent #TpCallChannel of the content.
         */
        channel?: CallChannel | null
        /**
         * The #TpConnection of the call.
         */
        connection?: Connection | null
    }

}

export interface CallContent {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallContent

    /**
     * The parent #TpCallChannel of the content.
     */
    readonly channel: CallChannel
    /**
     * The #TpConnection of the call.
     */
    readonly connection: Connection
    /**
     * The disposition of this content, from #TpCallContentDisposition.
     */
    readonly disposition: number
    /**
     * The media type of this content, from #TpMediaStreamType.
     */
    readonly mediaType: number
    /**
     * The name of this content.
     */
    readonly name: string
    /**
     * #GPtrArray of #TpCallStream objects. The list of stream objects that are
     * part of this content.
     * 
     * It is NOT guaranteed that %TP_CALL_STREAM_FEATURE_CORE is prepared on
     * those objects.
     */
    readonly streams: object[]

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.CallContent

    /**
     * <!-- -->
     */
    getDisposition(): CallContentDisposition
    /**
     * <!-- -->
     */
    getMediaType(): MediaStreamType
    /**
     * <!-- -->
     */
    getName(): string
    /**
     * <!-- -->
     */
    getStreams(): CallStream[]
    /**
     * Remove the content from the call. This will cause #TpCallContent::removed
     * to be emitted.
     * @param callback a callback to call when the operation finishes
     */
    removeAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_content_remove_async().
     * @param result a #GAsyncResult
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Send `tones` DTMF code on `self` content. `self` must have the
     * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
     * 
     * If DTMF tones are already being played, this request is queued.
     * @param tones a string representation of one or more DTMF events.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a callback to call when the operation finishes
     */
    sendTonesAsync(tones: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_content_send_tones_async().
     * @param result a #GAsyncResult
     */
    sendTonesFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.CallContent

    connect(sigName: "removed", callback: CallContent.RemovedSignalCallback): number
    on(sigName: "removed", callback: CallContent.RemovedSignalCallback): number
    once(sigName: "removed", callback: CallContent.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "streams-added", callback: CallContent.StreamsAddedSignalCallback): number
    on(sigName: "streams-added", callback: CallContent.StreamsAddedSignalCallback): number
    once(sigName: "streams-added", callback: CallContent.StreamsAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "streams-added", ...args: any[]): void
    connect(sigName: "streams-removed", callback: CallContent.StreamsRemovedSignalCallback): number
    on(sigName: "streams-removed", callback: CallContent.StreamsRemovedSignalCallback): number
    once(sigName: "streams-removed", callback: CallContent.StreamsRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "streams-removed", reason: CallStateReason, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.CallContent

    connect(sigName: "notify::channel", callback: any): number
    on(sigName: "notify::channel", callback: any): number
    once(sigName: "notify::channel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::disposition", callback: any): number
    on(sigName: "notify::disposition", callback: any): number
    once(sigName: "notify::disposition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disposition", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: any): number
    on(sigName: "notify::media-type", callback: any): number
    once(sigName: "notify::media-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::streams", callback: any): number
    on(sigName: "notify::streams", callback: any): number
    once(sigName: "notify::streams", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::streams", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpCallContent.
 * @class 
 */
export class CallContent extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallContent

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.CallContent

    constructor(config?: CallContent.ConstructorProperties) 
    _init(config?: CallContent.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for #TpCallContent have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CALL_CONTENT.
     */
    static initKnownInterfaces(): void
}

export module CallStream {

    // Signal callback interfaces

    /**
     * Signal callback interface for `local-sending-state-changed`
     */
    export interface LocalSendingStateChangedSignalCallback {
        (state: number, reason: CallStateReason): void
    }

    /**
     * Signal callback interface for `remote-members-changed`
     */
    export interface RemoteMembersChangedSignalCallback {
        (updates: GLib.HashTable, removed: Contact[], reason: CallStateReason): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.CallStream

        /**
         * The #TpConnection of the call.
         */
        connection?: Connection | null
        /**
         * The Content that this streams belongs to
         */
        content?: CallContent | null
    }

}

export interface CallStream {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallStream

    /**
     * If %TRUE, the user can request that a remote contact starts sending on this
     * stream.
     */
    readonly canRequestReceiving: boolean
    /**
     * The #TpConnection of the call.
     */
    readonly connection: Connection
    /**
     * The Content that this streams belongs to
     */
    readonly content: CallContent
    /**
     * The local user's sending state, from #TpSendingState.
     */
    readonly localSendingState: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.CallStream

    /**
     * <!-- -->
     */
    getLocalSendingState(): SendingState
    /**
     * Get the remote contacts to who this stream is connected, mapped to their
     * sending state.
     * 
     * It is NOT guaranteed that #TpContact objects have any feature prepared.
     */
    getRemoteMembers(): GLib.HashTable
    /**
     * Request that a remote contact stops or starts sending on this stream.
     * 
     * The #TpCallStream:can-request-receiving property defines whether the protocol
     * allows the local user to request the other side start sending on this stream.
     * 
     * If `receive` is %TRUE, request that the given contact starts to send media.
     * If `receive` is %FALSE, request that the given contact stops sending media.
     * @param contact contact from which sending is requested
     * @param receive the requested receiving state
     * @param callback a callback to call when the operation finishes
     */
    requestReceivingAsync(contact: Contact, receive: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_stream_request_receiving_async().
     * @param result a #GAsyncResult
     */
    requestReceivingFinish(result: Gio.AsyncResult): boolean
    /**
     * Set the stream to start or stop sending media from the local user to other
     * contacts.
     * 
     * If `send` is %TRUE, #TpCallStream:local-sending-state should change to
     * %TP_SENDING_STATE_SENDING, if it isn't already.
     * If `send` is %FALSE, #TpCallStream:local-sending-state should change to
     * %TP_SENDING_STATE_NONE, if it isn't already.
     * @param send the requested sending state
     * @param callback a callback to call when the operation finishes
     */
    setSendingAsync(send: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_call_stream_set_sending_async().
     * @param result a #GAsyncResult
     */
    setSendingFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.CallStream

    connect(sigName: "local-sending-state-changed", callback: CallStream.LocalSendingStateChangedSignalCallback): number
    on(sigName: "local-sending-state-changed", callback: CallStream.LocalSendingStateChangedSignalCallback): number
    once(sigName: "local-sending-state-changed", callback: CallStream.LocalSendingStateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "local-sending-state-changed", reason: CallStateReason, ...args: any[]): void
    connect(sigName: "remote-members-changed", callback: CallStream.RemoteMembersChangedSignalCallback): number
    on(sigName: "remote-members-changed", callback: CallStream.RemoteMembersChangedSignalCallback): number
    once(sigName: "remote-members-changed", callback: CallStream.RemoteMembersChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remote-members-changed", removed: Contact[], reason: CallStateReason, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.CallStream

    connect(sigName: "notify::can-request-receiving", callback: any): number
    on(sigName: "notify::can-request-receiving", callback: any): number
    once(sigName: "notify::can-request-receiving", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-request-receiving", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::local-sending-state", callback: any): number
    on(sigName: "notify::local-sending-state", callback: any): number
    once(sigName: "notify::local-sending-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-sending-state", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpCallStream.
 * @class 
 */
export class CallStream extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallStream

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.CallStream

    constructor(config?: CallStream.ConstructorProperties) 
    _init(config?: CallStream.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for #TpCallStream have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CALL_STREAM.
     */
    static initKnownInterfaces(): void
}

export module Capabilities {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.Capabilities

        /**
         * Whether this object accurately describes the capabilities of a particular
         * contact, or if it's only a guess based on the capabilities of the
         * underlying connection.
         */
        contactSpecific?: boolean | null
    }

}

export interface Capabilities {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Capabilities

    /**
     * The underlying data structure used by Telepathy to represent the
     * requests that can succeed.
     * 
     * This can be used by advanced clients to determine whether an unusually
     * complex request would succeed. See the Telepathy D-Bus API Specification
     * for details of how to interpret the returned #GVariant of type
     * a(a{sv}as).
     * 
     * The higher-level methods like
     * tp_capabilities_supports_text_chats() are likely to be more useful to
     * the majority of clients.
     */
    readonly channelClassesVariant: GLib.Variant
    /**
     * Whether this object accurately describes the capabilities of a particular
     * contact, or if it's only a guess based on the capabilities of the
     * underlying connection.
     */
    readonly contactSpecific: boolean

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Capabilities

    /**
     * Return the #TpCapabilities:channel-classes-variant property
     */
    dupChannelClassesVariant(): GLib.Variant
    /**
     * <!-- -->
     */
    getChannelClasses(): GLib.HashTable[]
    /**
     * <!-- -->
     */
    isSpecificToContact(): boolean
    /**
     * Return whether audio calls can be established, for instance by calling
     * tp_account_channel_request_new_audio_call(), followed by
     * tp_account_channel_request_set_target_id() with `handle_type`.
     * 
     * To check whether requests using
     * tp_account_channel_request_set_target_contact() would work, set
     * `handle_type` to %TP_HANDLE_TYPE_CONTACT.
     * @param handleType the handle type of the call; #TP_HANDLE_TYPE_CONTACT for  private, #TP_HANDLE_TYPE_ROOM or #TP_HANDLE_TYPE_NONE for conference  (depending on the protocol)
     */
    supportsAudioCall(handleType: HandleType): boolean
    /**
     * Return whether audio/video calls can be established, for instance by calling
     * tp_account_channel_request_new_audio_video_call(), followed by
     * tp_account_channel_request_set_target_id() with `handle_type`.
     * 
     * To check whether requests using
     * tp_account_channel_request_set_target_contact() would work, set
     * `handle_type` to %TP_HANDLE_TYPE_CONTACT.
     * @param handleType the handle type of the call; #TP_HANDLE_TYPE_CONTACT for  private, #TP_HANDLE_TYPE_ROOM or #TP_HANDLE_TYPE_NONE for conference  (depending on the protocol)
     */
    supportsAudioVideoCall(handleType: HandleType): boolean
    /**
     * Return whether this protocol or connection can perform contact
     * searches. Optionally, also return whether a limited number of
     * results can be specified, and whether alternative servers can be
     * searched.
     */
    supportsContactSearch(): [ /* returnType */ boolean, /* withLimit */ boolean, /* withServer */ boolean ]
    /**
     * If the #TpCapabilities:contact-specific property is %TRUE, this function
     * checks if the contact associated with this #TpCapabilities supports
     * D-Bus tubes with `handle_type` as TargetHandleType.
     * If `service_name` is not %NULL, it also checks if it supports stream tubes
     * with `service` as #TP_PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME.
     * 
     * If the #TpCapabilities:contact-specific property is %FALSE, this function
     * checks if the connection supports requesting D-Bus tube channels with
     * `handle_type` as ChannelType. The `service_name` argument is unused in
     * this case.
     * @param handleType the handle type of the tube (either #TP_HANDLE_TYPE_CONTACT or #TP_HANDLE_TYPE_ROOM)
     * @param serviceName the service name of the tube, or %NULL
     */
    supportsDbusTubes(handleType: HandleType, serviceName: string): boolean
    /**
     * Return whether private file transfer can be established by providing
     * a contact identifier.
     */
    supportsFileTransfer(): boolean
    /**
     * <!-- -->
     */
    supportsFileTransferDescription(): boolean
    /**
     * Return whether an initial offset other than 0 can be specified on
     * outgoing file transfers. This can be used to resume partial transfers,
     * by omitting the part that has already been sent.
     */
    supportsFileTransferInitialOffset(): boolean
    /**
     * <!-- -->
     */
    supportsFileTransferTimestamp(): boolean
    /**
     * <!-- -->
     */
    supportsFileTransferUri(): boolean
    /**
     * Discovers whether this protocol or connection supports listing rooms.
     * Specifically, if this function returns %TRUE, a room list channel can be
     * requested as follows:
     * |[
     * GHashTable *request;
     * TpAccountChannelRequest *req;
     * 
     * request = tp_asv_new (
     *     TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING,
     *       TP_IFACE_CHANNEL_TYPE_ROOM_LIST,
     *     TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_NONE,
     *     NULL);
     * 
     * req = tp_account_channel_request_new (account, request,
     *    TP_USER_ACTION_TIME_CURRENT_TIME);
     * 
     * tp_account_channel_request_create_and_handle_channel_async (req, NULL,
     *     create_channel_cb, NULL);
     * 
     * g_object_unref (req);
     * g_hash_table_unref (request);
     * ```
     * 
     * 
     * If `with_server` is set to %TRUE, a list of rooms on a particular server can
     * be requested as follows:
     * |[
     * /\* Same code as above but with request defined using: *\/
     * request = tp_asv_new (
     *     TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING,
     *       TP_IFACE_CHANNEL_TYPE_ROOM_LIST,
     *     TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_NONE,
     *     TP_PROP_CHANNEL_TYPE_ROOM_LIST_SERVER, G_TYPE_STRING,
     *       "characters.shakespeare.lit",
     *     NULL);
     * ```
     * 
     */
    supportsRoomList(): [ /* returnType */ boolean, /* withServer */ boolean ]
    /**
     * If the #TpCapabilities:contact-specific property is %FALSE, this function
     * checks if SMS text channels can be requested with the connection associated
     * with this #TpCapabilities.
     * 
     * If the #TpCapabilities:contact-specific property is %TRUE, this function
     * checks if the contact associated with this #TpCapabilities supports
     * SMS text channels.
     */
    supportsSms(): boolean
    /**
     * If the #TpCapabilities:contact-specific property is %TRUE, this function
     * checks if the contact associated with this #TpCapabilities supports
     * stream tubes with `handle_type` as TargetHandleType.
     * If `service` is not %NULL, it also checks if it supports stream tubes
     * with `service` as #TP_PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE.
     * 
     * If the #TpCapabilities:contact-specific property is %FALSE, this function
     * checks if the connection supports requesting stream tube channels with
     * `handle_type` as ChannelType. The `service` argument is unused in this case.
     * @param handleType the handle type of the tube (either #TP_HANDLE_TYPE_CONTACT or #TP_HANDLE_TYPE_ROOM)
     * @param service the service of the tube, or %NULL
     */
    supportsStreamTubes(handleType: HandleType, service: string): boolean
    /**
     * If the #TpCapabilities:contact-specific property is %FALSE, this function
     * checks if named text chatrooms can be joined by providing a chatroom
     * identifier, for instance by calling
     * tp_account_channel_request_new_text() followed by
     * tp_account_channel_request_set_target_id() with %TP_HANDLE_TYPE_ROOM.
     * 
     * If the #TpCapabilities:contact-specific property is %TRUE, this function
     * checks if the contact associated with this #TpCapabilities can be invited
     * to named text chatrooms.
     * 
     * If the protocol is such that chatrooms can be joined or contacts can be
     * invited, but only via a more elaborate D-Bus API than normal
     * (because more information is needed), then this method will return %FALSE.
     */
    supportsTextChatrooms(): boolean
    /**
     * Return whether private text channels can be established by providing
     * a contact identifier, for instance by calling
     * tp_account_channel_request_new_text() followed by
     * tp_account_channel_request_set_target_contact().
     * 
     * If the protocol is such that text chats can be established, but only via a
     * more elaborate D-Bus API than normal (because more information is needed),
     * then this method will return %FALSE.
     */
    supportsTextChats(): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Capabilities

    connect(sigName: "notify::channel-classes-variant", callback: any): number
    on(sigName: "notify::channel-classes-variant", callback: any): number
    once(sigName: "notify::channel-classes-variant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-classes-variant", ...args: any[]): void
    connect(sigName: "notify::contact-specific", callback: any): number
    on(sigName: "notify::contact-specific", callback: any): number
    once(sigName: "notify::contact-specific", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-specific", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing capabilities a #TpConnection or #TpContact supports.
 * @class 
 */
export class Capabilities extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Capabilities

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Capabilities

    constructor(config?: Capabilities.ConstructorProperties) 
    _init(config?: Capabilities.ConstructorProperties): void
}

export module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `chat-state-changed`
     */
    export interface ChatStateChangedSignalCallback {
        (contact: number, state: number): void
    }

    /**
     * Signal callback interface for `group-contacts-changed`
     */
    export interface GroupContactsChangedSignalCallback {
        (added: Contact[], removed: Contact[], localPending: Contact[], remotePending: Contact[], actor: Contact, details: GLib.HashTable): void
    }

    /**
     * Signal callback interface for `group-flags-changed`
     */
    export interface GroupFlagsChangedSignalCallback {
        (added: number, removed: number): void
    }


    /**
     * Signal callback interface for `group-members-changed-detailed`
     */
    export interface GroupMembersChangedDetailedSignalCallback {
        (added: number[], removed: number[], localPending: number[], remotePending: number[], details: GLib.HashTable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.Channel

        /**
         * The #TpConnection to which this #TpChannel belongs. Used for e.g.
         * handle manipulation.
         */
        connection?: Connection | null
    }

}

export interface Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Channel

    /**
     * Initially %FALSE; changes to %TRUE when tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CORE, and if the channel is a
     * group, %TP_CHANNEL_FEATURE_GROUP.
     * 
     * This is a less general form of tp_proxy_is_prepared(), which should be
     * used in new code.
     * 
     * One important difference is that after #TpProxy::invalidated is
     * signalled, #TpChannel:channel-ready keeps its current value - which might
     * be %TRUE, if the channel was successfully prepared before it became
     * invalidated - but tp_proxy_is_prepared() returns %FALSE for all features.
     * 
     * Change notification is via notify::channel-ready.
     */
    readonly channelReady: boolean
    /**
     * The #TpConnection to which this #TpChannel belongs. Used for e.g.
     * handle manipulation.
     */
    readonly connection: Connection
    /**
     * If the %TP_CHANNEL_FEATURE_GROUP feature has been prepared successfully,
     * #TpChannelGroupFlags indicating the capabilities and behaviour of that
     * group.
     * 
     * Otherwise, this may be 0.
     * 
     * Change notification is via notify::group-flags or
     * TpChannel::group-flags-changed.
     */
    readonly groupFlags: number
    /**
     * If this channel is a group and %TP_CHANNEL_FEATURE_CONTACTS has been
     * prepared, and the user is a member of the group, the #TpContact
     * representing them in this group.
     * 
     * Otherwise, the result may be either a contact representing the user,
     * or %NULL.
     * 
     * Change notification is via notify::group-self-contact.
     */
    readonly groupSelfContact: Contact
    /**
     * If this channel is a group and %TP_CHANNEL_FEATURE_GROUP has been
     * prepared, and the user is a member of the group, the #TpHandle
     * representing them in this group.
     * 
     * Otherwise, the result may be either a handle representing the user, or 0.
     * 
     * Change notification is via notify::group-self-handle.
     */
    readonly groupSelfHandle: number
    /**
     * This channel's associated identifier, or the empty string if it has
     * handle type %TP_HANDLE_TYPE_NONE.
     * 
     * For channels where #TpChannelIface:handle is non-zero, this is the result
     * of inspecting #TpChannelIface:handle.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be
     * the empty string.
     * 
     * Changed in 0.11.4: this property is never %NULL. Previously,
     * it was %NULL before an identifier was known, or when a channel
     * with no TargetID D-Bus property had TargetHandleType %TP_HANDLE_TYPE_NONE.
     */
    readonly identifier: string
    /**
     * The #TpContact of the initiator of this channel, or %NULL if there is no
     * particular initiator.
     * 
     * If the channel was initiated by a remote contact, this represents
     * that contact, and #TpChannel:requested will be %FALSE. For instance,
     * for an incoming call this property indicates the caller, and for a
     * chatroom invitation this property indicates who sent the invitation.
     * 
     * If the channel was requested by the local user, #TpChannel:requested
     * will be %TRUE, and this property may be the #TpChannel:group-self-contact
     * or #TpConnection:self-contact.
     * 
     * If the channel appeared for some other reason (for instance as a
     * side-effect of connecting to the server), this property may be %NULL.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
     * %NULL.
     */
    readonly initiatorContact: Contact
    /**
     * The %TP_HANDLE_TYPE_CONTACT #TpHandle of the initiator of this
     * channel, or 0 if there is no particular initiator.
     * 
     * If the channel was initiated by a remote contact, this handle represents
     * that contact, and #TpChannel:requested will be %FALSE. For instance,
     * for an incoming call this property indicates the caller, and for a
     * chatroom invitation this property indicates who sent the invitation.
     * 
     * If the channel was requested by the local user, #TpChannel:requested
     * will be %TRUE, and this property may be the #TpChannel:group-self-handle
     * or #TpConnection:self-handle.
     * 
     * If the channel appeared for some other reason (for instance as a
     * side-effect of connecting to the server), this property may be 0.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be 0.
     */
    readonly initiatorHandle: number
    /**
     * If #TpChannel:initiator-handle is 0, this will always be "".
     * Otherwise, this will be the #TpContact:identifier of the contact
     * with that handle.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be
     * the empty string.
     */
    readonly initiatorIdentifier: string
    /**
     * If %TRUE, tp_channel_provide_password_async() has to be called
     * to be able to join the channel.
     * 
     * This is not guaranteed to be meaningful until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_PASSWORD; until then, it may return
     * %FALSE even if the channel is actually protected by a password.
     * Preparing %TP_CHANNEL_FEATURE_PASSWORD also ensures that the
     * notify::password-needed signal will be fired when this property changes.
     */
    readonly passwordNeeded: boolean
    /**
     * %TRUE if this channel was created in response to a local request, such
     * as a call to tp_account_channel_request_create_channel_async(). %FALSE
     * if this channel was initiated by a remote contact
     * (the #TpChannel:initiator-handle), or if it appeared as a side-effect
     * of some other action.
     * 
     * For instance, this is %FALSE on incoming calls and file transfers,
     * remotely-initiated 1-1 text conversations, and invitations to chatrooms,
     * and %TRUE on outgoing calls and file transfers, locally-initiated 1-1
     * text conversations, and chatrooms joined by local user action.
     * 
     * This is not guaranteed to be meaningful until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may return
     * %FALSE even if the channel was actually requested.
     */
    readonly requested: boolean
    /**
     * If this channel is for communication with a single contact (that is,
     * #TpChannelIface:handle-type is %TP_HANDLE_TYPE_CONTACT), then a #TpContact
     * representing the remote contact. For chat rooms, contact search channels and
     * other channels without a single remote contact, %NULL.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
     * %NULL.
     */
    readonly targetContact: Contact

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Channel

    /**
     * Returns the connection for this channel. The returned pointer is only valid
     * while this channel is valid - reference it with g_object_ref() if needed.
     */
    borrowConnection(): Connection
    /**
     * Returns the immutable D-Bus properties of this channel, the same as
     * #TpChannel:channel-properties.
     * 
     * The returned hash table should not be altered, and is not necessarily
     * valid after the main loop is next re-entered. Copy it with
     * g_boxed_copy() (its type is %TP_HASH_TYPE_QUALIFIED_PROPERTY_VALUE_MAP)
     * if a copy that remains valid must be kept.
     * 
     * If the #TpChannel:channel-properties property was not set during
     * construction (e.g. by calling tp_channel_new_from_properties()), a
     * reasonable but possibly incomplete version will be made up from the values
     * of individual properties; reading this property repeatedly may yield
     * progressively more complete values until the %TP_CHANNEL_FEATURE_CORE
     * feature is prepared.
     */
    borrowImmutableProperties(): GLib.HashTable
    /**
     * Close channel `self`. In most cases, it's generally cleaner to use
     * tp_channel_leave_async() instead to properly leave and close the channel.
     * 
     * When the channel has been closed, `callback` will be called.
     * You can then call tp_channel_close_finish() to get the result of
     * the operation.
     * @param callback a callback to call when we closed the channel, or %NULL  to ignore any reply
     */
    closeAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a call to tp_channel_leave_async().
     * @param result a #GAsyncResult passed to the callback for tp_channel_close_async().
     */
    closeFinish(result: Gio.AsyncResult): boolean
    /**
     * Destroy channel `self`.
     * If `self` doesn't implement #TP_IFACE_QUARK_CHANNEL_INTERFACE_DESTROYABLE
     * or if for any reason we can't destroy the channel, we close it.
     * 
     * When the channel has been destroyed or closed, `callback` will be called.
     * You can then call tp_channel_destroy_finish() to get the result of
     * the operation.
     * @param callback a callback to call when we left the channel
     */
    destroyAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_channel_destroy_async().
     * @param result a #GAsyncResult passed to the callback for tp_channel_destroy_async().
     */
    destroyFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns the immutable D-Bus properties of this channel, in a variant of type
     * %G_VARIANT_TYPE_VARDICT where the keys are strings,
     * D-Bus interface name + "." + property name. Use g_variant_lookup() or
     * g_variant_lookup_value() for convenient access to the values.
     * 
     * If the #TpChannel:channel-properties property was not set during
     * construction (e.g. by calling tp_channel_new_from_properties()), a
     * reasonable but possibly incomplete version will be made up from the values
     * of individual properties; reading this property repeatedly may yield
     * progressively more complete values until the %TP_CHANNEL_FEATURE_CORE
     * feature is prepared.
     * 
     * This function should be used only by #TpChannel subclasses, otherwise it is
     * recommended to use individual property getters instead.
     */
    dupImmutableProperties(): GLib.Variant
    /**
     * Get the D-Bus interface name representing this channel's type,
     * if it has been discovered.
     * 
     * This is the same as the #TpChannelIface:channel-type property; it isn't
     * guaranteed to be non-%NULL until the %TP_CHANNEL_FEATURE_CORE feature has
     * been prepared.
     */
    getChannelType(): string
    /**
     * Get the D-Bus interface name representing this channel's type, as a GQuark,
     * if it has been discovered.
     * 
     * This is the same as the #TpChannelIface:channel-type property, except that it
     * is a GQuark rather than a string. It isn't guaranteed to be nonzero until
     * the %TP_CHANNEL_FEATURE_CORE property is ready.
     */
    getChannelTypeId(): GLib.Quark
    /**
     * Return the chat state for the given contact. If tp_proxy_is_prepared()
     * would return %FALSE for the feature %TP_CHANNEL_FEATURE_CHAT_STATES,
     * the result will always be %TP_CHANNEL_CHAT_STATE_INACTIVE.
     * @param contact a contact handle
     */
    getChatState(contact: Handle): ChannelChatState
    /**
     * Returns the connection for this channel. The returned pointer is only valid
     * while this channel is valid - reference it with g_object_ref() if needed.
     */
    getConnection(): Connection
    /**
     * Get the handle representing the contact, chatroom, etc. with which this
     * channel communicates for its whole lifetime, or 0 if there is no such
     * handle or it has not yet been discovered.
     * 
     * This is the same as the #TpChannelIface:handle property. It isn't
     * guaranteed to have its final value until the %TP_CHANNEL_FEATURE_CORE
     * feature is ready.
     * 
     * If `handle_type` is not %NULL, the type of handle is written into it.
     * This will be %TP_UNKNOWN_HANDLE_TYPE if the handle has not yet been
     * discovered, or %TP_HANDLE_TYPE_NONE if there is no handle with which this
     * channel will always communicate. This is the same as the
     * #TpChannelIface:handle-type property.
     */
    getHandle(): [ /* returnType */ Handle, /* handleType */ HandleType ]
    /**
     * This channel's associated identifier, or the empty string if no identifier
     * or unknown.
     * 
     * This is the same as the #TpChannel:identifier property, and isn't guaranteed
     * to be set until the %TP_CHANNEL_FEATURE_CORE property is ready.
     * 
     * Changed in 0.11.4: as with #TpChannel:identifier, this could
     * previously either be %NULL or the empty string if there was no suitable
     * value. It is now non-%NULL in all cases.
     */
    getIdentifier(): string
    /**
     * <!-- -->
     */
    getInitiatorContact(): Contact
    /**
     * Return the #TpChannel:requested property
     */
    getRequested(): boolean
    /**
     * <!-- -->
     */
    getTargetContact(): Contact
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
     * prepared, return a #GPtrArray containing its local-pending members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
     * the result may either be a set of local-pending members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupDupLocalPendingContacts(): Contact[]
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
     * prepared, return a #GPtrArray containing its members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
     * the result may either be a set of members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupDupMembersContacts(): Contact[]
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
     * prepared, return a #GPtrArray containing its remote-pending members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
     * the result may either be a set of remote-pending members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupDupRemotePendingContacts(): Contact[]
    /**
     * Synopsis (see below for further explanation):
     * 
     * - if `self` is not a group or `contact` is not a member of this channel,
     *   result is undefined;
     * - if %TP_CHANNEL_FEATURE_CONTACTS has not yet been prepared, result is
     *   undefined;
     * - if `self` does not have flags that include
     *   %TP_CHANNEL_GROUP_FLAG_PROPERTIES,
     *   result is undefined;
     * - if `contact` is channel-specific and its globally valid "owner" is known,
     *   return that owner;
     * - if `contact` is channel-specific and its globally valid "owner" is unknown,
     *   return %NULL;
     * - if `contact` is globally valid, return `contact` itself
     * 
     * Some channels (those with flags that include
     * %TP_CHANNEL_GROUP_FLAG_CHANNEL_SPECIFIC_HANDLES) have a concept of
     * "channel-specific contacts". These are contacts that only have meaning within
     * the context of the channel - for instance, in XMPP Multi-User Chat,
     * participants in a chatroom are identified by an in-room JID consisting
     * of the JID of the chatroom plus a local nickname.
     * 
     * Depending on the protocol and configuration, it might be possible to find
     * out what globally valid contact (i.e. a contact that you could add to
     * your contact list) "owns" a channel-specific contact. For instance, in
     * most XMPP MUC chatrooms, normal users cannot see what global JID
     * corresponds to an in-room JID, but moderators can.
     * 
     * This is further complicated by the fact that channels with channel-specific
     * contacts can sometimes have members with globally valid contacts (for
     * instance, if you invite someone to an XMPP MUC using their globally valid
     * JID, you would expect to see the contact representing that JID in the
     * Group's remote-pending set).
     * @param contact a contact which is a member of this channel
     */
    groupGetContactOwner(contact: Contact): Contact
    /**
     * Return the #TpChannel:group-flags property (see the description
     * of that property for notes on validity).
     */
    groupGetFlags(): ChannelGroupFlags
    /**
     * Synopsis (see below for further explanation):
     * 
     * - if `self` is not a group or `handle` is not a member of this channel,
     *   result is undefined;
     * - if %TP_CHANNEL_FEATURE_GROUP has not yet been prepared, result is
     *   undefined;
     * - if `self` does not have flags that include
     *   %TP_CHANNEL_GROUP_FLAG_PROPERTIES,
     *   result is undefined;
     * - if `handle` is channel-specific and its globally valid "owner" is known,
     *   return that owner;
     * - if `handle` is channel-specific and its globally valid "owner" is unknown,
     *   return zero;
     * - if `handle` is globally valid, return `handle` itself
     * 
     * Some channels (those with flags that include
     * %TP_CHANNEL_GROUP_FLAG_CHANNEL_SPECIFIC_HANDLES) have a concept of
     * "channel-specific handles". These are handles that only have meaning within
     * the context of the channel - for instance, in XMPP Multi-User Chat,
     * participants in a chatroom are identified by an in-room JID consisting
     * of the JID of the chatroom plus a local nickname.
     * 
     * Depending on the protocol and configuration, it might be possible to find
     * out what globally valid handle (i.e. an identifier that you could add to
     * your contact list) "owns" a channel-specific handle. For instance, in
     * most XMPP MUC chatrooms, normal users cannot see what global JID
     * corresponds to an in-room JID, but moderators can.
     * 
     * This is further complicated by the fact that channels with channel-specific
     * handles can sometimes have members with globally valid handles (for
     * instance, if you invite someone to an XMPP MUC using their globally valid
     * JID, you would expect to see the handle representing that JID in the
     * Group's remote-pending set).
     * 
     * This function's result is undefined unless the channel is ready
     * and its flags include %TP_CHANNEL_GROUP_FLAG_PROPERTIES (an implementation
     * without extra D-Bus round trips is not possible using the older API).
     * @param handle a handle which is a member of this channel
     */
    groupGetHandleOwner(handle: Handle): Handle
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
     * prepared, return a #TpIntset containing its local-pending members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
     * the result may either be a set of local-pending members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupGetLocalPending(): Intset
    /**
     * If `local_pending` is actually a local-pending contact,
     * write additional information into `actor,` `reason` and `message` and return
     * %TRUE. The contact and message are not referenced or copied, and can only be
     * assumed to remain valid until the main loop is re-entered.
     * 
     * If `local_pending` is not the handle of a local-pending contact,
     * write %NULL into `actor,` %TP_CHANNEL_GROUP_CHANGE_REASON_NONE into `reason`
     * and "" into `message,` and return %FALSE.
     * @param localPending the #TpContact of a local-pending contact about whom more  information is needed
     */
    groupGetLocalPendingContactInfo(localPending: Contact): [ /* returnType */ boolean, /* actor */ Contact, /* reason */ ChannelGroupChangeReason, /* message */ string ]
    /**
     * If `local_pending` is actually the handle of a local-pending contact,
     * write additional information into `actor,` `reason` and `message` and return
     * %TRUE. The handle and message are not referenced or copied, and can only be
     * assumed to remain valid until the main loop is re-entered.
     * 
     * If `local_pending` is not the handle of a local-pending contact,
     * write 0 into `actor,` %TP_CHANNEL_GROUP_CHANGE_REASON_NONE into `reason`
     * and "" into `message,` and return %FALSE.
     * @param localPending the handle of a local-pending contact about whom more  information is needed
     */
    groupGetLocalPendingInfo(localPending: Handle): [ /* returnType */ boolean, /* actor */ Handle, /* reason */ ChannelGroupChangeReason, /* message */ string ]
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
     * prepared, return a #TpIntset containing its members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
     * the result may either be a set of members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupGetMembers(): Intset
    /**
     * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
     * prepared, return a #TpIntset containing its remote-pending members.
     * 
     * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
     * the result may either be a set of remote-pending members, or %NULL.
     * 
     * If `self` is not a group, return %NULL.
     */
    groupGetRemotePending(): Intset
    /**
     * <!-- -->
     */
    groupGetSelfContact(): Contact
    /**
     * Return the #TpChannel:group-self-handle property (see the description
     * of that property for notes on validity).
     */
    groupGetSelfHandle(): Handle
    /**
     * Join channel `self` with `message` as join message.
     * 
     * When we joined the channel, `callback` will be called.
     * You can then call tp_channel_join_finish() to get the result of
     * the operation.
     * 
     * Note that unlike tp_channel_leave_async(), %TP_CHANNEL_FEATURE_GROUP feature
     * must be prepared before calling this function.
     * @param message the join message
     * @param callback a callback to call when we joined the channel
     */
    joinAsync(message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_channel_join_async().
     * @param result a #GAsyncResult passed to the callback for tp_channel_join_async().
     */
    joinFinish(result: Gio.AsyncResult): boolean
    /**
     * Leave channel `self` with `reason` as reason and `message` as leave message.
     * If `self` doesn't implement #TP_IFACE_QUARK_CHANNEL_INTERFACE_GROUP or if
     * for any reason we can't properly leave the channel, we close it.
     * 
     * When we left the channel, `callback` will be called.
     * You can then call tp_channel_leave_finish() to get the result of
     * the operation.
     * 
     * Note that unlike tp_channel_join_async(), %TP_CHANNEL_FEATURE_GROUP feature
     * does not have to be prepared and will be prepared for you. But this is a
     * deprecated behaviour.
     * @param reason the leave reason
     * @param message the leave message
     * @param callback a callback to call when we left the channel
     */
    leaveAsync(reason: ChannelGroupChangeReason, message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_channel_leave_async().
     * @param result a #GAsyncResult passed to the callback for tp_channel_leave_async().
     */
    leaveFinish(result: Gio.AsyncResult): boolean
    /**
     * Provide `password` so that `self` can be joined.
     * This function must be called with the correct password in order for
     * channel joining to proceed if the TpChannel:password-needed property
     * is set.
     * 
     * Once the password has been provided, `callback` will be
     * called. You can then call tp_channel_provide_password_finish()
     * to get the result of the operation.
     * @param password the password
     * @param callback a callback to call when `password` has been provided
     */
    providePasswordAsync(password: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_channel_provide_password_async().
     * If the password was rejected, the operation
     * fails with #TP_ERROR_AUTHENTICATION_FAILED.
     * @param result a #GAsyncResult passed to the callback for  tp_channel_provide_password_async().
     */
    providePasswordFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.Channel

    connect(sigName: "chat-state-changed", callback: Channel.ChatStateChangedSignalCallback): number
    on(sigName: "chat-state-changed", callback: Channel.ChatStateChangedSignalCallback): number
    once(sigName: "chat-state-changed", callback: Channel.ChatStateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "chat-state-changed", state: number, ...args: any[]): void
    connect(sigName: "group-contacts-changed", callback: Channel.GroupContactsChangedSignalCallback): number
    on(sigName: "group-contacts-changed", callback: Channel.GroupContactsChangedSignalCallback): number
    once(sigName: "group-contacts-changed", callback: Channel.GroupContactsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-contacts-changed", removed: Contact[], localPending: Contact[], remotePending: Contact[], actor: Contact, details: GLib.HashTable, ...args: any[]): void
    connect(sigName: "group-flags-changed", callback: Channel.GroupFlagsChangedSignalCallback): number
    on(sigName: "group-flags-changed", callback: Channel.GroupFlagsChangedSignalCallback): number
    once(sigName: "group-flags-changed", callback: Channel.GroupFlagsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-flags-changed", removed: number, ...args: any[]): void
    connect(sigName: "group-members-changed", callback: (...args: any[]) => void): number
    on(sigName: "group-members-changed", callback: (...args: any[]) => void): number
    once(sigName: "group-members-changed", callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: "group-members-changed", added: any, removed: any, localPending: any, remotePending: any, actor: number, reason: number, ...args: any[]): void
    connect(sigName: "group-members-changed-detailed", callback: Channel.GroupMembersChangedDetailedSignalCallback): number
    on(sigName: "group-members-changed-detailed", callback: Channel.GroupMembersChangedDetailedSignalCallback): number
    once(sigName: "group-members-changed-detailed", callback: Channel.GroupMembersChangedDetailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-members-changed-detailed", removed: number[], localPending: number[], remotePending: number[], details: GLib.HashTable, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Channel

    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A proxy object for a Telepathy channel.
 * A proxy object for a Telepathy channel. There are no interesting
 * public struct fields.
 * 
 * (Changed in 0.7.12: the layout of the structure is visible, allowing
 * subclassing.)
 * @class 
 */
export class Channel extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Channel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Channel

    constructor(config?: Channel.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param optionalChannelType the channel type if already known, or %NULL if not
     * @param optionalHandleType the handle type if already known, or  %TP_UNKNOWN_HANDLE_TYPE if not
     * @param optionalHandle the handle if already known, or 0 if not  (if `optional_handle_type` is %TP_UNKNOWN_HANDLE_TYPE or  %TP_HANDLE_TYPE_NONE, this must be 0)
     */
    constructor(conn: Connection, objectPath: string, optionalChannelType: string, optionalHandleType: HandleType, optionalHandle: Handle) 
    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param optionalChannelType the channel type if already known, or %NULL if not
     * @param optionalHandleType the handle type if already known, or  %TP_UNKNOWN_HANDLE_TYPE if not
     * @param optionalHandle the handle if already known, or 0 if not  (if `optional_handle_type` is %TP_UNKNOWN_HANDLE_TYPE or  %TP_HANDLE_TYPE_NONE, this must be 0)
     */
    static new(conn: Connection, objectPath: string, optionalChannelType: string, optionalHandleType: HandleType, optionalHandle: Handle): Channel
    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    static newFromProperties(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable): Channel
    _init(config?: Channel.ConstructorProperties): void
    static getFeatureQuarkChatStates(): GLib.Quark
    static getFeatureQuarkContacts(): GLib.Quark
    static getFeatureQuarkCore(): GLib.Quark
    static getFeatureQuarkGroup(): GLib.Quark
    static getFeatureQuarkPassword(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpChannel have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CHANNEL.
     */
    static initKnownInterfaces(): void
}

export module ChannelDispatchOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `channel-lost`
     */
    export interface ChannelLostSignalCallback {
        (channel: Channel, domain: number, code: number, message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

        /**
         * The #TpAccount with which the connection and channels are associated.
         * 
         * Read-only except during construction.
         * 
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        account?: Account | null
        /**
         * A #GPtrArray containing the #TpChannel to be dispatched.
         * 
         * Read-only.
         * 
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        channels?: object[] | null
        /**
         * The #TpConnection with which the channels are associated.
         * 
         * Read-only except during construction.
         * 
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        connection?: Connection | null
    }

}

export interface ChannelDispatchOperation {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    /**
     * The #TpAccount with which the connection and channels are associated.
     * 
     * Read-only except during construction.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
     */
    readonly account: Account
    /**
     * A #GPtrArray containing the #TpChannel to be dispatched.
     * 
     * Read-only.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
     */
    readonly channels: object[]
    /**
     * The #TpConnection with which the channels are associated.
     * 
     * Read-only except during construction.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
     */
    readonly connection: Connection
    /**
     * A #GStrv containing the well known bus names (starting
     * with TP_CLIENT_BUS_NAME_BASE) of the possible Handlers for
     * the channels
     * 
     * Read-only except during construction.
     * 
     * This is not guaranteed to be set until tp_proxy_prepare_async() has
     * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
     */
    readonly possibleHandlers: string[]

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    /**
     * Called by an approver to claim channels for handling internally.
     * If this method is called successfully, the process calling this
     * method becomes the handler for the channel.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted, in the same way as for
     * tp_channel_dispatch_operation_handle_with_async().
     * 
     * This method may fail because the dispatch operation has already
     * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
     * for more details. The approver MUST NOT attempt to interact with
     * the channels further in this case.
     * @param callback a callback to call when the call returns
     */
    claimAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async call to Claim().
     * @param result a #GAsyncResult
     */
    claimFinish(result: Gio.AsyncResult): boolean
    /**
     * Called by an approver to claim channels for handling internally.
     * If this method is called successfully, the process calling this
     * method becomes the handler for the channel.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted, in the same way as for
     * tp_channel_dispatch_operation_handle_with_async().
     * 
     * This method may fail because the dispatch operation has already
     * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
     * for more details. The approver MUST NOT attempt to interact with
     * the channels further in this case.
     * 
     * This is an improved version of tp_channel_dispatch_operation_claim_async()
     * as it tells `client` about the new channels being handled.
     * 
     * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
     * calling this function.
     * @param client the #TpBaseClient claiming `self`
     * @param callback a callback to call when the call returns
     */
    claimWithAsync(client: BaseClient, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async call to Claim() initiated using
     * tp_channel_dispatch_operation_claim_with_async().
     * @param result a #GAsyncResult
     */
    claimWithFinish(result: Gio.AsyncResult): boolean
    /**
     * Called by an approver to claim channels and close them all right away.
     * If this method is called successfully, `self` has been claimed and
     * tp_channel_close_async() has been called on all of its channels.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted, in the same way as for
     * tp_channel_dispatch_operation_handle_with_async().
     * 
     * This method may fail because the dispatch operation has already
     * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
     * for more details.
     * 
     * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
     * calling this function.
     * @param callback a callback to call when the request has been satisfied
     */
    closeChannelsAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async operation initiated using
     * tp_channel_dispatch_operation_close_channels_async().
     * @param result a #GAsyncResult
     */
    closeChannelsFinish(result: Gio.AsyncResult): boolean
    /**
     * Called by an approver to claim channels and destroy them all right away.
     * If this method is called successfully, `self` has been claimed and
     * tp_channel_destroy_async() has been called on all of its channels.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted, in the same way as for
     * tp_channel_dispatch_operation_handle_with_async().
     * 
     * This method may fail because the dispatch operation has already
     * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
     * for more details.
     * 
     * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
     * calling this function.
     * @param callback a callback to call when the request has been satisfied
     */
    destroyChannelsAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async operation initiated using
     * tp_channel_dispatch_operation_destroy_channels_async().
     * @param result a #GAsyncResult
     */
    destroyChannelsFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns a #GPtrArray containing the #TpChannel of this
     * ChannelDispatchOperation.
     * The returned array and its #TpChannel are only valid while `self` is
     * valid - copy array and reference channels with g_object_ref() if needed.
     */
    getChannels(): Channel[]
    /**
     * Called by an approver to accept a channel bundle and request that the
     * given handler be used to handle it.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted with the TP_DBUS_ERROR_OBJECT_REMOVED error code.
     * 
     * However, this method may fail because the dispatch has already been
     * completed and the object has already gone. If this occurs, it indicates
     * that another approver has asked for the bundle to be handled by a
     * particular handler. The approver MUST NOT attempt to interact with
     * the channels further in this case, unless it is separately
     * invoked as the handler.
     * 
     * Approvers which are also channel handlers SHOULD use
     * tp_channel_dispatch_operation_claim_async() instead
     * of tp_channel_dispatch_operation_handle_with_async() to request
     * that they can handle a channel bundle themselves.
     * @param handler The well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE) of the channel handler that should handle the channel, or %NULL if the client has no preferred channel handler
     * @param callback a callback to call when the call returns
     */
    handleWithAsync(handler: string | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async call to HandleWith().
     * @param result a #GAsyncResult
     */
    handleWithFinish(result: Gio.AsyncResult): boolean
    /**
     * A variant of tp_channel_dispatch_operation_handle_with_async()
     * allowing the approver to pass an user action time.
     * This timestamp will be passed to the Handler when HandleChannels is called.
     * 
     * If an X server timestamp for the user action causing this method call is
     * available, `user_action_time` should be this timestamp (for instance, the
     * result of gdk_event_get_time() if it is not %GDK_CURRENT_TIME). Otherwise, it
     * may be %TP_USER_ACTION_TIME_NOT_USER_ACTION to behave as if there was no
     * user action or it happened a long time ago, or
     * %TP_USER_ACTION_TIME_CURRENT_TIME to have the Handler behave as though the
     * user action had just happened (resembling, but not numerically equal to,
     * %GDK_CURRENT_TIME).
     * 
     * This method has been introduced in telepathy-mission-control 5.5.0.
     * @param handler The well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE) of the channel handler that should handle the channel, or %NULL if the client has no preferred channel handler
     * @param userActionTime the time at which user action occurred, or one of the  special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME
     * @param callback a callback to call when the call returns
     */
    handleWithTimeAsync(handler: string | null, userActionTime: number, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async call to HandleWithTime().
     * @param result a #GAsyncResult
     */
    handleWithTimeFinish(result: Gio.AsyncResult): boolean
    /**
     * Called by an approver to claim channels and leave them all right away.
     * If this method is called successfully, `self` has been claimed and
     * tp_channel_leave_async() has been called on all of its channels.
     * 
     * If successful, this method will cause the #TpProxy::invalidated signal
     * to be emitted, in the same way as for
     * tp_channel_dispatch_operation_handle_with_async().
     * 
     * This method may fail because the dispatch operation has already
     * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
     * for more details.
     * 
     * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
     * calling this function.
     * @param reason the leave reason
     * @param message the leave message
     * @param callback a callback to call when the request has been satisfied
     */
    leaveChannelsAsync(reason: ChannelGroupChangeReason, message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async operation initiated using
     * tp_channel_dispatch_operation_leave_channels_async().
     * @param result a #GAsyncResult
     */
    leaveChannelsFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    connect(sigName: "channel-lost", callback: ChannelDispatchOperation.ChannelLostSignalCallback): number
    on(sigName: "channel-lost", callback: ChannelDispatchOperation.ChannelLostSignalCallback): number
    once(sigName: "channel-lost", callback: ChannelDispatchOperation.ChannelLostSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "channel-lost", domain: number, code: number, message: string, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channels", callback: any): number
    on(sigName: "notify::channels", callback: any): number
    once(sigName: "notify::channels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::possible-handlers", callback: any): number
    on(sigName: "notify::possible-handlers", callback: any): number
    once(sigName: "notify::possible-handlers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::possible-handlers", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * One of the channel dispatcher's functions is to offer incoming channels to
 * Approver clients for approval. An approver should generally ask the user
 * whether they want to participate in the requested communication channels
 * (join the chat or chatroom, answer the call, accept the file transfer, or
 * whatever is appropriate). A collection of channels offered in this way
 * is represented by a ChannelDispatchOperation object.
 * 
 * If the user wishes to accept the communication channels, the approver
 * should call tp_cli_channel_dispatch_operation_call_handle_with() to
 * indicate the user's or approver's preferred handler for the channels (the
 * empty string indicates no particular preference, and will cause any
 * suitable handler to be used).
 * 
 * If the user wishes to reject the communication channels, or if the user
 * accepts the channels and the approver will handle them itself, the approver
 * should call tp_cli_channel_dispatch_operation_call_claim(). If this method
 * succeeds, the approver immediately has control over the channels as their
 * primary handler, and may do anything with them (in particular, it may close
 * them in whatever way seems most appropriate).
 * 
 * There are various situations in which the channel dispatch operation will
 * be closed, causing the #TpProxy::invalidated signal to be emitted. If this
 * happens, the approver should stop prompting the user.
 * 
 * Because all approvers are launched simultaneously, the user might respond
 * to another approver; if this happens, the #TpProxy::invalidated signal
 * will be emitted with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_OBJECT_REMOVED.
 * 
 * If a channel closes, the #TpChannelDispatchOperation::channel-lost signal
 * is emitted. If all channels
 * close, there is nothing more to dispatch, so the #TpProxy::invalidated
 * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_OBJECT_REMOVED.
 * 
 * If the channel dispatcher crashes or exits, the #TpProxy::invalidated
 * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_NAME_OWNER_LOST. In a high-quality implementation, the
 * dispatcher should be restarted, at which point it will create new
 * channel dispatch operations for any undispatched channels, and the approver
 * will be notified again.
 * 
 * Creating a #TpChannelDispatchOperation directly is deprecated: it
 * should only be created via a #TpBaseClient.
 * 
 * Since 0.16, #TpChannelDispatchOperation always has a non-%NULL
 * #TpProxy:factory, which will be propagated to the #TpAccount,
 * #TpConnection and #TpChannel.
 * @class 
 */
export class ChannelDispatchOperation extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperation

    constructor(config?: ChannelDispatchOperation.ConstructorProperties) 
    /**
     * Convenience function to create a new channel dispatch operation proxy.
     * 
     * The `immutable_properties` argument is not yet used.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this channel dispatch operation
     * @param immutableProperties As many as are known of the immutable D-Bus  properties of this channel dispatch operation, or %NULL if none are known
     */
    constructor(busDaemon: DBusDaemon, objectPath: string, immutableProperties: GLib.HashTable) 
    /**
     * Convenience function to create a new channel dispatch operation proxy.
     * 
     * The `immutable_properties` argument is not yet used.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this channel dispatch operation
     * @param immutableProperties As many as are known of the immutable D-Bus  properties of this channel dispatch operation, or %NULL if none are known
     */
    static new(busDaemon: DBusDaemon, objectPath: string, immutableProperties: GLib.HashTable): ChannelDispatchOperation
    _init(config?: ChannelDispatchOperation.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpChannelDispatchOperation have been
     * set up. This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CHANNEL_DISPATCH_OPERATION.
     */
    static initKnownInterfaces(): void
}

export module ChannelDispatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface ChannelDispatcher {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcher

    /**
     * Asynchronously calls PresentChannel on the ChannelDispatcher to ask
     * to the handler of `channel` to re-present it to the user.
     * You can then call tp_channel_dispatcher_present_channel_finish() to
     * get the result of the operation.
     * @param channel a #TpChannel
     * @param userActionTime the time at which user action occurred, or #TP_USER_ACTION_TIME_NOT_USER_ACTION if this presentation request is for some reason not involving user action.
     * @param callback a callback to call when the request is satisfied
     */
    presentChannelAsync(channel: Channel, userActionTime: number, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async channel presentation request started using
     * tp_channel_dispatcher_present_channel_async().
     * @param result a #GAsyncResult
     */
    presentChannelFinish(result: Gio.AsyncResult): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcher

    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Channel Dispatcher's main D-Bus API is used to request channels,
 * which is done by calling tp_cli_channel_dispatcher_call_create_channel() or
 * tp_cli_channel_dispatcher_call_ensure_channel() as appropriate.
 * 
 * The Telepathy Channel Dispatcher is also responsible for responding to new
 * channels and launching client processes to handle them. However, clients
 * that can work with incoming channels do not have to call methods
 * on the channel dispatcher: instead, they must register with the channel
 * dispatcher passively, by taking a bus name starting with
 * %TP_CLIENT_BUS_NAME_BASE and implementing the #TpSvcClient interface.
 * See the Telepathy D-Bus Interface Specification for details.
 * 
 * This proxy is usable but incomplete: convenience methods will be added in
 * a later version of telepathy-glib, along with a mechanism similar to
 * tp_connection_call_when_ready().
 * @class 
 */
export class ChannelDispatcher extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcher

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcher

    constructor(config?: ChannelDispatcher.ConstructorProperties) 
    /**
     * Convenience function to create a new channel dispatcher proxy.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     */
    constructor(busDaemon: DBusDaemon) 
    /**
     * Convenience function to create a new channel dispatcher proxy.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     */
    static new(busDaemon: DBusDaemon): ChannelDispatcher
    _init(config?: ChannelDispatcher.ConstructorProperties): void
    /**
     * Ensure that the known interfaces for TpChannelDispatcher have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CHANNEL_DISPATCHER.
     */
    static initKnownInterfaces(): void
}

export module ChannelRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `succeeded`
     */
    export interface SucceededSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `succeeded-with-channel`
     */
    export interface SucceededWithChannelSignalCallback {
        (connection: Connection, channel: Channel): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies when the
         * #TpChannelRequest::succeeded-with-channel signal is fired.
         * This property can be changed using
         * tp_channel_request_set_channel_factory().
         * 
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channelFactory?: GObject.Object | null
    }

}

export interface ChannelRequest {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    /**
     * The #TpAccount on which this request was made, not guaranteed
     * to be prepared.
     * 
     * Read-only.
     */
    readonly account: Account
    /**
     * The object implementing the #TpClientChannelFactoryInterface interface
     * that will be used to create channel proxies when the
     * #TpChannelRequest::succeeded-with-channel signal is fired.
     * This property can be changed using
     * tp_channel_request_set_channel_factory().
     * 
     * If no channel factory is specified then #TpAutomaticProxyFactory is used.
     */
    channelFactory: GObject.Object
    /**
     * A %G_VARIANT_TYPE_VARDICT of metadata provided by
     * the channel requester; or %NULL if #TpChannelRequest:immutable-properties
     * is not defined or if no hints have been defined.
     * 
     * Read-only.
     */
    readonly hintsVardict: GLib.Variant
    /**
     * The immutable D-Bus properties of this channel request, represented by a
     * %G_VARIANT_TYPE_VARDICT where the keys are
     * D-Bus interface name + "." + property name.
     * 
     * Note that this property is set only if the immutable properties have been
     * set during the construction of the #TpChannelRequest.
     * 
     * Read-only except during construction.
     */
    readonly immutablePropertiesVardict: GLib.Variant
    /**
     * Either the well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE)
     * of the preferred handler for this channel request,
     * or %NULL to indicate that any handler would be acceptable.
     * 
     * Read-only.
     */
    readonly preferredHandler: string
    /**
     * The time at which user action occurred, or
     * #TP_USER_ACTION_TIME_NOT_USER_ACTION if this channel request is
     * for some reason not involving user action.
     * 
     * Read-only.
     */
    readonly userActionTime: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    /**
     * Return the #TpChannelRequest:hints-vardict property
     */
    dupHints(): GLib.Variant
    /**
     * Return the #TpChannelRequest:immutable-properties-vardict property.
     */
    dupImmutableProperties(): GLib.Variant
    /**
     * Return the value of the #TpChannelRequest:account construct-only property
     */
    getAccount(): Account
    /**
     * Return the #TpChannelRequest:hints property
     */
    getHints(): GLib.HashTable
    /**
     * Return the #TpChannelRequest:immutable-properties construct-only property
     */
    getImmutableProperties(): GLib.HashTable
    /**
     * return the #TpChannelRequest:preferred-handler construct-only property
     */
    getPreferredHandler(): string
    /**
     * return the #TpChannelRequest:user-action-time construct-only property
     */
    getUserActionTime(): number
    /**
     * Change the value of the #TpChannelRequest:channel-factory property.
     * @param factory an object implementing the #TpClientChannelFactoryInterface interface
     */
    setChannelFactory(factory: ClientChannelFactory): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    connect(sigName: "succeeded", callback: ChannelRequest.SucceededSignalCallback): number
    on(sigName: "succeeded", callback: ChannelRequest.SucceededSignalCallback): number
    once(sigName: "succeeded", callback: ChannelRequest.SucceededSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "succeeded", ...args: any[]): void
    connect(sigName: "succeeded-with-channel", callback: ChannelRequest.SucceededWithChannelSignalCallback): number
    on(sigName: "succeeded-with-channel", callback: ChannelRequest.SucceededWithChannelSignalCallback): number
    once(sigName: "succeeded-with-channel", callback: ChannelRequest.SucceededWithChannelSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "succeeded-with-channel", channel: Channel, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channel-factory", callback: any): number
    on(sigName: "notify::channel-factory", callback: any): number
    once(sigName: "notify::channel-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-factory", ...args: any[]): void
    connect(sigName: "notify::hints-vardict", callback: any): number
    on(sigName: "notify::hints-vardict", callback: any): number
    once(sigName: "notify::hints-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hints-vardict", ...args: any[]): void
    connect(sigName: "notify::immutable-properties-vardict", callback: any): number
    on(sigName: "notify::immutable-properties-vardict", callback: any): number
    once(sigName: "notify::immutable-properties-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::immutable-properties-vardict", ...args: any[]): void
    connect(sigName: "notify::preferred-handler", callback: any): number
    on(sigName: "notify::preferred-handler", callback: any): number
    once(sigName: "notify::preferred-handler", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-handler", ...args: any[]): void
    connect(sigName: "notify::user-action-time", callback: any): number
    on(sigName: "notify::user-action-time", callback: any): number
    once(sigName: "notify::user-action-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-action-time", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Requesting a channel from the channel dispatcher can take some time, so an
 * object is created in the channel dispatcher to represent each request. This
 * proxy represents one of those objects.
 * 
 * Any client can call tp_cli_channel_request_call_cancel() at any time to
 * attempt to cancel the request.
 * 
 * On success, the #TpChannelRequest::succeeded signal will be emitted.
 * Immediately after that, the #TpProxy::invalidated signal will be emitted,
 * with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_OBJECT_REMOVED (this is not an error condition, it merely
 * indicates that the channel request no longer exists).
 * 
 * On failure, the #TpProxy::invalidated signal will be emitted with some
 * other suitable error, usually from the %TP_ERROR domain.
 * 
 * If the channel dispatcher crashes or exits, the #TpProxy::invalidated
 * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
 * %TP_DBUS_ERROR_NAME_OWNER_LOST.
 * 
 * Creating a #TpChannelRequest directly is deprecated: it
 * should only be created via a #TpAccountChannelRequest
 * or a #TpBaseClient.
 * 
 * Since 0.16, #TpChannelRequest always has a non-%NULL #TpProxy:factory,
 * and its #TpProxy:factory will be propagated to the #TpAccount,
 * #TpConnection and #TpChannel.
 * @class 
 */
export class ChannelRequest extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ChannelRequest

    constructor(config?: ChannelRequest.ConstructorProperties) 
    /**
     * Convenience function to create a new channel request proxy.
     * 
     * If the channel request was newly created, the client making the request
     * is responsible for calling tp_cli_channel_request_call_proceed() when it
     * is ready for the channel request to proceed.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this channel request
     * @param immutableProperties As many as are known of the immutable D-Bus  properties of this channel request, or %NULL if none are known
     */
    constructor(busDaemon: DBusDaemon, objectPath: string, immutableProperties: GLib.HashTable) 
    /**
     * Convenience function to create a new channel request proxy.
     * 
     * If the channel request was newly created, the client making the request
     * is responsible for calling tp_cli_channel_request_call_proceed() when it
     * is ready for the channel request to proceed.
     * @constructor 
     * @param busDaemon Proxy for the D-Bus daemon
     * @param objectPath The non-NULL object path of this channel request
     * @param immutableProperties As many as are known of the immutable D-Bus  properties of this channel request, or %NULL if none are known
     */
    static new(busDaemon: DBusDaemon, objectPath: string, immutableProperties: GLib.HashTable): ChannelRequest
    _init(config?: ChannelRequest.ConstructorProperties): void
    /**
     * Ensure that the known interfaces for TpChannelRequest have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CHANNEL_REQUEST.
     */
    static initKnownInterfaces(): void
}

export module ClientMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends Message.ConstructorProperties {
    }

}

export interface ClientMessage {

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ClientMessage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure representing a message in the Telepathy messages interface
 * (client side).
 * @class 
 */
export class ClientMessage extends Message {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ClientMessage

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ClientMessage

    constructor(config?: ClientMessage.ConstructorProperties) 
    /**
     * A convenient function to create a new #TpClientMessage
     * @constructor 
     */
    constructor() 
    /**
     * A convenient function to create a new #TpClientMessage
     * @constructor 
     */
    static new(): ClientMessage
    /**
     * A convenient function to create a new #TpClientMessage having
     * 'text/plain' as 'content-type', `type` as 'message-type' and
     * `text` as 'content'.
     * @constructor 
     * @param type the type of message
     * @param text content of the messsage
     */
    static newText(type: ChannelTextMessageType, text: string): ClientMessage
    _init(config?: ClientMessage.ConstructorProperties): void
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `balance-changed`
     */
    export interface BalanceChangedSignalCallback {
        (balance: number, balanceScale: number, balanceCurrency: string): void
    }

    /**
     * Signal callback interface for `blocked-contacts-changed`
     */
    export interface BlockedContactsChangedSignalCallback {
        (added: Contact[], removed: Contact[]): void
    }

    /**
     * Signal callback interface for `contact-list-changed`
     */
    export interface ContactListChangedSignalCallback {
        (added: Contact[], removed: Contact[]): void
    }

    /**
     * Signal callback interface for `group-renamed`
     */
    export interface GroupRenamedSignalCallback {
        (oldName: string, newName: string): void
    }

    /**
     * Signal callback interface for `groups-created`
     */
    export interface GroupsCreatedSignalCallback {
        (added: string[]): void
    }

    /**
     * Signal callback interface for `groups-removed`
     */
    export interface GroupsRemovedSignalCallback {
        (added: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface Connection {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Connection

    /**
     * The Amount field of the Balance.AccountBalance property.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
     * 
     * See Also: tp_connection_get_balance()
     */
    readonly balance: number
    /**
     * The Currency field of the Balance.AccountBalance property.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
     * 
     * See Also: tp_connection_get_balance()
     */
    readonly balanceCurrency: string
    /**
     * The Scale field of the Balance.AccountBalance property.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
     * 
     * See Also: tp_connection_get_balance()
     */
    readonly balanceScale: number
    /**
     * The Balance.ManageCreditURI property.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
     */
    readonly balanceUri: string
    /**
     * A #GPtrArray of blocked #TpContact. Changes are notified using the
     * #TpConnection::blocked-contacts-changed signal.
     * 
     * These TpContact objects have been prepared with the desired features.
     * See tp_simple_client_factory_add_contact_features() to define which
     * features needs to be prepared on them.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
     */
    readonly blockedContacts: object[]
    /**
     * If true, presence subscription and publication can be changed using the
     * RequestSubscription, AuthorizePublication and RemoveContacts methods.
     * 
     * Rational: link-local XMPP, presence is implicitly published to everyone in
     * the local subnet, so the user cannot control their presence publication.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
     * %TP_CONNECTION_FEATURE_CONTACT_LIST.
     */
    readonly canChangeContactList: boolean
    /**
     * If this property is %TRUE, contacts may be reported as abusive to the
     * server administrators by setting report_abusive to %TRUE when calling
     * tp_connection_block_contacts_async().
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
     */
    readonly canReportAbusive: boolean
    /**
     * The %TpCapabilities object representing the capabilities of this
     * connection, or NULL if we don't know yet.
     * 
     * To wait for valid capability information, call tp_proxy_prepare_async()
     * with the feature %TP_CONNECTION_FEATURE_CAPABILITIES.
     */
    readonly capabilities: Capabilities
    /**
     * This connection's connection manager name.
     */
    readonly cmName: string
    /**
     * This connection's connection manager name.
     */
    readonly connectionManagerName: string
    /**
     * Initially %FALSE; changes to %TRUE when the connection has gone to
     * CONNECTED status, introspection has finished and it's ready for use.
     * 
     * By the time this property becomes %TRUE, any extra interfaces will
     * have been set up and the #TpProxy:interfaces property will have been
     * populated.
     * 
     * This is similar to %TP_CONNECTION_FEATURE_CONNECTED, except that once
     * it has changed to %TRUE, it remains %TRUE even if the connection has
     * been invalidated.
     */
    readonly connectionReady: boolean
    /**
     * The names of all groups that currently exist. This may be a larger set than
     * the union of all #TpContact:contact-groups properties, if the connection
     * allows groups to be empty.
     * 
     * This property's value is not meaningful until the
     * #TpConnection:contact-list-state property has become
     * %TP_CONTACT_LIST_STATE_SUCCESS.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
     */
    readonly contactGroups: string[]
    /**
     * If true, presence subscriptions (in both directions) on this connection are
     * stored by the server or other infrastructure.
     * 
     * If false, presence subscriptions on this connection are not stored.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
     * %TP_CONNECTION_FEATURE_CONTACT_LIST.
     */
    readonly contactListPersists: boolean
    /**
     * The progress made in retrieving the contact list.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
     * %TP_CONNECTION_FEATURE_CONTACT_LIST.
     */
    readonly contactListState: number
    /**
     * True if each contact can be in at most one group; false if each contact
     * can be in many groups.
     * 
     * This property cannot change after the connection has moved to the
     * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
     * and it may change at any time, without notification.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
     */
    readonly disjointGroups: boolean
    /**
     * Indicates the extent to which contacts' groups can be set and stored.
     * 
     * This property cannot change after the connection has moved to the
     * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
     * and it may change at any time, without notification.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
     */
    readonly groupStorage: number
    /**
     * The connection's machine-readable protocol name, such as "jabber",
     * "msn" or "local-xmpp". Recommended names for most protocols can be
     * found in the Telepathy D-Bus Interface Specification.
     */
    readonly protocolName: string
    /**
     * If true, the Message parameter to RequestSubscription is likely to be
     * significant, and user interfaces SHOULD prompt the user for a message to
     * send with the request; a message such as "I would like to add you to my
     * contact list", translated into the local user's language, might make a
     * suitable default.
     * 
     * For this property to be valid, you must first call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
     * %TP_CONNECTION_FEATURE_CONTACT_LIST.
     */
    readonly requestUsesMessage: boolean
    /**
     * A #TpContact representing the local user on this connection,
     * or %NULL if not yet available.
     * 
     * If the local user's unique identifier changes (for instance by using
     * /nick on IRC), this property will change to a different #TpContact object
     * representing the new identifier, and #GObject::notify will be emitted.
     * 
     * The #TpContact object is guaranteed to have all of the features previously
     * passed to tp_simple_client_factory_add_contact_features() prepared.
     * 
     * To wait for a non-%NULL self-contact (and other properties), call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONNECTED.
     */
    readonly selfContact: Contact
    /**
     * The %TP_HANDLE_TYPE_CONTACT handle of the local user on this connection,
     * or 0 if we don't know yet or if the connection has become invalid.
     * 
     * This may change if the local user's unique identifier changes (for
     * instance by using /nick on IRC), in which case #GObject::notify will be
     * emitted.
     * 
     * To wait for a valid self-handle (and other properties), call
     * tp_proxy_prepare_async() with the feature
     * %TP_CONNECTION_FEATURE_CONNECTED.
     */
    readonly selfHandle: number
    /**
     * This connection's status, or %TP_UNKNOWN_CONNECTION_STATUS if we don't
     * know yet.
     * 
     * To wait for a valid status (and other properties), call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_CORE.
     * 
     * Since version 0.11.3, the change to status
     * %TP_CONNECTION_STATUS_CONNECTED is delayed slightly, until introspection
     * of the connection has finished.
     */
    readonly status: number
    /**
     * To wait for a valid status (and other properties), call
     * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_CORE.
     * 
     * The reason why #TpConnection:status changed to its current value,
     * or TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED if unknown.
     * know yet.
     */
    readonly statusReason: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Connection

    /**
     * Subscribe to any opt-in change notifications for `interested_in`.
     * 
     * For contact information, use #TpContact instead, which will call this
     * automatically.
     * @param interestedIn a string identifying an interface or part of an interface  to which this connection will subscribe
     */
    addClientInterest(interestedIn: string): void
    /**
     * Add the given `contacts` to the given `group,` creating it if necessary.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
     * @param group the group to alter.
     * @param contacts An array of #TpContact objects to  include in the group.
     * @param callback a callback to call when the operation finishes
     */
    addToGroupAsync(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_add_to_group_async()
     * @param result a #GAsyncResult
     */
    addToGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * For each of the given `contacts,` request that the local user's presence is
     * sent to that contact, i.e. that their #TpContact:publish-state property
     * becomes %TP_SUBSCRIPTION_STATE_YES.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
     * @param contacts An array of #TpContact objects to  authorize
     * @param callback a callback to call when the operation finishes
     */
    authorizePublicationAsync(contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_authorize_publication_async()
     * @param result a #GAsyncResult
     */
    authorizePublicationFinish(result: Gio.AsyncResult): boolean
    /**
     * Binds the :status of `self` to the boolean property of another
     * object using a #GBinding such that the `target_property` will be set to
     * %TRUE when `self` is connected (and `invert` is %FALSE).
     * 
     * `target_property` will be synchronised immediately (%G_BINDING_SYNC_CREATE).
     * `invert` can be interpreted as analogous to %G_BINDING_INVERT_BOOLEAN.
     * 
     * For instance, this function can be used to bind the GtkWidget:sensitive
     * property to only make a widget sensitive when the account is connected.
     * 
     * See g_object_bind_property() for more information.
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind (must be %G_TYPE_BOOLEAN)
     * @param invert %TRUE if you wish to invert the value of `target_property`   (i.e. %FALSE if connected)
     */
    bindConnectionStatusToProperty(target: object | null, targetProperty: string, invert: boolean): GObject.Binding
    /**
     * Direct the server to block `contacts`.
     * @param contacts An array of #TpContact objects to  block
     * @param reportAbusive If %TRUE, report these contacts as abusive to the server administrators as well as blocking them. See #TpConnection:can-report-abusive to discover whether reporting abuse is supported. If #TpConnection:can-report-abusive is %FALSE, this parameter will be ignored.
     * @param callback a callback to call when the operation finishes
     */
    blockContactsAsync(contacts: Contact[], reportAbusive: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_block_contacts_async()
     * @param result a #GAsyncResult
     */
    blockContactsFinish(result: Gio.AsyncResult): boolean
    canSetContactAlias(): boolean
    /**
     * Disconnect the connection.
     * 
     * This method is intended for use by AccountManager implementations,
     * such as Mission Control. To disconnect a connection managed by an
     * AccountManager, either use tp_account_request_presence_async()
     * or tp_account_set_enabled_async(), depending whether the intention is
     * to put the account offline temporarily, or disable it longer-term.
     * @param callback a callback to call when the request is satisfied
     */
    disconnectAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_connection_disconnect_async().
     * @param result a #GAsyncResult
     */
    disconnectFinish(result: Gio.AsyncResult): boolean
    /**
     * Create a #TpContact object and make any asynchronous method calls necessary
     * to ensure that all the features specified in `features` are ready for use
     * (if they are supported at all).
     * 
     * It is not an error to put features in `features` even if the connection
     * manager doesn't support them - users of this method should have a static
     * list of features they would like to use if possible, and use it for all
     * connection managers.
     * @param id A strings representing the desired contact by its  identifier in the IM protocol (an XMPP JID, SIP URI, MSN Passport,  AOL screen-name etc.)
     * @param features An array of features  that must be ready for use (if supported)  before the callback is called (may be %NULL if `n_features` is 0)
     * @param callback A user callback to call when the contact is ready
     */
    dupContactByIdAsync(id: string, features: ContactFeature[] | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_dup_contact_by_id_async().
     * @param result a #GAsyncResult
     */
    dupContactByIdFinish(result: Gio.AsyncResult): Contact
    /**
     * Try to return an existing contact object or create a new contact object
     * immediately.
     * 
     * If tp_connection_has_immortal_handles() would return %TRUE and
     * `identifier` is non-%NULL, this function always succeeds.
     * 
     * On connections without immortal handles, it is not possible to guarantee
     * that `handle` remains valid without making asynchronous D-Bus calls, so
     * it might be necessary to delay processing of messages or other events
     * until a #TpContact can be constructed asynchronously, for instance by using
     * tp_connection_get_contacts_by_id().
     * 
     * Similarly, if `identifier` is %NULL, it might not be possible to find the
     * identifier for `handle` without making asynchronous D-Bus calls, so
     * it might be necessary to delay processing of messages or other events
     * until a #TpContact can be constructed asynchronously, for instance by using
     * tp_connection_get_contacts_by_handle().
     * @param handle a handle of type %TP_HANDLE_TYPE_CONTACT
     * @param identifier the normalized identifier (XMPP JID, etc.)  corresponding to `handle,` or %NULL if not known
     */
    dupContactIfPossible(handle: Handle, identifier: string): Contact
    /**
     * Returns a newly allocated #GList of supported contact info fields for this
     * connection. The list must be freed with tp_contact_info_spec_list_free().
     * 
     * To wait for valid supported fields, call tp_proxy_prepare_async() with the
     * feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
     * 
     * This property cannot change after `self` goes to the Connected state.
     */
    dupContactInfoSupportedFields(): ContactInfoFieldSpec[]
    /**
     * Retrieves the user's contact list. In general, blocked contacts are not
     * included in this list. The #TpContact objects returned are guaranteed to
     * have all of the features previously passed to
     * tp_simple_client_factory_add_contact_features() prepared.
     * 
     * Before calling this method, you must first call tp_proxy_prepare_async() with
     * the %TP_CONNECTION_FEATURE_CONTACT_LIST feature, and verify that
     * #TpConnection:contact-list-state is set to %TP_CONTACT_LIST_STATE_SUCCESS.
     */
    dupContactList(): Contact[]
    /**
     * If the connection has disconnected, return the D-Bus error name with which
     * it disconnected (in particular, this is %TP_ERROR_STR_CANCELLED if it was
     * disconnected by a user request).
     * 
     * Otherwise, return %NULL, without altering `details`.
     */
    dupDetailedErrorVardict(): [ /* returnType */ string | null, /* details */ GLib.Variant ]
    /**
     * Return the the #TpAccount associated with this connection. Will return %NULL
     * if `self` was not acquired from a #TpAccount via tp_account_get_connection(),
     * or if the account object got finalized in the meantime (#TpConnection does
     * not keep a strong ref on its #TpAccount).
     */
    getAccount(): Account
    /**
     * To wait for valid avatar requirements, call tp_proxy_prepare_async()
     * with the feature %TP_CONNECTION_FEATURE_AVATAR_REQUIREMENTS.
     * 
     * This property cannot change after `self` goes to the Connected state.
     */
    getAvatarRequirements(): AvatarRequirements
    /**
     * If `self` has a valid account balance, returns %TRUE and sets the variables
     * pointed to by `balance,` `scale` and `currency` to the appropriate fields
     * of the Balance.AccountBalance property.
     * 
     * The monetary value of the balance is expressed as a fixed-point number,
     * `balance,` with a decimal scale defined by `scale;` for instance a `balance`
     * of 1234 with `scale` of 2 represents a value of "12.34" in the currency
     * represented by `currency`.
     * 
     * Requires %TP_CONNECTION_FEATURE_BALANCE to be prepared.
     */
    getBalance(): [ /* returnType */ boolean, /* balance */ number, /* scale */ number, /* currency */ string ]
    /**
     * The value of Balance.ManageCreditURI.
     * 
     * Requires %TP_CONNECTION_FEATURE_BALANCE to be prepared.
     */
    getBalanceUri(): string
    /**
     * <!-- -->
     */
    getBlockedContacts(): Contact[]
    /**
     * <!-- -->
     */
    getCanChangeContactList(): boolean
    /**
     * <!-- -->
     */
    getCapabilities(): Capabilities
    /**
     * <!-- -->
     */
    getCmName(): string
    /**
     * <!-- -->
     */
    getConnectionManagerName(): string
    /**
     * Return (via a callback) any number of attributes of the given handles.
     * 
     * Since telepathy-glib version 0.13.8,
     * the handles will remain valid until `connection` becomes invalid
     * (signalled by #TpProxy::invalidated). In earlier versions, if `hold`
     * was %TRUE, the callback would hold a reference to them which could be
     * released with tp_connection_unref_handles().
     * 
     * This is a thin wrapper around the GetContactAttributes D-Bus method, and
     * should be used in preference to
     * tp_cli_connection_interface_contacts_call_get_contact_attributes(); mixing this
     * function, tp_connection_hold_handles(), tp_connection_unref_handles(), and
     * #TpContact with direct use of the RequestHandles, HoldHandles and
     * GetContactAttributes D-Bus methods is unwise, as #TpConnection and
     * #TpContact perform client-side reference counting of handles.
     * The #TpContact API provides a higher-level abstraction which should
     * usually be used instead.
     * 
     * `callback` will later be called with the attributes of those of the given
     * handles that were valid. Invalid handles are simply omitted from the
     * parameter to the callback.
     * 
     * If `hold` is %TRUE, the `callback` is given one reference to each handle
     * that appears as a key in the callback's `attributes` parameter.
     * @param timeoutMs the timeout in milliseconds, or -1 to use the default
     * @param handles an array of handles
     * @param interfaces a #GStrv of interfaces
     * @param hold if %TRUE, the callback will hold one reference to each valid handle
     * @param callback called on success or  failure (unless `weak_object` has become unreferenced)
     * @param weakObject if not %NULL, an object to be weakly referenced: if it is  destroyed, `callback` will not be called
     */
    getContactAttributes(timeoutMs: number, handles: Handle[], interfaces: string, hold: boolean, callback: GObject.Callback, weakObject: GObject.Object): void
    /**
     * <!-- -->
     */
    getContactGroups(): string[]
    /**
     * Returns the flags describing how contact info (vCards) behaves on this
     * connection
     * 
     * To wait for valid contact info flags, call tp_proxy_prepare_async()
     * with the feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
     * 
     * This property cannot change after `self` goes to the Connected state.
     */
    getContactInfoFlags(): ContactInfoFlags
    /**
     * Returns a newly allocated #GList of supported contact info fields for this
     * connection. The list must be freed with g_list_free() after used.
     * 
     * Note that the #TpContactInfoFieldSpec<!-- -->s in the returned #GList are not
     * dupped before returning from this function. One could copy every item in the
     * list using tp_contact_info_field_spec_copy().
     * 
     * To wait for valid supported fields, call tp_proxy_prepare_async() with the
     * feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
     * 
     * This property cannot change after `self` goes to the Connected state.
     */
    getContactInfoSupportedFields(): ContactInfoFieldSpec[]
    /**
     * Return (via a callback) the contacts on the contact list and any number of
     * their attributes.
     * 
     * Since telepathy-glib version 0.13.8,
     * the handles will remain valid until `connection` becomes invalid
     * (signalled by #TpProxy::invalidated). In earlier versions, if `hold`
     * was %TRUE, the callback would hold a reference to them which could be
     * released with tp_connection_unref_handles().
     * 
     * This is a thin wrapper around the RequestContactList D-Bus method,
     * and should be used in preference to lower-level functions; it is similar
     * to tp_connection_get_contact_attributes().
     * 
     * The #TpContact API provides a higher-level abstraction which should
     * usually be used instead.
     * 
     * If `hold` is %TRUE, the `callback` is given a reference to each handle
     * that appears as a key in the callback's `attributes` parameter.
     * @param timeoutMs the timeout in milliseconds (using a large timeout is  recommended)
     * @param interfaces a #GStrv of interfaces
     * @param hold if %TRUE, the callback will hold one reference to each handle it  receives
     * @param callback called on success or  failure (unless `weak_object` has become unreferenced)
     * @param weakObject if not %NULL, an object to be weakly referenced: if it is  destroyed, `callback` will not be called
     */
    getContactListAttributes(timeoutMs: number, interfaces: string, hold: boolean, callback: GObject.Callback, weakObject: GObject.Object): void
    /**
     * <!-- -->
     */
    getContactListPersists(): boolean
    /**
     * <!-- -->
     */
    getContactListState(): ContactListState
    /**
     * Create a number of #TpContact objects and make asynchronous method calls
     * to hold their handles and ensure that all the features specified in
     * `features` are ready for use (if they are supported at all).
     * 
     * It is not an error to put features in `features` even if the connection
     * manager doesn't support them - users of this method should have a static
     * list of features they would like to use if possible, and use it for all
     * connection managers.
     * @param handles An array of handles  of type %TP_HANDLE_TYPE_CONTACT representing the desired contacts
     * @param features An array of features that  must be ready for use (if supported) before the callback is called (may  be %NULL if `n_features` is 0)
     * @param callback A user callback to call when the contacts are ready
     * @param weakObject An object to pass to the callback, which will be  weakly referenced; if this object is destroyed, the operation will be  cancelled
     */
    getContactsByHandle(handles: number[], features: number[] | null, callback: ConnectionContactsByHandleCb, weakObject: GObject.Object | null): void
    /**
     * Create a number of #TpContact objects and make asynchronous method calls
     * to obtain their handles and ensure that all the features specified in
     * `features` are ready for use (if they are supported at all).
     * 
     * It is not an error to put features in `features` even if the connection
     * manager doesn't support them - users of this method should have a static
     * list of features they would like to use if possible, and use it for all
     * connection managers.
     * @param ids An array of strings representing  the desired contacts by their  identifiers in the IM protocol (XMPP JIDs, SIP URIs, MSN Passports,  AOL screen-names etc.)
     * @param features An array of features  that must be ready for use (if supported)  before the callback is called (may be %NULL if `n_features` is 0)
     * @param callback A user callback to call when the contacts are ready
     * @param weakObject An object to pass to the callback, which will  be weakly referenced; if this object is destroyed, the operation will be  cancelled
     */
    getContactsById(ids: string[], features: ContactFeature[] | null, callback: ConnectionContactsByIdCb, weakObject: GObject.Object | null): void
    /**
     * If the connection has disconnected, return the D-Bus error name with which
     * it disconnected (in particular, this is %TP_ERROR_STR_CANCELLED if it was
     * disconnected by a user request).
     * 
     * Otherwise, return %NULL, without altering `details`.
     */
    getDetailedError(): [ /* returnType */ string | null, /* details */ GLib.HashTable ]
    /**
     * <!-- -->
     */
    getDisjointGroups(): boolean
    /**
     * <!-- -->
     */
    getGroupStorage(): ContactMetadataStorageType
    /**
     * <!-- -->
     */
    getProtocolName(): string
    /**
     * <!-- -->
     */
    getRequestUsesMessage(): boolean
    /**
     * Return a #TpContact representing the local user on this connection.
     * 
     * The returned object is not necessarily valid after the main loop is
     * re-entered; ref it with g_object_ref() if you want to keep it.
     */
    getSelfContact(): Contact
    /**
     * Return the %TP_HANDLE_TYPE_CONTACT handle of the local user on this
     * connection, or 0 if the self-handle is not known yet or the connection
     * has become invalid (the TpProxy::invalidated signal).
     * 
     * The returned handle is not necessarily valid forever (the
     * notify::self-handle signal will be emitted if it changes, which can happen
     * on protocols such as IRC). Construct a #TpContact object if you want to
     * track the local user's identifier in the protocol, or other information
     * like their presence status, over time.
     */
    getSelfHandle(): Handle
    /**
     * If `reason` is not %NULL it is set to the reason why "status" changed to its
     * current value, or %TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED if unknown.
     */
    getStatus(): [ /* returnType */ ConnectionStatus, /* reason */ ConnectionStatusReason ]
    /**
     * Return %TRUE if this connection is known to not destroy handles
     * (#TpHandle) until it disconnects.
     * 
     * On such connections, if you know that a handle maps to a particular
     * identifier now, then you can rely on that handle mapping to that
     * identifier for the whole lifetime of the connection.
     */
    hasImmortalHandles(): boolean
    /**
     * Hold (ensure a reference to) the given handles, if they are valid.
     * 
     * If they are valid, the callback will later be called with the given
     * handles; if not all of them are valid, the callback will be called with
     * an error.
     * 
     * This function, along with tp_connection_unref_handles(),
     * tp_connection_get_contact_attributes() and #TpContact, keeps a client-side
     * reference count of handles; you should not use the RequestHandles,
     * HoldHandles and GetContactAttributes D-Bus methods directly as well as these
     * functions.
     * @param timeoutMs the timeout in milliseconds, or -1 to use the default
     * @param handleType the handle type
     * @param handles an array of handles
     * @param callback called on success or failure (unless `weak_object` has become  unreferenced)
     * @param weakObject if not %NULL, an object to be weakly referenced: if it is  destroyed, `callback` will not be called
     */
    holdHandles(timeoutMs: number, handleType: HandleType, handles: Handle[], callback: ConnectionHoldHandlesCb, weakObject: GObject.Object): void
    /**
     * If the object path of `connection` is in the correct form, set
     * `protocol` and `cm_name,` return TRUE. Otherwise leave them unchanged and
     * return FALSE.
     */
    parseObjectPath(): [ /* returnType */ boolean, /* protocol */ string, /* cmName */ string ]
    /**
     * Requests to refresh the #TpContact:contact-info property on each contact from
     * `contacts,` requesting it from the network if an up-to-date version is not
     * cached locally. "notify::contact-info" will be emitted when the contact's
     * information are updated.
     * 
     * If %TP_CONTACT_FEATURE_CONTACT_INFO is not yet set on a contact, it will be
     * set before its property gets updated.
     * @param contacts An array of #TpContact objects  associated with `self`
     */
    refreshContactInfo(contacts: Contact[]): void
    /**
     * Remove the given `contacts` from the contact list entirely. It is
     * protocol-dependent whether this works, and under which circumstances.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
     * @param contacts An array of #TpContact objects to  remove
     * @param callback a callback to call when the operation finishes
     */
    removeContactsAsync(contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_remove_contacts_async()
     * @param result a #GAsyncResult
     */
    removeContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove the given `contacts` from the given `group`. If there are no members
     * left in the group afterwards, the group MAY itself be removed.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
     * @param group the group to alter.
     * @param contacts An array of #TpContact objects to  remove from the group.
     * @param callback a callback to call when the operation finishes
     */
    removeFromGroupAsync(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_remove_from_group_async()
     * @param result a #GAsyncResult
     */
    removeFromGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove all members from the given group, then remove the group itself.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
     * @param group the group to remove.
     * @param callback a callback to call when the operation finishes
     */
    removeGroupAsync(group: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_remove_group_async()
     * @param result a #GAsyncResult
     */
    removeGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * Rename the given `old_name`.
     * 
     * On protocols where groups behave like tags, this is an API short-cut for
     * adding all of the group's members to a group with the new name, then removing
     * the old group.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
     * @param oldName the group to rename
     * @param newName the new name for the group
     * @param callback a callback to call when the operation finishes
     */
    renameGroupAsync(oldName: string, newName: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_rename_group_async()
     * @param result a #GAsyncResult
     */
    renameGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * Request the handles corresponding to the given identifiers, and if they
     * are valid, hold (ensure a reference to) the corresponding handles.
     * 
     * If they are valid, the callback will later be called with the given
     * handles; if not all of them are valid, the callback will be called with
     * an error.
     * @param timeoutMs the timeout in milliseconds, or -1 to use the default
     * @param handleType the handle type
     * @param ids an array of string identifiers for which  handles are required, terminated by %NULL (must not be %NULL or empty)
     * @param callback called on success or failure (unless `weak_object` has become  unreferenced)
     * @param weakObject if not %NULL, an object to be weakly referenced: if it is  destroyed, `callback` will not be called
     */
    requestHandles(timeoutMs: number, handleType: HandleType, ids: string[], callback: ConnectionRequestHandlesCb, weakObject: GObject.Object): void
    /**
     * Request that the given `contacts` allow the local user to subscribe to their
     * presence, i.e. that their #TpContact:subscribe-state property becomes
     * %TP_SUBSCRIPTION_STATE_YES.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
     * @param contacts An array of #TpContact objects to whom  requests are to be sent.
     * @param message an optional plain-text message from the user, to send to those  `contacts` with the subscription request.
     * @param callback a callback to call when the operation finishes
     */
    requestSubscriptionAsync(contacts: Contact[], message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_request_subscription_async()
     * @param result a #GAsyncResult
     */
    requestSubscriptionFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous set of the contact info of `self`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_connection_set_contact_info_finish() to get the result of the operation.
     * 
     * This method should not be expected to succeed if the result of
     * tp_connection_get_contact_info_flags() does not include
     * %TP_CONTACT_INFO_FLAG_CAN_SET.
     * @param info a #GList of  #TpContactInfoField
     * @param callback a callback to call when the request is satisfied
     */
    setContactInfoAsync(info: ContactInfoField[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of `self` info.
     * @param result a #GAsyncResult
     */
    setContactInfoFinish(result: Gio.AsyncResult): boolean
    /**
     * Add the given `contacts` to the given `group` (creating it if necessary), and
     * remove all other members.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
     * @param group the group to alter.
     * @param contacts An array of #TpContact objects members  for the group. If this set is empty, this method MAY remove the group.
     * @param callback a callback to call when the operation finishes
     */
    setGroupMembersAsync(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_set_group_members_async()
     * @param result a #GAsyncResult
     */
    setGroupMembersFinish(result: Gio.AsyncResult): boolean
    /**
     * Direct the server to unblock `contacts`.
     * @param contacts An array of #TpContact objects to  block
     * @param callback a callback to call when the operation finishes
     */
    unblockContactsAsync(contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_unblock_contacts_async()
     * @param result a #GAsyncResult
     */
    unblockContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Attempt to set the given `contacts'` #TpContact:publish-state property to
     * %TP_SUBSCRIPTION_STATE_NO, i.e. stop sending presence to them.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
     * @param contacts An array of #TpContact objects to  remove
     * @param callback a callback to call when the operation finishes
     */
    unpublishAsync(contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_unpublish_async()
     * @param result a #GAsyncResult
     */
    unpublishFinish(result: Gio.AsyncResult): boolean
    /**
     * Do nothing. In versions of telepathy-glib prior to 0.13.8,
     * this released a reference to the handles in `handles`.
     * @param handleType a handle type
     * @param handles an array of `n_handles` handles
     */
    unrefHandles(handleType: HandleType, handles: Handle[]): void
    /**
     * Attempt to set the given `contacts'` #TpContact:subscribe-state property to
     * %TP_SUBSCRIPTION_STATE_NO, i.e. stop receiving their presence.
     * 
     * For this to work properly `self` must have interface
     * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
     * @param contacts An array of #TpContact objects to  remove
     * @param callback a callback to call when the operation finishes
     */
    unsubscribeAsync(contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_unsubscribe_async()
     * @param result a #GAsyncResult
     */
    unsubscribeFinish(result: Gio.AsyncResult): boolean
    /**
     * Given several #TpContact objects, make asynchronous method calls
     * ensure that all the features specified in `features` are ready for use
     * (if they are supported at all).
     * 
     * It is not an error to put features in `features` even if the connection
     * manager doesn't support them - users of this method should have a static
     * list of features they would like to use if possible, and use it for all
     * connection managers.
     * @param contacts An array of #TpContact objects  associated with `self`
     * @param features An array of features that must be  ready for use (if supported) before the callback is called
     * @param callback A user callback to call when the contacts are ready
     * @param weakObject An object to pass to the callback, which will be  weakly referenced; if this object is destroyed, the operation will be  cancelled
     */
    upgradeContacts(contacts: Contact[], features: ContactFeature[], callback: ConnectionUpgradeContactsCb, weakObject: GObject.Object | null): void
    /**
     * Given several #TpContact objects, make asynchronous method calls
     * ensure that all the features specified in `features` are ready for use
     * (if they are supported at all).
     * 
     * It is not an error to put features in `features` even if the connection
     * manager doesn't support them - users of this method should have a static
     * list of features they would like to use if possible, and use it for all
     * connection managers.
     * @param contacts An array of #TpContact objects  associated with `self`
     * @param features An array of features that must be  ready for use (if supported) before the callback is called
     * @param callback A user callback to call when the contacts are ready
     */
    upgradeContactsAsync(contacts: Contact[], features: ContactFeature[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_connection_upgrade_contacts_async().
     * @param result a #GAsyncResult
     */
    upgradeContactsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contacts */ Contact[] ]

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.Connection

    connect(sigName: "balance-changed", callback: Connection.BalanceChangedSignalCallback): number
    on(sigName: "balance-changed", callback: Connection.BalanceChangedSignalCallback): number
    once(sigName: "balance-changed", callback: Connection.BalanceChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "balance-changed", balanceScale: number, balanceCurrency: string, ...args: any[]): void
    connect(sigName: "blocked-contacts-changed", callback: Connection.BlockedContactsChangedSignalCallback): number
    on(sigName: "blocked-contacts-changed", callback: Connection.BlockedContactsChangedSignalCallback): number
    once(sigName: "blocked-contacts-changed", callback: Connection.BlockedContactsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "blocked-contacts-changed", removed: Contact[], ...args: any[]): void
    connect(sigName: "contact-list-changed", callback: Connection.ContactListChangedSignalCallback): number
    on(sigName: "contact-list-changed", callback: Connection.ContactListChangedSignalCallback): number
    once(sigName: "contact-list-changed", callback: Connection.ContactListChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contact-list-changed", removed: Contact[], ...args: any[]): void
    connect(sigName: "group-renamed", callback: Connection.GroupRenamedSignalCallback): number
    on(sigName: "group-renamed", callback: Connection.GroupRenamedSignalCallback): number
    once(sigName: "group-renamed", callback: Connection.GroupRenamedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-renamed", newName: string, ...args: any[]): void
    connect(sigName: "groups-created", callback: Connection.GroupsCreatedSignalCallback): number
    on(sigName: "groups-created", callback: Connection.GroupsCreatedSignalCallback): number
    once(sigName: "groups-created", callback: Connection.GroupsCreatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "groups-created", ...args: any[]): void
    connect(sigName: "groups-removed", callback: Connection.GroupsRemovedSignalCallback): number
    on(sigName: "groups-removed", callback: Connection.GroupsRemovedSignalCallback): number
    once(sigName: "groups-removed", callback: Connection.GroupsRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "groups-removed", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Connection

    connect(sigName: "notify::balance", callback: any): number
    on(sigName: "notify::balance", callback: any): number
    once(sigName: "notify::balance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::balance", ...args: any[]): void
    connect(sigName: "notify::balance-currency", callback: any): number
    on(sigName: "notify::balance-currency", callback: any): number
    once(sigName: "notify::balance-currency", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::balance-currency", ...args: any[]): void
    connect(sigName: "notify::balance-scale", callback: any): number
    on(sigName: "notify::balance-scale", callback: any): number
    once(sigName: "notify::balance-scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::balance-scale", ...args: any[]): void
    connect(sigName: "notify::balance-uri", callback: any): number
    on(sigName: "notify::balance-uri", callback: any): number
    once(sigName: "notify::balance-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::balance-uri", ...args: any[]): void
    connect(sigName: "notify::blocked-contacts", callback: any): number
    on(sigName: "notify::blocked-contacts", callback: any): number
    once(sigName: "notify::blocked-contacts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::blocked-contacts", ...args: any[]): void
    connect(sigName: "notify::can-change-contact-list", callback: any): number
    on(sigName: "notify::can-change-contact-list", callback: any): number
    once(sigName: "notify::can-change-contact-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-change-contact-list", ...args: any[]): void
    connect(sigName: "notify::can-report-abusive", callback: any): number
    on(sigName: "notify::can-report-abusive", callback: any): number
    once(sigName: "notify::can-report-abusive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-report-abusive", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::cm-name", callback: any): number
    on(sigName: "notify::cm-name", callback: any): number
    once(sigName: "notify::cm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cm-name", ...args: any[]): void
    connect(sigName: "notify::connection-manager-name", callback: any): number
    on(sigName: "notify::connection-manager-name", callback: any): number
    once(sigName: "notify::connection-manager-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-manager-name", ...args: any[]): void
    connect(sigName: "notify::connection-ready", callback: any): number
    on(sigName: "notify::connection-ready", callback: any): number
    once(sigName: "notify::connection-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-ready", ...args: any[]): void
    connect(sigName: "notify::contact-groups", callback: any): number
    on(sigName: "notify::contact-groups", callback: any): number
    once(sigName: "notify::contact-groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-groups", ...args: any[]): void
    connect(sigName: "notify::contact-list-persists", callback: any): number
    on(sigName: "notify::contact-list-persists", callback: any): number
    once(sigName: "notify::contact-list-persists", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-list-persists", ...args: any[]): void
    connect(sigName: "notify::contact-list-state", callback: any): number
    on(sigName: "notify::contact-list-state", callback: any): number
    once(sigName: "notify::contact-list-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-list-state", ...args: any[]): void
    connect(sigName: "notify::disjoint-groups", callback: any): number
    on(sigName: "notify::disjoint-groups", callback: any): number
    once(sigName: "notify::disjoint-groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disjoint-groups", ...args: any[]): void
    connect(sigName: "notify::group-storage", callback: any): number
    on(sigName: "notify::group-storage", callback: any): number
    once(sigName: "notify::group-storage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-storage", ...args: any[]): void
    connect(sigName: "notify::protocol-name", callback: any): number
    on(sigName: "notify::protocol-name", callback: any): number
    once(sigName: "notify::protocol-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol-name", ...args: any[]): void
    connect(sigName: "notify::request-uses-message", callback: any): number
    on(sigName: "notify::request-uses-message", callback: any): number
    once(sigName: "notify::request-uses-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-uses-message", ...args: any[]): void
    connect(sigName: "notify::self-contact", callback: any): number
    on(sigName: "notify::self-contact", callback: any): number
    once(sigName: "notify::self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::self-contact", ...args: any[]): void
    connect(sigName: "notify::self-handle", callback: any): number
    on(sigName: "notify::self-handle", callback: any): number
    once(sigName: "notify::self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::self-handle", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-reason", callback: any): number
    on(sigName: "notify::status-reason", callback: any): number
    once(sigName: "notify::status-reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-reason", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A proxy object for a Telepathy connection. There are no interesting
 * public struct fields.
 * 
 * (Changed in 0.7.12: the layout of the structure is visible, allowing
 * subclassing.)
 * @class 
 */
export class Connection extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Connection

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Connection

    constructor(config?: Connection.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus a D-Bus daemon; may not be %NULL
     * @param busName the well-known or unique name of the connection  process; if well-known, this function will make a blocking call to the bus  daemon to resolve the unique name. May be %NULL if `object_path` is not, in  which case a well-known name will be derived from `object_path`.
     * @param objectPath the object path of the connection process.  May be %NULL if `bus_name` is a well-known name, in which case the object  path will be derived from `bus_name`.
     */
    constructor(dbus: DBusDaemon, busName: string | null, objectPath: string | null) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus a D-Bus daemon; may not be %NULL
     * @param busName the well-known or unique name of the connection  process; if well-known, this function will make a blocking call to the bus  daemon to resolve the unique name. May be %NULL if `object_path` is not, in  which case a well-known name will be derived from `object_path`.
     * @param objectPath the object path of the connection process.  May be %NULL if `bus_name` is a well-known name, in which case the object  path will be derived from `bus_name`.
     */
    static new(dbus: DBusDaemon, busName: string | null, objectPath: string | null): Connection
    _init(config?: Connection.ConstructorProperties): void
    static getFeatureQuarkAliasing(): GLib.Quark
    static getFeatureQuarkAvatarRequirements(): GLib.Quark
    static getFeatureQuarkBalance(): GLib.Quark
    static getFeatureQuarkCapabilities(): GLib.Quark
    static getFeatureQuarkConnected(): GLib.Quark
    static getFeatureQuarkContactBlocking(): GLib.Quark
    static getFeatureQuarkContactGroups(): GLib.Quark
    static getFeatureQuarkContactInfo(): GLib.Quark
    static getFeatureQuarkContactList(): GLib.Quark
    static getFeatureQuarkContactListProperties(): GLib.Quark
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpConnection have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CONNECTION.
     */
    static initKnownInterfaces(): void
    /**
     * Compares `p1` and `p2` like strcmp(). `p1` > `p2` means `p1` is more available
     * than `p2`.
     * 
     * The order used is: available > busy > away > xa > hidden > offline > error >
     * unknown > unset
     * @param p1 a #TpConnectionPresenceType
     * @param p2 a #TpConnectionPresenceType
     */
    static presenceTypeCmpAvailability(p1: ConnectionPresenceType, p2: ConnectionPresenceType): number
}

export module ConnectionManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `exited`
     */
    export interface ExitedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-info`
     */
    export interface GotInfoSignalCallback {
        (source: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

        /**
         * If %TRUE, always introspect the connection manager as it comes online,
         * even if we already have its info from a .manager file. Default %FALSE.
         */
        alwaysIntrospect?: boolean | null
        /**
         * The absolute path of the .manager file. If set to %NULL (the default),
         * the XDG data directories will be searched for a .manager file of the
         * correct name.
         * 
         * If set to the empty string, no .manager file will be read.
         */
        managerFile?: string | null
    }

}

export interface ConnectionManager {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    /**
     * If %TRUE, always introspect the connection manager as it comes online,
     * even if we already have its info from a .manager file. Default %FALSE.
     */
    alwaysIntrospect: boolean
    /**
     * The name of the connection manager, e.g. "gabble" (read-only).
     */
    readonly cmName: string
    /**
     * The name of the connection manager, e.g. "gabble" (read-only).
     */
    readonly connectionManager: string
    /**
     * Where we got the current information on supported protocols
     * (a #TpCMInfoSource).
     * 
     * Since 0.7.26, the #GObject::notify signal is emitted for this
     * property.
     * 
     * (Note that this is of type %G_TYPE_UINT, not %TP_TYPE_CM_INFO_SOURCE,
     * for historical reasons.)
     */
    readonly infoSource: number
    /**
     * The absolute path of the .manager file. If set to %NULL (the default),
     * the XDG data directories will be searched for a .manager file of the
     * correct name.
     * 
     * If set to the empty string, no .manager file will be read.
     */
    managerFile: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    /**
     * Returns a list of protocol names supported by this connection manager.
     * These are the internal protocol names used by the Telepathy specification
     * (e.g. "jabber" and "msn"), rather than user-visible names in any particular
     * locale.
     * 
     * If this function is called before the connection manager information has
     * been obtained, the result is always %NULL. Use
     * tp_proxy_prepare_async() to wait for this.
     * 
     * The result is copied and must be freed by the caller, but it is not
     * necessarily still true after the main loop is re-entered.
     */
    dupProtocolNames(): string[]
    /**
     * Return objects representing all protocols supported by this connection
     * manager.
     * 
     * If this function is called before the connection manager information has
     * been obtained, the result is always %NULL. Use tp_proxy_prepare_async()
     * to wait for this.
     * 
     * The caller must free the list, for instance with
     * <literal>g_list_free_full (l, g_object_unref)</literal>.
     */
    dupProtocols(): Protocol[]
    /**
     * If protocol and parameter information has been obtained from the connection
     * manager, return %TP_CM_INFO_SOURCE_LIVE; if it has been obtained from the
     * cache in the .manager file, return %TP_CM_INFO_SOURCE_FILE. If this
     * information has not yet been obtained, or obtaining it failed, return
     * %TP_CM_INFO_SOURCE_NONE.
     * 
     * This may increase at any time that the main loop is running; the
     * #GObject::notify signal is emitted.
     */
    getInfoSource(): CMInfoSource
    /**
     * Return the internal name of this connection manager in the Telepathy
     * D-Bus API, e.g. "gabble" or "haze". This is often the name of the binary
     * without the "telepathy-" prefix.
     * 
     * The returned string is valid as long as `self` is. Copy it with g_strdup()
     * if a longer lifetime is required.
     */
    getName(): string
    /**
     * Returns a structure representing a protocol, or %NULL if this connection
     * manager does not support the specified protocol.
     * 
     * Since 0.11.11, you can get a #GObject version with more
     * functionality by calling tp_connection_manager_get_protocol_object().
     * 
     * If this function is called before the connection manager information has
     * been obtained, the result is always %NULL. Use
     * tp_proxy_prepare_async() to wait for this.
     * 
     * The result is not necessarily valid after the main loop is re-entered.
     * Since 0.11.3, it can be copied with tp_connection_manager_protocol_copy()
     * if a permanently-valid copy is needed.
     * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
     */
    getProtocol(protocol: string): ConnectionManagerProtocol
    /**
     * Returns an object representing a protocol, or %NULL if this connection
     * manager does not support the specified protocol.
     * 
     * If this function is called before the connection manager information has
     * been obtained, the result is always %NULL. Use tp_proxy_prepare_async()
     * to wait for this.
     * 
     * The result should be referenced with g_object_ref() if it will be kept.
     * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
     */
    getProtocolObject(protocol: string): Protocol
    /**
     * Return whether `protocol` is supported by this connection manager.
     * 
     * If this function is called before the connection manager information has
     * been obtained, the result is always %FALSE. Use tp_proxy_prepare_async()
     * to wait for this.
     * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
     */
    hasProtocol(protocol: string): boolean
    /**
     * Return %TRUE if this connection manager currently appears to be running.
     * This may change at any time that the main loop is running; the
     * #TpConnectionManager::activated and #TpConnectionManager::exited signals
     * are emitted.
     */
    isRunning(): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    connect(sigName: "activated", callback: ConnectionManager.ActivatedSignalCallback): number
    on(sigName: "activated", callback: ConnectionManager.ActivatedSignalCallback): number
    once(sigName: "activated", callback: ConnectionManager.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "exited", callback: ConnectionManager.ExitedSignalCallback): number
    on(sigName: "exited", callback: ConnectionManager.ExitedSignalCallback): number
    once(sigName: "exited", callback: ConnectionManager.ExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "exited", ...args: any[]): void
    connect(sigName: "got-info", callback: ConnectionManager.GotInfoSignalCallback): number
    on(sigName: "got-info", callback: ConnectionManager.GotInfoSignalCallback): number
    once(sigName: "got-info", callback: ConnectionManager.GotInfoSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-info", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    connect(sigName: "notify::always-introspect", callback: any): number
    on(sigName: "notify::always-introspect", callback: any): number
    once(sigName: "notify::always-introspect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::always-introspect", ...args: any[]): void
    connect(sigName: "notify::cm-name", callback: any): number
    on(sigName: "notify::cm-name", callback: any): number
    once(sigName: "notify::cm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cm-name", ...args: any[]): void
    connect(sigName: "notify::connection-manager", callback: any): number
    on(sigName: "notify::connection-manager", callback: any): number
    once(sigName: "notify::connection-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-manager", ...args: any[]): void
    connect(sigName: "notify::info-source", callback: any): number
    on(sigName: "notify::info-source", callback: any): number
    once(sigName: "notify::info-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::info-source", ...args: any[]): void
    connect(sigName: "notify::manager-file", callback: any): number
    on(sigName: "notify::manager-file", callback: any): number
    once(sigName: "notify::manager-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager-file", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A proxy object for a Telepathy connection manager.
 * 
 * This might represent a connection manager which is currently running
 * (in which case it can be introspected) or not (in which case its
 * capabilities can be read from .manager files in the filesystem).
 * Accordingly, this object never emits #TpProxy::invalidated unless all
 * references to it are discarded.
 * 
 * Various fields and methods on this object do not work until
 * %TP_CONNECTION_MANAGER_FEATURE_CORE is prepared. Use
 * tp_proxy_prepare_async() to wait for this to happen.
 * 
 * Since 0.19.1, accessing the fields of this struct is deprecated,
 * and they are no longer documented here.
 * Use the accessors tp_connection_manager_get_name(),
 * tp_connection_manager_is_running(),
 * tp_connection_manager_dup_protocols(),
 * tp_connection_manager_get_info_source()
 * and the #TpConnectionManager:always-introspect property instead.
 * @class 
 */
export class ConnectionManager extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ConnectionManager

    constructor(config?: ConnectionManager.ConstructorProperties) 
    /**
     * Convenience function to create a new connection manager proxy. If
     * its protocol and parameter information are required, you should call
     * tp_proxy_prepare_async() on the result.
     * @constructor 
     * @param dbus Proxy for the D-Bus daemon
     * @param name The connection manager name (such as "gabble")
     * @param managerFilename The #TpConnectionManager:manager-file  property, which may (and generally should) be %NULL.
     */
    constructor(dbus: DBusDaemon, name: string, managerFilename: string | null) 
    /**
     * Convenience function to create a new connection manager proxy. If
     * its protocol and parameter information are required, you should call
     * tp_proxy_prepare_async() on the result.
     * @constructor 
     * @param dbus Proxy for the D-Bus daemon
     * @param name The connection manager name (such as "gabble")
     * @param managerFilename The #TpConnectionManager:manager-file  property, which may (and generally should) be %NULL.
     */
    static new(dbus: DBusDaemon, name: string, managerFilename: string | null): ConnectionManager
    _init(config?: ConnectionManager.ConstructorProperties): void
    /**
     * Check that the given string is a valid connection manager name, i.e. that
     * it consists entirely of ASCII letters, digits and underscores, and starts
     * with a letter.
     * @param name a possible connection manager name
     */
    static checkValidName(name: string): boolean
    /**
     * Check that the given string is a valid protocol name, i.e. that
     * it consists entirely of ASCII letters, digits and hyphen/minus, and starts
     * with a letter.
     * @param name a possible protocol name
     */
    static checkValidProtocolName(name: string): boolean
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpConnectionManager have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_CONNECTION_MANAGER.
     */
    static initKnownInterfaces(): void
}

export module Contact {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contact-groups-changed`
     */
    export interface ContactGroupsChangedSignalCallback {
        (added: string[], removed: string[]): void
    }

    /**
     * Signal callback interface for `presence-changed`
     */
    export interface PresenceChangedSignalCallback {
        (type: number, status: string, message: string): void
    }

    /**
     * Signal callback interface for `subscription-states-changed`
     */
    export interface SubscriptionStatesChangedSignalCallback {
        (subscribe: number, publish: number, publishRequest: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Contact {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Contact

    /**
     * The contact's alias if available, falling back to their
     * #TpContact:identifier if no alias is available or if the #TpContact has
     * not been set up to track %TP_CONTACT_FEATURE_ALIAS.
     * 
     * This alias may have been supplied by the contact themselves, or by the
     * local user, so it does not necessarily unambiguously identify the contact.
     * However, it is suitable for use as a main "display name" for the contact.
     * 
     * This is never %NULL for contact objects that are visible to library-user
     * code.
     */
    readonly alias: string
    /**
     * #GFile to the latest cached avatar image, or %NULL if this contact has
     * no avatar, or if the avatar data is not yet retrieved.
     * 
     * When #TpContact:avatar-token changes, this property is not updated
     * immediately, but will be updated when the new avatar data is retrieved and
     * stored in cache. Until then, the file will keep its old value of the latest
     * cached avatar image.
     * 
     * This is set to %NULL if %TP_CONTACT_FEATURE_AVATAR_DATA is not set on this
     * contact. Note that setting %TP_CONTACT_FEATURE_AVATAR_DATA will also
     * implicitly set %TP_CONTACT_FEATURE_AVATAR_TOKEN.
     */
    readonly avatarFile: Gio.File
    /**
     * MIME type of the latest cached avatar image, or %NULL if this contact has
     * no avatar, or if the avatar data is not yet retrieved.
     * 
     * This is always the MIME type of the image given by #TpContact:avatar-file.
     */
    readonly avatarMimeType: string
    /**
     * An opaque string representing state of the contact's avatar (depending on
     * the protocol, this might be a hash, a timestamp or something else), or
     * an empty string if there is no avatar.
     * 
     * This may be %NULL if it is not known whether this contact has an avatar
     * or not (either for network protocol reasons, or because this #TpContact
     * has not been set up to track %TP_CONTACT_FEATURE_AVATAR_TOKEN).
     */
    readonly avatarToken: string
    /**
     * The capabilities supported by this contact. If the underlying Connection
     * doesn't support the ContactCapabilities interface, this property will
     * contain the capabilities supported by the connection.
     * Use tp_capabilities_is_specific_to_contact() to check if the capabilities
     * are specific to this #TpContact or not.
     * 
     * This may be %NULL if this #TpContact object has not been set up to track
     * %TP_CONTACT_FEATURE_CAPABILITIES.
     */
    readonly capabilities: Capabilities
    /**
     * A #GStrv containing the client types of this contact.
     * 
     * This is set to %NULL if %TP_CONTACT_FEATURE_CLIENT_TYPES is not
     * set on this contact; it may also be %NULL if that feature is prepared, but
     * the contact's client types are unknown.
     */
    readonly clientTypes: string[]
    /**
     * The #TpConnection to which this contact belongs.
     */
    readonly connection: Connection
    /**
     * a #GStrv with names of groups of which a contact is a member.
     * 
     * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_GROUPS is not prepared
     * on this contact, or if the connection does not implement ContactGroups
     * interface.
     */
    readonly contactGroups: string[]
    /**
     * A #GList of #TpContactInfoField representing the vCard of this contact.
     * 
     * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_INFO is not set on this
     * contact.
     */
    readonly contactInfo: any
    /**
     * The contact's handle in the Telepathy D-Bus API, a handle of type
     * %TP_HANDLE_TYPE_CONTACT representing the string
     * given by #TpContact:identifier.
     * 
     * This handle is referenced using the Telepathy D-Bus API and remains
     * referenced for as long as the #TpContact exists and the
     * #TpContact:connection remains valid.
     * 
     * However, getting this property does not cause an additional reference
     * to the handle to be held.
     * 
     * If the #TpContact:connection becomes invalid, this property is no longer
     * meaningful and will be set to 0.
     */
    readonly handle: number
    /**
     * The contact's identifier in the instant messaging protocol (e.g.
     * XMPP JID, SIP URI, AOL screenname or IRC nick - whatever the underlying
     * protocol uses to identify a user).
     * 
     * This is never %NULL for contact objects that are visible to library-user
     * code.
     */
    readonly identifier: string
    /**
     * %TRUE if the contact has been blocked.
     * 
     * This is set to %FALSE if %TP_CONTACT_FEATURE_CONTACT_BLOCKING is not
     * prepared on this contact, or if the connection does not implement
     * ContactBlocking interface.
     */
    readonly isBlocked: boolean
    /**
     * If this contact has set a user-defined location, a string to
     * variant map containing his location. If not, %NULL.
     * tp_vardict_get_string() and similar functions can be used to access
     * the contents.
     * 
     * This may be %NULL even if the contact has set a location,
     * if this #TpContact object has not been set up to track
     * %TP_CONTACT_FEATURE_LOCATION.
     * 
     * This property contains the same information as #TpContact:location,
     * in a different format.
     */
    readonly locationVardict: GLib.Variant
    /**
     * If this contact has set a user-defined status message, that message;
     * if not, an empty string (which user interfaces may replace with a
     * localized form of the #TpContact:presence-status or
     * #TpContact:presence-type).
     * 
     * This may be an empty string even if the contact has set a message,
     * if this #TpContact object has not been set up to track
     * %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
     */
    readonly presenceMessage: string
    /**
     * A string representing the presence status of this contact. This may be
     * a well-known string from the Telepathy specification, like "available",
     * or a connection-manager-specific string, like "out-to-lunch".
     * 
     * This may be an empty string if this #TpContact object has not been set up
     * to track %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
     */
    readonly presenceStatus: string
    /**
     * The #TpConnectionPresenceType representing the type of presence status
     * for this contact.
     * 
     * This is provided so even unknown values for #TpContact:presence-status
     * can be classified into their fundamental types.
     * 
     * This may be %TP_CONNECTION_PRESENCE_TYPE_UNSET if this #TpContact
     * has not been set up to track %TP_CONTACT_FEATURE_PRESENCE.
     */
    readonly presenceType: number
    /**
     * The message that contact sent when they requested permission to see the
     * local user's presence, if #TpContact:publish-state is
     * %TP_SUBSCRIPTION_STATE_ASK, an empty string ("") otherwise.
     * 
     * This is set to %NULL until %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been
     * prepared, and it is guaranteed to be non-%NULL afterward.
     */
    readonly publishRequest: string
    /**
     * A #TpSubscriptionState indicating the state of this contact's subscription
     * to the local user's presence.
     * 
     * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
     * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
     */
    readonly publishState: number
    /**
     * A #TpSubscriptionState indicating the state of the local user's
     * subscription to this contact's presence.
     * 
     * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
     * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
     */
    readonly subscribeState: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Contact

    /**
     * Convenience wrapper for tp_connection_add_to_group_async()
     * on a single contact.
     * @param group the group to alter.
     * @param callback a callback to call when the operation finishes
     */
    addToGroupAsync(group: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_add_to_group_async()
     * @param result a #GAsyncResult
     */
    addToGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * Convenience wrapper for tp_connection_authorize_publication_async()
     * on a single contact.
     * @param callback a callback to call when the operation finishes
     */
    authorizePublicationAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_authorize_publication_async()
     * @param result a #GAsyncResult
     */
    authorizePublicationFinish(result: Gio.AsyncResult): boolean
    /**
     * Block communications with a contact, optionally reporting the contact as
     * abusive to the server administrators. To block more than one contact at once,
     * see tp_connection_block_contacts_async().
     * @param reportAbusive If %TRUE, report this contact as abusive to the server administrators as well as blocking him. See #TpConnection:can-report-abusive to discover whether reporting abuse is supported. If #TpConnection:can-report-abusive is %FALSE, this parameter will be ignored.
     * @param callback a callback to call when the operation finishes
     */
    blockAsync(reportAbusive: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_block_async()
     * @param result a #GAsyncResult
     */
    blockFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns a newly allocated #GList of contact's vCard fields. The list must be
     * freed with tp_contact_info_list_free() after used.
     * 
     * Same as the #TpContact:contact-info property.
     */
    dupContactInfo(): ContactInfoField[]
    /**
     * Return the contact's user-defined location, or %NULL if the location is
     * unspecified.
     * 
     * This function returns the same information as tp_contact_get_location(),
     * but in a different format.
     */
    dupLocation(): GLib.Variant
    /**
     * Return the #TpAccount of `self'`s #TpContact:connection.
     * See tp_connection_get_account() for details.
     */
    getAccount(): Account
    /**
     * Return the contact's alias. This remains valid until the main loop
     * is re-entered; if the caller requires a string that will persist for
     * longer than that, it must be copied with g_strdup().
     */
    getAlias(): string
    /**
     * Return the contact's avatar file. This remains valid until the main loop
     * is re-entered; if the caller requires a #GFile that will persist for
     * longer than that, it must be reffed with g_object_ref().
     */
    getAvatarFile(): Gio.File
    /**
     * Return the contact's avatar MIME type. This remains valid until the main loop
     * is re-entered; if the caller requires a string that will persist for
     * longer than that, it must be copied with g_strdup().
     */
    getAvatarMimeType(): string
    /**
     * Return the contact's avatar token. This remains valid until the main loop
     * is re-entered; if the caller requires a string that will persist for
     * longer than that, it must be copied with g_strdup().
     */
    getAvatarToken(): string
    /**
     * <!-- -->
     */
    getCapabilities(): Capabilities
    /**
     * Return the contact's client types or %NULL if the client types are
     * unspecified.
     */
    getClientTypes(): string[]
    /**
     * <!-- nothing more to say -->
     */
    getConnection(): Connection
    /**
     * Return names of groups of which a contact is a member. It is incorrect to
     * call this method before %TP_CONTACT_FEATURE_CONTACT_GROUPS has been
     * prepared. This remains valid until the main loop is re-entered; if the caller
     * requires a #GStrv that will persist for longer than that, it must be copied
     * with g_strdupv().
     */
    getContactGroups(): string[]
    /**
     * Returns a newly allocated #GList of contact's vCard fields. The list must be
     * freed with g_list_free() after used.
     * 
     * Note that the #TpContactInfoField<!-- -->s in the returned #GList are not
     * dupped before returning from this function. One could copy every item in the
     * list using tp_contact_info_field_copy().
     * 
     * Same as the #TpContact:contact-info property.
     */
    getContactInfo(): ContactInfoField[]
    /**
     * Return the contact's handle, which is of type %TP_HANDLE_TYPE_CONTACT,
     * or 0 if the #TpContact:connection has become invalid.
     * 
     * This handle is referenced using the Telepathy D-Bus API and remains
     * referenced for as long as `self` exists and the
     * #TpContact:connection remains valid.
     * 
     * However, the caller of this function does not gain an additional reference
     * to the handle.
     */
    getHandle(): Handle
    /**
     * Return the contact's identifier. This remains valid for as long as `self`
     * exists; if the caller requires a string that will persist for longer than
     * that, it must be copied with g_strdup().
     */
    getIdentifier(): string
    /**
     * Return the contact's user-defined location or %NULL if the location is
     * unspecified.
     * This remains valid until the main loop is re-entered; if the caller
     * requires a hash table that will persist for longer than that, it must be
     * reffed with g_hash_table_ref().
     */
    getLocation(): GLib.HashTable
    /**
     * Return the contact's user-defined status message, or an empty string.
     * This remains valid until the main loop is re-entered; if the caller
     * requires a string that will persist for longer than that, it must be
     * copied with g_strdup().
     */
    getPresenceMessage(): string
    /**
     * Return the name of the contact's presence status, or an empty string.
     * This remains valid until the main loop is re-entered; if the caller
     * requires a string that will persist for longer than that, it must be
     * copied with g_strdup().
     */
    getPresenceStatus(): string
    /**
     * If this object has been set up to track %TP_CONTACT_FEATURE_PRESENCE
     * and the underlying connection supports either the Presence or
     * SimplePresence interfaces, return the type of the contact's presence.
     * 
     * Otherwise, return %TP_CONNECTION_PRESENCE_TYPE_UNSET.
     */
    getPresenceType(): ConnectionPresenceType
    /**
     * If #TpContact:publish-state is set to %TP_SUBSCRIPTION_STATE_ASK, return the
     * message that this remote contact sent when they requested permission to see
     * the local user's presence, an empty string ("") otherwise. This remains valid
     * until the main loop is re-entered; if the caller requires a string that will
     * persist for longer than that, it must be copied with g_strdup().
     * 
     * This is set to %NULL until %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been
     * prepared, and it is guaranteed to be non-%NULL afterward.
     */
    getPublishRequest(): string
    /**
     * Return the state of this remote contact's subscription to the local user's
     * presence.
     * 
     * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
     * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
     */
    getPublishState(): SubscriptionState
    /**
     * Return the state of the local user's subscription to this remote contact's
     * presence.
     * 
     * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
     * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
     */
    getSubscribeState(): SubscriptionState
    /**
     * <!-- -->
     * @param feature a desired feature
     */
    hasFeature(feature: ContactFeature): boolean
    /**
     * Convenience wrapper for tp_connection_remove_contacts_async()
     * on a single contact.
     * @param callback a callback to call when the operation finishes
     */
    removeAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_remove_async()
     * @param result a #GAsyncResult
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Convenience wrapper for tp_connection_remove_from_group_async()
     * on a single contact.
     * @param group the group to alter.
     * @param callback a callback to call when the operation finishes
     */
    removeFromGroupAsync(group: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_remove_from_group_async()
     * @param result a #GAsyncResult
     */
    removeFromGroupFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests an asynchronous request of the contact info of `self`. When
     * the operation is finished, `callback` will be called. You can then call
     * tp_contact_request_contact_info_finish() to get the result of the operation.
     * 
     * If the operation is successful, the #TpContact:contact-info property will be
     * updated (emitting "notify::contact-info" signal) before `callback` is called.
     * That means you can call tp_contact_get_contact_info() to get the new vCard
     * inside `callback`.
     * 
     * Note that requesting the vCard from the network can take significant time, so
     * a bigger timeout is set on the underlying D-Bus call. `cancellable` can be
     * cancelled to free resources used in the D-Bus call if the caller is no longer
     * interested in the vCard.
     * 
     * If %TP_CONTACT_FEATURE_CONTACT_INFO is not yet set on `self,` it will be
     * set before its property gets updated and `callback` is called.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback to call when the request is satisfied
     */
    requestContactInfoAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async request of `self` info. If the operation was successful,
     * the contact's vCard can be accessed using tp_contact_get_contact_info().
     * @param result a #GAsyncResult
     */
    requestContactInfoFinish(result: Gio.AsyncResult): boolean
    /**
     * Convenience wrapper for tp_connection_request_subscription_async()
     * on a single contact.
     * @param message an optional message
     * @param callback a callback to call when the operation finishes
     */
    requestSubscriptionAsync(message: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_request_subscription_async()
     * @param result a #GAsyncResult
     */
    requestSubscriptionFinish(result: Gio.AsyncResult): boolean
    /**
     * Add `self` to the given groups (creating new groups if necessary), and remove
     * it from all other groups. If the user is removed from a group of which they
     * were the only member, the group MAY be removed automatically. You can then
     * call tp_contact_set_contact_groups_finish() to get the result of the
     * operation.
     * 
     * If the operation is successful and %TP_CONTACT_FEATURE_CONTACT_GROUPS is
     * prepared, the #TpContact:contact-groups property will be
     * updated (emitting "notify::contact-groups" signal) and
     * #TpContact::contact-groups-changed signal will be emitted before `callback`
     * is called. That means you can call tp_contact_get_contact_groups() to get the
     * new contact groups inside `callback`.
     * @param groups the set of  groups which the contact should be in (may be %NULL if `n_groups` is 0)
     * @param callback a callback to call when the request is satisfied
     */
    setContactGroupsAsync(groups: string[] | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async set of `self` contact groups.
     * @param result a #GAsyncResult
     */
    setContactGroupsFinish(result: Gio.AsyncResult): boolean
    /**
     * Unblock communications with a contact. To unblock more than one contact
     * at once, see tp_connection_unblock_contacts_async().
     * @param callback a callback to call when the operation finishes
     */
    unblockAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_unblock_async()
     * @param result a #GAsyncResult
     */
    unblockFinish(result: Gio.AsyncResult): boolean
    /**
     * Convenience wrapper for tp_connection_unpublish_async()
     * on a single contact.
     * @param callback a callback to call when the operation finishes
     */
    unpublishAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_unpublish_async()
     * @param result a #GAsyncResult
     */
    unpublishFinish(result: Gio.AsyncResult): boolean
    /**
     * Convenience wrapper for tp_connection_unsubscribe_async()
     * on a single contact.
     * @param callback a callback to call when the operation finishes
     */
    unsubscribeAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_contact_unsubscribe_async()
     * @param result a #GAsyncResult
     */
    unsubscribeFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.Contact

    connect(sigName: "contact-groups-changed", callback: Contact.ContactGroupsChangedSignalCallback): number
    on(sigName: "contact-groups-changed", callback: Contact.ContactGroupsChangedSignalCallback): number
    once(sigName: "contact-groups-changed", callback: Contact.ContactGroupsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contact-groups-changed", removed: string[], ...args: any[]): void
    connect(sigName: "presence-changed", callback: Contact.PresenceChangedSignalCallback): number
    on(sigName: "presence-changed", callback: Contact.PresenceChangedSignalCallback): number
    once(sigName: "presence-changed", callback: Contact.PresenceChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "presence-changed", status: string, message: string, ...args: any[]): void
    connect(sigName: "subscription-states-changed", callback: Contact.SubscriptionStatesChangedSignalCallback): number
    on(sigName: "subscription-states-changed", callback: Contact.SubscriptionStatesChangedSignalCallback): number
    once(sigName: "subscription-states-changed", callback: Contact.SubscriptionStatesChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "subscription-states-changed", publish: number, publishRequest: string, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Contact

    connect(sigName: "notify::alias", callback: any): number
    on(sigName: "notify::alias", callback: any): number
    once(sigName: "notify::alias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar-file", callback: any): number
    on(sigName: "notify::avatar-file", callback: any): number
    once(sigName: "notify::avatar-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar-file", ...args: any[]): void
    connect(sigName: "notify::avatar-mime-type", callback: any): number
    on(sigName: "notify::avatar-mime-type", callback: any): number
    once(sigName: "notify::avatar-mime-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar-mime-type", ...args: any[]): void
    connect(sigName: "notify::avatar-token", callback: any): number
    on(sigName: "notify::avatar-token", callback: any): number
    once(sigName: "notify::avatar-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar-token", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: any): number
    on(sigName: "notify::client-types", callback: any): number
    once(sigName: "notify::client-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::contact-groups", callback: any): number
    on(sigName: "notify::contact-groups", callback: any): number
    once(sigName: "notify::contact-groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-groups", ...args: any[]): void
    connect(sigName: "notify::contact-info", callback: any): number
    on(sigName: "notify::contact-info", callback: any): number
    once(sigName: "notify::contact-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-info", ...args: any[]): void
    connect(sigName: "notify::handle", callback: any): number
    on(sigName: "notify::handle", callback: any): number
    once(sigName: "notify::handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::is-blocked", callback: any): number
    on(sigName: "notify::is-blocked", callback: any): number
    once(sigName: "notify::is-blocked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-blocked", ...args: any[]): void
    connect(sigName: "notify::location-vardict", callback: any): number
    on(sigName: "notify::location-vardict", callback: any): number
    once(sigName: "notify::location-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location-vardict", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: any): number
    on(sigName: "notify::presence-message", callback: any): number
    once(sigName: "notify::presence-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: any): number
    on(sigName: "notify::presence-status", callback: any): number
    once(sigName: "notify::presence-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: "notify::presence-type", callback: any): number
    on(sigName: "notify::presence-type", callback: any): number
    once(sigName: "notify::presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::publish-request", callback: any): number
    on(sigName: "notify::publish-request", callback: any): number
    once(sigName: "notify::publish-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::publish-request", ...args: any[]): void
    connect(sigName: "notify::publish-state", callback: any): number
    on(sigName: "notify::publish-state", callback: any): number
    once(sigName: "notify::publish-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::publish-state", ...args: any[]): void
    connect(sigName: "notify::subscribe-state", callback: any): number
    on(sigName: "notify::subscribe-state", callback: any): number
    once(sigName: "notify::subscribe-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subscribe-state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing a contact on a #TpConnection.
 * 
 * Contact objects support tracking a number of attributes of contacts, as
 * described by the #TpContactFeature flags. Features can be specified when
 * instantiating contact objects (with tp_connection_get_contacts_by_id() or
 * tp_connection_get_contacts_by_handle()), or added to an existing contact
 * object with tp_connection_upgrade_contacts(). For example, a client wishing
 * to keep track of a contact's alias would set #TP_CONTACT_FEATURE_ALIAS, and
 * then listen for the "notify::alias" signal, emitted whenever the
 * #TpContact:alias property changes.
 * 
 * Note that releasing a #TpContact object might release handle references
 * held by calling tp_cli_connection_call_request_handles(),
 * tp_cli_connection_run_request_handles(),
 * tp_cli_connection_call_hold_handles(),
 * tp_cli_connection_run_hold_handles(),
 * tp_cli_connection_interface_contacts_call_get_contact_attributes() or
 * tp_cli_connection_interface_contacts_run_get_contact_attributes() directly.
 * Those functions should be avoided in favour of using #TpContact,
 * tp_connection_hold_handles(), tp_connection_request_handles() and
 * tp_connection_get_contact_attributes().
 * @class 
 */
export class Contact extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Contact

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Contact

    constructor(config?: Contact.ConstructorProperties) 
    _init(config?: Contact.ConstructorProperties): void
}

export module ContactSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `search-results-received`
     */
    export interface SearchResultsReceivedSignalCallback {
        (results: ContactSearchResult[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

        /**
         * This search's account.
         */
        account?: Account | null
        /**
         * The maximum number of results that the server should return.
         * This is only supported by some protocols; use
         * tp_capabilities_supports_contact_search() to check if it's
         * supported.
         * 
         * To change the limit after the object has been constructed,
         * use tp_contact_search_reset_async().
         */
        limit?: number | null
        /**
         * The search server. This is only supported by some protocols;
         * use tp_capabilities_supports_contact_search() to check if it's
         * supported.
         * 
         * To change the server after the object has been constructed,
         * use tp_contact_search_reset_async().
         */
        server?: string | null
    }

}

export interface ContactSearch extends Gio.AsyncInitable {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    /**
     * This search's account.
     */
    readonly account: Account
    /**
     * The maximum number of results that the server should return.
     * This is only supported by some protocols; use
     * tp_capabilities_supports_contact_search() to check if it's
     * supported.
     * 
     * To change the limit after the object has been constructed,
     * use tp_contact_search_reset_async().
     */
    limit: number
    /**
     * The search server. This is only supported by some protocols;
     * use tp_capabilities_supports_contact_search() to check if it's
     * supported.
     * 
     * To change the server after the object has been constructed,
     * use tp_contact_search_reset_async().
     */
    readonly server: string
    /**
     * This search's state, as a %TpChannelContactSearchState.
     */
    readonly state: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    /**
     * <!-- -->
     */
    getAccount(): Account
    /**
     * <!-- -->
     */
    getLimit(): number
    /**
     * Get the search keys for a contact search.
     * The keys are vCard field names in lower case, except when
     * they're one of the special cases from telepathy-spec like
     * "tel;cell" or "x-n-given". See the
     * <ulink url="http://telepathy.freedesktop.org/spec/Channel_Type_Contact_Search.html">
     * Channel.Type.ContactSearch interface</ulink>
     * for a list of the special cases.
     */
    getSearchKeys(): string[]
    /**
     * <!-- -->
     */
    getServer(): string
    /**
     * Resets the contact search object so a new search can be performed.
     * If another tp_contact_search_reset_async() call is in progress,
     * it will be cancelled and tp_contact_search_reset_finish() will
     * return an appropriate error.
     * @param server the server on which to search for contacts, or %NULL
     * @param limit The maximum number of results the server should return, or 0 for the server default.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished
     */
    resetAsync(server: string, limit: number, callback: Gio.AsyncReadyCallback | null): void
    /**
     * <!-- -->
     * @param result the #GAsyncResult from the callback
     */
    resetFinish(result: Gio.AsyncResult): string[]
    /**
     * Starts a search for the keys specified in `criteria`. Connect
     * to the #TpContactSearch::search-results-received signal
     * before calling this function.
     * 
     * Before searching again on the same #TpContactSearch, you must
     * call tp_contact_search_reset_async().
     * @param criteria a map from keys returned by tp_contact_search_get_search_keys() to values to search for
     */
    start(criteria: GLib.HashTable): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    connect(sigName: "search-results-received", callback: ContactSearch.SearchResultsReceivedSignalCallback): number
    on(sigName: "search-results-received", callback: ContactSearch.SearchResultsReceivedSignalCallback): number
    once(sigName: "search-results-received", callback: ContactSearch.SearchResultsReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "search-results-received", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::limit", callback: any): number
    on(sigName: "notify::limit", callback: any): number
    once(sigName: "notify::limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::limit", ...args: any[]): void
    connect(sigName: "notify::server", callback: any): number
    on(sigName: "notify::server", callback: any): number
    once(sigName: "notify::server", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object for Telepathy contact searches.
 * There are no interesting public struct fields.
 * @class 
 */
export class ContactSearch extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ContactSearch

    constructor(config?: ContactSearch.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param result the #GAsyncResult from the callback
     */
    static newFinish(result: Gio.AsyncResult): ContactSearch
    _init(config?: ContactSearch.ConstructorProperties): void
    /**
     * <!-- -->
     * @param account an account for the contact search
     * @param server the server on which to search for contacts, or %NULL
     * @param limit The maximum number of results the server should return, or 0 for the server default.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished
     */
    static newAsync(account: Account, server: string, limit: number, callback: Gio.AsyncReadyCallback | null): void
}

export module ContactSearchResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

        identifier?: string | null
    }

}

export interface ContactSearchResult {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

    readonly identifier: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

    /**
     * <!-- -->
     */
    dupFields(): ContactInfoField[]
    /**
     * <!-- -->
     * @param field the name of the field
     */
    getField(field: string): ContactInfoField
    /**
     * <!-- -->
     */
    getFields(): ContactInfoField[]
    /**
     * <!-- -->
     */
    getIdentifier(): string

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing the results of a Telepathy contact
 * search channel.
 * There are no interesting public struct fields.
 * @class 
 */
export class ContactSearchResult extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResult

    constructor(config?: ContactSearchResult.ConstructorProperties) 
    _init(config?: ContactSearchResult.ConstructorProperties): void
}

export module DBusDaemon {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface DBusDaemon {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.DBusDaemon

    /**
     * <!-- Returns: is enough -->
     */
    getUniqueName(): string
    /**
     * Call the ListActivatableNames method on the bus daemon, asynchronously.
     * The `callback` will be called from the main loop with a list of all the
     * well-known names that are available for service-activation on the bus.
     * 
     * In versions of telepathy-glib that have it, this should be preferred
     * instead of calling tp_cli_dbus_daemon_call_list_activatable_names(), since
     * that function will result in wakeups for every NameOwnerChanged signal.
     * @param timeoutMs timeout for the call
     * @param callback callback to be called on success or failure; must not be %NULL
     * @param weakObject if not %NULL, a GObject which will be weakly referenced; if  it is destroyed, `callback` will not be called at all
     */
    listActivatableNames(timeoutMs: number, callback: DBusDaemonListNamesCb, weakObject: GObject.Object): void
    /**
     * Call the ListNames method on the bus daemon, asynchronously. The `callback`
     * will be called from the main loop with a list of all the names (either
     * unique or well-known) that exist on the bus.
     * 
     * In versions of telepathy-glib that have it, this should be preferred
     * instead of calling tp_cli_dbus_daemon_call_list_names(), since that
     * function will result in wakeups for every NameOwnerChanged signal.
     * @param timeoutMs timeout for the call
     * @param callback callback to be called on success or failure; must not be %NULL
     * @param weakObject if not %NULL, a GObject which will be weakly referenced; if  it is destroyed, `callback` will not be called at all
     */
    listNames(timeoutMs: number, callback: DBusDaemonListNamesCb, weakObject: GObject.Object): void
    /**
     * Export `object` at `object_path`. This is a convenience wrapper around
     * dbus_g_connection_register_g_object(), and behaves similarly.
     * @param objectPath an object path
     * @param object an object to export
     */
    registerObject(objectPath: string, object: GObject.Object): void
    /**
     * Release the given well-known name. This makes a synchronous call to the bus
     * daemon.
     * @param wellKnownName a well-known name owned by this process to release
     */
    releaseName(wellKnownName: string): boolean
    /**
     * Claim the given well-known name without queueing, allowing replacement
     * or replacing an existing name-owner. This makes a synchronous call to the
     * bus daemon.
     * @param wellKnownName a well-known name to acquire
     * @param idempotent whether to consider it to be a success if this process              already owns the name
     */
    requestName(wellKnownName: string, idempotent: boolean): boolean
    /**
     * Stop exporting `object` on D-Bus. This is a convenience wrapper around
     * dbus_g_connection_unregister_g_object(), and behaves similarly.
     * @param object an object previously exported with tp_dbus_daemon_register_object()
     */
    unregisterObject(object: GObject.Object): void
    /**
     * Arrange for `callback` to be called with the owner of `name` as soon as
     * possible (which might even be before this function returns!), then
     * again every time the ownership of `name` changes.
     * 
     * If multiple watches are registered for the same `name,` they will be called
     * in the order they were registered.
     * @param name The name whose ownership is to be watched
     * @param callback Callback to call when the ownership is discovered or changes
     */
    watchNameOwner(name: string, callback: DBusDaemonNameOwnerChangedCb): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.DBusDaemon

    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A subclass of #TpProxy that represents the D-Bus daemon. It mainly provides
 * functionality to manage well-known names on the bus.
 * @class 
 */
export class DBusDaemon extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusDaemon

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.DBusDaemon

    constructor(config?: DBusDaemon.ConstructorProperties) 
    _init(config?: DBusDaemon.ConstructorProperties): void
    /**
     * Returns a proxy for signals and method calls on the D-Bus daemon on which
     * this process was activated (if it was launched by D-Bus service
     * activation), or the session bus (otherwise).
     * 
     * If it is not possible to connect to the appropriate bus, raise an error
     * and return %NULL.
     * 
     * The returned #TpDBusDaemon is cached; the same #TpDBusDaemon object will
     * be returned by this function repeatedly, as long as at least one reference
     * exists.
     */
    static dup(): DBusDaemon
    /**
     * Ensure that the known interfaces for TpDBusDaemon have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_DBUS_DAEMON.
     */
    static initKnownInterfaces(): void
}

export module DBusTubeChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface DBusTubeChannel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannel

    /**
     * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
     * 
     * Will be %NULL for outgoing tubes until the tube has been offered.
     */
    readonly parametersVardict: GLib.Variant
    /**
     * A string representing the service name that will be used over the tube.
     */
    readonly serviceName: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannel

    /**
     * Accept an incoming D-Bus tube. When the tube has been accepted
     * `callback` will be called. You can then call
     * tp_dbus_tube_channel_accept_finish() to get the #GDBusConnection that will
     * be used to communicate through the tube.
     * @param callback a callback to call when the tube has been offered
     */
    acceptAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes to accept an incoming D-Bus tube. The returned #GDBusConnection
     * is ready to be used to exchange data through the tube.
     * @param result a #GAsyncResult
     */
    acceptFinish(result: Gio.AsyncResult): Gio.DBusConnection
    /**
     * Return the parameters of the dbus-tube channel in a variant of
     * type %G_VARIANT_TYPE_VARDICT whose keys are strings representing
     * parameter names and values are variants representing corresponding
     * parameter values set by the offerer when offering this channel.
     * 
     * The GVariant returned is %NULL if this is an outgoing tube that has not
     * yet been offered or the parameters property has not been set.
     * 
     * Use g_variant_lookup(), g_variant_lookup_value(), or tp_vardict_get_uint32()
     * and similar functions for convenient access to the values.
     */
    dupParametersVardict(): GLib.Variant
    /**
     * Return the #TpDBusTubeChannel:service-name property
     */
    getServiceName(): string
    /**
     * Offer an outgoing D-Bus tube. When the tube has been offered and accepted
     * `callback` will be called. You can then call
     * tp_dbus_tube_channel_offer_finish() to get the #GDBusConnection that will
     * be used to communicate through the tube.
     * @param params parameters of the tube, or %NULL
     * @param callback a callback to call when the tube has been offered
     */
    offerAsync(params: GLib.HashTable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes offering an outgoing D-Bus tube. The returned #GDBusConnection
     * is ready to be used to exchange data through the tube.
     * @param result a #GAsyncResult
     */
    offerFinish(result: Gio.AsyncResult): Gio.DBusConnection

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannel

    connect(sigName: "notify::parameters-vardict", callback: any): number
    on(sigName: "notify::parameters-vardict", callback: any): number
    once(sigName: "notify::parameters-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters-vardict", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: any): number
    on(sigName: "notify::service-name", callback: any): number
    once(sigName: "notify::service-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpDBusTubeChannel.
 * @class 
 */
export class DBusTubeChannel extends Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannel

    constructor(config?: DBusTubeChannel.ConstructorProperties) 
    _init(config?: DBusTubeChannel.ConstructorProperties): void
    static featureQuarkCore(): GLib.Quark
}

export module DebugClient {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-debug-message`
     */
    export interface NewDebugMessageSignalCallback {
        (message: DebugMessage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {
    }

}

export interface DebugClient {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    /**
     * %TRUE if debug messages are published on the bus.
     * 
     * This property is meaningless until the
     * %TP_DEBUG_CLIENT_FEATURE_CORE feature has been prepared.
     */
    readonly enabled: boolean

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    /**
     * Retrieve buffered messages from `self`. Once `callback` is called,
     * use tp_debug_client_get_messages_finish() to retrieve the #TpDebugMessage
     * objects.
     * @param callback callback to call when the messages have been retrieved
     */
    getMessagesAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_debug_client_set_enabled_async().
     * @param result a #GAsyncResult
     */
    getMessagesFinish(result: Gio.AsyncResult): DebugMessage[]
    /**
     * Return the #TpDebugClient:enabled property
     */
    isEnabled(): boolean
    /**
     * Enable or disable publishing of debug messages on the bus by the component
     * owning `self'`s bus name.
     * @param enabled %TRUE if debug messages should be published on the bus, %FALSE otherwise
     * @param callback a callback to call when the request is satisfied
     */
    setEnabledAsync(enabled: boolean, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_debug_client_set_enabled_async().
     * @param result a #GAsyncResult
     */
    setEnabledFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    connect(sigName: "new-debug-message", callback: DebugClient.NewDebugMessageSignalCallback): number
    on(sigName: "new-debug-message", callback: DebugClient.NewDebugMessageSignalCallback): number
    once(sigName: "new-debug-message", callback: DebugClient.NewDebugMessageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "new-debug-message", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A proxy object for the debug interface of a Telepathy component.
 * @class 
 */
export class DebugClient extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.DebugClient

    constructor(config?: DebugClient.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus a D-Bus daemon; may not be %NULL
     * @param uniqueName the unique name of the process to be debugged; may not be  %NULL or a well-known name
     */
    constructor(dbus: DBusDaemon, uniqueName: string) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus a D-Bus daemon; may not be %NULL
     * @param uniqueName the unique name of the process to be debugged; may not be  %NULL or a well-known name
     */
    static new(dbus: DBusDaemon, uniqueName: string): DebugClient
    _init(config?: DebugClient.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpDebugClient have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_DEBUG_CLIENT.
     */
    static initKnownInterfaces(): void
}

export module DebugMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DebugMessage {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugMessage

    /**
     * Category of the debug message, or %NULL if none was specified.
     */
    readonly category: string
    /**
     * Domain of the debug message.
     */
    readonly domain: string
    /**
     * A #GLogLevelFlags representing the level of the debug message.
     */
    readonly level: number
    /**
     * Text of the debug message, stripped from its trailing whitespaces.
     */
    readonly message: string
    /**
     * Timestamp of the debug message.
     */
    readonly time: GLib.DateTime

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.DebugMessage

    /**
     * Return the #TpDebugMessage:category property
     */
    getCategory(): string
    /**
     * Return the #TpDebugMessage:domain property
     */
    getDomain(): string
    /**
     * Return the #TpDebugMessage:level property
     */
    getLevel(): GLib.LogLevelFlags
    /**
     * Return the #TpDebugMessage:message property
     */
    getMessage(): string
    /**
     * Return the #TpDebugMessage:time property
     */
    getTime(): GLib.DateTime

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.DebugMessage

    connect(sigName: "notify::category", callback: any): number
    on(sigName: "notify::category", callback: any): number
    once(sigName: "notify::category", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::domain", callback: any): number
    on(sigName: "notify::domain", callback: any): number
    once(sigName: "notify::domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::level", callback: any): number
    on(sigName: "notify::level", callback: any): number
    once(sigName: "notify::level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpDebugMessage.
 * @class 
 */
export class DebugMessage extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugMessage

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.DebugMessage

    constructor(config?: DebugMessage.ConstructorProperties) 
    _init(config?: DebugMessage.ConstructorProperties): void
}

export module FileTransferChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface FileTransferChannel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannel

    /**
     * A #GDateTime representing the last modification time of the file to be
     * transferred.
     * 
     * Since 0.15.5
     */
    readonly date: GLib.DateTime
    /**
     * The description of the file transfer, defined by the sender when
     * sending the file transfer offer.
     * 
     * Since 0.15.5
     */
    readonly description: string
    /**
     * For incoming file transfers, this property will be set to a
     * #GFile for the location where the file will be saved (given by
     * tp_file_transfer_channel_accept_file_async()) when the transfer
     * starts. The feature %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE must
     * already be prepared for this property to have a meaningful
     * value, and to receive change notification.  Once the initial
     * value is set, this property will not be changed.
     * 
     * For outgoing file transfers, this property is a #GFile for the
     * location of the file being sent (given by
     * tp_file_transfer_channel_provide_file_async()). The feature
     * %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE does not have to be
     * prepared and there is no change notification.
     */
    readonly file: Gio.File
    /**
     * The name of the file on the sender's side. This is therefore given as a
     * suggested filename for the receiver.
     * 
     * Since 0.15.5
     */
    readonly filename: string
    /**
     * The offset in bytes from where the file should be sent.
     * 
     * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
     * prepared for this property to be meaningful and kept up to date.
     */
    readonly initialOffset: number
    /**
     * The MIME type of the file to be transferred.
     */
    readonly mimeType: string
    /**
     * A string representing the name of the service suggested to handle
     * this file transfer channel, or %NULL if the initiator did not
     * provide one.
     * 
     * This is a useful way of requesting file transfer channels with a
     * hint of what handler they should be handled by on the remote
     * side. If a channel request is made with this property set (to a
     * contact who also supports the metadata extension; see the
     * requestable channel classes for said contact), this property will
     * be set to the same value on the remote incoming channel and
     * handlers can match on this in their handler filter. For example,
     * a remote handler could call the following:
     * 
     * |[
     * tp_base_client_take_handler_filter (handler, tp_asv_new (
     *               TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING, TP_IFACE_CHANNEL_TYPE_FILE_TRANSFER,
     *               TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_CONTACT,
     *               TP_PROP_CHANNEL_REQUESTED, G_TYPE_BOOLEAN, FALSE,
     *               TP_PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME, G_TYPE_STRING, "service.name",
     *               NULL));
     * ```
     * 
     * 
     * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
     * prepared for this property to be meaningful.
     */
    readonly serviceName: string
    /**
     * The size of the file to be transferred,
     * or %G_MAXUINT64 if not known.
     * 
     * Since 0.15.5
     */
    readonly size: number
    /**
     * A TpFileTransferState holding the state of the file transfer.
     * 
     * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
     * prepared for this property to be meaningful and kept up to date.
     * 
     * Since 0.17.1
     */
    readonly state: number
    /**
     * The number of bytes transferred so far in this
     * file transfer.
     * 
     * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
     * prepared for this property to be meaningful and kept up to date.
     */
    readonly transferredBytes: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannel

    /**
     * Accept an incoming file transfer in the
     * %TP_FILE_TRANSFER_STATE_PENDING state. Once the accept has been
     * processed, `callback` will be called. You can then call
     * tp_file_transfer_channel_accept_file_finish() to get the result of
     * the operation.
     * @param file a #GFile where the file should be saved
     * @param offset Offset from the start of `file` where transfer begins
     * @param callback a callback to call when the transfer has been accepted
     */
    acceptFileAsync(file: Gio.File, offset: number, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a call to tp_file_transfer_channel_accept_file_async().
     * @param result a #GAsyncResult
     */
    acceptFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Return the #TpFileTransferChannel:date property
     */
    getDate(): GLib.DateTime
    /**
     * Return the #TpFileTransferChannel:description property
     */
    getDescription(): string
    /**
     * Return the #TpFileTransferChannel:filename property
     */
    getFilename(): string
    /**
     * Return the #TpFileTransferChannel:metadata property
     */
    getMetadata(): GLib.HashTable
    /**
     * Return the #TpFileTransferChannel:mime-type property
     */
    getMimeType(): string
    /**
     * Return the #TpFileTransferChannel:service-name property
     */
    getServiceName(): string
    /**
     * Return the #TpFileTransferChannel:size property
     */
    getSize(): number
    /**
     * Returns the #TpFileTransferChannel:state property.
     * 
     * If `reason` is not %NULL it is set to the reason why
     * #TpFileTransferChannel:state changed to its current value.
     */
    getState(): [ /* returnType */ FileTransferState, /* reason */ FileTransferStateChangeReason ]
    /**
     * Return the #TpFileTransferChannel:transferred-bytes property
     */
    getTransferredBytes(): number
    /**
     * Provide a file transfer. This should be called when the file
     * transfer state changes (tp_file_transfer_channel_get_state() and
     * the "notify::state" signal) to
     * %TP_FILE_TRANSFER_STATE_ACCEPTED or
     * %TP_FILE_TRANSFER_STATE_PENDING. Once the file has been provided,
     * the channel #TpFileTransferChannel:state will change to
     * %TP_FILE_TRANSFER_STATE_OPEN.
     * 
     * Once the file has been provided, `callback` will be called. You
     * should then call tp_file_transfer_channel_provide_file_finish() to
     * get the result of the operation.
     * @param file a #GFile to send to the remote contact
     * @param callback a callback to call when the transfer has been accepted
     */
    provideFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a call to tp_file_transfer_channel_provide_file_async().
     * 
     * 
     * Successful return from this function does not mean that the file
     * transfer has completed or has even started at all. The state of the
     * file transfer should be monitored with the "notify::state" signal.
     * @param result a #GAsyncResult
     */
    provideFileFinish(result: Gio.AsyncResult): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannel

    connect(sigName: "notify::date", callback: any): number
    on(sigName: "notify::date", callback: any): number
    once(sigName: "notify::date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::initial-offset", callback: any): number
    on(sigName: "notify::initial-offset", callback: any): number
    once(sigName: "notify::initial-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-offset", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: any): number
    on(sigName: "notify::mime-type", callback: any): number
    once(sigName: "notify::mime-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: any): number
    on(sigName: "notify::service-name", callback: any): number
    once(sigName: "notify::service-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::transferred-bytes", callback: any): number
    on(sigName: "notify::transferred-bytes", callback: any): number
    once(sigName: "notify::transferred-bytes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transferred-bytes", ...args: any[]): void
    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpFileTransferChannel.
 * @class 
 */
export class FileTransferChannel extends Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannel

    constructor(config?: FileTransferChannel.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpFileTransferChannel
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    constructor(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable) 
    /**
     * Convenient function to create a new #TpFileTransferChannel
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    static new(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable): FileTransferChannel

    // Overloads of new

    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param optionalChannelType the channel type if already known, or %NULL if not
     * @param optionalHandleType the handle type if already known, or  %TP_UNKNOWN_HANDLE_TYPE if not
     * @param optionalHandle the handle if already known, or 0 if not  (if `optional_handle_type` is %TP_UNKNOWN_HANDLE_TYPE or  %TP_HANDLE_TYPE_NONE, this must be 0)
     */
    static new(conn: Connection, objectPath: string, optionalChannelType: string, optionalHandleType: HandleType, optionalHandle: Handle): Channel
    _init(config?: FileTransferChannel.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
}

export module HandleChannelsContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

        /**
         * A #TpAccount object representing the Account of the DispatchOperation
         * that has been passed to HandleChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        account?: Account | null
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to HandleChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        channels?: object[] | null
        /**
         * A #TpConnection object representing the Connection of the DispatchOperation
         * that has been passed to HandleChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        connection?: Connection | null
        /**
         * A #GPtrArray containing #TpChannelRequest objects representing the
         * requests that have been passed to HandleChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        requestsSatisfied?: object[] | null
        /**
         * The time at which user action occurred, or one of the
         * special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME
         * (see #TpAccountChannelRequest:user-action-time for details)
         * 
         * Read-only except during construction.
         */
        userActionTime?: number | null
    }

}

export interface HandleChannelsContext {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    /**
     * A #TpAccount object representing the Account of the DispatchOperation
     * that has been passed to HandleChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly account: Account
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels
     * that have been passed to HandleChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly channels: object[]
    /**
     * A #TpConnection object representing the Connection of the DispatchOperation
     * that has been passed to HandleChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly connection: Connection
    /**
     * A #GPtrArray containing #TpChannelRequest objects representing the
     * requests that have been passed to HandleChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly requestsSatisfied: object[]
    /**
     * The time at which user action occurred, or one of the
     * special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
     * %TP_USER_ACTION_TIME_CURRENT_TIME
     * (see #TpAccountChannelRequest:user-action-time for details)
     * 
     * Read-only except during construction.
     */
    readonly userActionTime: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl when it's done so
     * the D-Bus method can return.
     * 
     * The caller is responsible for closing channels with
     * tp_cli_channel_call_close() when it has finished handling them.
     */
    accept(): void
    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl to indicate that it
     * implements the method in an async way. The caller must take a reference
     * to the #TpHandleChannelsContext before calling this function, and
     * is responsible for calling either
     * tp_handle_channels_context_accept() or
     * tp_handle_channels_context_fail() later.
     */
    delay(): void
    /**
     * Called by #TpBaseClientClassAddDispatchOperationImpl to raise a D-Bus error.
     * @param error the error to return from the method
     */
    fail(error: GLib.Error): void
    /**
     * Return any extra information that accompanied this request to handle
     * channels (the Handler_Info argument from the HandleChannels D-Bus method).
     * Well-known keys for this map will be defined by the Telepathy D-Bus
     * Interface Specification; at the time of writing, none have been defined.
     * 
     * The returned hash table is only valid for as long as `self` is.
     */
    getHandlerInfo(): GLib.HashTable
    /**
     * Return a list of the #TpChannelRequest which have been satisfied by the
     * channels associated with #self.
     */
    getRequests(): ChannelRequest[]

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    connect(sigName: "done", callback: HandleChannelsContext.DoneSignalCallback): number
    on(sigName: "done", callback: HandleChannelsContext.DoneSignalCallback): number
    once(sigName: "done", callback: HandleChannelsContext.DoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "done", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channels", callback: any): number
    on(sigName: "notify::channels", callback: any): number
    once(sigName: "notify::channels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::requests-satisfied", callback: any): number
    on(sigName: "notify::requests-satisfied", callback: any): number
    once(sigName: "notify::requests-satisfied", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requests-satisfied", ...args: any[]): void
    connect(sigName: "notify::user-action-time", callback: any): number
    on(sigName: "notify::user-action-time", callback: any): number
    once(sigName: "notify::user-action-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-action-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing the context of a Handler.HandleChannels()
 * call.
 * @class 
 */
export class HandleChannelsContext extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContext

    constructor(config?: HandleChannelsContext.ConstructorProperties) 
    _init(config?: HandleChannelsContext.ConstructorProperties): void
}

export module Message {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Message {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Message

    /**
     * Append a body part to the message.
     */
    appendPart(): number
    /**
     * <!-- nothing more to say -->
     */
    countParts(): number
    /**
     * Remove the given key and its value from the given part.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     */
    deleteKey(part: number, key: string): boolean
    /**
     * Delete the given body part from the message.
     * @param part a part number, which must be strictly greater than 0, and strictly  less than the number returned by tp_message_count_parts()
     */
    deletePart(part: number): void
    /**
     * Since 0.13.9 this function is a simple wrapper around
     * g_object_unref()
     */
    destroy(): void
    /**
     * <!-- nothing more to say -->
     * @param part a part number
     */
    dupPart(part: number): GLib.Variant
    /**
     * <!-- -->
     */
    getMessageType(): ChannelTextMessageType
    /**
     * Return the incoming message ID of `self`. Only incoming messages have such
     * ID, for outgoing ones this function returns 0 and set `valid` to %FALSE.
     */
    getPendingMessageId(): [ /* returnType */ number, /* valid */ boolean ]
    /**
     * Return when this message was received locally, as a number of seconds since
     * the beginning of 1970 in the UTC timezone (the same representation used by
     * g_date_time_new_from_unix_utc(), for instance), or 0 if not known.
     */
    getReceivedTimestamp(): number
    /**
     * Return when this message was sent, as a number of seconds since the
     * beginning of 1970 in the UTC timezone (the same representation used by
     * g_date_time_new_from_unix_utc(), for instance), or 0 if not known.
     * 
     * If this protocol does not track the time at which the message was
     * initially sent, this timestamp might be approximated by using the
     * time at which it arrived at a central server.
     */
    getSentTimestamp(): number
    /**
     * If this message is specific to a particular D-Bus interface and should
     * be ignored by clients without knowledge of that interface, return the
     * name of the interface.
     * 
     * If this message is an ordinary message or delivery report, return %NULL.
     */
    getSpecificToInterface(): string
    /**
     * If this message replaces a previous message, return the value of
     * tp_message_get_token() for that previous message. Otherwise, return %NULL.
     * 
     * For instance, a user interface could replace the superseded
     * message with this message, or grey out the superseded message.
     */
    getSupersedes(): string
    /**
     * Return this message's identifier in the underlying protocol. This is
     * <emphasis>not</emphasis> guaranteed to be unique, even within the scope
     * of a single channel or contact: the only guarantee made is that two
     * messages with different non-empty tokens are different messages.
     * 
     * If there is no suitable token, return %NULL.
     */
    getToken(): string
    /**
     * If this message is a delivery report indicating success or failure of
     * delivering a message, return %TRUE.
     */
    isDeliveryReport(): boolean
    /**
     * Check if `self` is mutable. Only mutable messages can be modified using
     * functions such as tp_message_set_string().
     */
    isMutable(): boolean
    /**
     * Returns %TRUE if this incoming message has been seen in a previous channel
     * during the lifetime of the Connection, but had not been acknowledged when
     * that channel closed, causing an identical channel (in which the message now
     * appears) to open.
     * 
     * Loggers should check this flag to avoid duplicating messages, for instance.
     */
    isRescued(): boolean
    /**
     * <!-- no more to say -->
     */
    isScrollback(): boolean
    /**
     * <!-- nothing more to say -->
     * @param part a part number
     */
    peek(part: number): GLib.HashTable
    /**
     * Reference the given handle until this message is destroyed.
     * @param handleType a handle type, greater than %TP_HANDLE_TYPE_NONE and less than  %TP_NUM_HANDLE_TYPES
     * @param handle a handle of the given type
     */
    refHandle(handleType: HandleType, handle: Handle): void
    /**
     * Set `key` in part `part` of `self` to have a copy of `source` as its value.
     * 
     * If `source` represents a data structure containing handles, they should
     * all be referenced with tp_message_ref_handle() first.
     * 
     * In high-level language bindings, use tp_message_set_variant() instead.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param source a value, encoded as dbus-glib would
     */
    set(part: number, key: string, source: any): void
    /**
     * Set `key` in part `part` of `self` to have `b` as a boolean value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param b a boolean value
     */
    setBoolean(part: number, key: string, b: boolean): void
    /**
     * Set `key` in part `part` of `self` to have `bytes` as a byte-array value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param len a number of bytes
     * @param bytes an array of `len` bytes
     */
    setBytes(part: number, key: string, len: number, bytes: object | null): void
    /**
     * If `handle_or_0` is not zero, reference it with tp_message_ref_handle().
     * 
     * Set `key` in part `part` of `self` to have `handle_or_0` as an unsigned integer
     * value.
     * 
     * Since 0.13.9 this function has been deprecated in favor or
     * tp_cm_message_set_sender() as 'message-sender' is the only handle
     * you can put in a #TpCMMessage.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param handleType a handle type
     * @param handleOr0 a handle of that type, or 0
     */
    setHandle(part: number, key: string, handleType: HandleType, handleOr0: Handle): void
    /**
     * Set `key` in part `part` of `self` to have `i` as a signed integer value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param i an integer value
     */
    setInt32(part: number, key: string, i: number): void
    /**
     * Set `key` in part `part` of `self` to have `i` as a signed integer value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param i an integer value
     */
    setInt64(part: number, key: string, i: number): void
    /**
     * Set `key` in part `part` of `self` to have `s` as a string value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param s a string value
     */
    setString(part: number, key: string, s: string): void
    /**
     * Set `key` in part `part` of `self` to have `u` as an unsigned integer value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param u an unsigned integer value
     */
    setUint32(part: number, key: string, u: number): void
    /**
     * Set `key` in part `part` of `self` to have `u` as an unsigned integer value.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param u an unsigned integer value
     */
    setUint64(part: number, key: string, u: number): void
    /**
     * Set `key` in part `part` of `self` to have `value` as its value.
     * 
     * If `value` is a floating reference (see g_variant_ref_sink()), then this
     * function will take ownership of it.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param value a value
     */
    setVariant(part: number, key: string, value: GLib.Variant): void
    /**
     * Set `key` in part `part` of `self` to have `message` as an aa{sv} value (that
     * is, an array of Message_Part), and take ownership of `message`.  The caller
     * should not use `message` after passing it to this function.  All handle
     * references owned by `message` will subsequently belong to and be released
     * with `self`.
     * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
     * @param key a key in the mapping representing the part
     * @param message another (distinct) message created for the same #TpBaseConnection
     */
    takeMessage(part: number, key: string, message: Message): void
    /**
     * Concatene all the text parts contained in `message`.
     */
    toText(): [ /* returnType */ string, /* outFlags */ ChannelTextMessageFlags ]

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Message

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure representing a message in the Telepathy messages interface
 * (an array of at least one mapping from string to variant, where the first
 * mapping contains message headers and subsequent mappings contain the
 * message body).
 * 
 * This base class provides convenience API for most of the common keys that
 * can appear in the header. One notable exception is the sender of the
 * message. Inside a connection manager, messages are represented by the
 * #TpCMMessage subclass, and you should use tp_cm_message_get_sender().
 * When composing a message in a client using #TpClientMessage, messages do
 * not have an explicit sender (the sender is automatically the local user).
 * When a client sees a sent or received message signalled by the connection
 * manager (represented by #TpSignalledMessage), the message's sender (if any)
 * can be accessed with tp_signalled_message_get_sender().
 * @class 
 */
export class Message extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Message

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Message

    constructor(config?: Message.ConstructorProperties) 
    _init(config?: Message.ConstructorProperties): void
}

export module ObserveChannelsContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

        /**
         * A #TpAccount object representing the Account that has been passed to
         * ObserveChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        account?: Account | null
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to ObserveChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        channels?: object[] | null
        /**
         * A #TpConnection object representing the Connection that has been passed
         * to ObserveChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        connection?: Connection | null
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to ObserveChannels,
         * or %NULL if none has been passed.
         * Read-only except during construction.
         */
        dispatchOperation?: ChannelDispatchOperation | null
        /**
         * A #GPtrArray containing #TpChannelRequest objects representing the
         * requests that have been passed to ObserveChannels.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        requests?: object[] | null
    }

}

export interface ObserveChannelsContext {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

    /**
     * A #TpAccount object representing the Account that has been passed to
     * ObserveChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly account: Account
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels
     * that have been passed to ObserveChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly channels: object[]
    /**
     * A #TpConnection object representing the Connection that has been passed
     * to ObserveChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly connection: Connection
    /**
     * A #TpChannelDispatchOperation object representing the
     * ChannelDispatchOperation that has been passed to ObserveChannels,
     * or %NULL if none has been passed.
     * Read-only except during construction.
     */
    readonly dispatchOperation: ChannelDispatchOperation
    /**
     * A #GPtrArray containing #TpChannelRequest objects representing the
     * requests that have been passed to ObserveChannels.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly requests: object[]

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

    /**
     * Called by #TpBaseClientClassObserveChannelsImpl when it's done so the D-Bus
     * method can return.
     */
    accept(): void
    /**
     * Called by #TpBaseClientClassObserveChannelsImpl to indicate that it
     * implements the method in an async way. The caller must take a reference
     * to the #TpObserveChannelsContext before calling this function, and
     * is responsible for calling either tp_observe_channels_context_accept() or
     * tp_observe_channels_context_fail() later.
     */
    delay(): void
    /**
     * Called by #TpBaseClientClassObserveChannelsImpl to raise a D-Bus error.
     * @param error the error to return from the method
     */
    fail(error: GLib.Error): void
    /**
     * Return a list of the #TpChannelRequest which have been satisfied by the
     * channels associated with #self.
     */
    getRequests(): ChannelRequest[]
    /**
     * If this call to ObserveChannels is for channels that already
     * existed before this observer started (because the observer used
     * tp_base_client_set_observer_recover()), return %TRUE.
     * 
     * In most cases, the result is %FALSE.
     */
    isRecovering(): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::channels", callback: any): number
    on(sigName: "notify::channels", callback: any): number
    once(sigName: "notify::channels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::dispatch-operation", callback: any): number
    on(sigName: "notify::dispatch-operation", callback: any): number
    once(sigName: "notify::dispatch-operation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dispatch-operation", ...args: any[]): void
    connect(sigName: "notify::requests", callback: any): number
    on(sigName: "notify::requests", callback: any): number
    once(sigName: "notify::requests", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requests", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing the context of a Observer.ObserveChannels()
 * call.
 * @class 
 */
export class ObserveChannelsContext extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContext

    constructor(config?: ObserveChannelsContext.ConstructorProperties) 
    _init(config?: ObserveChannelsContext.ConstructorProperties): void
}

export module Protocol {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.Protocol

        /**
         * The name of the connection manager this protocol is on.
         */
        cmName?: string | null
        /**
         * The machine-readable name of the protocol, taken from the Telepathy
         * D-Bus Interface Specification, such as "jabber" or "local-xmpp".
         */
        protocolName?: string | null
    }

}

export interface Protocol {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Protocol

    /**
     * A non-%NULL #GStrv of URI schemes supported by this protocol.
     * If this protocol does not support addressing contacts by URI,
     * the list is empty.
     * 
     * For instance, a SIP connection manager that supports calling contacts
     * by SIP URI (sip:alice&commat;example.com, sips:bob&commat;example.com)
     * or telephone number (tel:+1-555-0123) might have
     * { "sip", "sips", "tel", NULL }.
     */
    readonly addressableUriSchemes: string[]
    /**
     * A non-%NULL #GStrv of vCard fields supported by this protocol.
     * If this protocol does not support addressing contacts by a vCard field,
     * the list is empty.
     * 
     * For instance, a SIP connection manager that supports calling contacts
     * by SIP URI (vCard field SIP) or telephone number (vCard field TEL)
     * might have { "sip", "tel", NULL }.
     */
    readonly addressableVcardFields: string[]
    /**
     * A non-%NULL #GStrv of interfaces which provide information as to
     * what kind of authentication channels can possibly appear before
     * the connection reaches the CONNECTED state, or %NULL if
     * %TP_PROTOCOL_FEATURE_CORE has not been prepared.
     */
    readonly authenticationTypes: string[]
    /**
     * A #TpAvatarRequirements representing the avatar requirements on this
     * protocol, or %NULL if %TP_PROTOCOL_FEATURE_CORE has not been prepared or
     * if the protocol doesn't support avatars.
     */
    readonly avatarRequirements: object
    /**
     * The classes of channel that can be requested from connections to this
     * protocol, or %NULL if this is unknown or the %TP_PROTOCOL_FEATURE_CORE
     * feature has not been prepared.
     */
    readonly capabilities: Capabilities
    /**
     * The name of the connection manager this protocol is on.
     */
    readonly cmName: string
    /**
     * The name of the protocol in a form suitable for display to users,
     * such as "AIM" or "Yahoo!", or a string based on #TpProtocol:protocol-name
     * (currently constructed by putting the first character in title case,
     * but this is not guaranteed) if no better name is available or the
     * %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
     * 
     * This is effectively in the C locale (international English); user
     * interfaces requiring a localized protocol name should look one up in their
     * own message catalog based on either #TpProtocol:protocol-name or
     * #TpProtocol:english-name, but should use this English version as a
     * fallback if no translated version can be found.
     */
    readonly englishName: string
    /**
     * The name of an icon in the system's icon theme. If none was supplied
     * by the Protocol, or the %TP_PROTOCOL_FEATURE_CORE feature has not been
     * prepared, a default is used; currently, this is "im-" plus
     * #TpProtocol:protocol-name.
     */
    readonly iconName: string
    /**
     * A list of parameter names supported by this connection manager
     * for this protocol, or %NULL if %TP_PROTOCOL_FEATURE_PARAMETERS has not
     * been prepared.
     */
    readonly paramNames: string[]
    /**
     * The machine-readable name of the protocol, taken from the Telepathy
     * D-Bus Interface Specification, such as "jabber" or "local-xmpp".
     */
    readonly protocolName: string
    /**
     * The immutable properties of this Protocol, as provided at construction
     * time. This is a #G_VARIANT_TYPE_VARDICT #GVariant,
     * which must not be modified.
     * 
     * If the immutable properties were not provided at construction time,
     * the %TP_PROTOCOL_FEATURE_PARAMETERS and %TP_PROTOCOL_FEATURE_CORE features
     * will both be unavailable, and this #TpProtocol object will only be useful
     * as a way to access lower-level D-Bus calls.
     */
    readonly protocolPropertiesVardict: GLib.Variant
    /**
     * The most common vCard field used for this protocol's contact
     * identifiers, normalized to lower case, or %NULL if there is no such field
     * or the %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
     */
    readonly vcardField: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Protocol

    /**
     * Return whether a new account can be registered on this protocol, by setting
     * the special "register" parameter to %TRUE.
     */
    canRegister(): boolean
    /**
     * Return the #TpProtocol:protocol-properties-vardict property.
     */
    dupImmutableProperties(): GLib.Variant
    /**
     * <!-- no more to say -->
     * @param param a parameter name
     */
    dupParam(param: string): ConnectionManagerParam
    /**
     * Returns a list of parameter names supported by this connection manager
     * for this protocol.
     * 
     * The result is copied and must be freed by the caller with g_strfreev().
     */
    dupParamNames(): string[]
    /**
     * Returns a list of parameters supported by this connection manager.
     * 
     * The returned list must be freed by the caller, for instance with
     * <literal>g_list_free_full (l,
     * (GDestroyNotify) tp_connection_manager_param_free)</literal>.
     */
    dupParams(): ConnectionManagerParam[]
    /**
     * Return the presence statuses that might be supported by connections
     * to this protocol.
     * 
     * It is possible that some of these statuses will not actually be supported
     * by a connection: for instance, an XMPP connection manager would
     * include "hidden" in this list, even though not all XMPP servers allow
     * users to be online-but-hidden.
     */
    dupPresenceStatuses(): PresenceStatusSpec[]
    /**
     * <!-- -->
     */
    getAddressableUriSchemes(): string[]
    /**
     * <!-- -->
     */
    getAddressableVcardFields(): string[]
    /**
     * <!-- -->
     */
    getAuthenticationTypes(): string[]
    /**
     * Return the #TpProtocol:avatar-requirements property
     */
    getAvatarRequirements(): AvatarRequirements
    /**
     * <!-- -->
     */
    getCapabilities(): Capabilities
    /**
     * Return the #TpProtocol:cm-name property.
     */
    getCmName(): string
    /**
     * <!-- -->
     */
    getEnglishName(): string
    /**
     * <!-- -->
     */
    getIconName(): string
    /**
     * Return the same thing as the protocol-name property, for convenient use
     * in C code. The returned string is valid for as long as `self` exists.
     */
    getName(): string
    /**
     * <!-- no more to say -->
     * @param param a parameter name
     */
    getParam(param: string): ConnectionManagerParam
    /**
     * <!-- -->
     */
    getVcardField(): string
    /**
     * <!-- no more to say -->
     * @param param a parameter name
     */
    hasParam(param: string): boolean
    /**
     * Return a string that could identify the account with the given
     * parameters. In most protocols that string is a normalized 'account'
     * parameter, but some protocols have more complex requirements;
     * for instance, on IRC, the 'account' (nickname) is insufficient,
     * and must be combined with a server or network name.
     * @param vardict the account parameters as a #GVariant of  type %G_VARIANT_TYPE_VARDICT. If it is floating, ownership will  be taken, as if via g_variant_ref_sink().
     * @param cancellable may be used to cancel the async request
     * @param callback a callback to call when  the request is satisfied
     */
    identifyAccountAsync(vardict: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_protocol_identify_account_async().
     * @param result a #GAsyncResult
     */
    identifyAccountFinish(result: Gio.AsyncResult): string
    /**
     * Perform best-effort offline contact normalization. This does syntactic
     * normalization (e.g. transforming case-insensitive text to lower-case),
     * but does not query servers or anything similar.
     * @param contact a contact identifier, possibly invalid
     * @param cancellable may be used to cancel the async request
     * @param callback a callback to call when  the request is satisfied
     */
    normalizeContactAsync(contact: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_protocol_normalize_contact_async().
     * @param result a #GAsyncResult
     */
    normalizeContactFinish(result: Gio.AsyncResult): string
    /**
     * Perform best-effort offline contact normalization, for a contact in
     * the form of a URI. This method will fail if the URI is not in a
     * scheme supported by this protocol or connection manager.
     * @param uri a contact URI, possibly invalid
     * @param cancellable may be used to cancel the async request
     * @param callback a callback to call when the request is satisfied
     */
    normalizeContactUriAsync(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_protocol_normalize_contact_uri_async().
     * @param result a #GAsyncResult
     */
    normalizeContactUriFinish(result: Gio.AsyncResult): string
    /**
     * Perform best-effort offline contact normalization, for a contact in
     * the form of a vCard field. This method will fail if the vCard field
     * is not supported by this protocol or connection manager.
     * @param field a vCard field
     * @param value an address that is a value of `field`
     * @param cancellable may be used to cancel the async request
     * @param callback a callback to call when the request is satisfied
     */
    normalizeVcardAddressAsync(field: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Interpret the result of tp_protocol_normalize_vcard_address_async().
     * @param result a #GAsyncResult
     */
    normalizeVcardAddressFinish(result: Gio.AsyncResult): string

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Protocol

    connect(sigName: "notify::addressable-uri-schemes", callback: any): number
    on(sigName: "notify::addressable-uri-schemes", callback: any): number
    once(sigName: "notify::addressable-uri-schemes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::addressable-uri-schemes", ...args: any[]): void
    connect(sigName: "notify::addressable-vcard-fields", callback: any): number
    on(sigName: "notify::addressable-vcard-fields", callback: any): number
    once(sigName: "notify::addressable-vcard-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::addressable-vcard-fields", ...args: any[]): void
    connect(sigName: "notify::authentication-types", callback: any): number
    on(sigName: "notify::authentication-types", callback: any): number
    once(sigName: "notify::authentication-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authentication-types", ...args: any[]): void
    connect(sigName: "notify::avatar-requirements", callback: any): number
    on(sigName: "notify::avatar-requirements", callback: any): number
    once(sigName: "notify::avatar-requirements", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar-requirements", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::cm-name", callback: any): number
    on(sigName: "notify::cm-name", callback: any): number
    once(sigName: "notify::cm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cm-name", ...args: any[]): void
    connect(sigName: "notify::english-name", callback: any): number
    on(sigName: "notify::english-name", callback: any): number
    once(sigName: "notify::english-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::english-name", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::param-names", callback: any): number
    on(sigName: "notify::param-names", callback: any): number
    once(sigName: "notify::param-names", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::param-names", ...args: any[]): void
    connect(sigName: "notify::protocol-name", callback: any): number
    on(sigName: "notify::protocol-name", callback: any): number
    once(sigName: "notify::protocol-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol-name", ...args: any[]): void
    connect(sigName: "notify::protocol-properties-vardict", callback: any): number
    on(sigName: "notify::protocol-properties-vardict", callback: any): number
    once(sigName: "notify::protocol-properties-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol-properties-vardict", ...args: any[]): void
    connect(sigName: "notify::vcard-field", callback: any): number
    on(sigName: "notify::vcard-field", callback: any): number
    once(sigName: "notify::vcard-field", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vcard-field", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A base class for connection managers' protocols.
 * @class 
 */
export class Protocol extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Protocol

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Protocol

    constructor(config?: Protocol.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus proxy for the D-Bus daemon; may not be %NULL
     * @param cmName the connection manager name (such as "gabble")
     * @param protocolName the protocol name (such as "jabber")
     * @param immutableProperties the immutable D-Bus properties for this protocol
     */
    constructor(dbus: DBusDaemon, cmName: string, protocolName: string, immutableProperties: GLib.HashTable) 
    /**
     * <!-- -->
     * @constructor 
     * @param dbus proxy for the D-Bus daemon; may not be %NULL
     * @param cmName the connection manager name (such as "gabble")
     * @param protocolName the protocol name (such as "jabber")
     * @param immutableProperties the immutable D-Bus properties for this protocol
     */
    static new(dbus: DBusDaemon, cmName: string, protocolName: string, immutableProperties: GLib.HashTable): Protocol
    /**
     * Create a new protocol proxy.
     * 
     * If `immutable_properties` is a floating reference, this function will
     * take ownership of it, much like g_variant_ref_sink(). See documentation of
     * that function for details.
     * @constructor 
     * @param dbus proxy for the D-Bus daemon; may not be %NULL
     * @param cmName the connection manager name (such as "gabble")
     * @param protocolName the protocol name (such as "jabber")
     * @param immutableProperties the immutable D-Bus properties for this protocol
     */
    static newVardict(dbus: DBusDaemon, cmName: string, protocolName: string, immutableProperties: GLib.Variant): Protocol
    _init(config?: Protocol.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    static getFeatureQuarkParameters(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpProtocol have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_PROTOCOL.
     */
    static initKnownInterfaces(): void
}

export module Proxy {

    // Signal callback interfaces


    /**
     * Signal callback interface for `invalidated`
     */
    export interface InvalidatedSignalCallback {
        (domain: number, code: number, message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.Proxy

        /**
         * The D-Bus bus name for this object. Read-only except during construction.
         */
        busName?: string | null
        /**
         * The D-Bus daemon for this object (this object itself, if it is a
         * TpDBusDaemon). Read-only except during construction.
         */
        dbusDaemon?: DBusDaemon | null
        /**
         * The #TpSimpleClientFactory used to create this proxy,
         * or %NULL if this proxy was not created through a factory.
         */
        factory?: SimpleClientFactory | null
        /**
         * The D-Bus object path for this object. Read-only except during
         * construction.
         */
        objectPath?: string | null
    }

}

export interface Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Proxy

    /**
     * The D-Bus bus name for this object. Read-only except during construction.
     */
    readonly busName: string
    /**
     * The D-Bus daemon for this object (this object itself, if it is a
     * TpDBusDaemon). Read-only except during construction.
     */
    readonly dbusDaemon: DBusDaemon
    /**
     * The #TpSimpleClientFactory used to create this proxy,
     * or %NULL if this proxy was not created through a factory.
     */
    readonly factory: SimpleClientFactory
    /**
     * Known D-Bus interface names for this object.
     */
    readonly interfaces: string[]
    /**
     * The D-Bus object path for this object. Read-only except during
     * construction.
     */
    readonly objectPath: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Proxy

    /**
     * Convert a D-Bus error name into a GError as if it was returned by a method
     * on this proxy. This method is useful when D-Bus error names are emitted in
     * signals, such as Connection.ConnectionError and
     * Group.MembersChangedDetailed.
     * @param dbusError a D-Bus error name, for instance from the callback for              tp_cli_connection_connect_to_connection_error()
     * @param debugMessage a debug message that accompanied the error name, or %NULL
     */
    dbusErrorToGerror(dbusError: string, debugMessage: string): void
    /**
     * <!-- -->
     */
    getBusName(): string
    /**
     * <!-- -->
     */
    getDbusDaemon(): DBusDaemon
    /**
     * <!-- -->
     */
    getFactory(): SimpleClientFactory
    /**
     * <!-- -->
     */
    getInvalidated(): GLib.Error
    /**
     * <!-- -->
     */
    getObjectPath(): string
    /**
     * Return whether this proxy is known to have a particular interface. In
     * versions older than 0.11.11, this was a macro wrapper around
     * tp_proxy_has_interface_by_id().
     * 
     * For objects that discover their interfaces at runtime, this method will
     * indicate that interfaces are missing until they are known to be present.
     * In subclasses that define features for use with tp_proxy_prepare_async(),
     * successfully preparing the "core" feature for that subclass (such as
     * %TP_CHANNEL_FEATURE_CORE or %TP_CONNECTION_FEATURE_CORE) implies that the
     * interfaces are known.
     * @param iface the D-Bus interface required, as a string
     */
    hasInterface(iface: string): boolean
    /**
     * Return whether this proxy is known to have a particular interface, by its
     * quark ID. This is equivalent to using g_quark_to_string() followed by
     * tp_proxy_has_interface(), but more efficient.
     * @param iface quark representing the D-Bus interface required
     */
    hasInterfaceById(iface: GLib.Quark): boolean
    /**
     * Return %TRUE if `feature` has been prepared successfully, or %FALSE if
     * `feature` has not been requested, has not been prepared yet, or is not
     * available on this object at all.
     * 
     * (For instance, if `feature` is %TP_CHANNEL_FEATURE_CHAT_STATES and `self`
     * is a #TpChannel in a protocol that doesn't actually implement chat states,
     * or is not a #TpChannel at all, then this method will return %FALSE.)
     * 
     * To prepare features, call tp_proxy_prepare_async().
     * @param feature a feature that is supported by `self'`s class
     */
    isPrepared(feature: GLib.Quark): boolean
    /**
     * #TpProxy itself does not support any features, but subclasses like
     * #TpChannel can support features, which can either be core functionality like
     * %TP_CHANNEL_FEATURE_CORE, or extended functionality like
     * %TP_CHANNEL_FEATURE_CHAT_STATES.
     * 
     * Proxy instances start with no features prepared. When features are
     * requested via tp_proxy_prepare_async(), the proxy starts to do the
     * necessary setup to use those features.
     * 
     * tp_proxy_prepare_async() always waits for core functionality of the proxy's
     * class to be prepared, even if it is not specifically requested: for
     * instance, because %TP_CHANNEL_FEATURE_CORE is core functionality of a
     * #TpChannel,
     * 
     * |[
     * TpChannel *channel = ...;
     * 
     * tp_proxy_prepare_async (channel, NULL, callback, user_data);
     * ```
     * 
     * 
     * is equivalent to
     * 
     * |[
     * TpChannel *channel = ...;
     * GQuark features[] = { TP_CHANNEL_FEATURE_CORE, 0 };
     * 
     * tp_proxy_prepare_async (channel, features, callback, user_data);
     * ```
     * 
     * 
     * If a feature represents core functionality (like %TP_CHANNEL_FEATURE_CORE),
     * failure to prepare it will result in tp_proxy_prepare_async() finishing
     * unsuccessfully: if failure to prepare the feature indicates that the proxy
     * is no longer useful, it will also emit #TpProxy::invalidated.
     * 
     * If a feature represents non-essential functionality
     * (like %TP_CHANNEL_FEATURE_CHAT_STATES), or is not supported by the object
     * at all, then failure to prepare it is not fatal:
     * tp_proxy_prepare_async() will complete successfully, but
     * tp_proxy_is_prepared() will still return %FALSE for the feature, and
     * accessor methods for the feature will typically return a dummy value.
     * 
     * Some #TpProxy subclasses automatically start to prepare their core
     * features when instantiated, and features will sometimes become prepared as
     * a side-effect of other actions, but to ensure that a feature is present you
     * must generally call tp_proxy_prepare_async() and wait for the result.
     * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
     * @param callback if not %NULL, called exactly once, when the features have all  been prepared or failed to prepare, or after the proxy is invalidated
     */
    prepareAsync(features: GLib.Quark[] | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Check for error in a call to tp_proxy_prepare_async(). An error here
     * generally indicates that either the asynchronous call was cancelled,
     * or `self` has emitted #TpProxy::invalidated.
     * @param result the result passed to the callback of tp_proxy_prepare_async()
     */
    prepareFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.Proxy

    connect(sigName: "interface-added", callback: (...args: any[]) => void): number
    on(sigName: "interface-added", callback: (...args: any[]) => void): number
    once(sigName: "interface-added", callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: "interface-added", proxy: any, ...args: any[]): void
    connect(sigName: "invalidated", callback: Proxy.InvalidatedSignalCallback): number
    on(sigName: "invalidated", callback: Proxy.InvalidatedSignalCallback): number
    once(sigName: "invalidated", callback: Proxy.InvalidatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "invalidated", code: number, message: string, ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.Proxy

    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Structure representing a Telepathy client-side proxy.
 * @class 
 */
export class Proxy extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Proxy

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    _init(config?: Proxy.ConstructorProperties): void
}

export module RoomInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RoomInfo {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.RoomInfo

    /**
     * <!-- -->
     */
    getChannelType(): string
    /**
     * <!-- -->
     */
    getDescription(): string
    /**
     * <!-- -->
     */
    getHandle(): Handle
    /**
     * <!-- -->
     */
    getHandleName(): string
    /**
     * <!-- -->
     * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
     */
    getInviteOnly(known: boolean): boolean
    /**
     * <!-- -->
     * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
     */
    getMembersCount(known: boolean): number
    /**
     * <!-- -->
     */
    getName(): string
    /**
     * <!-- -->
     * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
     */
    getRequiresPassword(known: boolean): boolean
    /**
     * <!-- -->
     */
    getRoomId(): string
    /**
     * <!-- -->
     */
    getServer(): string
    /**
     * <!-- -->
     */
    getSubject(): string

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.RoomInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpRoomInfo.
 * @class 
 */
export class RoomInfo extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomInfo

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.RoomInfo

    constructor(config?: RoomInfo.ConstructorProperties) 
    _init(config?: RoomInfo.ConstructorProperties): void
}

export module RoomList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    export interface FailedSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `got-room`
     */
    export interface GotRoomSignalCallback {
        (room: RoomInfo): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.RoomList

        /**
         * The #TpAccount to use for the room listing.
         */
        account?: Account | null
        /**
         * The DNS name of the server whose rooms are listed by this channel, or
         * %NULL.
         */
        server?: string | null
    }

}

export interface RoomList extends Gio.AsyncInitable {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomList

    /**
     * The #TpAccount to use for the room listing.
     */
    readonly account: Account
    /**
     * %TRUE if the channel is currently listing rooms.
     * 
     * This property is meaningless until the
     * %TP_ROOM_LIST_FEATURE_LISTING feature has been prepared.
     */
    readonly listing: boolean
    /**
     * The DNS name of the server whose rooms are listed by this channel, or
     * %NULL.
     */
    readonly server: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.RoomList

    /**
     * Return the #TpRoomList:account property
     */
    getAccount(): Account
    /**
     * Return the #TpRoomList:server property
     */
    getServer(): string
    /**
     * Return the #TpRoomList:listing property
     */
    isListing(): boolean
    /**
     * Start listing rooms using `self`. Use the TpRoomList::got-rooms
     * signal to get the rooms found.
     * Errors will be reported using the TpRoomList::failed signal.
     */
    start(): void

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.RoomList

    connect(sigName: "failed", callback: RoomList.FailedSignalCallback): number
    on(sigName: "failed", callback: RoomList.FailedSignalCallback): number
    once(sigName: "failed", callback: RoomList.FailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "got-room", callback: RoomList.GotRoomSignalCallback): number
    on(sigName: "got-room", callback: RoomList.GotRoomSignalCallback): number
    once(sigName: "got-room", callback: RoomList.GotRoomSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-room", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.RoomList

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::listing", callback: any): number
    on(sigName: "notify::listing", callback: any): number
    once(sigName: "notify::listing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::listing", ...args: any[]): void
    connect(sigName: "notify::server", callback: any): number
    on(sigName: "notify::server", callback: any): number
    once(sigName: "notify::server", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpRoomList.
 * @class 
 */
export class RoomList extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomList

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.RoomList

    constructor(config?: RoomList.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param result the #GAsyncResult from the callback
     */
    static newFinish(result: Gio.AsyncResult): RoomList
    _init(config?: RoomList.ConstructorProperties): void
    /**
     * <!-- -->
     * @param account a #TpAccount for the room listing
     * @param server the DNS name of the server whose rooms should listed
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished
     */
    static newAsync(account: Account, server: string, callback: Gio.AsyncReadyCallback | null): void
}

export module SignalledMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends Message.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.SignalledMessage

        /**
         * A #TpContact representing the sender of the message, if known, or %NULL
         * otherwise.
         */
        sender?: Contact | null
    }

}

export interface SignalledMessage {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SignalledMessage

    /**
     * A #TpContact representing the sender of the message, if known, or %NULL
     * otherwise.
     */
    readonly sender: Contact

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.SignalledMessage

    connect(sigName: "notify::sender", callback: any): number
    on(sigName: "notify::sender", callback: any): number
    once(sigName: "notify::sender", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure representing a received message using the Telepathy
 * messages interface
 * @class 
 */
export class SignalledMessage extends Message {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SignalledMessage

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.SignalledMessage

    constructor(config?: SignalledMessage.ConstructorProperties) 
    _init(config?: SignalledMessage.ConstructorProperties): void
    /**
     * Returns a #TpContact representing the sender of `message` if known, %NULL
     * otherwise.
     * @param message a #TpSignalledMessage
     */
    static getSender(message: Message): Contact
}

export module SimpleApprover {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseClient.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.SimpleApprover

        /**
         * The #TpSimpleApproverAddDispatchOperationImpl callback implementing the
         * AddDispatchOperation D-Bus method.
         * 
         * This property can't be %NULL.
         */
        callback?: object | null
        /**
         * The #GDestroyNotify function called to free #TpSimpleApprover:user-data
         * when the #TpSimpleApprover is destroyed.
         */
        destroy?: object | null
        /**
         * The user-data pointer passed to #TpSimpleApprover:callback.
         */
        userData?: object | null
    }

}

export interface SimpleApprover {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleApprover

    /**
     * The #TpSimpleApproverAddDispatchOperationImpl callback implementing the
     * AddDispatchOperation D-Bus method.
     * 
     * This property can't be %NULL.
     */
    readonly callback: object
    /**
     * The #GDestroyNotify function called to free #TpSimpleApprover:user-data
     * when the #TpSimpleApprover is destroyed.
     */
    readonly destroy: object
    /**
     * The user-data pointer passed to #TpSimpleApprover:callback.
     */
    readonly userData: object

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.SimpleApprover

    connect(sigName: "notify::callback", callback: any): number
    on(sigName: "notify::callback", callback: any): number
    once(sigName: "notify::callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::callback", ...args: any[]): void
    connect(sigName: "notify::destroy", callback: any): number
    on(sigName: "notify::destroy", callback: any): number
    once(sigName: "notify::destroy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy", ...args: any[]): void
    connect(sigName: "notify::user-data", callback: any): number
    on(sigName: "notify::user-data", callback: any): number
    once(sigName: "notify::user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: "notify::account-manager", callback: any): number
    on(sigName: "notify::account-manager", callback: any): number
    once(sigName: "notify::account-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-manager", ...args: any[]): void
    connect(sigName: "notify::channel-factory", callback: any): number
    on(sigName: "notify::channel-factory", callback: any): number
    once(sigName: "notify::channel-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-factory", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uniquify-name", callback: any): number
    on(sigName: "notify::uniquify-name", callback: any): number
    once(sigName: "notify::uniquify-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uniquify-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a simple Approver implementation.
 * @class 
 */
export class SimpleApprover extends BaseClient {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleApprover

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.SimpleApprover

    constructor(config?: SimpleApprover.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpSimpleApprover instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_approver_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param name the name of the Approver (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when AddDispatchOperation is called
     */
    constructor(dbus: DBusDaemon, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl) 
    /**
     * Convenient function to create a new #TpSimpleApprover instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_approver_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param name the name of the Approver (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when AddDispatchOperation is called
     */
    static new(dbus: DBusDaemon, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl): SimpleApprover
    /**
     * Convenient function to create a new #TpSimpleApprover instance with a
     * specified #TpAccountManager.
     * 
     * It is not necessary to prepare any features on `account_manager` before
     * calling this function.
     * @constructor 
     * @param accountManager an account manager, which may not be %NULL
     * @param name the name of the Approver (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when AddDispatchOperation is called
     */
    static newWithAm(accountManager: AccountManager, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl): SimpleApprover
    /**
     * Convenient function to create a new #TpSimpleApprover instance with a
     * specified #TpSimpleClientFactory.
     * @constructor 
     * @param factory an #TpSimpleClientFactory, which may not be %NULL
     * @param name the name of the Approver (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when AddDispatchOperation is called
     */
    static newWithFactory(factory: SimpleClientFactory, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl): SimpleApprover
    _init(config?: SimpleApprover.ConstructorProperties): void
}

export module SimpleClientFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

        /**
         * The D-Bus daemon for this object.
         */
        dbusDaemon?: DBusDaemon | null
    }

}

export interface SimpleClientFactory {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    /**
     * The D-Bus daemon for this object.
     */
    readonly dbusDaemon: DBusDaemon

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    /**
     * Add `features` to the desired features to be prepared on #TpAccount
     * objects. Those features will be added to the features already returned be
     * tp_simple_client_factory_dup_account_features().
     * 
     * It is not necessary to add %TP_ACCOUNT_FEATURE_CORE as it is already
     * included by default.
     * 
     * Note that these features will not be added to existing #TpAccount
     * objects; the user must call tp_proxy_prepare_async() themself.
     * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
     */
    addAccountFeatures(features: GLib.Quark[] | null): void
    /**
     * Add `features` to the desired features to be prepared on #TpChannel
     * objects. Those features will be added to the features already returned be
     * tp_simple_client_factory_dup_channel_features().
     * 
     * It is not necessary to add %TP_CHANNEL_FEATURE_CORE as it is already
     * included by default.
     * 
     * Note that these features will not be added to existing #TpChannel
     * objects; the user must call tp_proxy_prepare_async() themself.
     * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
     */
    addChannelFeatures(features: GLib.Quark[] | null): void
    /**
     * Add `features` to the desired features to be prepared on #TpConnection
     * objects. Those features will be added to the features already returned be
     * tp_simple_client_factory_dup_connection_features().
     * 
     * It is not necessary to add %TP_CONNECTION_FEATURE_CORE as it is already
     * included by default.
     * 
     * Note that these features will not be added to existing #TpConnection
     * objects; the user must call tp_proxy_prepare_async() themself.
     * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
     */
    addConnectionFeatures(features: GLib.Quark[] | null): void
    /**
     * Add `features` to the desired features to be prepared on #TpContact
     * objects. Those features will be added to the features already returned be
     * tp_simple_client_factory_dup_contact_features().
     * 
     * Note that these features will not be added to existing #TpContact
     * objects; the user must call tp_connection_upgrade_contacts() themself.
     * @param features an array of desired  features (may be %NULL if `n_features` is 0)
     */
    addContactFeatures(features: ContactFeature[] | null): void
    // Has conflict: dupAccountFeatures(account: Account): GLib.Quark[]
    // Has conflict: dupChannelFeatures(channel: Channel): GLib.Quark[]
    // Has conflict: dupConnectionFeatures(connection: Connection): GLib.Quark[]
    // Has conflict: dupContactFeatures(connection: Connection): ContactFeature[]
    /**
     * Returns a #TpAccount proxy for the account at `object_path`. The returned
     * #TpAccount is cached; the same #TpAccount object will be returned by this
     * function repeatedly, as long as at least one reference exists.
     * 
     * Note that the returned #TpAccount is not guaranteed to be ready; the caller
     * is responsible for calling tp_proxy_prepare_async() with the desired
     * features (as given by tp_simple_client_factory_dup_account_features()).
     * 
     * This function is rather low-level. tp_account_manager_dup_valid_accounts()
     * and #TpAccountManager::validity-changed are more appropriate for most
     * applications.
     * @param objectPath the object path of an account
     * @param immutableProperties   the immutable properties of the account, or %NULL.
     */
    ensureAccount(objectPath: string, immutableProperties: GLib.HashTable): Account
    /**
     * Returns a #TpChannel proxy for the channel at `object_path` on `connection`.
     * The returned #TpChannel is cached; the same #TpChannel object
     * will be returned by this function repeatedly, as long as at least one
     * reference exists.
     * 
     * Note that the returned #TpChannel is not guaranteed to be ready; the
     * caller is responsible for calling tp_proxy_prepare_async() with the desired
     * features (as given by tp_simple_client_factory_dup_channel_features()).
     * 
     * This function is rather low-level.
     * #TpAccountChannelRequest and #TpBaseClient are more appropriate ways
     * to obtain channels for most applications.
     * @param connection a #TpConnection whose #TpProxy:factory is this object
     * @param objectPath the object path of a channel on `connection`
     * @param immutableProperties   the immutable properties of the channel
     */
    ensureChannel(connection: Connection, objectPath: string, immutableProperties: GLib.HashTable): Channel
    /**
     * Returns a #TpConnection proxy for the connection at `object_path`.
     * The returned #TpConnection is cached; the same #TpConnection object
     * will be returned by this function repeatedly, as long as at least one
     * reference exists.
     * 
     * Note that the returned #TpConnection is not guaranteed to be ready; the
     * caller is responsible for calling tp_proxy_prepare_async() with the desired
     * features (as given by tp_simple_client_factory_dup_connection_features()).
     * 
     * This function is rather low-level. #TpAccount:connection is more
     * appropriate for most applications.
     * @param objectPath the object path of a connection
     * @param immutableProperties   the immutable properties of the connection.
     */
    ensureConnection(objectPath: string, immutableProperties: GLib.HashTable): Connection
    /**
     * Returns a #TpContact representing `identifier` (and `handle)` on `connection`.
     * The returned #TpContact is cached; the same #TpContact object
     * will be returned by this function repeatedly, as long as at least one
     * reference exists.
     * 
     * Note that the returned #TpContact is not guaranteed to be ready; the caller
     * is responsible for calling tp_connection_upgrade_contacts() with the desired
     * features (as given by tp_simple_client_factory_dup_contact_features()).
     * 
     * For this function to work properly, tp_connection_has_immortal_handles()
     * must return %TRUE for `connection`.
     * @param connection a #TpConnection whose #TpProxy:factory is this object
     * @param handle a #TpHandle
     * @param identifier a string representing the contact's identifier
     */
    ensureContact(connection: Connection, handle: Handle, identifier: string): Contact
    /**
     * Same as tp_connection_dup_contact_by_id_async(), but prepare the
     * contact with all features previously passed to
     * tp_simple_client_factory_add_contact_features().
     * @param connection a #TpConnection
     * @param identifier a string representing the contact's identifier
     * @param callback a callback to call when the operation finishes
     */
    ensureContactByIdAsync(connection: Connection, identifier: string, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_simple_client_factory_ensure_contact_by_id_async()
     * @param result a #GAsyncResult
     */
    ensureContactByIdFinish(result: Gio.AsyncResult): Contact
    /**
     * <!-- -->
     */
    getDbusDaemon(): DBusDaemon
    /**
     * Same as tp_connection_upgrade_contacts_async(), but prepare contacts with all
     * features previously passed to
     * tp_simple_client_factory_add_contact_features().
     * @param connection a #TpConnection whose #TpProxy:factory is this object
     * @param contacts An array of #TpContact objects  associated with `self`
     * @param callback a callback to call when the operation finishes
     */
    upgradeContactsAsync(connection: Connection, contacts: Contact[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes tp_simple_client_factory_upgrade_contacts_async()
     * @param result a #GAsyncResult
     */
    upgradeContactsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contacts */ Contact[] ]

    // Own virtual methods of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    /**
     * Return a zero-terminated #GArray containing the #TpAccount features that
     * should be prepared on `account`.
     * @virtual 
     * @param account a #TpAccount
     */
    dupAccountFeatures(account: Account): GLib.Quark[]
    /**
     * Return a zero-terminated #GArray containing the #TpChannel features that
     * should be prepared on `channel`.
     * @virtual 
     * @param channel a #TpChannel
     */
    dupChannelFeatures(channel: Channel): GLib.Quark[]
    /**
     * Return a zero-terminated #GArray containing the #TpConnection features that
     * should be prepared on `connection`.
     * @virtual 
     * @param connection a #TpConnection
     */
    dupConnectionFeatures(connection: Connection): GLib.Quark[]
    /**
     * Return a #GArray containing the #TpContactFeature that should be prepared on
     * all contacts of `connection`.
     * @virtual 
     * @param connection a #TpConnection
     */
    dupContactFeatures(connection: Connection): ContactFeature[]

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpSimpleClientFactory
 * @class 
 */
export class SimpleClientFactory extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactory

    constructor(config?: SimpleClientFactory.ConstructorProperties) 
    /**
     * Creates a new #TpSimpleClientFactory instance. If `dbus` is %NULL,
     * tp_dbus_daemon_dup() will be used.
     * @constructor 
     * @param dbus a #TpDBusDaemon, or %NULL
     */
    constructor(dbus: DBusDaemon | null) 
    /**
     * Creates a new #TpSimpleClientFactory instance. If `dbus` is %NULL,
     * tp_dbus_daemon_dup() will be used.
     * @constructor 
     * @param dbus a #TpDBusDaemon, or %NULL
     */
    static new(dbus: DBusDaemon | null): SimpleClientFactory
    _init(config?: SimpleClientFactory.ConstructorProperties): void
}

export module SimpleHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseClient.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.SimpleHandler

        /**
         * The value of the Handler.BypassApproval D-Bus property.
         */
        bypassApproval?: boolean | null
        /**
         * The #TpSimpleHandlerHandleChannelsImpl callback implementing the
         * HandleChannels D-Bus method.
         * 
         * This property can't be %NULL.
         */
        callback?: object | null
        /**
         * The #GDestroyNotify function called to free #TpSimpleHandler:user-data
         * when the #TpSimpleHandler is destroyed.
         */
        destroy?: object | null
        /**
         * If %TRUE, the Handler will implement the Requests interface
         */
        requests?: boolean | null
        /**
         * The user-data pointer passed to #TpSimpleHandler:callback.
         */
        userData?: object | null
    }

}

export interface SimpleHandler {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleHandler

    /**
     * The value of the Handler.BypassApproval D-Bus property.
     */
    readonly bypassApproval: boolean
    /**
     * The #TpSimpleHandlerHandleChannelsImpl callback implementing the
     * HandleChannels D-Bus method.
     * 
     * This property can't be %NULL.
     */
    readonly callback: object
    /**
     * The #GDestroyNotify function called to free #TpSimpleHandler:user-data
     * when the #TpSimpleHandler is destroyed.
     */
    readonly destroy: object
    /**
     * If %TRUE, the Handler will implement the Requests interface
     */
    readonly requests: boolean
    /**
     * The user-data pointer passed to #TpSimpleHandler:callback.
     */
    readonly userData: object

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.SimpleHandler

    connect(sigName: "notify::bypass-approval", callback: any): number
    on(sigName: "notify::bypass-approval", callback: any): number
    once(sigName: "notify::bypass-approval", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bypass-approval", ...args: any[]): void
    connect(sigName: "notify::callback", callback: any): number
    on(sigName: "notify::callback", callback: any): number
    once(sigName: "notify::callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::callback", ...args: any[]): void
    connect(sigName: "notify::destroy", callback: any): number
    on(sigName: "notify::destroy", callback: any): number
    once(sigName: "notify::destroy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy", ...args: any[]): void
    connect(sigName: "notify::requests", callback: any): number
    on(sigName: "notify::requests", callback: any): number
    once(sigName: "notify::requests", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requests", ...args: any[]): void
    connect(sigName: "notify::user-data", callback: any): number
    on(sigName: "notify::user-data", callback: any): number
    once(sigName: "notify::user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: "notify::account-manager", callback: any): number
    on(sigName: "notify::account-manager", callback: any): number
    once(sigName: "notify::account-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-manager", ...args: any[]): void
    connect(sigName: "notify::channel-factory", callback: any): number
    on(sigName: "notify::channel-factory", callback: any): number
    once(sigName: "notify::channel-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-factory", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uniquify-name", callback: any): number
    on(sigName: "notify::uniquify-name", callback: any): number
    once(sigName: "notify::uniquify-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uniquify-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a simple Handler implementation.
 * @class 
 */
export class SimpleHandler extends BaseClient {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleHandler

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.SimpleHandler

    constructor(config?: SimpleHandler.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpSimpleHandler instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_handler_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param bypassApproval the value of the Handler.BypassApproval D-Bus property (see tp_base_client_set_handler_bypass_approval() for details)
     * @param requests whether this handler should implement Requests (see tp_base_client_set_handler_request_notification() for details)
     * @param name the name of the Handler (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when HandleChannels is called
     */
    constructor(dbus: DBusDaemon, bypassApproval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl) 
    /**
     * Convenient function to create a new #TpSimpleHandler instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_handler_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param bypassApproval the value of the Handler.BypassApproval D-Bus property (see tp_base_client_set_handler_bypass_approval() for details)
     * @param requests whether this handler should implement Requests (see tp_base_client_set_handler_request_notification() for details)
     * @param name the name of the Handler (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when HandleChannels is called
     */
    static new(dbus: DBusDaemon, bypassApproval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl): SimpleHandler
    /**
     * Convenient function to create a new #TpSimpleHandler instance with a
     * specified #TpAccountManager.
     * 
     * It is not necessary to prepare any features on `account_manager` before
     * calling this function.
     * @constructor 
     * @param accountManager an account manager, which may not be %NULL
     * @param bypassApproval the value of the Handler.BypassApproval D-Bus property (see tp_base_client_set_handler_bypass_approval() for details)
     * @param requests whether this handler should implement Requests (see tp_base_client_set_handler_request_notification() for details)
     * @param name the name of the Handler (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when HandleChannels is called
     */
    static newWithAm(accountManager: AccountManager, bypassApproval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl): SimpleHandler
    /**
     * Convenient function to create a new #TpSimpleHandler instance with a
     * specified #TpSimpleClientFactory.
     * @constructor 
     * @param factory a #TpSimpleClientFactory, which may not be %NULL
     * @param bypassApproval the value of the Handler.BypassApproval D-Bus property (see tp_base_client_set_handler_bypass_approval() for details)
     * @param requests whether this handler should implement Requests (see tp_base_client_set_handler_request_notification() for details)
     * @param name the name of the Handler (see #TpBaseClient:name for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name property
     * @param callback the function called when HandleChannels is called
     */
    static newWithFactory(factory: SimpleClientFactory, bypassApproval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl): SimpleHandler
    _init(config?: SimpleHandler.ConstructorProperties): void
}

export module SimpleObserver {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseClient.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.SimpleObserver

        /**
         * The TpSimpleObserverObserveChannelsImpl callback implementing the
         * ObserveChannels D-Bus method.
         * 
         * This property can't be %NULL.
         */
        callback?: object | null
        /**
         * The #GDestroyNotify function called to free the user-data pointer when
         * the #TpSimpleObserver is destroyed.
         */
        destroy?: object | null
        /**
         * The value of the Observer.Recover D-Bus property.
         */
        recover?: boolean | null
        /**
         * The user-data pointer passed to the callback implementing the
         * ObserveChannels D-Bus method.
         */
        userData?: object | null
    }

}

export interface SimpleObserver {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleObserver

    /**
     * The TpSimpleObserverObserveChannelsImpl callback implementing the
     * ObserveChannels D-Bus method.
     * 
     * This property can't be %NULL.
     */
    readonly callback: object
    /**
     * The #GDestroyNotify function called to free the user-data pointer when
     * the #TpSimpleObserver is destroyed.
     */
    readonly destroy: object
    /**
     * The value of the Observer.Recover D-Bus property.
     */
    readonly recover: boolean
    /**
     * The user-data pointer passed to the callback implementing the
     * ObserveChannels D-Bus method.
     */
    readonly userData: object

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.SimpleObserver

    connect(sigName: "notify::callback", callback: any): number
    on(sigName: "notify::callback", callback: any): number
    once(sigName: "notify::callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::callback", ...args: any[]): void
    connect(sigName: "notify::destroy", callback: any): number
    on(sigName: "notify::destroy", callback: any): number
    once(sigName: "notify::destroy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy", ...args: any[]): void
    connect(sigName: "notify::recover", callback: any): number
    on(sigName: "notify::recover", callback: any): number
    once(sigName: "notify::recover", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::recover", ...args: any[]): void
    connect(sigName: "notify::user-data", callback: any): number
    on(sigName: "notify::user-data", callback: any): number
    once(sigName: "notify::user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: "notify::account-manager", callback: any): number
    on(sigName: "notify::account-manager", callback: any): number
    once(sigName: "notify::account-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account-manager", ...args: any[]): void
    connect(sigName: "notify::channel-factory", callback: any): number
    on(sigName: "notify::channel-factory", callback: any): number
    once(sigName: "notify::channel-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-factory", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uniquify-name", callback: any): number
    on(sigName: "notify::uniquify-name", callback: any): number
    once(sigName: "notify::uniquify-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uniquify-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a simple Observer implementation.
 * @class 
 */
export class SimpleObserver extends BaseClient {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleObserver

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.SimpleObserver

    constructor(config?: SimpleObserver.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpSimpleObserver instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_observer_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param recover the value of the Observer.Recover D-Bus property
     * @param name the name of the Observer (see #TpBaseClient:name: for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name: property
     * @param callback the function called when ObserveChannels is called
     */
    constructor(dbus: DBusDaemon, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl) 
    /**
     * Convenient function to create a new #TpSimpleObserver instance.
     * 
     * If `dbus` is not the result of tp_dbus_daemon_dup(), you should call
     * tp_simple_observer_new_with_am() instead, so that #TpAccount,
     * #TpConnection and #TpContact instances can be shared between modules.
     * @constructor 
     * @param dbus a #TpDBusDaemon object, may not be %NULL
     * @param recover the value of the Observer.Recover D-Bus property
     * @param name the name of the Observer (see #TpBaseClient:name: for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name: property
     * @param callback the function called when ObserveChannels is called
     */
    static new(dbus: DBusDaemon, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl): SimpleObserver
    /**
     * Convenient function to create a new #TpSimpleObserver instance with a
     * specified #TpAccountManager.
     * 
     * It is not necessary to prepare any features on `account_manager` before
     * calling this function.
     * @constructor 
     * @param accountManager an account manager, which may not be %NULL
     * @param recover the value of the Observer.Recover D-Bus property
     * @param name the name of the Observer (see #TpBaseClient:name: for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name: property
     * @param callback the function called when ObserveChannels is called
     */
    static newWithAm(accountManager: AccountManager, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl): SimpleObserver
    /**
     * Convenient function to create a new #TpSimpleObserver instance with a
     * specified #TpSimpleClientFactory.
     * @constructor 
     * @param factory a #TpSimpleClientFactory, which may not be %NULL
     * @param recover the value of the Observer.Recover D-Bus property
     * @param name the name of the Observer (see #TpBaseClient:name: for details)
     * @param uniquify the value of the #TpBaseClient:uniquify-name: property
     * @param callback the function called when ObserveChannels is called
     */
    static newWithFactory(factory: SimpleClientFactory, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl): SimpleObserver
    _init(config?: SimpleObserver.ConstructorProperties): void
}

export module StreamTubeChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `incoming`
     */
    export interface IncomingSignalCallback {
        (tubeConnection: StreamTubeConnection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface StreamTubeChannel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    /**
     * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
     * 
     * Will be %NULL for outgoing tubes until the tube has been offered.
     */
    readonly parametersVardict: GLib.Variant
    /**
     * A string representing the service name that will be used over the tube.
     */
    readonly service: string

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    /**
     * Accept an incoming stream tube. When the tube has been accepted, `callback`
     * will be called. You can then call tp_stream_tube_channel_accept_finish()
     * to get a #TpStreamTubeConnection connected to the tube.
     * @param callback a callback to call when the tube has been accepted
     */
    acceptAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes accepting an incoming stream tube. The returned
     * #TpStreamTubeConnection can then be used to exchange data through the tube.
     * @param result a #GAsyncResult
     */
    acceptFinish(result: Gio.AsyncResult): StreamTubeConnection
    /**
     * Return the parameters of the dbus-tube channel in a variant of
     * type %G_VARIANT_TYPE_VARDICT whose keys are strings representing
     * parameter names and values are variants representing corresponding
     * parameter values set by the offerer when offering this channel.
     * 
     * The GVariant returned is %NULL if this is an outgoing tube that has not
     * yet been offered or the parameters property has not been set.
     * 
     * Use g_variant_lookup(), g_variant_lookup_value(), or tp_vardict_get_uint32()
     * and similar functions for convenient access to the values.
     */
    dupParametersVardict(): GLib.Variant
    /**
     * Return the #TpStreamTubeChannel:service property
     */
    getService(): string
    /**
     * Offer an outgoing stream tube. When the tube has been offered, `callback`
     * will be called. You can then call tp_stream_tube_channel_offer_finish()
     * to get the result of the operation.
     * 
     * You have to connect to the #TpStreamTubeChannel::incoming signal to get a
     * #TpStreamTubeConnection each time a contact establishes a connection to
     * the tube.
     * @param params parameters of the tube, or %NULL
     * @param callback a callback to call when the tube has been offered
     */
    offerAsync(params: GLib.HashTable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes offering an outgoing stream tube.
     * @param result a #GAsyncResult
     */
    offerFinish(result: Gio.AsyncResult): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    connect(sigName: "incoming", callback: StreamTubeChannel.IncomingSignalCallback): number
    on(sigName: "incoming", callback: StreamTubeChannel.IncomingSignalCallback): number
    once(sigName: "incoming", callback: StreamTubeChannel.IncomingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "incoming", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    connect(sigName: "notify::parameters-vardict", callback: any): number
    on(sigName: "notify::parameters-vardict", callback: any): number
    once(sigName: "notify::parameters-vardict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters-vardict", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpStreamTubeChannel.
 * @class 
 */
export class StreamTubeChannel extends Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannel

    constructor(config?: StreamTubeChannel.ConstructorProperties) 
    /**
     * Creates a new #TpStreamTubeChannel proxy object from the provided path and
     * properties. Most developers will not need to use this function; use
     * #TpAutomaticProxyFactory to automatically create #TpStreamTubeChannel proxy
     * objects.
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    constructor(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable) 
    /**
     * Creates a new #TpStreamTubeChannel proxy object from the provided path and
     * properties. Most developers will not need to use this function; use
     * #TpAutomaticProxyFactory to automatically create #TpStreamTubeChannel proxy
     * objects.
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    static new(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable): StreamTubeChannel

    // Overloads of new

    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param optionalChannelType the channel type if already known, or %NULL if not
     * @param optionalHandleType the handle type if already known, or  %TP_UNKNOWN_HANDLE_TYPE if not
     * @param optionalHandle the handle if already known, or 0 if not  (if `optional_handle_type` is %TP_UNKNOWN_HANDLE_TYPE or  %TP_HANDLE_TYPE_NONE, this must be 0)
     */
    static new(conn: Connection, objectPath: string, optionalChannelType: string, optionalHandleType: HandleType, optionalHandle: Handle): Channel
    _init(config?: StreamTubeChannel.ConstructorProperties): void
}

export module StreamTubeConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

        /**
         * The #TpStreamTubeChannel channel associated with this connection
         * 
         * This property can't be %NULL.
         */
        channel?: StreamTubeChannel | null
        /**
         * The #TpContact with who we are exchanging data through this tube, or
         * %NULL if we can't safely identify the contact.
         * 
         * If not %NULL, the #TpContact objects is guaranteed to have all of the
         * features previously passed to
         * tp_simple_client_factory_add_contact_features() prepared.
         */
        contact?: Contact | null
        /**
         * The #GSocketConnection used to transfer data through this connection.
         * Read-only except during construction.
         * 
         * This property can't be %NULL.
         */
        socketConnection?: Gio.SocketConnection | null
    }

}

export interface StreamTubeConnection {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    /**
     * The #TpStreamTubeChannel channel associated with this connection
     * 
     * This property can't be %NULL.
     */
    readonly channel: StreamTubeChannel
    /**
     * The #TpContact with who we are exchanging data through this tube, or
     * %NULL if we can't safely identify the contact.
     * 
     * If not %NULL, the #TpContact objects is guaranteed to have all of the
     * features previously passed to
     * tp_simple_client_factory_add_contact_features() prepared.
     */
    readonly contact: Contact
    /**
     * The #GSocketConnection used to transfer data through this connection.
     * Read-only except during construction.
     * 
     * This property can't be %NULL.
     */
    readonly socketConnection: Gio.SocketConnection

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    /**
     * Return the #TpStreamTubeConnection:channel property
     */
    getChannel(): StreamTubeChannel
    /**
     * Return the #TpStreamTubeConnection:contact property
     */
    getContact(): Contact
    /**
     * Return the #TpStreamTubeConnection:socket-connection property
     */
    getSocketConnection(): Gio.SocketConnection

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    connect(sigName: "closed", callback: StreamTubeConnection.ClosedSignalCallback): number
    on(sigName: "closed", callback: StreamTubeConnection.ClosedSignalCallback): number
    once(sigName: "closed", callback: StreamTubeConnection.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    connect(sigName: "notify::channel", callback: any): number
    on(sigName: "notify::channel", callback: any): number
    once(sigName: "notify::channel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::contact", callback: any): number
    on(sigName: "notify::contact", callback: any): number
    once(sigName: "notify::contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::socket-connection", callback: any): number
    on(sigName: "notify::socket-connection", callback: any): number
    once(sigName: "notify::socket-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::socket-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a connection on a #TpStreamTubeChannel.
 * @class 
 */
export class StreamTubeConnection extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnection

    constructor(config?: StreamTubeConnection.ConstructorProperties) 
    _init(config?: StreamTubeConnection.ConstructorProperties): void
}

export module TLSCertificate {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

        /**
         * A #TpConnection or #TpChannel which owns this TLS certificate. If the
         * parent object is invalidated, the certificate is also invalidated, and
         * this property is set to %NULL.
         */
        parent?: Proxy | null
    }

}

export interface TLSCertificate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

    /**
     * The raw data of the certificate or certificate chain, represented
     * as a #GPtrArray of #GBytes. It should be interpreted
     * according to #TpTLSCertificate:cert-type.
     * 
     * The first certificate in this array is the server's certificate,
     * followed by its issuer, followed by the issuer's issuer and so on.
     * 
     * For "x509" certificates, each certificate is an X.509 certificate in
     * binary (DER) format.
     * 
     * For "pgp" certificates, each certificate is a binary OpenPGP key.
     */
    readonly certData: object[]
    /**
     * The type of the certificate, typically either "x509" or "pgp".
     */
    readonly certType: string
    /**
     * A #TpConnection or #TpChannel which owns this TLS certificate. If the
     * parent object is invalidated, the certificate is also invalidated, and
     * this property is set to %NULL.
     */
    readonly parent: Proxy
    /**
     * The state of this TLS certificate as a #TpTLSCertificateState,
     * initially %TP_TLS_CERTIFICATE_STATE_PENDING.
     * 
     * #GObject::notify::state will be emitted when this changes.
     */
    readonly state: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

    /**
     * Accept this certificate, asynchronously. In or after `callback,`
     * you may call tp_tls_certificate_accept_finish() to check the result.
     * 
     * #GObject::notify::state will also be emitted when the connection manager
     * signals that the certificate has been accepted.
     * @param callback called on success or failure
     */
    acceptAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Check the result of tp_tls_certificate_accept_async().
     * @param result the result passed to the callback by  tp_tls_certificate_accept_async()
     */
    acceptFinish(result: Gio.AsyncResult): boolean
    /**
     * Add a pending reason for rejection. The first call to this method is
     * considered "most important". After calling this method as many times
     * as are required, call tp_tls_certificate_reject_async() to reject the
     * certificate.
     * 
     * If `details` is a floating reference (see g_variant_ref_sink()),
     * ownership of `details` is taken by this function. This means
     * you can pass the result of g_variant_new() or g_variant_new_parsed()
     * directly to this function without additional reference-count management.
     * @param reason the reason for rejection
     * @param dbusError a D-Bus error name such as %TP_ERROR_STR_CERT_REVOKED, or  %NULL to derive one from `reason`
     * @param details a variant of type %G_VARIANT_TYPE_VARDICT containing the details of the rejection, or %NULL
     */
    addRejection(reason: TLSCertificateRejectReason, dbusError: string, details: GLib.Variant | null): void
    /**
     * Return the #TpTLSCertificate:cert-data property
     */
    getCertData(): any[]
    /**
     * Return the #TpTLSCertificate:cert-type property
     */
    getCertType(): string
    /**
     * If this certificate has been rejected and `n` is less than the number of
     * rejection reasons, return a #TpTLSCertificateRejection representing the
     * `n<`!---->th rejection reason (starting from 0).
     * 
     * With `n` == 0 this is equivalent to tp_tls_certificate_get_rejection().
     * @param n the rejection reason to return; if 0, return the same thing as  tp_tls_certificate_get_detailed_rejection()
     */
    getNthRejection(n: number): TLSCertificateRejection | null
    /**
     * If this certificate has been rejected, return a #TpTLSCertificateRejection
     * indicating the first rejection reason (by convention,
     * the most important).
     * 
     * If you want to list all the things that are wrong with the certificate
     * (for instance, it might be self-signed and also have expired)
     * you can call tp_tls_certificate_get_nth_rejection(), increasing `n` until
     * it returns %NULL.
     */
    getRejection(): TLSCertificateRejection | null
    /**
     * Return the #TpTLSCertificate:state property
     */
    getState(): TLSCertificateState
    /**
     * Reject this certificate, asynchronously.
     * 
     * Before calling this method, you must call
     * tp_tls_certificate_add_rejection() at least once, to set the reason(s)
     * for rejection (for instance, a certificate might be both self-signed and
     * expired).
     * 
     * In or after `callback,`
     * you may call tp_tls_certificate_reject_finish() to check the result.
     * 
     * #GObject::notify::state will also be emitted when the connection manager
     * signals that the certificate has been rejected.
     * @param callback called on success or failure
     */
    rejectAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Check the result of tp_tls_certificate_reject_async().
     * @param result the result passed to the callback by  tp_tls_certificate_reject_async()
     */
    rejectFinish(result: Gio.AsyncResult): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

    connect(sigName: "notify::cert-data", callback: any): number
    on(sigName: "notify::cert-data", callback: any): number
    once(sigName: "notify::cert-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cert-data", ...args: any[]): void
    connect(sigName: "notify::cert-type", callback: any): number
    on(sigName: "notify::cert-type", callback: any): number
    once(sigName: "notify::cert-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cert-type", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #TpProxy subclass representing a server or peer's TLS certificate
 * being presented for acceptance/rejection.
 * @class 
 */
export class TLSCertificate extends Proxy {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.TLSCertificate

    constructor(config?: TLSCertificate.ConstructorProperties) 
    /**
     * <!-- -->
     * @constructor 
     * @param connOrChan a #TpConnection or #TpChannel parent for this object, whose  invalidation will also result in invalidation of the returned object
     * @param objectPath the object path of this TLS certificate
     */
    constructor(connOrChan: Proxy, objectPath: string) 
    /**
     * <!-- -->
     * @constructor 
     * @param connOrChan a #TpConnection or #TpChannel parent for this object, whose  invalidation will also result in invalidation of the returned object
     * @param objectPath the object path of this TLS certificate
     */
    static new(connOrChan: Proxy, objectPath: string): TLSCertificate
    _init(config?: TLSCertificate.ConstructorProperties): void
    static getFeatureQuarkCore(): GLib.Quark
    /**
     * Ensure that the known interfaces for TpTLSCertificate have been set up.
     * This is done automatically when necessary, but for correct
     * overriding of library interfaces by local extensions, you should
     * call this function before calling
     * tp_proxy_or_subclass_hook_on_interface_add() with first argument
     * %TP_TYPE_TLS_CERTIFICATE.
     */
    static initKnownInterfaces(): void
}

export module TLSCertificateRejection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

        /**
         * The D-Bus error name of the rejection
         */
        dbusError?: string | null
        /**
         * A #G_VARIANT_TYPE_VARDICT containing the details of the rejection
         */
        details?: GLib.Variant | null
        /**
         * a #GError (likely to be in the %TP_ERROR domain) indicating the reason
         * of the rejection
         */
        error?: GLib.Error | null
        /**
         * #TpTLSCertificateRejectReason representing the reason of the rejection
         */
        reason?: number | null
    }

}

export interface TLSCertificateRejection {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

    /**
     * The D-Bus error name of the rejection
     */
    readonly dbusError: string
    /**
     * A #G_VARIANT_TYPE_VARDICT containing the details of the rejection
     */
    readonly details: GLib.Variant
    /**
     * a #GError (likely to be in the %TP_ERROR domain) indicating the reason
     * of the rejection
     */
    readonly error: GLib.Error
    /**
     * #TpTLSCertificateRejectReason representing the reason of the rejection
     */
    readonly reason: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

    /**
     * Return the #TpTLSCertificateRejection:dbus-error property
     */
    getDbusError(): string
    /**
     * Return the #TpTLSCertificateRejection:details property
     */
    getDetails(): GLib.Variant
    /**
     * Return the #TpTLSCertificateRejection:error property
     */
    getError(): GLib.Error
    /**
     * Return the #TpTLSCertificateRejection:reason property
     */
    getReason(): TLSCertificateRejectReason
    /**
     * Convenient function to raise the #TpTLSCertificateRejection:error
     * property in language binding supporting this feature.
     */
    raiseError(): boolean

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

    connect(sigName: "notify::dbus-error", callback: any): number
    on(sigName: "notify::dbus-error", callback: any): number
    once(sigName: "notify::dbus-error", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-error", ...args: any[]): void
    connect(sigName: "notify::details", callback: any): number
    on(sigName: "notify::details", callback: any): number
    once(sigName: "notify::details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::error", callback: any): number
    on(sigName: "notify::error", callback: any): number
    once(sigName: "notify::error", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::error", ...args: any[]): void
    connect(sigName: "notify::reason", callback: any): number
    on(sigName: "notify::reason", callback: any): number
    once(sigName: "notify::reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reason", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpTLSCertificateRejection.
 * @class 
 */
export class TLSCertificateRejection extends GObject.Object {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejection

    constructor(config?: TLSCertificateRejection.ConstructorProperties) 
    _init(config?: TLSCertificateRejection.ConstructorProperties): void
}

export module TextChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contact-chat-state-changed`
     */
    export interface ContactChatStateChangedSignalCallback {
        (contact: Contact, state: number): void
    }

    /**
     * Signal callback interface for `message-received`
     */
    export interface MessageReceivedSignalCallback {
        (message: SignalledMessage): void
    }

    /**
     * Signal callback interface for `message-sent`
     */
    export interface MessageSentSignalCallback {
        (message: SignalledMessage, flags: number, token: string): void
    }

    /**
     * Signal callback interface for `pending-message-removed`
     */
    export interface PendingMessageRemovedSignalCallback {
        (message: SignalledMessage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface TextChannel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    /**
     * A #TpDeliveryReportingSupportFlags indicating features supported
     * by this channel.
     */
    readonly deliveryReportingSupport: number
    /**
     * %TRUE if messages sent and received on this channel are transmitted
     * via SMS.
     * 
     * This property is not guaranteed to have a meaningful value until
     * TP_TEXT_CHANNEL_FEATURE_SMS has been prepared.
     */
    readonly isSmsChannel: boolean
    /**
     * A #TpMessagePartSupportFlags indicating the level of support for
     * message parts on this channel.
     */
    readonly messagePartSupportFlags: number
    /**
     * %TRUE if this channel is exclusively for receiving class 0 SMSes
     * (and no SMSes can be sent using tp_text_channel_send_message_async()
     * on this channel). If %FALSE, no incoming class 0 SMSes will appear
     * on this channel.
     */
    readonly smsFlash: boolean
    /**
     * A #GStrv containing the MIME types supported by this channel, with more
     * preferred MIME types appearing earlier in the array.
     */
    readonly supportedContentTypes: string[]

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    /**
     * Acknowledge all the pending messages. This is equivalent of calling
     * tp_text_channel_ack_messages_async() with the list of #TpSignalledMessage
     * returned by tp_text_channel_dup_pending_messages().
     * 
     * Once the messages have been acked, `callback` will be called.
     * You can then call tp_text_channel_ack_all_pending_messages_finish() to get
     * the result of the operation.
     * 
     * See tp_text_channel_ack_message_async() about acknowledging messages.
     * @param callback a callback to call when the messages have been acked
     */
    ackAllPendingMessagesAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous acknowledgement operation of all messages.
     * @param result a #GAsyncResult
     */
    ackAllPendingMessagesFinish(result: Gio.AsyncResult): boolean
    /**
     * Acknowledge `message`. Once the message has been acked, `callback` will be
     * called. You can then call tp_text_channel_ack_message_finish() to get the
     * result of the operation.
     * 
     * A message should be acknowledged once it has been shown to the user by the
     * Handler of the channel. So Observers and Approvers should NOT acknowledge
     * messages themselves.
     * Once a message has been acknowledged, it is removed from the
     * pending-message queue and so the #TpTextChannel::pending-message-removed
     * signal is fired.
     * 
     * You should use the #TpSignalledMessage received from
     * tp_text_channel_dup_pending_messages() or the
     * #TpTextChannel::message-received signal.
     * @param message a #TpSignalledMessage
     * @param callback a callback to call when the message have been acked
     */
    ackMessageAsync(message: Message, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes acknowledging a message.
     * @param result a #GAsyncResult passed to the callback for tp_text_channel_ack_message_async()
     */
    ackMessageFinish(result: Gio.AsyncResult): boolean
    /**
     * Acknowledge all the messages in `messages`.
     * Once the messages have been acked, `callback` will be called.
     * You can then call tp_text_channel_ack_messages_finish() to get the
     * result of the operation.
     * 
     * You should use the #TpSignalledMessage received from
     * tp_text_channel_dup_pending_messages() or the
     * #TpTextChannel::message-received signal.
     * 
     * See tp_text_channel_ack_message_async() about acknowledging messages.
     * @param messages a #GList of #TpSignalledMessage
     * @param callback a callback to call when the message have been acked
     */
    ackMessagesAsync(messages: SignalledMessage[], callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes acknowledging a list of messages.
     * @param result a #GAsyncResult passed to the callback for tp_text_channel_ack_messages_async()
     */
    ackMessagesFinish(result: Gio.AsyncResult): boolean
    /**
     * Return a newly allocated list of unacknowledged #TpSignalledMessage
     * objects.
     * 
     * It is guaranteed that the #TpSignalledMessage:sender of each
     * #TpSignalledMessage has all of the features previously passed to
     * tp_simple_client_factory_add_contact_features() prepared.
     */
    dupPendingMessages(): SignalledMessage[]
    /**
     * Return the chat state for the given contact. If tp_proxy_is_prepared()
     * would return %FALSE for the feature %TP_TEXT_CHANNEL_FEATURE_CHAT_STATES,
     * the result will always be %TP_CHANNEL_CHAT_STATE_INACTIVE.
     * @param contact a #TpContact
     */
    getChatState(contact: Contact): ChannelChatState

    // Overloads of getChatState

    /**
     * Return the chat state for the given contact. If tp_proxy_is_prepared()
     * would return %FALSE for the feature %TP_CHANNEL_FEATURE_CHAT_STATES,
     * the result will always be %TP_CHANNEL_CHAT_STATE_INACTIVE.
     * @param contact a contact handle
     */
    getChatState(contact: Handle): ChannelChatState
    /**
     * Return the #TpTextChannel:delivery-reporting-support property
     */
    getDeliveryReportingSupport(): DeliveryReportingSupportFlags
    /**
     * Return the #TpTextChannel:message-part-support-flags property
     */
    getMessagePartSupportFlags(): MessagePartSupportFlags
    /**
     * Return the #TpTextChannel:message-types property
     */
    getMessageTypes(): ChannelTextMessageType[]
    /**
     * Return a newly allocated list of unacknowledged #TpSignalledMessage
     * objects.
     * 
     * It is guaranteed that the #TpSignalledMessage:sender of each
     * #TpSignalledMessage has all of the features previously passed to
     * tp_simple_client_factory_add_contact_features() prepared.
     */
    getPendingMessages(): SignalledMessage[]
    /**
     * Return the #TpTextChannel:sms-flash property
     */
    getSmsFlash(): boolean
    /**
     * Starts an async call to get the number of 140 octet chunks required to
     * send a #message via SMS on #self, as well as the number of remaining
     * characters available in the final chunk and, if possible,
     * an estimate of the cost.
     * 
     * Once the request has been satisfied, `callback` will be called.
     * You can then call tp_text_channel_get_sms_length_finish() to get the
     * result of the operation.
     * @param message a #TpClientMessage
     * @param callback a callback to call when the request has been satisfied
     */
    getSmsLengthAsync(message: Message, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async SMS length request.
     * @param result a #GAsyncResult
     */
    getSmsLengthFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* chunksRequired */ number, /* remainingCharacters */ number, /* estimatedCost */ number ]
    /**
     * Return the #TpTextChannel:supported-content-types property
     */
    getSupportedContentTypes(): string[]
    /**
     * Submit a message to the server for sending. Once the message has been
     * submitted to the sever, `callback` will be called. You can then call
     * tp_text_channel_send_message_finish() to get the result of the operation.
     * @param message a #TpClientMessage
     * @param flags flags affecting how the message is sent
     * @param callback a callback to call when the message has been submitted to the server
     */
    sendMessageAsync(message: Message, flags: MessageSendingFlags, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_text_channel_send_message_async().
     * 
     * `token` can be used to match any incoming delivery or failure reports
     * against the sent message. If this function returns true but the returned
     * token is %NULL, the message was sent successfully but the protocol does not
     * provide a way to identify it later.
     * @param result a #GAsyncResult passed to the callback for tp_text_channel_send_message_async()
     */
    sendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* token */ string ]
    /**
     * Set the local state on channel `self` to `state`.
     * Once the state has been set, `callback` will be called.
     * You can then call tp_text_channel_set_chat_state_finish() to get the
     * result of the operation.
     * @param state a #TpChannelChatState to set
     * @param callback a callback to call when the chat state has been set
     */
    setChatStateAsync(state: ChannelChatState, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes a call to tp_text_channel_set_chat_state_async().
     * @param result a #GAsyncResult passed to the callback for tp_text_channel_set_chat_state_async()
     */
    setChatStateFinish(result: Gio.AsyncResult): boolean
    /**
     * Check if message of type `message_type` can be sent on this channel.
     * @param messageType a #TpChannelTextMessageType
     */
    supportsMessageType(messageType: ChannelTextMessageType): boolean

    // Own signals of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    connect(sigName: "contact-chat-state-changed", callback: TextChannel.ContactChatStateChangedSignalCallback): number
    on(sigName: "contact-chat-state-changed", callback: TextChannel.ContactChatStateChangedSignalCallback): number
    once(sigName: "contact-chat-state-changed", callback: TextChannel.ContactChatStateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contact-chat-state-changed", state: number, ...args: any[]): void
    connect(sigName: "message-received", callback: TextChannel.MessageReceivedSignalCallback): number
    on(sigName: "message-received", callback: TextChannel.MessageReceivedSignalCallback): number
    once(sigName: "message-received", callback: TextChannel.MessageReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "message-received", ...args: any[]): void
    connect(sigName: "message-sent", callback: TextChannel.MessageSentSignalCallback): number
    on(sigName: "message-sent", callback: TextChannel.MessageSentSignalCallback): number
    once(sigName: "message-sent", callback: TextChannel.MessageSentSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "message-sent", flags: number, token: string, ...args: any[]): void
    connect(sigName: "pending-message-removed", callback: TextChannel.PendingMessageRemovedSignalCallback): number
    on(sigName: "pending-message-removed", callback: TextChannel.PendingMessageRemovedSignalCallback): number
    once(sigName: "pending-message-removed", callback: TextChannel.PendingMessageRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "pending-message-removed", ...args: any[]): void

    // Class property signals of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    connect(sigName: "notify::delivery-reporting-support", callback: any): number
    on(sigName: "notify::delivery-reporting-support", callback: any): number
    once(sigName: "notify::delivery-reporting-support", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::delivery-reporting-support", ...args: any[]): void
    connect(sigName: "notify::is-sms-channel", callback: any): number
    on(sigName: "notify::is-sms-channel", callback: any): number
    once(sigName: "notify::is-sms-channel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-sms-channel", ...args: any[]): void
    connect(sigName: "notify::message-part-support-flags", callback: any): number
    on(sigName: "notify::message-part-support-flags", callback: any): number
    once(sigName: "notify::message-part-support-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-part-support-flags", ...args: any[]): void
    connect(sigName: "notify::sms-flash", callback: any): number
    on(sigName: "notify::sms-flash", callback: any): number
    once(sigName: "notify::sms-flash", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sms-flash", ...args: any[]): void
    connect(sigName: "notify::supported-content-types", callback: any): number
    on(sigName: "notify::supported-content-types", callback: any): number
    once(sigName: "notify::supported-content-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::supported-content-types", ...args: any[]): void
    connect(sigName: "notify::channel-ready", callback: any): number
    on(sigName: "notify::channel-ready", callback: any): number
    once(sigName: "notify::channel-ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-ready", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::group-flags", callback: any): number
    on(sigName: "notify::group-flags", callback: any): number
    once(sigName: "notify::group-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-flags", ...args: any[]): void
    connect(sigName: "notify::group-self-contact", callback: any): number
    on(sigName: "notify::group-self-contact", callback: any): number
    once(sigName: "notify::group-self-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-contact", ...args: any[]): void
    connect(sigName: "notify::group-self-handle", callback: any): number
    on(sigName: "notify::group-self-handle", callback: any): number
    once(sigName: "notify::group-self-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-self-handle", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: any): number
    on(sigName: "notify::identifier", callback: any): number
    once(sigName: "notify::identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::initiator-contact", callback: any): number
    on(sigName: "notify::initiator-contact", callback: any): number
    once(sigName: "notify::initiator-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-contact", ...args: any[]): void
    connect(sigName: "notify::initiator-handle", callback: any): number
    on(sigName: "notify::initiator-handle", callback: any): number
    once(sigName: "notify::initiator-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-handle", ...args: any[]): void
    connect(sigName: "notify::initiator-identifier", callback: any): number
    on(sigName: "notify::initiator-identifier", callback: any): number
    once(sigName: "notify::initiator-identifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initiator-identifier", ...args: any[]): void
    connect(sigName: "notify::password-needed", callback: any): number
    on(sigName: "notify::password-needed", callback: any): number
    once(sigName: "notify::password-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-needed", ...args: any[]): void
    connect(sigName: "notify::requested", callback: any): number
    on(sigName: "notify::requested", callback: any): number
    once(sigName: "notify::requested", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested", ...args: any[]): void
    connect(sigName: "notify::target-contact", callback: any): number
    on(sigName: "notify::target-contact", callback: any): number
    once(sigName: "notify::target-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-contact", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: any): number
    on(sigName: "notify::bus-name", callback: any): number
    once(sigName: "notify::bus-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-daemon", callback: any): number
    on(sigName: "notify::dbus-daemon", callback: any): number
    once(sigName: "notify::dbus-daemon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dbus-daemon", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Data structure representing a #TpTextChannel.
 * @class 
 */
export class TextChannel extends Channel {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.TextChannel

    constructor(config?: TextChannel.ConstructorProperties) 
    /**
     * Convenient function to create a new #TpTextChannel
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    constructor(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable) 
    /**
     * Convenient function to create a new #TpTextChannel
     * @constructor 
     * @param conn a #TpConnection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param immutableProperties   the immutable properties of the channel,  as signalled by the NewChannel D-Bus signal or returned by the  CreateChannel and EnsureChannel D-Bus methods: a mapping from  strings (D-Bus interface name + "." + property name) to #GValue instances
     */
    static new(conn: Connection, objectPath: string, immutableProperties: GLib.HashTable): TextChannel

    // Overloads of new

    /**
     * <!-- -->
     * @constructor 
     * @param conn a connection; may not be %NULL
     * @param objectPath the object path of the channel; may not be %NULL
     * @param optionalChannelType the channel type if already known, or %NULL if not
     * @param optionalHandleType the handle type if already known, or  %TP_UNKNOWN_HANDLE_TYPE if not
     * @param optionalHandle the handle if already known, or 0 if not  (if `optional_handle_type` is %TP_UNKNOWN_HANDLE_TYPE or  %TP_HANDLE_TYPE_NONE, this must be 0)
     */
    static new(conn: Connection, objectPath: string, optionalChannelType: string, optionalHandleType: HandleType, optionalHandle: Handle): Channel
    _init(config?: TextChannel.ConstructorProperties): void
    static getFeatureQuarkChatStates(): GLib.Quark
    static getFeatureQuarkIncomingMessages(): GLib.Quark
    static getFeatureQuarkSms(): GLib.Quark
}

export interface AccountChannelRequestClass {
}

/**
 * The class of a #TpAccountChannelRequest.
 * @record 
 */
export abstract class AccountChannelRequestClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequestClass

    static name: string
}

export interface AccountChannelRequestPrivate {
}

export class AccountChannelRequestPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountChannelRequestPrivate

    static name: string
}

export interface AccountClass {
}

/**
 * The class of a #TpAccount.
 * @record 
 */
export abstract class AccountClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountClass

    static name: string
}

export interface AccountClassPrivate {
}

export class AccountClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountClassPrivate

    static name: string
}

export interface AccountManagerClass {
}

/**
 * The class of a #TpAccount.
 * @record 
 */
export abstract class AccountManagerClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountManagerClass

    static name: string
}

export interface AccountManagerClassPrivate {
}

export class AccountManagerClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountManagerClassPrivate

    static name: string
}

export interface AccountManagerPrivate {
}

export class AccountManagerPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountManagerPrivate

    static name: string
}

export interface AccountPrivate {
}

export class AccountPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountPrivate

    static name: string
}

export interface AccountRequestClass {
}

/**
 * The class of a #TpAccountRequest.
 * @record 
 */
export abstract class AccountRequestClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountRequestClass

    static name: string
}

export interface AccountRequestPrivate {
}

export class AccountRequestPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AccountRequestPrivate

    static name: string
}

export interface AddDispatchOperationContextClass {
}

/**
 * The class of a #TpAddDispatchOperationContext.
 * @record 
 */
export abstract class AddDispatchOperationContextClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContextClass

    static name: string
}

export interface AddDispatchOperationContextPrivate {
}

export class AddDispatchOperationContextPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AddDispatchOperationContextPrivate

    static name: string
}

export interface AutomaticClientFactoryClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.AutomaticClientFactoryClass

    /**
     * the parent class
     * @field 
     */
    parentClass: SimpleClientFactoryClass
}

/**
 * The class of a #TpAutomaticClientFactory.
 * @record 
 */
export abstract class AutomaticClientFactoryClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AutomaticClientFactoryClass

    static name: string
}

export interface AutomaticProxyFactoryClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.AutomaticProxyFactoryClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class of a #TpAutomaticProxyFactory.
 * @record 
 */
export abstract class AutomaticProxyFactoryClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AutomaticProxyFactoryClass

    static name: string
}

export interface AvatarRequirements {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.AvatarRequirements

    /**
     * An array of supported MIME types (e.g. "image/jpeg")
     *  Clients MAY assume that the first type in this array is preferred
     * @field 
     */
    supportedMimeTypes: string[]
    /**
     * The minimum width in pixels of an avatar, which MAY be 0
     * @field 
     */
    minimumWidth: number
    /**
     * The minimum height in pixels of an avatar, which MAY be 0
     * @field 
     */
    minimumHeight: number
    /**
     * The recommended width in pixels of an avatar, or 0 if
     *  there is no preferred width.
     * @field 
     */
    recommendedWidth: number
    /**
     * The recommended height in pixels of an avatar, or 0 if
     *  there is no preferred height
     * @field 
     */
    recommendedHeight: number
    /**
     * The maximum width in pixels of an avatar on this protocol,
     *  or 0 if there is no limit.
     * @field 
     */
    maximumWidth: number
    /**
     * The maximum height in pixels of an avatar, or 0 if there is
     *  no limit.
     * @field 
     */
    maximumHeight: number
    /**
     * he maximum size in bytes of an avatar, or 0 if there is no
     *  limit.
     * @field 
     */
    maximumBytes: number
}

/**
 * The requirements for setting an avatar on a particular protocol.
 * @record 
 */
export class AvatarRequirements {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.AvatarRequirements

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.AvatarRequirements

    /**
     * <!--Returns: says it all-->
     * @constructor 
     * @param supportedMimeTypes An array of supported MIME types (e.g. "image/jpeg")  Clients MAY assume that the first type in this array is preferred
     * @param minimumWidth The minimum width in pixels of an avatar, which MAY be 0
     * @param minimumHeight The minimum height in pixels of an avatar, which MAY be 0
     * @param recommendedWidth The recommended width in pixels of an avatar, or 0 if  there is no preferred width.
     * @param recommendedHeight The recommended height in pixels of an avatar, or 0 if  there is no preferred height
     * @param maximumWidth The maximum width in pixels of an avatar on this protocol,  or 0 if there is no limit.
     * @param maximumHeight The maximum height in pixels of an avatar, or 0 if there is  no limit.
     * @param maximumBytes he maximum size in bytes of an avatar, or 0 if there is no  limit.
     */
    constructor(supportedMimeTypes: string[], minimumWidth: number, minimumHeight: number, recommendedWidth: number, recommendedHeight: number, maximumWidth: number, maximumHeight: number, maximumBytes: number) 
    /**
     * <!--Returns: says it all-->
     * @constructor 
     * @param supportedMimeTypes An array of supported MIME types (e.g. "image/jpeg")  Clients MAY assume that the first type in this array is preferred
     * @param minimumWidth The minimum width in pixels of an avatar, which MAY be 0
     * @param minimumHeight The minimum height in pixels of an avatar, which MAY be 0
     * @param recommendedWidth The recommended width in pixels of an avatar, or 0 if  there is no preferred width.
     * @param recommendedHeight The recommended height in pixels of an avatar, or 0 if  there is no preferred height
     * @param maximumWidth The maximum width in pixels of an avatar on this protocol,  or 0 if there is no limit.
     * @param maximumHeight The maximum height in pixels of an avatar, or 0 if there is  no limit.
     * @param maximumBytes he maximum size in bytes of an avatar, or 0 if there is no  limit.
     */
    static new(supportedMimeTypes: string[], minimumWidth: number, minimumHeight: number, recommendedWidth: number, recommendedHeight: number, maximumWidth: number, maximumHeight: number, maximumBytes: number): AvatarRequirements
}

export interface BaseClientClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.BaseClientClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * the function called to observe newly-created channels
     *  matching this client's observer filter (since 0.11.13)
     * @field 
     */
    observeChannels: BaseClientClassObserveChannelsImpl
    /**
     * the function called to request user approval of
     *  unrequested (incoming) channels matching this client's approver filter
     *  (since 0.11.13)
     * @field 
     */
    addDispatchOperation: BaseClientClassAddDispatchOperationImpl
    /**
     * the function called to handle channels matching this
     *  client's handler filter (since 0.11.13)
     * @field 
     */
    handleChannels: BaseClientClassHandleChannelsImpl
}

/**
 * The class of a #TpBaseClient.
 * 
 * The virtual methods `observe_channels,` `add_dispatch_operation` and
 * `handle_channels` can be also implemented by calling
 * tp_base_client_implement_observe_channels(),
 * tp_base_client_implement_add_dispatch_operation() and
 * tp_base_client_implement_handle_channels(). This is compatible with
 * telepathy-glib versions older than 0.11.13.
 * @record 
 */
export abstract class BaseClientClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseClientClass

    static name: string
}

export interface BaseClientClassPrivate {
}

export class BaseClientClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseClientClassPrivate

    static name: string
}

export interface BaseClientPrivate {
}

export class BaseClientPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseClientPrivate

    static name: string
}

export interface BaseConnectionClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.BaseConnectionClass

    /**
     * The superclass' structure
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * Construct a unique name for this connection
     *  (for example using the protocol's format for usernames). If %NULL (the
     *  default), a unique name will be generated. Subclasses should usually
     *  override this to get more obvious names, to aid debugging and prevent
     *  multiple connections to the same account.
     * @field 
     */
    getUniqueConnectionName: BaseConnectionGetUniqueConnectionNameImpl
    /**
     * If set by subclasses, will be called just after the state
     *  changes to CONNECTING. May be %NULL if nothing special needs to happen.
     * @field 
     */
    connecting: BaseConnectionProc
    /**
     * If set by subclasses, will be called just after the state
     *  changes to CONNECTED. May be %NULL if nothing special needs to happen.
     * @field 
     */
    connected: BaseConnectionProc
    /**
     * If set by subclasses, will be called just after the state
     *  changes to DISCONNECTED. May be %NULL if nothing special needs to happen.
     * @field 
     */
    disconnected: BaseConnectionProc
    /**
     * Called after disconnected() is called, to clean up the
     *  connection. Must start the shutdown process for the underlying
     *  network connection, and arrange for tp_base_connection_finish_shutdown()
     *  to be called after the underlying connection has been closed. May not
     *  be left as %NULL.
     * @field 
     */
    shutDown: BaseConnectionProc
    /**
     * Asynchronously start connecting - called to implement
     *  the Connect D-Bus method. See #TpBaseConnectionStartConnectingImpl for
     *  details. May not be left as %NULL.
     * @field 
     */
    startConnecting: BaseConnectionStartConnectingImpl
}

/**
 * The class of a #TpBaseConnection. Many members are virtual methods etc.
 * to be filled in in the subclass' class_init function.
 * @record 
 */
export abstract class BaseConnectionClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseConnectionClass

    static name: string
}

export interface BaseConnectionPrivate {
}

export class BaseConnectionPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BaseConnectionPrivate

    static name: string
}

export interface BasicProxyFactoryClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.BasicProxyFactoryClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class of a #TpBasicProxyFactory.
 * @record 
 */
export abstract class BasicProxyFactoryClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.BasicProxyFactoryClass

    static name: string
}

export interface CallChannelClass {
}

/**
 * The class of a #TpCallChannel.
 * @record 
 */
export abstract class CallChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallChannelClass

    static name: string
}

export interface CallChannelPrivate {
}

export class CallChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallChannelPrivate

    static name: string
}

export interface CallContentClass {
}

/**
 * The class of a #TpCallContent.
 * @record 
 */
export abstract class CallContentClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallContentClass

    static name: string
}

export interface CallContentPrivate {
}

export class CallContentPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallContentPrivate

    static name: string
}

export interface CallStateReason {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.CallStateReason

    /**
     * the contact responsible for the change, or 0 if no contact was
     *  responsible
     * @field 
     */
    actor: Handle
    /**
     * the reason for the change. If
     *  #TP_CALL_STATE_CHANGE_REASON_USER_REQUESTED then the `actor` member will
     *  dictate whether it was the local user or a remote contact responsible
     * @field 
     */
    reason: CallStateChangeReason
    /**
     * A specific reason for the change, which may be a D-Bus error in
     *  the Telepathy namespace, a D-Bus error in any other namespace
     *  (for implementation-specific errors), or the empty string to indicate that
     *  the state change was not an error
     * @field 
     */
    dbusReason: string
    /**
     * A developer readable debug message giving the reason for the state
     *  change.
     * @field 
     */
    message: string
}

/**
 * Data structure representing the reason for a call state change.
 * @record 
 */
export class CallStateReason {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallStateReason

    static name: string
}

export interface CallStreamClass {
}

/**
 * The class of a #TpCallStream.
 * @record 
 */
export abstract class CallStreamClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallStreamClass

    static name: string
}

export interface CallStreamPrivate {
}

export class CallStreamPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CallStreamPrivate

    static name: string
}

export interface CapabilitiesClass {
}

export abstract class CapabilitiesClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CapabilitiesClass

    static name: string
}

export interface CapabilitiesPrivate {
}

export class CapabilitiesPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.CapabilitiesPrivate

    static name: string
}

export interface ChannelClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ChannelClass

    /**
     * parent class
     * @field 
     */
    parentClass: ProxyClass
}

/**
 * The class of a #TpChannel. In addition to `parent_class` there are four
 * pointers reserved for possible future use.
 * 
 * (Changed in 0.7.12: the layout of the structure is visible, allowing
 * subclassing.)
 * @record 
 */
export abstract class ChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelClass

    static name: string
}

export interface ChannelDispatchOperationClass {
}

/**
 * The class of a #TpChannelDispatchOperation.
 * @record 
 */
export abstract class ChannelDispatchOperationClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperationClass

    static name: string
}

export interface ChannelDispatchOperationClassPrivate {
}

export class ChannelDispatchOperationClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperationClassPrivate

    static name: string
}

export interface ChannelDispatchOperationPrivate {
}

export class ChannelDispatchOperationPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatchOperationPrivate

    static name: string
}

export interface ChannelDispatcherClass {
}

/**
 * The class of a #TpChannelDispatcher.
 * @record 
 */
export abstract class ChannelDispatcherClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcherClass

    static name: string
}

export interface ChannelDispatcherClassPrivate {
}

export class ChannelDispatcherClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcherClassPrivate

    static name: string
}

export interface ChannelDispatcherPrivate {
}

export class ChannelDispatcherPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelDispatcherPrivate

    static name: string
}

export interface ChannelManagerIter {
}

/**
 * An iterator over the #TpChannelManager objects known to a #TpBaseConnection.
 * It has no public fields.
 * 
 * Use tp_base_connection_channel_manager_iter_init() to start iteration and
 * tp_base_connection_channel_manager_iter_next() to continue.
 * @record 
 */
export class ChannelManagerIter {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelManagerIter

    static name: string
}

export interface ChannelPrivate {
}

export class ChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelPrivate

    static name: string
}

export interface ChannelRequestClass {
}

/**
 * The class of a #TpChannelRequest.
 * @record 
 */
export abstract class ChannelRequestClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequestClass

    static name: string
}

export interface ChannelRequestClassPrivate {
}

export class ChannelRequestClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequestClassPrivate

    static name: string
}

export interface ChannelRequestPrivate {
}

export class ChannelRequestPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ChannelRequestPrivate

    static name: string
}

export interface ClientChannelFactoryInterface {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactoryInterface

    /**
     * the parent
     * @field 
     */
    parent: GObject.TypeInterface
}

/**
 * Interface for a channel factory
 * @record 
 */
export abstract class ClientChannelFactoryInterface {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ClientChannelFactoryInterface

    static name: string
}

export interface ClientMessageClass {
}

export abstract class ClientMessageClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ClientMessageClass

    static name: string
}

export interface ConnectionClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ConnectionClass

    /**
     * the parent class
     * @field 
     */
    parentClass: ProxyClass
}

/**
 * The class of a #TpConnection. In addition to `parent_class` there are four
 * pointers reserved for possible future use.
 * 
 * (Changed in 0.7.12: the layout of the structure is visible, allowing
 * subclassing.)
 * @record 
 */
export abstract class ConnectionClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionClass

    static name: string
}

export interface ConnectionManagerClass {
}

/**
 * The class of a #TpConnectionManager.
 * @record 
 */
export abstract class ConnectionManagerClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerClass

    static name: string
}

export interface ConnectionManagerParam {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerParam

    /**
     * <!-- Returns: says it all -->
     */
    copy(): ConnectionManagerParam
    /**
     * Get the default value for this parameter.
     * 
     * Use g_variant_get_type() to check that the type is what you expect.
     * For instance, a string parameter should have type
     * %G_VARIANT_TYPE_STRING.
     */
    dupDefaultVariant(): GLib.Variant
    /**
     * <!-- -->
     */
    dupVariantType(): GLib.VariantType
    /**
     * Frees `param,` which was copied with tp_connection_manager_param_copy().
     */
    free(): void
    /**
     * <!-- -->
     */
    getDbusSignature(): string
    /**
     * Get the default value for this parameter, if there is one. If %FALSE is
     * returned, `value` is left uninitialized.
     * @param value pointer to an unset (all zeroes) #GValue into which the default's         type and value are written
     */
    getDefault(value: any): boolean
    /**
     * <!-- -->
     */
    getName(): string
    /**
     * <!-- -->
     */
    isDbusProperty(): boolean
    /**
     * <!-- -->
     */
    isRequired(): boolean
    /**
     * <!-- -->
     */
    isRequiredForRegistration(): boolean
    /**
     * <!-- -->
     */
    isSecret(): boolean
}

/**
 * Structure representing a connection manager parameter.
 * 
 * Since 0.19.1, accessing the fields of this struct is deprecated,
 * and they are no longer documented here.
 * Use the accessors tp_connection_manager_param_get_name(),
 * tp_connection_manager_param_get_dbus_signature(),
 * tp_connection_manager_param_is_required(),
 * tp_connection_manager_param_is_required_for_registration(),
 * tp_connection_manager_param_is_secret(),
 * tp_connection_manager_param_is_dbus_property(),
 * tp_connection_manager_param_get_default(),
 * tp_connection_manager_param_dup_default_variant() instead.
 * @record 
 */
export class ConnectionManagerParam {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerParam

    static name: string
}

export interface ConnectionManagerPrivate {
}

export class ConnectionManagerPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerPrivate

    static name: string
}

export interface ConnectionManagerProtocol {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerProtocol

    /**
     * The name of this connection manager
     * @field 
     */
    name: string
    /**
     * Array of #TpConnectionManagerParam structures, terminated by
     *  a structure whose `name` is %NULL
     * @field 
     */
    params: ConnectionManagerParam

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerProtocol

    /**
     * Return whether a new account can be registered on this protocol, by setting
     * the special "register" parameter to %TRUE.
     */
    canRegister(): boolean
    /**
     * <!-- Returns: says it all -->
     */
    copy(): ConnectionManagerProtocol
    /**
     * Returns a list of parameter names supported by this connection manager
     * for this protocol.
     * 
     * The result is copied and must be freed by the caller with g_strfreev().
     */
    dupParamNames(): string[]
    /**
     * Frees `proto,` which was copied with tp_connection_manager_protocol_copy().
     */
    free(): void
    /**
     * <!-- no more to say -->
     * @param param a parameter name
     */
    getParam(param: string): ConnectionManagerParam
    /**
     * <!-- no more to say -->
     * @param param a parameter name
     */
    hasParam(param: string): boolean
}

/**
 * Structure representing a protocol supported by a connection manager.
 * Note that the size of this structure may change, so its size must not be
 * relied on.
 * @record 
 */
export class ConnectionManagerProtocol {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionManagerProtocol

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ConnectionPrivate

    static name: string
}

export interface ContactClass {
}

export abstract class ContactClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactClass

    static name: string
}

export interface ContactInfoField {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ContactInfoField

    /**
     * The name of the field; this is the lowercased name of a vCard
     *  field. For example, a field representing a contact's address would be named
     *  "adr".
     * @field 
     */
    fieldName: string
    /**
     * A list of vCard type parameters applicable to this field,
     *  with their values. The type parameter names, and any values that are
     *  case-insensitive in vCard, MUST be in lower case. For example, a contact's
     *  preferred home address would have parameters 'type=home' and 'type=pref'.
     * @field 
     */
    parameters: string[]
    /**
     * For unstructured vCard fields (such as 'fn', a formatted name
     *  field), a single-element array containing the field's value. For structured
     *  fields (such as 'adr', an address field), an array corresponding to the
     *  semicolon-separated elements of the field (with empty strings for empty
     *  elements).
     * @field 
     */
    fieldValue: string[]
}

/**
 * A structure representing an information about a contact. Similar to a vCard
 * field.
 * @record 
 */
export class ContactInfoField {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactInfoField

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.ContactInfoField

    /**
     * <!--Returns: says it all-->
     * @constructor 
     * @param fieldName The name of the field; this is the lowercased name of a vCard  field. For example, a field representing a contact's address would be named  "adr".
     * @param parameters A list of vCard type parameters applicable to this field,  with their values. The type parameter names, and any values that are  case-insensitive in vCard, MUST be in lower case. For example, a contact's  preferred home address would have parameters 'type=home' and 'type=pref'.
     * @param fieldValue For unstructured vCard fields (such as 'fn', a formatted name  field), a single-element array containing the field's value. For structured  fields (such as 'adr', an address field), an array corresponding to the  semicolon-separated elements of the field (with empty strings for empty  elements).
     */
    constructor(fieldName: string, parameters: string[], fieldValue: string[]) 
    /**
     * <!--Returns: says it all-->
     * @constructor 
     * @param fieldName The name of the field; this is the lowercased name of a vCard  field. For example, a field representing a contact's address would be named  "adr".
     * @param parameters A list of vCard type parameters applicable to this field,  with their values. The type parameter names, and any values that are  case-insensitive in vCard, MUST be in lower case. For example, a contact's  preferred home address would have parameters 'type=home' and 'type=pref'.
     * @param fieldValue For unstructured vCard fields (such as 'fn', a formatted name  field), a single-element array containing the field's value. For structured  fields (such as 'adr', an address field), an array corresponding to the  semicolon-separated elements of the field (with empty strings for empty  elements).
     */
    static new(fieldName: string, parameters: string[], fieldValue: string[]): ContactInfoField
}

export interface ContactInfoFieldSpec {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ContactInfoFieldSpec

    /**
     * The name of the field; this is the lowercased name of a vCard
     *  field. For example, a field representing a contact's address would be named
     *  "adr".
     * @field 
     */
    name: string
    /**
     * The set of vCard type parameters which may be set on this field.
     *  If this list is empty and the #TP_CONTACT_INFO_FIELD_FLAG_PARAMETERS_EXACT
     *  flag is not set, any vCard type parameters may be used. The type parameter
     *  names, and any values that are case-insensitive in vCard, MUST be in lower
     *  case. For example, a contact's preferred home address would have parameters
     *  'type=home' and 'type=pref'.
     * @field 
     */
    parameters: string[]
    /**
     * Flags describing the behaviour of this field.
     * @field 
     */
    flags: ContactInfoFieldFlags
    /**
     * Maximum number of instances of this field which may be set.
     *  #G_MAXUINT32 is used to indicate that there is no limit.
     * @field 
     */
    max: number
}

/**
 * A struct describing a vCard field.
 * @record 
 */
export class ContactInfoFieldSpec {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactInfoFieldSpec

    static name: string
}

export interface ContactPrivate {
}

export class ContactPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactPrivate

    static name: string
}

export interface ContactSearchClass {
}

/**
 * The class of a #TpContactSearch.
 * @record 
 */
export abstract class ContactSearchClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchClass

    static name: string
}

export interface ContactSearchPrivate {
}

export class ContactSearchPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchPrivate

    static name: string
}

export interface ContactSearchResultClass {
}

/**
 * The class of a #TpContactSearchResult.
 * @record 
 */
export abstract class ContactSearchResultClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResultClass

    static name: string
}

export interface ContactSearchResultPrivate {
}

export class ContactSearchResultPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactSearchResultPrivate

    static name: string
}

export interface ContactsMixin {
}

/**
 * Structure to be included in the instance structure of objects that
 * use this mixin. Initialize it with tp_contacts_mixin_init().
 * 
 * There are no public fields.
 * @record 
 */
export class ContactsMixin {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactsMixin

    static name: string
}

export interface ContactsMixinClass {
}

/**
 * Structure to be included in the class structure of objects that
 * use this mixin. Initialize it with tp_contacts_mixin_class_init().
 * 
 * There are no public fields.
 * @record 
 */
export class ContactsMixinClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactsMixinClass

    static name: string
}

export interface ContactsMixinClassPrivate {
}

export class ContactsMixinClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactsMixinClassPrivate

    static name: string
}

export interface ContactsMixinPrivate {
}

export class ContactsMixinPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ContactsMixinPrivate

    static name: string
}

export interface DBusDaemonClass {
}

/**
 * The class of #TpDBusDaemon.
 * @record 
 */
export abstract class DBusDaemonClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusDaemonClass

    static name: string
}

export interface DBusDaemonPrivate {
}

export class DBusDaemonPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusDaemonPrivate

    static name: string
}

export interface DBusPropertiesMixinClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinClass

    /**
     * An array of interface implementations, terminated by one with
     *  `name` equal to %NULL
     * @field 
     */
    interfaces: DBusPropertiesMixinIfaceImpl
}

/**
 * Structure representing all of a class's property implementations. One of
 * these structures may be placed in the layout of an object class structure.
 * 
 * In addition to the documented fields, there are 7 pointers reserved for
 * future use, which must be initialized to %NULL.
 * @record 
 */
export class DBusPropertiesMixinClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinClass

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinClass

    /**
     * Initialize the class `cls` to use the D-Bus Properties mixin.
     * The given struct member, of size sizeof(TpDBusPropertiesMixinClass),
     * will be used to store property implementation information.
     * 
     * Each property and each interface must have been declared as a member of
     * a GInterface implemented by `cls,` using
     * tp_svc_interface_set_dbus_properties_info().
     * 
     * Before calling this function, the array `interfaces` must have been
     * placed in the #TpDBusPropertiesMixinClass structure; if it would be empty,
     * it may instead be %NULL.
     * 
     * This function should be called from the class_init callback in such a way
     * that it will only be called once, even if the class is subclassed.
     * 
     * Changed in 0.7.9: TpDBusPropertiesMixinClass::interfaces may now be %NULL,
     * which means that only interfaces whose properties are set up using
     * tp_dbus_properties_mixin_implement_interface() will be used.
     * 
     * Changed in 0.7.15: `offset` may now be 0, in which case the
     * #TpDBusPropertiesMixinClass can be omitted from `cls`.  It is treated as if
     * it were present, but with all fields (including
     * TpDBusPropertiesMixinClass::interfaces) being %NULL, so only interfaces
     * whose properties are set using
     * tp_dbus_properties_mixin_implement_interface() will be used.
     * @param cls a subclass of #GObjectClass
     * @param offset the offset within `cls` of a TpDBusPropertiesMixinClass structure
     */
    static init(cls: GObject.ObjectClass, offset: number): void
}

export interface DBusPropertiesMixinIfaceImpl {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinIfaceImpl

    /**
     * The name of the interface
     * @field 
     */
    name: string
    /**
     * A callback to get the current value of the property, to which
     *  the `getter_data` from each property implementation will be passed
     * @field 
     */
    getter: DBusPropertiesMixinGetter
    /**
     * A callback to set a new value for the property, to which
     *  the `setter_data` from each property implementation will be passed
     * @field 
     */
    setter: DBusPropertiesMixinSetter
    /**
     * An array of property implementations, terminated by one with
     *  `name` equal to %NULL
     * @field 
     */
    props: DBusPropertiesMixinPropImpl
}

/**
 * Structure representing an implementation of an interface's properties.
 * 
 * In addition to the documented fields, there are four pointers which must
 * be initialized to %NULL.
 * 
 * This structure must either be statically allocated, or duplicated and never
 * freed, so it always remains valid.
 * @record 
 */
export class DBusPropertiesMixinIfaceImpl {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinIfaceImpl

    static name: string
}

export interface DBusPropertiesMixinIfaceInfo {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinIfaceInfo

    /**
     * Quark representing the interface's name
     * @field 
     */
    dbusInterface: GLib.Quark
    /**
     * Array of property descriptions, terminated by one with
     *  `name` == %NULL
     * @field 
     */
    props: DBusPropertiesMixinPropInfo
}

/**
 * Semi-abstract description of an interface. Each service GInterface that
 * has properties must have one of these attached to it via
 * tp_svc_interface_set_dbus_properties_info() in its base_init function;
 * service GInterfaces that do not have properties may have one of these
 * with no properties.
 * 
 * This structure must either be statically allocated, or duplicated and never
 * freed, so it always remains valid.
 * 
 * In addition to the documented members, there are two private pointers
 * for future expansion, which must always be initialized to %NULL.
 * @record 
 */
export class DBusPropertiesMixinIfaceInfo {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinIfaceInfo

    static name: string
}

export interface DBusPropertiesMixinPropImpl {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinPropImpl

    /**
     * The name of the property as it appears on D-Bus
     * @field 
     */
    name: string
    /**
     * Arbitrary user-supplied data for the getter function
     * @field 
     */
    getterData: object
    /**
     * Arbitrary user-supplied data for the setter function
     * @field 
     */
    setterData: object
}

/**
 * Structure representing an implementation of a property.
 * 
 * In addition to the documented fields, there are three pointers which must
 * be initialized to %NULL.
 * 
 * This structure must either be statically allocated, or duplicated and never
 * freed, so it always remains valid.
 * @record 
 */
export class DBusPropertiesMixinPropImpl {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinPropImpl

    static name: string
}

export interface DBusPropertiesMixinPropInfo {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinPropInfo

    /**
     * Quark representing the property's name
     * @field 
     */
    name: GLib.Quark
    /**
     * Flags representing read/write access to the property
     * @field 
     */
    flags: DBusPropertiesMixinFlags
    /**
     * The D-Bus signature of the property
     * @field 
     */
    dbusSignature: string
    /**
     * The GType used in a GValue to implement the property
     * @field 
     */
    type: GObject.GType
}

/**
 * Semi-abstract description of a property, as attached to a service
 * GInterface. This structure must either be statically allocated, or
 * duplicated and never freed, so it always remains valid.
 * 
 * In addition to the documented members, there are two private pointers
 * for future expansion, which must always be initialized to %NULL.
 * @record 
 */
export class DBusPropertiesMixinPropInfo {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusPropertiesMixinPropInfo

    static name: string
}

export interface DBusTubeChannelClass {
}

/**
 * The class of a #TpDBusTubeChannel.
 * @record 
 */
export abstract class DBusTubeChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannelClass

    static name: string
}

export interface DBusTubeChannelPrivate {
}

export class DBusTubeChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DBusTubeChannelPrivate

    static name: string
}

export interface DebugClientClass {
}

/**
 * The class of a #TpDebugClient.
 * @record 
 */
export abstract class DebugClientClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugClientClass

    static name: string
}

export interface DebugClientPrivate {
}

export class DebugClientPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugClientPrivate

    static name: string
}

export interface DebugMessageClass {
}

/**
 * The class of a #TpDebugMessage.
 * @record 
 */
export abstract class DebugMessageClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugMessageClass

    static name: string
}

export interface DebugMessagePriv {
}

export class DebugMessagePriv {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.DebugMessagePriv

    static name: string
}

export interface FileTransferChannelClass {
}

/**
 * The class of a #TpFileTransferChannel.
 * @record 
 */
export abstract class FileTransferChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannelClass

    static name: string
}

export interface FileTransferChannelPrivate {
}

export class FileTransferChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.FileTransferChannelPrivate

    static name: string
}

export interface GroupMixin {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.GroupMixin

    /**
     * The connection's contact handle repository
     * @field 
     */
    handleRepo: HandleRepoIface
    /**
     * The local user's handle within this group, or 0 if none.
     *  Set using tp_group_mixin_init() and tp_group_mixin_change_self_handle().
     * @field 
     */
    selfHandle: Handle
    /**
     * This group's flags. Set using tp_group_mixin_change_flags();
     *  defaults to 0.
     * @field 
     */
    groupFlags: ChannelGroupFlags
    /**
     * The members of the group. Alter using
     *  tp_group_mixin_change_members().
     * @field 
     */
    members: HandleSet
    /**
     * Members awaiting the local user's approval to join the
     *  group. Alter using tp_group_mixin_change_members().
     * @field 
     */
    localPending: HandleSet
    /**
     * Members awaiting remote (e.g. remote user or server)
     *  approval to join the group. Alter using tp_group_mixin_change_members().
     * @field 
     */
    remotePending: HandleSet
    /**
     * Pointer to opaque private data
     * @field 
     */
    priv: GroupMixinPrivate
}

/**
 * Structure representing the group mixin as used in a particular class.
 * To be placed in the implementation's instance structure.
 * 
 * All fields should be considered read-only.
 * @record 
 */
export class GroupMixin {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.GroupMixin

    static name: string
}

export interface GroupMixinClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.GroupMixinClass

    /**
     * The add-member function that was passed to
     *  tp_group_mixin_class_init()
     * @field 
     */
    addMember: GroupMixinAddMemberFunc
    /**
     * The remove-member function that was passed to
     *  tp_group_mixin_class_init()
     * @field 
     */
    removeMember: GroupMixinRemMemberFunc
    /**
     * Pointer to opaque private data
     * @field 
     */
    priv: GroupMixinClassPrivate
}

/**
 * Structure representing the group mixin as used in a particular class.
 * To be placed in the implementation's class structure.
 * 
 * Initialize this with tp_group_mixin_class_init().
 * 
 * All fields should be considered read-only.
 * @record 
 */
export class GroupMixinClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.GroupMixinClass

    static name: string
}

export interface GroupMixinClassPrivate {
}

export class GroupMixinClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.GroupMixinClassPrivate

    static name: string
}

export interface GroupMixinPrivate {
}

export class GroupMixinPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.GroupMixinPrivate

    static name: string
}

export interface HandleChannelsContextClass {
}

/**
 * The class of a #TpHandleChannelsContext.
 * @record 
 */
export abstract class HandleChannelsContextClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContextClass

    static name: string
}

export interface HandleChannelsContextPrivate {
}

export class HandleChannelsContextPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleChannelsContextPrivate

    static name: string
}

export interface HandleRepoIfaceClass {
}

/**
 * The class of a handle repository interface. The structure layout is
 * only available within telepathy-glib, for the handle repository
 * implementations' benefit.
 * @record 
 */
export class HandleRepoIfaceClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleRepoIfaceClass

    static name: string
}

export interface HandleSet {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.HandleSet

    /**
     * Format a #TpHandleSet for debug output.
     */
    dump(): string
    /**
     * Returns a dictionary mapping each handle in `self` to the corresponding
     * identifier, as if retrieved by calling tp_handle_inspect() on each handle.
     * The type of the returned value is described as
     * <code>Handle_Identifier_Map</code> in the Telepathy specification.
     */
    toIdentifierMap(): GLib.HashTable
}

/**
 * A set of handles. This is similar to a #TpIntset (and implemented using
 * one), but adding a handle to the set also references it.
 * @record 
 */
export class HandleSet {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.HandleSet

    static name: string
}

export interface Intset {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.Intset

    /**
     * Add an integer into a TpIntset.
     * @param element integer to add
     */
    add(element: number): void
    /**
     * Unset every integer in the set.
     */
    clear(): void
    /**
     * <!--Returns: says it all-->
     */
    copy(): Intset
    /**
     * Free all memory used by the set.
     */
    destroy(): void
    /**
     * <!--Returns: says it all-->
     * @param right The right operand
     */
    difference(right: Intset): Intset
    /**
     * Remove each integer in `other` from `self,` analogous to the bitwise
     * operation self &= (~other).
     * @param other members to remove
     */
    differenceUpdate(other: Intset): void
    /**
     * <!--Returns: says it all-->
     */
    dump(): string
    /**
     * Call `func(`element, `userdata)` for each element of `set,` in order.
     * @param func `TpIntFunc` to use to iterate the set
     */
    foreach(func: IntFunc): void
    /**
     * <!--Returns: says it all-->
     * @param right The right operand
     */
    intersection(right: Intset): Intset
    /**
     * Return the same thing as <code>(tp_intset_size (set) == 0)</code>,
     * but calculated more efficiently.
     */
    isEmpty(): boolean
    /**
     * <!--Returns: says it all-->
     * @param right A set of integers
     */
    isEqual(right: Intset): boolean
    /**
     * Tests if `element` is a member of `set`
     * @param element integer to test
     */
    isMember(element: number): boolean
    /**
     * Remove an integer from a TpIntset
     * @param element integer to add
     */
    remove(element: number): boolean
    /**
     * <!--Returns: says it all-->
     */
    size(): number
    /**
     * <!--Returns: says it all-->
     * @param right The right operand
     */
    symmetricDifference(right: Intset): Intset
    /**
     * <!--Returns: says it all-->
     */
    toArray(): number[]
    /**
     * <!--Returns: says it all-->
     * @param right The right operand
     */
    union(right: Intset): Intset
    /**
     * Add each integer in `other` to `self,` analogous to the bitwise operation
     * self |= other.
     * @param other members to add
     */
    unionUpdate(other: Intset): void
}

/**
 * Opaque type representing a set of unsigned integers.
 * 
 * Before 0.11.16, this type was called <type>TpIntSet</type>, which is
 * now a backwards compatibility typedef.
 * @record 
 */
export class Intset {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.Intset

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.Intset

    /**
     * Allocate a new integer set.
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new integer set.
     * @constructor 
     */
    static new(): Intset
    /**
     * Allocate a new integer set containing the given integer.
     * @constructor 
     * @param element integer to add to a new set
     */
    static newContaining(element: number): Intset
    /**
     * Allocate a new integer set.
     * @constructor 
     * @param size ignored (it was previously 1 more than the largest integer you  expect to store)
     */
    static sizedNew(size: number): Intset
    /**
     * <!--Returns: says it all-->
     * @param array An array of guint
     */
    static fromArray(array: number[]): Intset
}

export interface IntsetFastIter {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.IntsetFastIter

    /**
     * Initialize `iter` to iterate over `set` in arbitrary order. `iter` will become
     * invalid if `set` is modified.
     * @param set a set
     */
    init(set: Intset): void
    /**
     * Advances `iter` and retrieves the integer it now points to. Iteration
     * is not necessarily in numerical order.
     * @param output a location to store a new integer, in arbitrary order
     */
    next(output: number): boolean
}

/**
 * An opaque structure representing iteration in undefined order over a set of
 * integers. Must be initialized with tp_intset_fast_iter_init().
 * 
 * Before 0.11.16, this type was called <type>TpIntSetFastIter</type>,
 * which is now a backwards compatibility typedef.
 * 
 * Usage is similar to #GHashTableIter:
 * 
 * <informalexample><programlisting>
 * TpIntsetFastIter iter;
 * guint element;
 * 
 * tp_intset_fast_iter_init (&amp;iter, intset);
 * 
 * while (tp_intset_fast_iter_next (&amp;iter, &amp;element))
 * {
 *   printf ("%u is in the intset\n", element);
 * }
 * </programlisting></informalexample>
 * @record 
 */
export class IntsetFastIter {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.IntsetFastIter

    static name: string
}

export interface IntsetIter {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.IntsetIter

    /**
     * The set iterated over.
     * @field 
     */
    set: Intset
    /**
     * Must be (guint)(-1) before iteration starts. Set to the next
     *  element in the set by tp_intset_iter_next(); undefined after
     *  tp_intset_iter_next() returns %FALSE.
     * @field 
     */
    element: number

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.IntsetIter

    /**
     * Reset the iterator `iter` to the beginning and make it iterate over `set`.
     * @param set An integer set to be used by that iterator
     */
    init(set: Intset): void
    /**
     * If there are integers in (`iter->`set) higher than (`iter->`element), set
     * (iter->element) to the next one and return %TRUE. Otherwise return %FALSE.
     * 
     * Usage:
     * 
     * <informalexample><programlisting>
     * TpIntsetIter iter = TP_INTSET_INIT (intset);
     * while (tp_intset_iter_next (&amp;iter))
     * {
     *   printf ("%u is in the intset\n", iter.element);
     * }
     * </programlisting></informalexample>
     * 
     * Since 0.11.6, consider using #TpIntsetFastIter if iteration in
     * numerical order is not required.
     */
    next(): boolean
    /**
     * Reset the iterator `iter` to the beginning. It must already be associated
     * with a set.
     */
    reset(): void
}

/**
 * A structure representing iteration over a set of integers. Must be
 * initialized with either TP_INTSET_ITER_INIT() or tp_intset_iter_init().
 * 
 * Since 0.11.6, consider using #TpIntsetFastIter if iteration in
 * numerical order is not required.
 * 
 * Before 0.11.16, this type was called <type>TpIntSetIter</type>,
 * which is now a backwards compatibility typedef.
 * @record 
 */
export class IntsetIter {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.IntsetIter

    static name: string
}

export interface MessageClass {
}

export abstract class MessageClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.MessageClass

    static name: string
}

export interface ObserveChannelsContextClass {
}

/**
 * The class of a #TpObserveChannelsContext.
 * @record 
 */
export abstract class ObserveChannelsContextClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContextClass

    static name: string
}

export interface ObserveChannelsContextPrivate {
}

export class ObserveChannelsContextPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ObserveChannelsContextPrivate

    static name: string
}

export interface PresenceMixin {
}

/**
 * Structure to be included in the instance structure of objects that
 * use this mixin. Initialize it with tp_presence_mixin_init().
 * 
 * There are no public fields.
 * @record 
 */
export class PresenceMixin {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceMixin

    static name: string
}

export interface PresenceMixinClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.PresenceMixinClass

    /**
     * The status-available function that was passed to
     *  tp_presence_mixin_class_init()
     * @field 
     */
    statusAvailable: PresenceMixinStatusAvailableFunc
    /**
     * The set-own-status function that was passed to
     *  tp_presence_mixin_class_init()
     * @field 
     */
    setOwnStatus: PresenceMixinSetOwnStatusFunc
    /**
     * The presence statuses array that was passed to
     *  tp_presence_mixin_class_init()
     * @field 
     */
    statuses: PresenceStatusSpec
    /**
     * The callback used to discover the
     *  the limit for status messages length, if any. Since: 0.14.5
     * @field 
     */
    getMaximumStatusMessageLength: PresenceMixinGetMaximumStatusMessageLengthFunc
}

/**
 * Structure to be included in the class structure of objects that
 * use this mixin. Initialize it with tp_presence_mixin_class_init().
 * 
 * If the protocol imposes a limit on the length of status messages, one should
 * implement `get_maximum_status_message_length`. If this callback is not
 * implemented, it is assumed that there is no limit. The callback function
 * should be set after calling tp_presence_mixin_class_init(), like so:
 * 
 * |[
 * TpPresenceMixinClass *mixin_class;
 * 
 * tp_presence_mixin_class_init ((GObjectClass *) klass,
 *     G_STRUCT_OFFSET (SomeObjectClass, presence_mixin));
 * mixin_class = TP_PRESENCE_MIXIN_CLASS (klass);
 * mixin_class->get_maximum_status_message_length =
 *     some_object_get_maximum_status_message_length;
 * ```
 * 
 * 
 * All other fields should be considered read-only.
 * @record 
 */
export class PresenceMixinClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceMixinClass

    static name: string
}

export interface PresenceMixinClassPrivate {
}

export class PresenceMixinClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceMixinClassPrivate

    static name: string
}

export interface PresenceMixinPrivate {
}

export class PresenceMixinPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceMixinPrivate

    static name: string
}

export interface PresenceStatus {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.PresenceStatus

    /**
     * Index of the presence status in the provided supported presence
     *  statuses array
     * @field 
     */
    index: number
    /**
     * A GHashTable mapping of string identifiers to GValues
     *  of the optional status arguments, if any. If there are no optional
     *  arguments, this pointer may be NULL.
     * @field 
     */
    optionalArguments: GLib.HashTable
}

/**
 * Structure representing a presence status.
 * 
 * In addition to the fields documented here, there are two gpointer fields
 * which must currently be %NULL. A meaning may be defined for these in a
 * future version of telepathy-glib.
 * 
 * In modern Telepathy connection managers, the only optional
 * argument should be a %G_TYPE_STRING named "message", on statuses
 * that have an optional human-readable message. All other optional arguments
 * are deprecated.
 * @record 
 */
export class PresenceStatus {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceStatus

    static name: string
}

export interface PresenceStatusOptionalArgumentSpec {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusOptionalArgumentSpec

    /**
     * Name of the argument as passed over D-Bus
     * @field 
     */
    name: string
    /**
     * D-Bus type signature of the argument
     * @field 
     */
    dtype: string
}

/**
 * Structure specifying a supported optional argument for a presence status.
 * 
 * In addition to the fields documented here, there are two gpointer fields
 * which must currently be %NULL. A meaning may be defined for these in a
 * future version of telepathy-glib.
 * @record 
 */
export class PresenceStatusOptionalArgumentSpec {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusOptionalArgumentSpec

    static name: string
}

export interface PresenceStatusSpec {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusSpec

    /**
     * String identifier of the presence status
     * @field 
     */
    name: string
    /**
     * A type value, as specified by #TpConnectionPresenceType
     * @field 
     */
    presenceType: ConnectionPresenceType
    /**
     * Indicates if this status may be set on yourself
     * @field 
     */
    self: boolean
    /**
     * An array of #TpPresenceStatusOptionalArgumentSpec
     *  structures representing the optional arguments for this status, terminated
     *  by a NULL name. If there are no optional arguments for a status, this can
     *  be NULL. In modern Telepathy connection managers, the only optional
     *  argument should be a string (type "s") named "message" on statuses
     *  that have an optional human-readable message. All other optional arguments
     *  are deprecated.
     * @field 
     */
    optionalArguments: PresenceStatusOptionalArgumentSpec

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusSpec

    /**
     * <!-- -->
     */
    canSetOnSelf(): boolean
    /**
     * Copy a presence status specification.
     * 
     * If `self` has optional arguments other than a string named "message",
     * they are not copied. Optional arguments with other names or types
     * are deprecated.
     */
    copy(): PresenceStatusSpec
    /**
     * Free a presence status specification produced by
     * tp_presence_status_spec_new() or tp_presence_status_spec_copy().
     */
    free(): void
    /**
     * <!-- -->
     */
    getName(): string
    /**
     * Return the category into which this presence type falls. For instance,
     * for XMPP's "" (do not disturb) status, this would return
     * %TP_CONNECTION_PRESENCE_TYPE_BUSY.
     */
    getPresenceType(): ConnectionPresenceType
    /**
     * <!-- -->
     */
    hasMessage(): boolean
}

/**
 * Structure specifying a supported presence status.
 * 
 * In addition to the fields documented here, there are two gpointer fields
 * which must currently be %NULL. A meaning may be defined for these in a
 * future version of telepathy-glib.
 * @record 
 */
export class PresenceStatusSpec {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusSpec

    static name: string

    // Constructors of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusSpec

    /**
     * <!-- -->
     * @constructor 
     * @param name the name of the new presence status
     * @param type the category into which this presence status falls
     * @param canSetOnSelf %TRUE if the user can set this presence status  on themselves
     * @param hasMessage %TRUE if this presence status is accompanied by an  optional human-readable message
     */
    constructor(name: string, type: ConnectionPresenceType, canSetOnSelf: boolean, hasMessage: boolean) 
    /**
     * <!-- -->
     * @constructor 
     * @param name the name of the new presence status
     * @param type the category into which this presence status falls
     * @param canSetOnSelf %TRUE if the user can set this presence status  on themselves
     * @param hasMessage %TRUE if this presence status is accompanied by an  optional human-readable message
     */
    static new(name: string, type: ConnectionPresenceType, canSetOnSelf: boolean, hasMessage: boolean): PresenceStatusSpec
}

export interface PresenceStatusSpecPrivate {
}

export class PresenceStatusSpecPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.PresenceStatusSpecPrivate

    static name: string
}

export interface ProtocolClass {
}

/**
 * The class of a #TpProtocol.
 * @record 
 */
export abstract class ProtocolClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProtocolClass

    static name: string
}

export interface ProtocolClassPrivate {
}

export class ProtocolClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProtocolClassPrivate

    static name: string
}

export interface ProtocolPrivate {
}

export class ProtocolPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProtocolPrivate

    static name: string
}

export interface ProxyClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ProxyClass

    /**
     * The parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * If set non-zero by a subclass, #TpProxy will
     *    automatically add this interface in its constructor
     * @field 
     */
    interface: GLib.Quark
    /**
     * If set %TRUE by a subclass, the #TpProxy
     *    constructor will fail if a well-known bus name is given
     * @field 
     */
    mustHaveUniqueName: number
}

/**
 * The class of a #TpProxy. The struct fields not documented here are reserved.
 * @record 
 */
export abstract class ProxyClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxyClass

    static name: string
}

export interface ProxyFeature {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.ProxyFeature

    /**
     * a #GQuark representing the name of the feature
     * @field 
     */
    name: GLib.Quark
    /**
     * if %TRUE, every non-core feature of the class depends on this one,
     * and every feature (core or not) in subclasses depends on this one
     * @field 
     */
    core: boolean
    /**
     * called when the feature has to be prepared
     * @field 
     */
    prepareAsync: ProxyPrepareAsync
    /**
     * only relevant for
     * TpConnection sub-classes; same as `prepare_async` but for
     * features wanting to have a chance to prepare themself before the
     * TpConnection object announce its %TP_CONNECTION_STATUS_CONNECTED status
     * @field 
     */
    prepareBeforeSignallingConnectedAsync: ProxyPrepareAsync
    /**
     * an array of #GQuark representing interfaces which have
     * to be implemented on the object in order to be able to prepare the feature
     * @field 
     */
    interfacesNeeded: GLib.Quark
    /**
     * an array of #GQuark representing other features which have to
     * be prepared before trying to prepare this feature
     * @field 
     */
    dependsOn: GLib.Quark
    /**
     * If %TRUE, allow retrying preparation of this feature even if it
     * failed once already; if %FALSE any attempt of preparing the feature after
     * the preparation already failed once will immediately fail with re-calling
     * `prepare_async`
     * @field 
     */
    canRetry: boolean
}

/**
 * Structure representing a feature.
 * @record 
 */
export class ProxyFeature {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxyFeature

    static name: string
}

export interface ProxyFeaturePrivate {
}

export class ProxyFeaturePrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxyFeaturePrivate

    static name: string
}

export interface ProxyPendingCall {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ProxyPendingCall

    cancel(): void
}

export class ProxyPendingCall {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxyPendingCall

    static name: string
}

export interface ProxyPrivate {
}

export class ProxyPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxyPrivate

    static name: string
}

export interface ProxySignalConnection {

    // Owm methods of TelepathyGLib-0.12.TelepathyGLib.ProxySignalConnection

    disconnect(): void
}

export class ProxySignalConnection {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.ProxySignalConnection

    static name: string
}

export interface RoomInfoClass {
}

/**
 * The class of a #TpRoomInfo.
 * @record 
 */
export abstract class RoomInfoClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomInfoClass

    static name: string
}

export interface RoomInfoPriv {
}

export class RoomInfoPriv {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomInfoPriv

    static name: string
}

export interface RoomListClass {
}

/**
 * The class of a #TpRoomList.
 * @record 
 */
export abstract class RoomListClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomListClass

    static name: string
}

export interface RoomListPrivate {
}

export class RoomListPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.RoomListPrivate

    static name: string
}

export interface SignalledMessageClass {
}

export abstract class SignalledMessageClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SignalledMessageClass

    static name: string
}

export interface SimpleApproverClass {
}

/**
 * The class of a #TpSimpleApprover.
 * @record 
 */
export abstract class SimpleApproverClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleApproverClass

    static name: string
}

export interface SimpleApproverPrivate {
}

export class SimpleApproverPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleApproverPrivate

    static name: string
}

export interface SimpleClientFactoryClass {

    // Own fields of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactoryClass

    /**
     * the parent
     * @field 
     */
    parentClass: GObject.ObjectClass
    dupAccountFeatures: (self: SimpleClientFactory, account: Account) => GLib.Quark[]
    dupConnectionFeatures: (self: SimpleClientFactory, connection: Connection) => GLib.Quark[]
    dupChannelFeatures: (self: SimpleClientFactory, channel: Channel) => GLib.Quark[]
    dupContactFeatures: (self: SimpleClientFactory, connection: Connection) => ContactFeature[]
}

/**
 * The class structure for #TpSimpleClientFactory.
 * 
 * #TpSimpleClientFactory maintains a cache of previously-constructed proxy
 * objects, so the implementations of `create_account,`
 * `create_connection,` `create_channel,` and `create_contact` may assume that a
 * new object should be created when they are called. The default
 * implementations create unadorned instances of the relevant classes;
 * subclasses of the factory may choose to create more interesting proxy
 * subclasses.
 * 
 * The default implementation of `dup_channel_features` returns
 * #TP_CHANNEL_FEATURE_CORE, plus all features passed to
 * tp_simple_client_factory_add_channel_features() by the application.
 * Subclasses may override this method to prepare more interesting features
 * from subclasses of #TpChannel, for instance. The default implementations of
 * the other <function>dup_x_features</function> methods behave similarly.
 * @record 
 */
export abstract class SimpleClientFactoryClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactoryClass

    static name: string
}

export interface SimpleClientFactoryPrivate {
}

export class SimpleClientFactoryPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleClientFactoryPrivate

    static name: string
}

export interface SimpleHandlerClass {
}

/**
 * The class of a #TpSimpleHandler.
 * @record 
 */
export abstract class SimpleHandlerClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleHandlerClass

    static name: string
}

export interface SimpleHandlerPrivate {
}

export class SimpleHandlerPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleHandlerPrivate

    static name: string
}

export interface SimpleObserverClass {
}

/**
 * The class of a #TpSimpleObserver.
 * @record 
 */
export abstract class SimpleObserverClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleObserverClass

    static name: string
}

export interface SimpleObserverPrivate {
}

export class SimpleObserverPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.SimpleObserverPrivate

    static name: string
}

export interface StreamTubeChannelClass {
}

/**
 * The class of a #TpStreamTubeChannel.
 * @record 
 */
export abstract class StreamTubeChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannelClass

    static name: string
}

export interface StreamTubeChannelPrivate {
}

export class StreamTubeChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeChannelPrivate

    static name: string
}

export interface StreamTubeConnectionClass {
}

/**
 * The class of a #TpStreamTubeConnection.
 * @record 
 */
export abstract class StreamTubeConnectionClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnectionClass

    static name: string
}

export interface StreamTubeConnectionPrivate {
}

export class StreamTubeConnectionPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.StreamTubeConnectionPrivate

    static name: string
}

export interface TLSCertificateClass {
}

/**
 * The class of a #TpTLSCertificate.
 * @record 
 */
export abstract class TLSCertificateClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateClass

    static name: string
}

export interface TLSCertificateClassPrivate {
}

export class TLSCertificateClassPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateClassPrivate

    static name: string
}

export interface TLSCertificatePrivate {
}

export class TLSCertificatePrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificatePrivate

    static name: string
}

export interface TLSCertificateRejectionClass {
}

/**
 * The class of a #TpTLSCertificateRejection.
 * @record 
 */
export abstract class TLSCertificateRejectionClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejectionClass

    static name: string
}

export interface TLSCertificateRejectionPriv {
}

export class TLSCertificateRejectionPriv {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TLSCertificateRejectionPriv

    static name: string
}

export interface TextChannelClass {
}

/**
 * The class of a #TpTextChannel.
 * @record 
 */
export abstract class TextChannelClass {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TextChannelClass

    static name: string
}

export interface TextChannelPrivate {
}

export class TextChannelPrivate {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.TextChannelPrivate

    static name: string
}

export interface WeakRef {
}

/**
 * A simple wrapper for a weak reference to a #GObject, suitable for use in
 * asynchronous calls which should only affect the object if it hasn't already
 * been freed.
 * 
 * As well as wrapping a weak reference to an object, this structure can
 * contain an extra pointer to arbitrary data. This is useful for asynchronous
 * calls which act on an object and some second piece of data, which are quite
 * common in practice.
 * 
 * If more than one piece of auxiliary data is required, the `user_data`
 * argument to the constructor can be a struct or a #GValueArray.
 * @record 
 */
export class WeakRef {

    // Own properties of TelepathyGLib-0.12.TelepathyGLib.WeakRef

    static name: string
}

    export type Handle = number