
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Mbim-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Access type preference.
 */
export enum AccessMediaType {
    /**
     * None, or unknown.
     */
    UNKNOWN,
    /**
     * 3GPP only.
     */
    TODO_3GPP,
    /**
     * 3GPP Preferred.
     */
    TODO_3GPP_PREFERRED,
}
/**
 * Activation Command.
 */
export enum ActivationCommand {
    /**
     * Deactivate.
     */
    DEACTIVATE,
    /**
     * Activate.
     */
    ACTIVATE,
}
/**
 * Activation State.
 */
export enum ActivationState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Activated.
     */
    ACTIVATED,
    /**
     * Activating.
     */
    ACTIVATING,
    /**
     * Deactivated.
     */
    DEACTIVATED,
    /**
     * Deactivating.
     */
    DEACTIVATING,
}
/**
 * Provider PLMN mode.
 */
export enum AtdsProviderPlmnMode {
    /**
     * GSM.
     */
    GSM,
    /**
     * UTRAN (UMTS).
     */
    UTRAN,
    /**
     * LTE.
     */
    LTE,
}
/**
 * RAT mode preferences.
 */
export enum AtdsRatMode {
    /**
     * Automatic.
     */
    AUTOMATIC,
    /**
     * 2G only.
     */
    TODO_2G_ONLY,
    /**
     * 3G only.
     */
    TODO_3G_ONLY,
    /**
     * 4G only.
     */
    TODO_4G_ONLY,
}
/**
 * Auth Protocol.
 */
export enum AuthProtocol {
    /**
     * None.
     */
    NONE,
    /**
     * Pap.
     */
    PAP,
    /**
     * Chap.
     */
    CHAP,
    /**
     * V2.
     */
    MSCHAPV2,
}
/**
 * MBIM commands in the %MBIM_SERVICE_ATDS service.
 */
export enum CidAtds {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Radio signal information.
     */
    SIGNAL,
    /**
     * Cell location information.
     */
    LOCATION,
    /**
     * Operator selection.
     */
    OPERATORS,
    /**
     * Radio Access Technology selection.
     */
    RAT,
    /**
     * Registration state.
     */
    REGISTER_STATE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_AUTH service.
 */
export enum CidAuth {
    /**
     * Unknow command
     */
    UNKNOWN,
    /**
     * AKA.
     */
    AKA,
    /**
     * AKAP.
     */
    AKAP,
    /**
     * SIM.
     */
    SIM,
}
/**
 * MBIM commands in the %MBIM_SERVICE_BASIC_CONNECT service.
 */
export enum CidBasicConnect {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Device capabilities.
     */
    DEVICE_CAPS,
    /**
     * Subscriber ready status.
     */
    SUBSCRIBER_READY_STATUS,
    /**
     * Radio state.
     */
    RADIO_STATE,
    /**
     * PIN.
     */
    PIN,
    /**
     * PIN list.
     */
    PIN_LIST,
    /**
     * Home provider.
     */
    HOME_PROVIDER,
    /**
     * Preferred providers.
     */
    PREFERRED_PROVIDERS,
    /**
     * Visible providers.
     */
    VISIBLE_PROVIDERS,
    /**
     * Register state.
     */
    REGISTER_STATE,
    /**
     * Packet service.
     */
    PACKET_SERVICE,
    /**
     * Signal state.
     */
    SIGNAL_STATE,
    /**
     * Connect.
     */
    CONNECT,
    /**
     * Provisioned contexts.
     */
    PROVISIONED_CONTEXTS,
    /**
     * Service activation.
     */
    SERVICE_ACTIVATION,
    /**
     * IP configuration.
     */
    IP_CONFIGURATION,
    /**
     * Device services.
     */
    DEVICE_SERVICES,
    /**
     * Device service subscribe list. Since 1.8.
     */
    DEVICE_SERVICE_SUBSCRIBE_LIST,
    /**
     * Packet statistics.
     */
    PACKET_STATISTICS,
    /**
     * Network idle hint.
     */
    NETWORK_IDLE_HINT,
    /**
     * Emergency mode.
     */
    EMERGENCY_MODE,
    /**
     * IP packet filters.
     */
    IP_PACKET_FILTERS,
    /**
     * Multicarrier providers.
     */
    MULTICARRIER_PROVIDERS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_DSS service.
 */
export enum CidDss {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Connect.
     */
    CONNECT,
}
/**
 * MBIM commands in the %MBIM_SERVICE_INTEL_FIRMWARE_UPDATE service.
 */
export enum CidIntelFirmwareUpdate {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Reboot modem for firmware update.
     */
    MODEM_REBOOT,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_BASIC_CONNECT_EXTENSIONS service.
 */
export enum CidMsBasicConnectExtensions {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Provisioned contexts (v2).
     */
    PROVISIONED_CONTEXTS,
    /**
     * Network denylist. Since 1.28.
     */
    NETWORK_DENYLIST,
    /**
     * LTE attach configuration.
     */
    LTE_ATTACH_CONFIGURATION,
    /**
     * LTE attach status information. Since 1.26.
     */
    LTE_ATTACH_INFO,
    /**
     * System capabilities.
     */
    SYS_CAPS,
    /**
     * Device capabilities (v2).
     */
    DEVICE_CAPS,
    /**
     * Device slot mappings.
     */
    DEVICE_SLOT_MAPPINGS,
    /**
     * Slot info status.
     */
    SLOT_INFO_STATUS,
    /**
     * Protocol configuration operations (PCO).
     */
    PCO,
    /**
     * Device reset.
     */
    DEVICE_RESET,
    /**
     * Base stations info. Since 1.28.
     */
    BASE_STATIONS_INFO,
    /**
     * Location info status. Since 1.28.
     */
    LOCATION_INFO_STATUS,
    /**
     * Protocol version query and report, defined in MBIMEx v2.0. Since 1.28.
     */
    VERSION,
    /**
     * Modem configuration status, defined in MBIMEx v3.0. Since 1.28.
     */
    MODEM_CONFIGURATION,
    /**
     * Registration parameters, defined in MBIMEx v3.0. Since 1.28.
     */
    REGISTRATION_PARAMETERS,
    /**
     * Protocol wake reason query and report, defined in MBIMEx v3.0. Since 1.28
     */
    WAKE_REASON,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_FIRMWARE_ID service.
 */
export enum CidMsFirmwareId {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Get Firmware ID.
     */
    GET,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_HOST_SHUTDOWN service.
 */
export enum CidMsHostShutdown {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Notify that the host is shutting down.
     */
    NOTIFY,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_SAR service.
 */
export enum CidMsSar {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * SAR backoff mode and level configuration.
     */
    CONFIG,
    /**
     * Transmission status indication setup.
     */
    TRANSMISSION_STATUS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_UICC_LOW_LEVEL_ACCESS service.
 */
export enum CidMsUiccLowLevelAccess {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * ATR.
     */
    ATR,
    /**
     * Open Channel.
     */
    OPEN_CHANNEL,
    /**
     * Close Channel.
     */
    CLOSE_CHANNEL,
    /**
     * Apdu.
     */
    APDU,
    /**
     * Terminal capabilities.
     */
    TERMINAL_CAPABILITY,
    /**
     * Reset.
     */
    RESET,
}
/**
 * MBIM commands in the %MBIM_SERVICE_PHONEBOOK service.
 */
export enum CidPhonebook {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Configuration.
     */
    CONFIGURATION,
    /**
     * Read.
     */
    READ,
    /**
     * Delete.
     */
    DELETE,
    /**
     * Write.
     */
    WRITE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_PROXY_CONTROL service.
 */
export enum CidProxyControl {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Configuration.
     */
    CONFIGURATION,
    /**
     * MBIM and MBIMEx Version reporting.
     */
    VERSION,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QDU service.
 */
export enum CidQdu {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Update session command.
     */
    UPDATE_SESSION,
    /**
     * Open QDU file for firmware update.
     */
    FILE_OPEN,
    /**
     * Write QDU file for firmware update.
     */
    FILE_WRITE,
    /**
     * Reboot to Emergency Download (Quectel specific). Since 1.28.
     */
    QUECTEL_REBOOT,
    /**
     * Read firmware version (Quectel specific). Since 1.28.
     */
    QUECTEL_READ_VERSION,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QMI service.
 */
export enum CidQmi {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Send QMI request and receive QMI response.
     */
    MSG,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QUECTEL service.
 */
export enum CidQuectel {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Radio state.
     */
    RADIO_STATE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_SMS service.
 */
export enum CidSms {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * SMS configuration.
     */
    CONFIGURATION,
    /**
     * Read.
     */
    READ,
    /**
     * Send.
     */
    SEND,
    /**
     * Delete.
     */
    DELETE,
    /**
     * Store message status.
     */
    MESSAGE_STORE_STATUS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_STK service.
 */
export enum CidStk {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * PAC.
     */
    PAC,
    /**
     * Terminal response.
     */
    TERMINAL_RESPONSE,
    /**
     * Envelope.
     */
    ENVELOPE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_USSD service.
 */
export enum CidUssd {
    /**
     * Unknown command. Since 1.4.
     */
    USSD_UNKNOWN,
    /**
     * USSD operation.
     */
    USSD,
}
/**
 * Compression.
 */
export enum Compression {
    /**
     * None.
     */
    NONE,
    /**
     * Enable.
     */
    ENABLE,
}
/**
 * Context IP Type.
 */
export enum ContextIpType {
    /**
     * It is up to the function to decide, the host does not care.
     */
    DEFAULT,
    /**
     * IPv4 context.
     */
    IPV4,
    /**
     * IPv6 context.
     */
    IPV6,
    /**
     * The context is IPv4, IPv6 or dualstack IPv4v6.
     */
    IPV4V6,
    /**
     * Both an IPv4 and an IPv6 context.
     */
    IPV4_AND_IPV6,
}
/**
 * Media type, specifying whether the modem is used for cellular or
 * iWLAN (Wi-Fi offload).
 */
export enum ContextMediaType {
    /**
     * Context allowed to be used only wen registered over cellular.
     */
    CELLULAR_ONLY,
    /**
     * Context allowed to be used only when registered over Wi-Fi.
     */
    WIFI_ONLY,
    /**
     * Context allowed to be used when registered either over cellular or Wi-Fi.
     */
    ALL,
}
/**
 * Command to run when updating context configuration.
 */
export enum ContextOperation {
    /**
     * Adds or replaces an existing context.
     */
    DEFAULT,
    /**
     * Delete an existing context.
     */
    DELETE,
    /**
     * Restore preconfigured contexts for the provider ID of the current SIM card.
     */
    RESTORE_FACTORY,
}
/**
 * Type of roaming control.
 */
export enum ContextRoamingControl {
    /**
     * Context allowed to be used in home network.
     */
    HOME_ONLY,
    /**
     * Context allowed to be used in partner network.
     */
    PARTNER_ONLY,
    /**
     * Context allowed to be used in non-partner network.
     */
    NON_PARTNER_ONLY,
    /**
     * Context allowed to be used in home and partner networks.
     */
    HOME_AND_PARTNER,
    /**
     * Context allowed to be used in home and non-partner networks.
     */
    HOME_AND_NON_PARTNER,
    /**
     * Context allowed to be used in partner and non-partner networks.
     */
    PARTNER_AND_NON_PARTNER,
    /**
     * Context allowed to be used in any roaming condition.
     */
    ALLOW_ALL,
}
/**
 * Source of context creation.
 */
export enum ContextSource {
    /**
     * Context created by enterprise IT.
     */
    ADMIN,
    /**
     * Context created by user.
     */
    USER,
    /**
     * Context created by operator.
     */
    OPERATOR,
    /**
     * Context created by modem manufacturer.
     */
    MODEM,
    /**
     * Context created by OS APN database.
     */
    DEVICE,
}
/**
 * Status of the context, specifying whether it's enabled or disabled.
 */
export enum ContextState {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
}
/**
 * Enumeration of the generic MBIM context types.
 */
export enum ContextType {
    /**
     * Invalid context type.
     */
    INVALID,
    /**
     * Context not yet provisioned.
     */
    NONE,
    /**
     * Context representing a connection to the
     *  Internet.
     */
    INTERNET,
    /**
     * Context representing a connection to a a private
     *  network (e.g. VPN to a corporate network).
     */
    VPN,
    /**
     * Context representing a connection to a VoIP service.
     */
    VOICE,
    /**
     * Context representing a connection to a video
     *  sharing service.
     */
    VIDEO_SHARE,
    /**
     * Context representing a connection to an
     *  OTA (over-the-air) activation site.
     */
    PURCHASE,
    /**
     * Context representing a connection to IMS.
     */
    IMS,
    /**
     * Context representing a connection to MMS.
     */
    MMS,
    /**
     * Context representing a connection which is
     *  terminated at the device. No IP traffic sent over the air.
     */
    LOCAL,
    /**
     * Context used for administrative purposes, such as
     *  device management (MS MBIMEx). Since 1.28.
     */
    ADMIN,
    /**
     * Context used for certain applications allowed by
     *  mobile operators (MS MBIMEx). Since 1.28.
     */
    APP,
    /**
     * Context used for XCAP provisioning on IMS services
     *  (MS MBIMEx). Since 1.28.
     */
    XCAP,
    /**
     * Context used for mobile hotspot tethering
     *  (MS MBIMEx). Since 1.28.
     */
    TETHERING,
    /**
     * Context used for IMS emergency calling
     *  (MS MBIMEx). Since 1.28.
     */
    EMERGENCY_CALLING,
}
/**
 * Common errors that may be reported by libmbim-glib.
 */
export enum CoreError {
    /**
     * Operation failed.
     */
    FAILED,
    /**
     * Operation cannot be executed in the current state.
     */
    WRONGSTATE,
    /**
     * Operation timed out.
     */
    TIMEOUT,
    /**
     * Invalid arguments given.
     */
    INVALIDARGS,
    /**
     * MBIM message is invalid.
     */
    INVALIDMESSAGE,
    /**
     * Not supported.
     */
    UNSUPPORTED,
    /**
     * Operation aborted.
     */
    ABORTED,
    /**
     * State is unknown. Since 1.16.
     */
    UNKNOWNSTATE,
}
/**
 * Hint regarding the activation of the default PDU session.
 */
export enum DefaultPduActivationHint {
    /**
     * Default PDU session activation is unlikely to happen soon.
     */
    UNLIKELY,
    /**
     * Default PDU session activation is likely to happen soon.
     */
    LIKELY,
}
/**
 * Type of device.
 */
export enum DeviceType {
    /**
     * Unknown type.
     */
    UNKNOWN,
    /**
     * Device is embedded in the system.
     */
    EMBEDDED,
    /**
     * Device is removable.
     */
    REMOVABLE,
    /**
     * Device is remote.
     */
    REMOTE,
}
/**
 * DRX cycle settings.
 */
export enum DrxCycle {
    /**
     * DRX cycle not specified.
     */
    NOT_SPECIFIED,
    /**
     * DRX cycle setting not supported.
     */
    NOT_SUPPORTED,
    /**
     * DRX cycle T=32.
     */
    TODO_32,
    /**
     * DRX cycle T=64.
     */
    TODO_64,
    /**
     * DRX cycle T=128.
     */
    TODO_128,
    /**
     * DRX cycle T=256.
     */
    TODO_256,
}
/**
 * Action performed in the link state.
 */
export enum DssLinkState {
    /**
     * Deactivate.
     */
    DEACTIVATE,
    /**
     * Activate.
     */
    ACTIVATE,
}
/**
 * Emergency mode state.
 */
export enum EmergencyModeState {
    /**
     * Off.
     */
    OFF,
    /**
     * On.
     */
    ON,
}
/**
 * Local Area Data Network (LADN) information state.
 */
export enum LadnInfo {
    /**
     * Information not needed.
     */
    NOT_NEEDED,
    /**
     * Information requested.
     */
    REQUESTED,
}
/**
 * Command to run when updating LTE attach configuration.
 */
export enum LteAttachContextOperation {
    /**
     * Overwrite existing contexts.
     */
    DEFAULT,
    /**
     * Restore factory preconfigured contexts.
     */
    RESTORE_FACTORY,
}
/**
 * Type of roaming control.
 */
export enum LteAttachContextRoamingControl {
    /**
     * Context allowed to be used on home network.
     */
    HOME,
    /**
     * Context allowed to be used on partner network.
     */
    PARTNER,
    /**
     * Context allowed to be used on non-partner network.
     */
    NON_PARTNER,
}
/**
 * LTE attach state.
 */
export enum LteAttachState {
    /**
     * Detached.
     */
    DETACHED,
    /**
     * Attached.
     */
    ATTACHED,
}
/**
 * Type of command message.
 */
export enum MessageCommandType {
    /**
     * Unknown type.
     */
    UNKNOWN,
    /**
     * Query command.
     */
    QUERY,
    /**
     * Set command.
     */
    SET,
}
/**
 * Type of MBIM messages.
 */
export enum MessageType {
    /**
     * Invalid MBIM message.
     */
    INVALID,
    /**
     * Initialization request.
     */
    OPEN,
    /**
     * Close request.
     */
    CLOSE,
    /**
     * Command request.
     */
    COMMAND,
    /**
     * Host-reported error in the communication.
     */
    HOST_ERROR,
    /**
     * Response to initialization request.
     */
    OPEN_DONE,
    /**
     * Response to close request.
     */
    CLOSE_DONE,
    /**
     * Response to command request.
     */
    COMMAND_DONE,
    /**
     * Function-reported error in the communication.
     */
    FUNCTION_ERROR,
    /**
     * Unsolicited message from the function.
     */
    INDICATE_STATUS,
}
/**
 * Mobile Initiated Connection Only (MICO) Mode state.
 * 
 * The `MBIM_MICO_MODE_DEFAULT` value should only be used in set operations, it
 * should never be returned by the module upon a query.
 */
export enum MicoMode {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
    /**
     * Device does not support MICO mode.
     */
    UNSUPPORTED,
    /**
     * Default.
     */
    DEFAULT,
}
/**
 * Modem configuration status.
 */
export enum ModemConfigurationStatus {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * SIM is ready and configuration started.
     */
    STARTED,
    /**
     * SIM is ready and configuration completed.
     */
    COMPLETED,
}
/**
 * Enable or disable network idle hint.
 */
export enum NetworkIdleHintState {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
}
/**
 * Network errors.
 */
export enum NwError {
    /**
     * No error. Since 1.28.
     */
    NONE,
    /**
     * IMSI unknown in the HLR.
     */
    IMSI_UNKNOWN_IN_HLR,
    /**
     * Illegal MS. Since 1.10.
     */
    ILLEGAL_MS,
    /**
     * IMSI unknown in the VLR.
     */
    IMSI_UNKNOWN_IN_VLR,
    /**
     * IMEI not accepted. Since 1.10.
     */
    IMEI_NOT_ACCEPTED,
    /**
     * Illegal ME.
     */
    ILLEGAL_ME,
    /**
     * GPRS not allowed.
     */
    GPRS_NOT_ALLOWED,
    /**
     * GPRS and non-GPRS not allowed.
     */
    GPRS_AND_NON_GPRS_NOT_ALLOWED,
    /**
     * MS identity cannot be derived by the network. Since 1.10.
     */
    MS_IDENTITY_NOT_DERIVED_BY_NETWORK,
    /**
     * Implicitly detached. Since 1.10.
     */
    IMPLICITLY_DETACHED,
    /**
     * PLMN not allowed.
     */
    PLMN_NOT_ALLOWED,
    /**
     * Location area not allowed.
     */
    LOCATION_AREA_NOT_ALLOWED,
    /**
     * Roaming not allowed in the location area.
     */
    ROAMING_NOT_ALLOWED_IN_LOCATION_AREA,
    /**
     * GPRS not allowed in PLMN.
     */
    GPRS_NOT_ALLOWED_IN_PLMN,
    /**
     * No cells in location area.
     */
    NO_CELLS_IN_LOCATION_AREA,
    /**
     * MSC temporarily not reachable. Since 1.10.
     */
    MSC_TEMPORARILY_NOT_REACHABLE,
    /**
     * Network failure.
     */
    NETWORK_FAILURE,
    /**
     * MAC failure. Since 1.10.
     */
    MAC_FAILURE,
    /**
     * Synch failure. Since 1.10.
     */
    SYNCH_FAILURE,
    /**
     * Congestion.
     */
    CONGESTION,
    /**
     * GSM authentication unacceptable. Since 1.10.
     */
    GSM_AUTHENTICATION_UNACCEPTABLE,
    /**
     * Not authorized for this CSG. Since 1.10.
     */
    NOT_AUTHORIZED_FOR_CSG,
    /**
     * Insufficient resources. Since 1.18.
     */
    INSUFFICIENT_RESOURCES,
    /**
     * Missing or unknown access point name. Since 1.10.
     */
    MISSING_OR_UNKNOWN_APN,
    /**
     * Unknown PDP address or PDP type. Since 1.18.
     */
    UNKNOWN_PDP_ADDRESS_OR_TYPE,
    /**
     * User authentication failed. Since 1.18.
     */
    USER_AUTHENTICATION_FAILED,
    /**
     * Activation rejected by GGSN, Serving GW or PDN GW. Since 1.18.
     */
    ACTIVATION_REJECTED_BY_GGSN_OR_GW,
    /**
     * Activation rejected, unspecified. Since 1.18.
     */
    ACTIVATION_REJECTED_UNSPECIFIED,
    /**
     * Service option not supported. Since 1.10.
     */
    SERVICE_OPTION_NOT_SUPPORTED,
    /**
     * Requested service option not subscribed. Since 1.10.
     */
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
    /**
     * Service option temporarily out of order. Since 1.10.
     */
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
    /**
     * No PDP context activated. Since 1.10.
     */
    NO_PDP_CONTEXT_ACTIVATED,
    /**
     * PDP type IPv4 only allowed. Since 1.18.
     */
    PDP_TYPE_IPV4_ONLY_ALLOWED,
    /**
     * PDP type IPv6 only allowed. Since 1.18.
     */
    PDP_TYPE_IPV6_ONLY_ALLOWED,
    /**
     * Maximum number of PDP contexts reached. Since 1.18.
     */
    MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED,
    /**
     * Requested APN not supported in current RAT and PLMN combination. Since 1.18.
     */
    REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN,
    /**
     * Semantically incorrect message. Since 1.10.
     */
    SEMANTICALLY_INCORRECT_MESSAGE,
    /**
     * Invalid mandatory information. Since 1.10.
     */
    INVALID_MANDATORY_INFORMATION,
    /**
     * Message type non-existent or not implemented. Since 1.10.
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    /**
     * Message type not compatible with protocol state. Since 1.10.
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    /**
     * Information element non-existent or not implemented. Since 1.10.
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    /**
     * Conditional IE error. Since 1.10.
     */
    CONDITIONAL_IE_ERROR,
    /**
     * Message not compatible with protocol state. Since 1.10.
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    /**
     * Protocol error, unspecified. Since 1.10.
     */
    PROTOCOL_ERROR_UNSPECIFIED,
    /**
     * APN restriction value incompatible with active PDP context. Since 1.18.
     */
    APN_RESTRICTION_VALUE_INCOMPATIBLE_WITH_ACTIVE_PDP_CONTEXT,
    /**
     * Multiple accesses to a PDN connection not allowed. Since 1.18.
     */
    MULTIPLE_ACCESSES_TO_A_PDN_CONNECTION_NOT_ALLOWED,
}
/**
 * Packet Service Action.
 */
export enum PacketServiceAction {
    /**
     * Attach.
     */
    ATTACH,
    /**
     * Detach.
     */
    DETACH,
}
/**
 * Packet Service State.
 */
export enum PacketServiceState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Attaching.
     */
    ATTACHING,
    /**
     * Attached.
     */
    ATTACHED,
    /**
     * Detaching.
     */
    DETACHING,
    /**
     * Detached.
     */
    DETACHED,
}
/**
 * Type of PCO structure.
 */
export enum PcoType {
    /**
     * The PCO structure is complete.
     */
    COMPLETE,
    /**
     * The PCO structure is a subset of what was received from the network.
     */
    PARTIAL,
}
/**
 * Flags to use when reading the phonebook.
 */
export enum PhonebookFlag {
    /**
     * Request all.
     */
    ALL,
    /**
     * Request single entry by index.
     */
    INDEX,
}
/**
 * Phonebook state.
 */
export enum PhonebookState {
    /**
     * Not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Initialized
     */
    INITIALIZED,
}
/**
 * Flags to use when writing the phonebook.
 */
export enum PhonebookWriteFlag {
    /**
     * Store the record in an unused slot.
     */
    UNUSED,
    /**
     * Index where to store the record.
     */
    INDEX,
}
/**
 * Format of the expected PIN code.
 */
export enum PinFormat {
    /**
     * Unknown format.
     */
    UNKNOWN,
    /**
     * Numeric-only format.
     */
    NUMERIC,
    /**
     * Alphanumeric format.
     */
    ALPHANUMERIC,
}
/**
 * Whether the lock is enabled or disabled.
 */
export enum PinMode {
    /**
     * Not supported.
     */
    NOT_SUPPORTED,
    /**
     * Enabled.
     */
    ENABLED,
    /**
     * Disabled.
     */
    DISABLED,
}
/**
 * Operation to perform on the PIN.
 */
export enum PinOperation {
    /**
     * Enter the specified PIN into the device.
     */
    ENTER,
    /**
     * Enable the specified PIN.
     */
    ENABLE,
    /**
     * Disable the specified PIN.
     */
    DISABLE,
    /**
     * Change the specified PIN.
     */
    CHANGE,
}
/**
 * PIN States.
 */
export enum PinState {
    /**
     * The device does not require a PIN.
     */
    UNLOCKED,
    /**
     * The device requires the user to enter a PIN.
     */
    LOCKED,
}
/**
 * PIN Types.
 */
export enum PinType {
    /**
     * Unknown or unset.
     */
    UNKNOWN,
    /**
     * The PIN type is a custom type and is none of the other PIN types listed in this enumeration.
     */
    CUSTOM,
    /**
     * The PIN1 key.
     */
    PIN1,
    /**
     * The PIN2 key.
     */
    PIN2,
    /**
     * The device to SIM key.
     */
    DEVICE_SIM_PIN,
    /**
     * The device to very first SIM key.
     */
    DEVICE_FIRST_SIM_PIN,
    /**
     * The network personalization key.
     */
    NETWORK_PIN,
    /**
     * The network subset personalization key.
     */
    NETWORK_SUBSET_PIN,
    /**
     * The service provider (SP) personalization key.
     */
    SERVICE_PROVIDER_PIN,
    /**
     * The corporate personalization key.
     */
    CORPORATE_PIN,
    /**
     * The subsidy unlock key.
     */
    SUBSIDY_PIN,
    /**
     * The Personal Identification Number1 Unlock Key (PUK1).
     */
    PUK1,
    /**
     * The Personal Identification Number2 Unlock Key (PUK2).
     */
    PUK2,
    /**
     * The device to very first SIM PIN unlock key.
     */
    DEVICE_FIRST_SIM_PUK,
    /**
     * The network personalization unlock key.
     */
    NETWORK_PUK,
    /**
     * The network subset personalization unlock key.
     */
    NETWORK_SUBSET_PUK,
    /**
     * The service provider (SP) personalization unlock key.
     */
    SERVICE_PROVIDER_PUK,
    /**
     * The corporate personalization unlock key.
     */
    CORPORATE_PUK,
}
/**
 * MBIM protocol errors.
 */
export enum ProtocolError {
    /**
     * Invalid MBIM error.
     */
    INVALID,
    /**
     * Timeout waiting for fragment.
     */
    TIMEOUTFRAGMENT,
    /**
     * Fragment received out of sequence.
     */
    FRAGMENTOUTOFSEQUENCE,
    /**
     * Length mismatch.
     */
    LENGTHMISMATCH,
    /**
     * Duplicated transaction ID.
     */
    DUPLICATEDTID,
    /**
     * Not opened.
     */
    NOTOPENED,
    /**
     * Unknown error.
     */
    UNKNOWN,
    /**
     * Cancel the operation.
     */
    CANCEL,
    /**
     * Maximum control transfer not supported.
     */
    MAXTRANSFER,
}
/**
 * QDU session result.
 */
export enum QduFileType {
    /**
     * LE Package
     */
    PACKAGE,
}
/**
 * QDU Quectel Reboot session type.
 */
export enum QduQuectelRebootType {
    /**
     * Reboot to Emergency Download mode
     */
    EDL,
}
/**
 * QDU Quectel Read Version session type.
 */
export enum QduQuectelVersionType {
    /**
     * Firmware Build ID
     */
    ID,
}
/**
 * Action performed for the session initialization.
 */
export enum QduSessionAction {
    /**
     * Start.
     */
    START,
    /**
     * Stop.
     */
    STOP,
}
/**
 * QDU session result.
 */
export enum QduSessionResult {
    /**
     * Success
     */
    SUCCESS,
    /**
     * Failure
     */
    FAILURE,
}
/**
 * QDU session status.
 */
export enum QduSessionStatus {
    /**
     * Update session is not active.
     */
    INACTIVE,
    /**
     * Updated files are being transferred from host to function or function is waiting host to send updated files.
     */
    FILE_TRANSFER,
    /**
     * The function is applying the update package.
     */
    APPLY_UPDATE,
}
/**
 * QDU session types.
 */
export enum QduSessionType {
    /**
     * No update session.
     */
    NONE,
    /**
     * LE-based update procedure.
     */
    LE,
}
/**
 * Radio switch state.
 */
export enum QuectelRadioSwitchState {
    /**
     * Radio is off.
     */
    OFF,
    /**
     * Radio is on.
     */
    ON,
    /**
     * Radio is FCC locked.
     */
    FCC_LOCKED,
}
/**
 * Radio switch state.
 */
export enum RadioSwitchState {
    /**
     * Radio is off.
     */
    OFF,
    /**
     * Radio is on.
     */
    ON,
}
/**
 * Type of registration requested.
 */
export enum RegisterAction {
    /**
     * Automatic registration.
     */
    AUTOMATIC,
    /**
     * Manual registration.
     */
    MANUAL,
}
/**
 * Type of registration requested.
 */
export enum RegisterMode {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Automatic registration.
     */
    AUTOMATIC,
    /**
     * Manual registration.
     */
    MANUAL,
}
/**
 * Registration state.
 */
export enum RegisterState {
    /**
     * Unknown registration state.
     */
    UNKNOWN,
    /**
     * Not registered.
     */
    DEREGISTERED,
    /**
     * Searching.
     */
    SEARCHING,
    /**
     * Registered in home network.
     */
    HOME,
    /**
     * Registered in roaming network.
     */
    ROAMING,
    /**
     * Registered in a preferred roaming network.
     */
    PARTNER,
    /**
     * Registration denied.
     */
    DENIED,
}
/**
 * SAR backoff state.
 */
export enum SarBackoffState {
    /**
     * SAR backoff is disabled.
     */
    DISABLED,
    /**
     * SAR backoff is enabled.
     */
    ENABLED,
}
/**
 * SAR backoff mechanism control modes.
 */
export enum SarControlMode {
    /**
     * SAR backoff is controlled by the modem directly.
     */
    DEVICE,
    /**
     * SAR backoff is controlled by the host operating system.
     */
    OS,
}
/**
 * Whether the Wi-Fi and cellular SAR are integrated at hardware level.
 */
export enum SarWifiHardwareState {
    /**
     * Integrated.
     */
    INTEGRATED,
    /**
     * Not integrated.
     */
    NOT_INTEGRATED,
}
/**
 * Enumeration of the generic MBIM services.
 */
export enum Service {
    /**
     * Invalid service.
     */
    INVALID,
    /**
     * Basic connectivity service.
     */
    BASIC_CONNECT,
    /**
     * SMS messaging service.
     */
    SMS,
    /**
     * USSD service.
     */
    USSD,
    /**
     * Phonebook service.
     */
    PHONEBOOK,
    /**
     * SIM toolkit service.
     */
    STK,
    /**
     * Authentication service.
     */
    AUTH,
    /**
     * Device Service Stream service.
     */
    DSS,
    /**
     * Microsoft Firmware ID service. Since 1.8.
     */
    MS_FIRMWARE_ID,
    /**
     * Microsoft Host Shutdown service. Since 1.8.
     */
    MS_HOST_SHUTDOWN,
    /**
     * Proxy Control service. Since 1.10.
     */
    PROXY_CONTROL,
    /**
     * QMI-over-MBIM service. Since 1.14.
     */
    QMI,
    /**
     * ATT Device service. Since 1.16.
     */
    ATDS,
    /**
     * Intel firmware update service. Since 1.16.
     */
    INTEL_FIRMWARE_UPDATE,
    /**
     * Microsoft basic connectivity extensions service. Since 1.18.
     */
    MS_BASIC_CONNECT_EXTENSIONS,
    /**
     * Microsoft SAR service. Since 1.26.
     */
    MS_SAR,
    /**
     * QDU firmware update service. Since 1.26.
     */
    QDU,
    /**
     * Microsoft UICC Low Level Access service. Since 1.26.
     */
    MS_UICC_LOW_LEVEL_ACCESS,
    /**
     * Quectel specific operations. Since 1.26.2.
     */
    QUECTEL,
}
/**
 * Type of encoding of a CDMA SMS.
 */
export enum SmsCdmaEncoding {
    /**
     * Octet.
     */
    OCTET,
    /**
     * EPM.
     */
    EPM,
    /**
     * 7-bit ASCII.
     */
    TODO_7BIT_ASCII,
    /**
     * LA5.
     */
    LA5,
    /**
     * Unicode.
     */
    UNICODE,
    /**
     * Shift JIS.
     */
    SHIFT_JIS,
    /**
     * Korean.
     */
    KOREAN,
    /**
     * Latin hebrew.
     */
    LATIN_HEBREW,
    /**
     * Latin.
     */
    LATIN,
    /**
     * 7-bit GSM.
     */
    GSM_7BIT,
}
/**
 * Language of a CDMA SMS.
 */
export enum SmsCdmaLang {
    /**
     * Unknown language.
     */
    UNKNOWN,
    /**
     * English.
     */
    ENGLISH,
    /**
     * French.
     */
    FRENCH,
    /**
     * Spanish.
     */
    SPANISH,
    /**
     * Japanese.
     */
    JAPANESE,
    /**
     * Korean.
     */
    KOREAN,
    /**
     * Chinese.
     */
    CHINESE,
    /**
     * Hebrew.
     */
    HEBREW,
}
/**
 * Flags to use when requesting to read SMS. `MBIM_SMS_FLAG_ALL` and
 * `MBIM_SMS_FLAG_NEW` are mandatory, all the others are optional.
 */
export enum SmsFlag {
    /**
     * All.
     */
    ALL,
    /**
     * Index.
     */
    INDEX,
    /**
     * New.
     */
    NEW,
    /**
     * Old.
     */
    OLD,
    /**
     * Sent.
     */
    SENT,
    /**
     * Draft.
     */
    DRAFT,
}
/**
 * SMS format.
 */
export enum SmsFormat {
    /**
     * PDU format.
     */
    PDU,
    /**
     * CDMA format.
     */
    CDMA,
}
/**
 * Status of a SMS message.
 */
export enum SmsStatus {
    /**
     * New.
     */
    NEW,
    /**
     * Old.
     */
    OLD,
    /**
     * Draft.
     */
    DRAFT,
    /**
     * Sent.
     */
    SENT,
}
/**
 * SMS status flags.
 */
export enum SmsStatusFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Message store is full.
     */
    MESSAGE_STORE_FULL,
    /**
     * New non-Class 0 message arrived.
     */
    NEW_MESSAGE,
}
/**
 * State of the SMS storage.
 */
export enum SmsStorageState {
    /**
     * Storage not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Storage initialized.
     */
    INITIALIZED,
}
/**
 * Status of the MBIM request.
 */
export enum StatusError {
    /**
     * Success, no error.
     */
    NONE,
    /**
     * Busy.
     */
    BUSY,
    /**
     * Failure.
     */
    FAILURE,
    /**
     * SIM not inserted.
     */
    SIMNOTINSERTED,
    /**
     * Bad SIM.
     */
    BADSIM,
    /**
     * PIN required.
     */
    PINREQUIRED,
    /**
     * PIN disabled.
     */
    PINDISABLED,
    /**
     * Not registered.
     */
    NOTREGISTERED,
    /**
     * Providers not found.
     */
    PROVIDERSNOTFOUND,
    /**
     * No device support.
     */
    NODEVICESUPPORT,
    /**
     * Provider not visible.
     */
    PROVIDERNOTVISIBLE,
    /**
     * Data class not available.
     */
    DATACLASSNOTAVAILABLE,
    /**
     * Packet service detached.
     */
    PACKETSERVICEDETACHED,
    /**
     * Max activated contexts.
     */
    MAXACTIVATEDCONTEXTS,
    /**
     * Not initialized.
     */
    NOTINITIALIZED,
    /**
     * Voice call in progress.
     */
    VOICECALLINPROGRESS,
    /**
     * Context not activated.
     */
    CONTEXTNOTACTIVATED,
    /**
     * Service not activated.
     */
    SERVICENOTACTIVATED,
    /**
     * Invalid access string.
     */
    INVALIDACCESSSTRING,
    /**
     * Invalid user name or password.
     */
    INVALIDUSERNAMEPWD,
    /**
     * Radio power off.
     */
    RADIOPOWEROFF,
    /**
     * Invalid parameters.
     */
    INVALIDPARAMETERS,
    /**
     * Read failure.
     */
    READFAILURE,
    /**
     * Write failure.
     */
    WRITEFAILURE,
    /**
     * No phonebook.
     */
    NOPHONEBOOK,
    /**
     * Parameter too long.
     */
    PARAMETERTOOLONG,
    /**
     * SIM toolkit busy.
     */
    STKBUSY,
    /**
     * Operation not allowed.
     */
    OPERATIONNOTALLOWED,
    /**
     * Memory failure.
     */
    MEMORYFAILURE,
    /**
     * Invalid memory index.
     */
    INVALIDMEMORYINDEX,
    /**
     * Memory full.
     */
    MEMORYFULL,
    /**
     * Filter not supported.
     */
    FILTERNOTSUPPORTED,
    /**
     * DSS instance limit.
     */
    DSSINSTANCELIMIT,
    /**
     * Invalid device service operation.
     */
    INVALIDDEVICESERVICEOPERATION,
    /**
     * Incorrect AUTN when sending authentication.
     */
    AUTHINCORRECTAUTH,
    /**
     * Synchronization failure during the authentication.
     */
    AUTHSYNCFAILURE,
    /**
     * AMF bit not set in the authentication.
     */
    AUTHAMFNOTSET,
    /**
     * ContextType not supported by the operation. Since 1.16.
     */
    CONTEXTNOTSUPPORTED,
    /**
     * Unknown SMSC address.
     */
    SMSUNKNOWNSMSCADDRESS,
    /**
     * Network timeout when sending SMS.
     */
    SMSNETWORKTIMEOUT,
    /**
     * Language not supported in SMS.
     */
    SMSLANGNOTSUPPORTED,
    /**
     * Encoding not supported in SMS.
     */
    SMSENCODINGNOTSUPPORTED,
    /**
     * Format not supported in SMS.
     */
    SMSFORMATNOTSUPPORTED,
}
/**
 * Proactive command profile.
 */
export enum StkPacProfile {
    /**
     * Command not handled by function but handled by host.
     */
    NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST,
    /**
     * Command not handled by function but may be handled by host.
     */
    NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST,
    /**
     * Command handled by function without informing the host.
     */
    HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST,
    /**
     * Command handled by function without informing the host, but notifications may be sent to host.
     */
    HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE,
    /**
     * Command handled by function, and the function wil also send notification to the host.
     */
    HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED,
    /**
     * Command handled by function, but the host may request full control of the command.
     */
    HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST,
    /**
     * Command will be forwarded to the host. If the host decides not to receive the command, the function will not handle it.
     */
    HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE,
    /**
     * Command will be forwarded to the host. If the host decides not to receive the command, the function will handle it.
     */
    HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE,
}
/**
 * Type of proactive command.
 */
export enum StkPacType {
    /**
     * Host is requested to handle the Proactive command.
     */
    PROACTIVE_COMMAND,
    /**
     * Proactive command is handled by the function, but the host is notified.
     */
    NOTIFICATION,
}
/**
 * Ready state of the subscriber.
 */
export enum SubscriberReadyState {
    /**
     * Not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Initialized.
     */
    INITIALIZED,
    /**
     * SIM not inserted.
     */
    SIM_NOT_INSERTED,
    /**
     * Bad SIM.
     */
    BAD_SIM,
    /**
     * Failure.
     */
    FAILURE,
    /**
     * Not activated.
     */
    NOT_ACTIVATED,
    /**
     * Device locked.
     */
    DEVICE_LOCKED,
    /**
     * The card is ready but does not
     *  have any enabled profiles (MS MBIMEx). Since 1.28.
     */
    NO_ESIM_PROFILE,
}
/**
 * Type of the MBIM TLV.
 */
export enum TlvType {
    /**
     * Invalid TLV type.
     */
    INVALID,
    /**
     * UE policies.
     */
    UE_POLICITES,
    /**
     * Single NSSAI.
     */
    SINGLE_NSSAI,
    /**
     * Allowed NSSAI.
     */
    ALLOWED_NSSAI,
    /**
     * Configured NSSAI.
     */
    CFG_NSSAI,
    /**
     * Default configured NSSAI.
     */
    DFLT_CFG_NSSAI,
    /**
     * Preconfigured default configured NSSAI.
     */
    PRECFG_DFLT_CFG_NSSAI,
    /**
     * Rejected NSSAI.
     */
    REJ_NSSAI,
    /**
     * Local Area Data Network (LADN).
     */
    LADN,
    /**
     * Tracking Area Identity (TAI).
     */
    TAI,
    /**
     * WCHAR string.
     */
    WCHAR_STR,
    /**
     * Array of 1 or more `guint1`6 entries.
     */
    UINT16_TBL,
    /**
     * Extensible Authentication Protocol packet.
     */
    EAP_PACKET,
    /**
     * Protocol Configuration Option (PCO).
     */
    PCO,
    /**
     * One or more route selection descriptors.
     */
    ROUTE_SELECTION_DESCRIPTORS,
    /**
     * A traffic parameters record.
     */
    TRAFFIC_PARAMETERS,
    /**
     * Wake command.
     */
    WAKE_COMMAND,
    /**
     * Wake packet.
     */
    WAKE_PACKET,
}
/**
 * Whether modem channel transmission status notification is disabled or enabled.
 */
export enum TransmissionNotificationStatus {
    /**
     * Notification disabled.
     */
    DISABLED,
    /**
     * Notification enabled.
     */
    ENABLED,
}
/**
 * Whether modem is having TX traffic every hysteresis timeout.
 */
export enum TransmissionState {
    /**
     * Modem was not actively transmitting data.
     */
    INACTIVE,
    /**
     * Modem was actively transmitting data.
     */
    ACTIVE,
}
/**
 * Specifies the type of class byte definition.
 */
export enum UiccClassByteType {
    /**
     * Defined according to first interindustry definition in ISO 7816-4.
     */
    INTER_INDUSTRY,
    /**
     * Defined according to extended definition in ETSI 102 221.
     */
    EXTENDED,
}
/**
 * Pass through actions host can specify to modem. Upon reset
 * treats UICC as if pass through or as a regular UICC
 */
export enum UiccPassThroughAction {
    /**
     * Disable pass through.
     */
    DISABLE,
    /**
     * Enable pass through.
     */
    ENABLE,
}
/**
 * Pass through status of the modem specifies to the host.
 */
export enum UiccPassThroughStatus {
    /**
     * Pass through disabled.
     */
    DISABLED,
    /**
     * Pass through enabled.
     */
    ENABLED,
}
/**
 * Specifies whether apdu is exchanged using secure messaging.
 */
export enum UiccSecureMessaging {
    /**
     * No secure messaging.
     */
    NONE,
    /**
     * Secure, command header not authenticated.
     */
    NO_HDR_AUTH,
}
/**
 * MbimUiccSlotState
 */
export enum UiccSlotState {
    /**
     * The modem is still in the process of initializing so the SIM slot state is not deterministic.
     */
    STATE_UNKNOWN,
    /**
     * The UICC slot is powered off and no card is present.
     */
    SATE_OFF_EMPTY,
    /**
     * The UICC slot is powered off.
     */
    STATE_OFF,
    /**
     * The UICC slot is empty(there is no card in it).
     */
    STATE_EMPTY,
    /**
     * The UICC slot is occupied and powered on but the card within it is not yet ready.
     */
    STATE_NOT_READY,
    /**
     * The UICC slot is occupied and the card within it is ready.
     */
    STATE_ACTIVE,
    /**
     * The UICC slot is occupied and powreed on but the card is in an error state and cannot be used until it is next reset.
     */
    STATE_ERROR,
    /**
     * The card in the slot is an eSIM with an active profile and is ready to accept commands.
     */
    STATE_ACTIVE_ESIM,
    /**
     * The card in the slot is an eSIM with no profiles(or no active profiles) and is ready to accept commands.
     */
    STATE_ACTIVE_ESIM_NO_PROFILES,
}
/**
 * USSD action.
 */
export enum UssdAction {
    /**
     * Initiate USSD session.
     */
    INITIATE,
    /**
     * Continue USSD session.
     */
    CONTINUE,
    /**
     * Cancel USSD session.
     */
    CANCEL,
}
/**
 * USSD response.
 */
export enum UssdResponse {
    /**
     * No action required.
     */
    NO_ACTION_REQUIRED,
    /**
     * An action is required.
     */
    ACTION_REQUIRED,
    /**
     * Terminated by network
     */
    TERMINATED_BY_NETWORK,
    /**
     * Other local client.
     */
    OTHER_LOCAL_CLIENT,
    /**
     * Operation not supported.
     */
    OPERATION_NOT_SUPPORTED,
    /**
     * Network timeout.
     */
    NETWORK_TIMEOUT,
}
/**
 * Session state.
 */
export enum UssdSessionState {
    /**
     * New session.
     */
    NEW_SESSION,
    /**
     * Existing session.
     */
    EXISTING_SESSION,
}
/**
 * Type of action to perform when listing visible providers.
 */
export enum VisibleProvidersAction {
    /**
     * Full scan.
     */
    FULL_SCAN,
    /**
     * Locate preferred multicarrier providers.
     */
    RESTRICTED_SCAN,
}
/**
 * Voice Call State.
 */
export enum VoiceCallState {
    /**
     * None.
     */
    NONE,
    /**
     * Progress.
     */
    IN_PROGRESS,
    /**
     * Up.
     */
    HANG_UP,
}
/**
 * Voice class.
 */
export enum VoiceClass {
    /**
     * Unknown voice class.
     */
    UNKNOWN,
    /**
     * Device doesn't support voice.
     */
    NO_VOICE,
    /**
     * Device supports separate voice and data connections.
     */
    SEPARATED_VOICE_DATA,
    /**
     * Device supports simultaneous voice and data connections.
     */
    SIMULTANEOUS_VOICE_DATA,
}
/**
 * Wake type.
 */
export enum WakeType {
    /**
     * A CID response wakes device.
     */
    CID_RESPONSE,
    /**
     * A CID indication wakes device.
     */
    CID_INDICATION,
    /**
     * An incoming packet wakes device.
     */
    PACKET,
}
/**
 * Cellular class.
 * @bitfield 
 */
export enum CellularClass {
    /**
     * Device is 3GPP.
     */
    GSM,
    /**
     * Device is 3GPP2.
     */
    CDMA,
}
/**
 * Control capabilities.
 * @bitfield 
 */
export enum CtrlCaps {
    /**
     * None. Since 1.28.
     */
    NONE,
    /**
     * Device allows manual network selection.
     */
    REG_MANUAL,
    /**
     * Device has a hardware radio power switch.
     */
    HW_RADIO_SWITCH,
    /**
     * The CDMA function supports Mobile IP.
     */
    CDMA_MOBILE_IP,
    /**
     * The CDMA function supports Simple IP.
     */
    CDMA_SIMPLE_IP,
    /**
     * Device can work with multiple providers.
     */
    MULTI_CARRIER,
    /**
     * Device supports eSIM (MS MBIMEx v3.0). Since 1.28.
     */
    ESIM,
    /**
     * Device supports including the route selection descriptors as part of the UE policies (MS MBIMEx v3.0). Since 1.28.
     */
    UE_POLICY_ROUTE_SELECTION,
    /**
     * Device supports SIM hot-swap (MS MBIMEx v3.0). Since 1.28.
     */
    SIM_HOT_SWAP_CAPABLE,
}
/**
 * Data class.
 * 
 * Both 5G related values are introduced in MBIM Extension v2.0, but given
 * the update is compatible with the original MBIM enumeration, devices may
 * report them without having enabled MBIM Extension v2.0 support.
 * 
 * This type is updated in MBIM Extension v3.0 in a non-backwards compatible
 * way, see #MbimDataClassV3.
 * @bitfield 
 */
export enum DataClass {
    /**
     * GPRS.
     */
    GPRS,
    /**
     * EDGE.
     */
    EDGE,
    /**
     * UMTS.
     */
    UMTS,
    /**
     * HSDPA.
     */
    HSDPA,
    /**
     * HSUPA.
     */
    HSUPA,
    /**
     * LTE.
     */
    LTE,
    /**
     * 5G NSA (MS MBIMEx v2.0). Since 1.28.
     */
    TODO_5G_NSA,
    /**
     * 5G SA (MS MBIMEx v2.0). Since 1.28.
     */
    TODO_5G_SA,
    /**
     * 1xRTT.
     */
    TODO_1XRTT,
    /**
     * 1xEV-DO.
     */
    TODO_1XEVDO,
    /**
     * 1xEV-DO RevA
     */
    TODO_1XEVDO_REVA,
    /**
     * 1xEV-DV.
     */
    TODO_1XEVDV,
    /**
     * 3xRTT.
     */
    TODO_3XRTT,
    /**
     * 1xEV-DO RevB.
     */
    TODO_1XEVDO_REVB,
    /**
     * UMB.
     */
    UMB,
    /**
     * Custom.
     */
    CUSTOM,
}
/**
 * Data class update in MBIMEx v3.0.
 * 
 * There is now a single flag for 5G, and the new #MbimDataSubclass helps to
 * identify the specific 5G setup.
 * 
 * This type should be considered incompatible with #MbimDataClass.
 * @bitfield 
 */
export enum DataClassV3 {
    /**
     * GPRS.
     */
    GPRS,
    /**
     * EDGE.
     */
    EDGE,
    /**
     * UMTS.
     */
    UMTS,
    /**
     * HSDPA.
     */
    HSDPA,
    /**
     * HSUPA.
     */
    HSUPA,
    /**
     * LTE.
     */
    LTE,
    /**
     * 5G.
     */
    TODO_5G,
    /**
     * 1xRTT.
     */
    TODO_1XRTT,
    /**
     * 1xEV-DO.
     */
    TODO_1XEVDO,
    /**
     * 1xEV-DO RevA
     */
    TODO_1XEVDO_REVA,
    /**
     * 1xEV-DV.
     */
    TODO_1XEVDV,
    /**
     * 3xRTT.
     */
    TODO_3XRTT,
    /**
     * 1xEV-DO RevB.
     */
    TODO_1XEVDO_REVB,
    /**
     * UMB.
     */
    UMB,
    /**
     * Custom.
     */
    CUSTOM,
}
/**
 * Flags specifying the data subclass.
 * @bitfield 
 */
export enum DataSubclass {
    /**
     * No data subclass.
     */
    NONE,
    /**
     * EUTRAN and NR dual connectivity as in 5G option 3.
     */
    TODO_5G_ENDC,
    /**
     * Standalone NR as in 5G option 2.
     */
    TODO_5G_NR,
    /**
     * NR and EUTRAN dual connectivity as in 5G option 4.
     */
    TODO_5G_NEDC,
    /**
     * eLTE as in 5G option 5.
     */
    TODO_5G_ELTE,
    /**
     * Next-gen eLTE and NR dual connectivity as in 5G option 7.
     */
    TODO_5G_NGENDC,
}
/**
 * Flags to specify which actions to be performed when the device is open.
 * @bitfield 
 */
export enum DeviceOpenFlags {
    /**
     * None.
     */
    NONE,
    /**
     * Try to open the port through the 'mbim-proxy'.
     */
    PROXY,
    /**
     * Try to enable MS MBIMEx 2.0 support. Since 1.28.
     */
    MS_MBIMEX_V2,
    /**
     * Try to enable MS MBIMEx 3.0 support. Since 1.28.
     */
    MS_MBIMEX_V3,
}
/**
 * Frequency Range.
 * @bitfield 
 */
export enum FrequencyRange {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Frequency range 1 (FR1) in 3GPP TS 38.101-1 (Sub-6G).
     */
    TODO_1,
    /**
     * FR2 in 3GPP TS 38.101-2 (mmWave).
     */
    TODO_2,
}
/**
 * Mask of available information about an IP address.
 * @bitfield 
 */
export enum IPConfigurationAvailableFlag {
    /**
     * No info available.
     */
    NONE,
    /**
     * Address info available.
     */
    ADDRESS,
    /**
     * Gateway info available.
     */
    GATEWAY,
    /**
     * DNS info available.
     */
    DNS,
    /**
     * MTU info available.
     */
    MTU,
}
/**
 * State of the provider.
 * @bitfield 
 */
export enum ProviderState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Home operator.
     */
    HOME,
    /**
     * Provider blocked.
     */
    FORBIDDEN,
    /**
     * Provider is in the preferred list.
     */
    PREFERRED,
    /**
     * Provider is visible.
     */
    VISIBLE,
    /**
     * Currently registered to the provider.
     */
    REGISTERED,
    /**
     * Provider is a preferred multicarrier network.
     */
    PREFERRED_MULTICARRIER,
}
/**
 * Flag specifying how the ready info is treated.
 * @bitfield 
 */
export enum ReadyInfoFlag {
    /**
     * Device in normal mode. Since 1.16.
     */
    NONE,
    /**
     * Request to avoid displaying subscriber ID.
     */
    PROTECT_UNIQUE_ID,
}
/**
 * Registration flags.
 * @bitfield 
 */
export enum RegistrationFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Network doesn't support manual network selection.
     */
    MANUAL_SELECTION_NOT_AVAILABLE,
    /**
     * Modem should auto-attach to the network after registration. Since 1.8.
     */
    PACKET_SERVICE_AUTOMATIC_ATTACH,
}
/**
 * SIM class.
 * @bitfield 
 */
export enum SimClass {
    /**
     * No physical SIM.
     */
    LOGICAL,
    /**
     * Physical removable SIM.
     */
    REMOVABLE,
}
/**
 * SMS capabilities.
 * @bitfield 
 */
export enum SmsCaps {
    /**
     * Can receive in PDU mode.
     */
    PDU_RECEIVE,
    /**
     * Can send in PDU mode.
     */
    PDU_SEND,
    /**
     * Can receive in text mode.
     */
    TEXT_RECEIVE,
    /**
     * Can send in text mode.
     */
    TEXT_SEND,
}
/**
 * Flags specifying SIM related details.
 * @bitfield 
 */
export enum SubscriberReadyStatusFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Whether the SIM is an eSIM or not.
     */
    ESIM,
    /**
     * Whether the SIM removability details are know or not.
     */
    SIM_REMOVABILITY_KNOWN,
    /**
     * Whether the SIM is removable or not, valid only if `MBIM_SUBSCRIBER_READY_STATUS_FLAG_SIM_REMOVABLITY_KNOWN` is also given.
     */
    SIM_REMOVABLE,
}
export const DBUS_ERROR_PREFIX: string
/**
 * Symbol defining the #MbimDevice:device-file property.
 */
export const DEVICE_FILE: string
/**
 * Symbol defining the #MbimDevice:device-in-session property.
 */
export const DEVICE_IN_SESSION: string
/**
 * Symbol defining the maximum supported session id.
 */
export const DEVICE_SESSION_ID_MAX: number
/**
 * Symbol defining the minimum supported session id..
 */
export const DEVICE_SESSION_ID_MIN: number
/**
 * Symbol defining the #MbimDevice::device-error signal.
 */
export const DEVICE_SIGNAL_ERROR: string
/**
 * Symbol defining the #MbimDevice::device-indicate-status signal.
 */
export const DEVICE_SIGNAL_INDICATE_STATUS: string
/**
 * Symbol defining the #MbimDevice::device-removed signal.
 */
export const DEVICE_SIGNAL_REMOVED: string
/**
 * Symbol defining the #MbimDevice:device-transaction-id property.
 */
export const DEVICE_TRANSACTION_ID: string
/**
 * Evaluates to the major version number of libmbim-glib which this source
 * is compiled against.
 */
export const MAJOR_VERSION: number
/**
 * Evaluates to the micro version number of libmbim-glib which this source
 * compiled against.
 */
export const MICRO_VERSION: number
/**
 * Evaluates to the minor version number of libmbim-glib which this source
 * is compiled against.
 */
export const MINOR_VERSION: number
/**
 * Symbol defining the #MbimProxy:mbim-proxy-n-clients property.
 */
export const PROXY_N_CLIENTS: string
/**
 * Symbol defining the #MbimProxy:mbim-proxy-n-devices property.
 */
export const PROXY_N_DEVICES: string
/**
 * Symbol defining the default abstract socket name where the #MbimProxy will listen.
 */
export const PROXY_SOCKET_PATH: string
/**
 * Gets the nickname string for the #MbimAccessMediaType specified at `val`.
 * @param val a MbimAccessMediaType.
 */
export function accessMediaTypeGetString(val: AccessMediaType): string
/**
 * Gets the nickname string for the #MbimActivationCommand specified at `val`.
 * @param val a MbimActivationCommand.
 */
export function activationCommandGetString(val: ActivationCommand): string
/**
 * Gets the nickname string for the #MbimActivationState specified at `val`.
 * @param val a MbimActivationState.
 */
export function activationStateGetString(val: ActivationState): string
/**
 * Frees the memory allocated for the array of #MbimAtdsProvider structs.
 * @param array a #NULL terminated array of #MbimAtdsProvider structs.
 */
export function atdsProviderArrayFree(array: AtdsProviderArray): void
/**
 * Gets the nickname string for the #MbimAtdsProviderPlmnMode specified at `val`.
 * @param val a MbimAtdsProviderPlmnMode.
 */
export function atdsProviderPlmnModeGetString(val: AtdsProviderPlmnMode): string
/**
 * Gets the nickname string for the #MbimAtdsRatMode specified at `val`.
 * @param val a MbimAtdsRatMode.
 */
export function atdsRatModeGetString(val: AtdsRatMode): string
/**
 * Gets the nickname string for the #MbimAuthProtocol specified at `val`.
 * @param val a MbimAuthProtocol.
 */
export function authProtocolGetString(val: AuthProtocol): string
/**
 * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
 * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
 */
export function cellInfoCdmaArrayFree(array: CellInfoCdmaArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
 */
export function cellInfoNeighboringGsmArrayFree(array: CellInfoNeighboringGsmArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
 */
export function cellInfoNeighboringLteArrayFree(array: CellInfoNeighboringLteArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
 */
export function cellInfoNeighboringNrArrayFree(array: CellInfoNeighboringNrArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
 */
export function cellInfoNeighboringTdscdmaArrayFree(array: CellInfoNeighboringTdscdmaArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
 */
export function cellInfoNeighboringUmtsArrayFree(array: CellInfoNeighboringUmtsArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
 * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
 */
export function cellInfoServingNrArrayFree(array: CellInfoServingNrArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimCellularClass in `mask`.
 * @param mask bitmask of MbimCellularClass values.
 */
export function cellularClassBuildStringFromMask(mask: CellularClass): string
/**
 * Gets the nickname string for the #MbimCidAtds specified at `val`.
 * @param val a MbimCidAtds.
 */
export function cidAtdsGetString(val: CidAtds): string
/**
 * Gets the nickname string for the #MbimCidAuth specified at `val`.
 * @param val a MbimCidAuth.
 */
export function cidAuthGetString(val: CidAuth): string
/**
 * Gets the nickname string for the #MbimCidBasicConnect specified at `val`.
 * @param val a MbimCidBasicConnect.
 */
export function cidBasicConnectGetString(val: CidBasicConnect): string
/**
 * Checks whether the given command allows notifying.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
export function cidCanNotify(service: Service, cid: number): boolean
/**
 * Checks whether the given command allows querying.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
export function cidCanQuery(service: Service, cid: number): boolean
/**
 * Checks whether the given command allows setting.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
export function cidCanSet(service: Service, cid: number): boolean
/**
 * Gets the nickname string for the #MbimCidDss specified at `val`.
 * @param val a MbimCidDss.
 */
export function cidDssGetString(val: CidDss): string
/**
 * Gets a printable string for the command specified by the `service` and the
 * `cid`.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
export function cidGetPrintable(service: Service, cid: number): string
/**
 * Gets the nickname string for the #MbimCidIntelFirmwareUpdate specified at `val`.
 * @param val a MbimCidIntelFirmwareUpdate.
 */
export function cidIntelFirmwareUpdateGetString(val: CidIntelFirmwareUpdate): string
/**
 * Gets the nickname string for the #MbimCidMsBasicConnectExtensions specified at `val`.
 * @param val a MbimCidMsBasicConnectExtensions.
 */
export function cidMsBasicConnectExtensionsGetString(val: CidMsBasicConnectExtensions): string
/**
 * Gets the nickname string for the #MbimCidMsFirmwareId specified at `val`.
 * @param val a MbimCidMsFirmwareId.
 */
export function cidMsFirmwareIdGetString(val: CidMsFirmwareId): string
/**
 * Gets the nickname string for the #MbimCidMsHostShutdown specified at `val`.
 * @param val a MbimCidMsHostShutdown.
 */
export function cidMsHostShutdownGetString(val: CidMsHostShutdown): string
/**
 * Gets the nickname string for the #MbimCidMsSar specified at `val`.
 * @param val a MbimCidMsSar.
 */
export function cidMsSarGetString(val: CidMsSar): string
/**
 * Gets the nickname string for the #MbimCidMsUiccLowLevelAccess specified at `val`.
 * @param val a MbimCidMsUiccLowLevelAccess.
 */
export function cidMsUiccLowLevelAccessGetString(val: CidMsUiccLowLevelAccess): string
/**
 * Gets the nickname string for the #MbimCidPhonebook specified at `val`.
 * @param val a MbimCidPhonebook.
 */
export function cidPhonebookGetString(val: CidPhonebook): string
/**
 * Gets the nickname string for the #MbimCidProxyControl specified at `val`.
 * @param val a MbimCidProxyControl.
 */
export function cidProxyControlGetString(val: CidProxyControl): string
/**
 * Gets the nickname string for the #MbimCidQdu specified at `val`.
 * @param val a MbimCidQdu.
 */
export function cidQduGetString(val: CidQdu): string
/**
 * Gets the nickname string for the #MbimCidQmi specified at `val`.
 * @param val a MbimCidQmi.
 */
export function cidQmiGetString(val: CidQmi): string
/**
 * Gets the nickname string for the #MbimCidQuectel specified at `val`.
 * @param val a MbimCidQuectel.
 */
export function cidQuectelGetString(val: CidQuectel): string
/**
 * Gets the nickname string for the #MbimCidSms specified at `val`.
 * @param val a MbimCidSms.
 */
export function cidSmsGetString(val: CidSms): string
/**
 * Gets the nickname string for the #MbimCidStk specified at `val`.
 * @param val a MbimCidStk.
 */
export function cidStkGetString(val: CidStk): string
/**
 * Gets the nickname string for the #MbimCidUssd specified at `val`.
 * @param val a MbimCidUssd.
 */
export function cidUssdGetString(val: CidUssd): string
/**
 * Gets the nickname string for the #MbimCompression specified at `val`.
 * @param val a MbimCompression.
 */
export function compressionGetString(val: Compression): string
/**
 * Gets the nickname string for the #MbimContextIpType specified at `val`.
 * @param val a MbimContextIpType.
 */
export function contextIpTypeGetString(val: ContextIpType): string
/**
 * Gets the nickname string for the #MbimContextMediaType specified at `val`.
 * @param val a MbimContextMediaType.
 */
export function contextMediaTypeGetString(val: ContextMediaType): string
/**
 * Gets the nickname string for the #MbimContextOperation specified at `val`.
 * @param val a MbimContextOperation.
 */
export function contextOperationGetString(val: ContextOperation): string
/**
 * Gets the nickname string for the #MbimContextRoamingControl specified at `val`.
 * @param val a MbimContextRoamingControl.
 */
export function contextRoamingControlGetString(val: ContextRoamingControl): string
/**
 * Gets the nickname string for the #MbimContextSource specified at `val`.
 * @param val a MbimContextSource.
 */
export function contextSourceGetString(val: ContextSource): string
/**
 * Gets the nickname string for the #MbimContextState specified at `val`.
 * @param val a MbimContextState.
 */
export function contextStateGetString(val: ContextState): string
/**
 * Gets the nickname string for the #MbimContextType specified at `val`.
 * @param val a MbimContextType.
 */
export function contextTypeGetString(val: ContextType): string
/**
 * Gets the nickname string for the #MbimCoreError specified at `val`.
 * @param val a MbimCoreError.
 */
export function coreErrorGetString(val: CoreError): string
export function coreErrorQuark(): GLib.Quark
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimCtrlCaps in `mask`.
 * @param mask bitmask of MbimCtrlCaps values.
 */
export function ctrlCapsBuildStringFromMask(mask: CtrlCaps): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataClass in `mask`.
 * @param mask bitmask of MbimDataClass values.
 */
export function dataClassBuildStringFromMask(mask: DataClass): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataClassV3 in `mask`.
 * @param mask bitmask of MbimDataClassV3 values.
 */
export function dataClassV3BuildStringFromMask(mask: DataClassV3): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataSubclass in `mask`.
 * @param mask bitmask of MbimDataSubclass values.
 */
export function dataSubclassBuildStringFromMask(mask: DataSubclass): string
/**
 * Gets the nickname string for the #MbimDefaultPduActivationHint specified at `val`.
 * @param val a MbimDefaultPduActivationHint.
 */
export function defaultPduActivationHintGetString(val: DefaultPduActivationHint): string
/**
 * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
 * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
 */
export function deviceServiceElementArrayFree(array: DeviceServiceElementArray): void
/**
 * Gets the nickname string for the #MbimDeviceType specified at `val`.
 * @param val a MbimDeviceType.
 */
export function deviceTypeGetString(val: DeviceType): string
/**
 * Gets the nickname string for the #MbimDrxCycle specified at `val`.
 * @param val a MbimDrxCycle.
 */
export function drxCycleGetString(val: DrxCycle): string
/**
 * Gets the nickname string for the #MbimDssLinkState specified at `val`.
 * @param val a MbimDssLinkState.
 */
export function dssLinkStateGetString(val: DssLinkState): string
/**
 * Gets the nickname string for the #MbimEmergencyModeState specified at `val`.
 * @param val a MbimEmergencyModeState.
 */
export function emergencyModeStateGetString(val: EmergencyModeState): string
/**
 * Frees the memory allocated for the array of #MbimEventEntry structs.
 * @param array a #NULL terminated array of #MbimEventEntry structs.
 */
export function eventEntryArrayFree(array: EventEntryArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimFrequencyRange in `mask`.
 * @param mask bitmask of MbimFrequencyRange values.
 */
export function frequencyRangeBuildStringFromMask(mask: FrequencyRange): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimIPConfigurationAvailableFlag in `mask`.
 * @param mask bitmask of MbimIPConfigurationAvailableFlag values.
 */
export function ipConfigurationAvailableFlagBuildStringFromMask(mask: IPConfigurationAvailableFlag): string
/**
 * Frees the memory allocated for the array of #MbimIPv4Element structs.
 * @param array a #NULL terminated array of #MbimIPv4Element structs.
 */
export function ipv4ElementArrayFree(array: IPv4ElementArray): void
/**
 * Frees the memory allocated for the array of #MbimIPv6Element structs.
 * @param array a #NULL terminated array of #MbimIPv6Element structs.
 */
export function ipv6ElementArrayFree(array: IPv6ElementArray): void
/**
 * Gets the nickname string for the #MbimLadnInfo specified at `val`.
 * @param val a MbimLadnInfo.
 */
export function ladnInfoGetString(val: LadnInfo): string
/**
 * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
 * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
 */
export function lteAttachConfigurationArrayFree(array: LteAttachConfigurationArray): void
/**
 * Gets the nickname string for the #MbimLteAttachContextOperation specified at `val`.
 * @param val a MbimLteAttachContextOperation.
 */
export function lteAttachContextOperationGetString(val: LteAttachContextOperation): string
/**
 * Gets the nickname string for the #MbimLteAttachContextRoamingControl specified at `val`.
 * @param val a MbimLteAttachContextRoamingControl.
 */
export function lteAttachContextRoamingControlGetString(val: LteAttachContextRoamingControl): string
/**
 * Gets the nickname string for the #MbimLteAttachState specified at `val`.
 * @param val a MbimLteAttachState.
 */
export function lteAttachStateGetString(val: LteAttachState): string
/**
 * Frees the memory allocated for the #MbimLteAttachStatus.
 * @param var_ a #MbimLteAttachStatus.
 */
export function lteAttachStatusFree(var_: DeprecatedLteAttachStatus): void
/**
 * Gets the nickname string for the #MbimMessageCommandType specified at `val`.
 * @param val a MbimMessageCommandType.
 */
export function messageCommandTypeGetString(val: MessageCommandType): string
/**
 * Gets the nickname string for the #MbimMessageType specified at `val`.
 * @param val a MbimMessageType.
 */
export function messageTypeGetString(val: MessageType): string
/**
 * Gets the nickname string for the #MbimMicoMode specified at `val`.
 * @param val a MbimMicoMode.
 */
export function micoModeGetString(val: MicoMode): string
/**
 * Gets the nickname string for the #MbimModemConfigurationStatus specified at `val`.
 * @param val a MbimModemConfigurationStatus.
 */
export function modemConfigurationStatusGetString(val: ModemConfigurationStatus): string
/**
 * Gets the nickname string for the #MbimNetworkIdleHintState specified at `val`.
 * @param val a MbimNetworkIdleHintState.
 */
export function networkIdleHintStateGetString(val: NetworkIdleHintState): string
/**
 * Gets the nickname string for the #MbimNwError specified at `val`.
 * @param val a MbimNwError.
 */
export function nwErrorGetString(val: NwError): string
/**
 * Frees the memory allocated for the array of #MbimPacketFilter structs.
 * @param array a #NULL terminated array of #MbimPacketFilter structs.
 */
export function packetFilterArrayFree(array: PacketFilterArray): void
/**
 * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
 * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
 */
export function packetFilterV3ArrayFree(array: PacketFilterV3Array): void
/**
 * Gets the nickname string for the #MbimPacketServiceAction specified at `val`.
 * @param val a MbimPacketServiceAction.
 */
export function packetServiceActionGetString(val: PacketServiceAction): string
/**
 * Gets the nickname string for the #MbimPacketServiceState specified at `val`.
 * @param val a MbimPacketServiceState.
 */
export function packetServiceStateGetString(val: PacketServiceState): string
/**
 * Gets the nickname string for the #MbimPcoType specified at `val`.
 * @param val a MbimPcoType.
 */
export function pcoTypeGetString(val: PcoType): string
/**
 * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
 * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
 */
export function phonebookEntryArrayFree(array: PhonebookEntryArray): void
/**
 * Gets the nickname string for the #MbimPhonebookFlag specified at `val`.
 * @param val a MbimPhonebookFlag.
 */
export function phonebookFlagGetString(val: PhonebookFlag): string
/**
 * Gets the nickname string for the #MbimPhonebookState specified at `val`.
 * @param val a MbimPhonebookState.
 */
export function phonebookStateGetString(val: PhonebookState): string
/**
 * Gets the nickname string for the #MbimPhonebookWriteFlag specified at `val`.
 * @param val a MbimPhonebookWriteFlag.
 */
export function phonebookWriteFlagGetString(val: PhonebookWriteFlag): string
/**
 * Gets the nickname string for the #MbimPinFormat specified at `val`.
 * @param val a MbimPinFormat.
 */
export function pinFormatGetString(val: PinFormat): string
/**
 * Gets the nickname string for the #MbimPinMode specified at `val`.
 * @param val a MbimPinMode.
 */
export function pinModeGetString(val: PinMode): string
/**
 * Gets the nickname string for the #MbimPinOperation specified at `val`.
 * @param val a MbimPinOperation.
 */
export function pinOperationGetString(val: PinOperation): string
/**
 * Gets the nickname string for the #MbimPinState specified at `val`.
 * @param val a MbimPinState.
 */
export function pinStateGetString(val: PinState): string
/**
 * Gets the nickname string for the #MbimPinType specified at `val`.
 * @param val a MbimPinType.
 */
export function pinTypeGetString(val: PinType): string
/**
 * Gets the nickname string for the #MbimProtocolError specified at `val`.
 * @param val a MbimProtocolError.
 */
export function protocolErrorGetString(val: ProtocolError): string
export function protocolErrorQuark(): GLib.Quark
/**
 * Frees the memory allocated for the array of #MbimProvider structs.
 * @param array a #NULL terminated array of #MbimProvider structs.
 */
export function providerArrayFree(array: ProviderArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimProviderState in `mask`.
 * @param mask bitmask of MbimProviderState values.
 */
export function providerStateBuildStringFromMask(mask: ProviderState): string
/**
 * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
 * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
 */
export function provisionedContextElementArrayFree(array: ProvisionedContextElementArray): void
/**
 * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
 * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
 */
export function provisionedContextElementV2ArrayFree(array: ProvisionedContextElementV2Array): void
/**
 * Gets the nickname string for the #MbimQduFileType specified at `val`.
 * @param val a MbimQduFileType.
 */
export function qduFileTypeGetString(val: QduFileType): string
/**
 * Gets the nickname string for the #MbimQduQuectelRebootType specified at `val`.
 * @param val a MbimQduQuectelRebootType.
 */
export function qduQuectelRebootTypeGetString(val: QduQuectelRebootType): string
/**
 * Gets the nickname string for the #MbimQduQuectelVersionType specified at `val`.
 * @param val a MbimQduQuectelVersionType.
 */
export function qduQuectelVersionTypeGetString(val: QduQuectelVersionType): string
/**
 * Gets the nickname string for the #MbimQduSessionAction specified at `val`.
 * @param val a MbimQduSessionAction.
 */
export function qduSessionActionGetString(val: QduSessionAction): string
/**
 * Gets the nickname string for the #MbimQduSessionResult specified at `val`.
 * @param val a MbimQduSessionResult.
 */
export function qduSessionResultGetString(val: QduSessionResult): string
/**
 * Gets the nickname string for the #MbimQduSessionStatus specified at `val`.
 * @param val a MbimQduSessionStatus.
 */
export function qduSessionStatusGetString(val: QduSessionStatus): string
/**
 * Gets the nickname string for the #MbimQduSessionType specified at `val`.
 * @param val a MbimQduSessionType.
 */
export function qduSessionTypeGetString(val: QduSessionType): string
/**
 * Gets the nickname string for the #MbimQuectelRadioSwitchState specified at `val`.
 * @param val a MbimQuectelRadioSwitchState.
 */
export function quectelRadioSwitchStateGetString(val: QuectelRadioSwitchState): string
/**
 * Gets the nickname string for the #MbimRadioSwitchState specified at `val`.
 * @param val a MbimRadioSwitchState.
 */
export function radioSwitchStateGetString(val: RadioSwitchState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimReadyInfoFlag in `mask`.
 * @param mask bitmask of MbimReadyInfoFlag values.
 */
export function readyInfoFlagBuildStringFromMask(mask: ReadyInfoFlag): string
/**
 * Gets the nickname string for the #MbimRegisterAction specified at `val`.
 * @param val a MbimRegisterAction.
 */
export function registerActionGetString(val: RegisterAction): string
/**
 * Register a custom service
 * @param uuid MbimUuid structure corresponding to service
 * @param nickname a printable name for service
 */
export function registerCustomService(uuid: Uuid, nickname: string): number
/**
 * Gets the nickname string for the #MbimRegisterMode specified at `val`.
 * @param val a MbimRegisterMode.
 */
export function registerModeGetString(val: RegisterMode): string
/**
 * Gets the nickname string for the #MbimRegisterState specified at `val`.
 * @param val a MbimRegisterState.
 */
export function registerStateGetString(val: RegisterState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimRegistrationFlag in `mask`.
 * @param mask bitmask of MbimRegistrationFlag values.
 */
export function registrationFlagBuildStringFromMask(mask: RegistrationFlag): string
/**
 * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
 * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
 */
export function rsrpSnrInfoArrayFree(array: RsrpSnrInfoArray): void
/**
 * Gets the nickname string for the #MbimSarBackoffState specified at `val`.
 * @param val a MbimSarBackoffState.
 */
export function sarBackoffStateGetString(val: SarBackoffState): string
/**
 * Frees the memory allocated for the array of #MbimSarConfigState structs.
 * @param array a #NULL terminated array of #MbimSarConfigState structs.
 */
export function sarConfigStateArrayFree(array: SarConfigStateArray): void
/**
 * Gets the nickname string for the #MbimSarControlMode specified at `val`.
 * @param val a MbimSarControlMode.
 */
export function sarControlModeGetString(val: SarControlMode): string
/**
 * Gets the nickname string for the #MbimSarWifiHardwareState specified at `val`.
 * @param val a MbimSarWifiHardwareState.
 */
export function sarWifiHardwareStateGetString(val: SarWifiHardwareState): string
/**
 * Gets the nickname string for the #MbimService specified at `val`.
 * @param val a MbimService.
 */
export function serviceGetString(val: Service): string
/**
 * Checks whether `id` is a custom or standard service.
 * @param id ID of the service
 */
export function serviceIdIsCustom(id: number): boolean
/**
 * Gets the nickname string for the `service`.
 * 
 * As opposed to mbim_service_get_string(), this methods takes into account
 * custom services that may have been registered by the user.
 * @param service a MbimService or custom service.
 */
export function serviceLookupName(service: number): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSimClass in `mask`.
 * @param mask bitmask of MbimSimClass values.
 */
export function simClassBuildStringFromMask(mask: SimClass): string
/**
 * Frees the memory allocated for the array of #MbimSlot structs.
 * @param array a #NULL terminated array of #MbimSlot structs.
 */
export function slotArrayFree(array: SlotArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSmsCaps in `mask`.
 * @param mask bitmask of MbimSmsCaps values.
 */
export function smsCapsBuildStringFromMask(mask: SmsCaps): string
/**
 * Gets the nickname string for the #MbimSmsCdmaEncoding specified at `val`.
 * @param val a MbimSmsCdmaEncoding.
 */
export function smsCdmaEncodingGetString(val: SmsCdmaEncoding): string
/**
 * Gets the nickname string for the #MbimSmsCdmaLang specified at `val`.
 * @param val a MbimSmsCdmaLang.
 */
export function smsCdmaLangGetString(val: SmsCdmaLang): string
/**
 * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
 * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
 */
export function smsCdmaReadRecordArrayFree(array: SmsCdmaReadRecordArray): void
/**
 * Gets the nickname string for the #MbimSmsFlag specified at `val`.
 * @param val a MbimSmsFlag.
 */
export function smsFlagGetString(val: SmsFlag): string
/**
 * Gets the nickname string for the #MbimSmsFormat specified at `val`.
 * @param val a MbimSmsFormat.
 */
export function smsFormatGetString(val: SmsFormat): string
/**
 * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
 * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
 */
export function smsPduReadRecordArrayFree(array: SmsPduReadRecordArray): void
/**
 * Gets the nickname string for the #MbimSmsStatusFlag specified at `val`.
 * @param val a MbimSmsStatusFlag.
 */
export function smsStatusFlagGetString(val: SmsStatusFlag): string
/**
 * Gets the nickname string for the #MbimSmsStatus specified at `val`.
 * @param val a MbimSmsStatus.
 */
export function smsStatusGetString(val: SmsStatus): string
/**
 * Gets the nickname string for the #MbimSmsStorageState specified at `val`.
 * @param val a MbimSmsStorageState.
 */
export function smsStorageStateGetString(val: SmsStorageState): string
/**
 * Gets the nickname string for the #MbimStatusError specified at `val`.
 * @param val a MbimStatusError.
 */
export function statusErrorGetString(val: StatusError): string
export function statusErrorQuark(): GLib.Quark
/**
 * Gets the nickname string for the #MbimStkPacProfile specified at `val`.
 * @param val a MbimStkPacProfile.
 */
export function stkPacProfileGetString(val: StkPacProfile): string
/**
 * Gets the nickname string for the #MbimStkPacType specified at `val`.
 * @param val a MbimStkPacType.
 */
export function stkPacTypeGetString(val: StkPacType): string
/**
 * Gets the nickname string for the #MbimSubscriberReadyState specified at `val`.
 * @param val a MbimSubscriberReadyState.
 */
export function subscriberReadyStateGetString(val: SubscriberReadyState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSubscriberReadyStatusFlag in `mask`.
 * @param mask bitmask of MbimSubscriberReadyStatusFlag values.
 */
export function subscriberReadyStatusFlagBuildStringFromMask(mask: SubscriberReadyStatusFlag): string
/**
 * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
 * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
 */
export function terminalCapabilityInfoArrayFree(array: TerminalCapabilityInfoArray): void
/**
 * Gets the nickname string for the #MbimTlvType specified at `val`.
 * @param val a MbimTlvType.
 */
export function tlvTypeGetString(val: TlvType): string
/**
 * Gets the nickname string for the #MbimTransmissionNotificationStatus specified at `val`.
 * @param val a MbimTransmissionNotificationStatus.
 */
export function transmissionNotificationStatusGetString(val: TransmissionNotificationStatus): string
/**
 * Gets the nickname string for the #MbimTransmissionState specified at `val`.
 * @param val a MbimTransmissionState.
 */
export function transmissionStateGetString(val: TransmissionState): string
/**
 * Gets the nickname string for the #MbimUiccClassByteType specified at `val`.
 * @param val a MbimUiccClassByteType.
 */
export function uiccClassByteTypeGetString(val: UiccClassByteType): string
/**
 * Gets the nickname string for the #MbimUiccPassThroughAction specified at `val`.
 * @param val a MbimUiccPassThroughAction.
 */
export function uiccPassThroughActionGetString(val: UiccPassThroughAction): string
/**
 * Gets the nickname string for the #MbimUiccPassThroughStatus specified at `val`.
 * @param val a MbimUiccPassThroughStatus.
 */
export function uiccPassThroughStatusGetString(val: UiccPassThroughStatus): string
/**
 * Gets the nickname string for the #MbimUiccSecureMessaging specified at `val`.
 * @param val a MbimUiccSecureMessaging.
 */
export function uiccSecureMessagingGetString(val: UiccSecureMessaging): string
/**
 * Gets the nickname string for the #MbimUiccSlotState specified at `val`.
 * @param val a MbimUiccSlotState.
 */
export function uiccSlotStateGetString(val: UiccSlotState): string
/**
 * Unregister a custom service.
 * @param id ID of the service to unregister.MbimUuid structure corresponding to service
 */
export function unregisterCustomService(id: number): boolean
/**
 * Gets the nickname string for the #MbimUssdAction specified at `val`.
 * @param val a MbimUssdAction.
 */
export function ussdActionGetString(val: UssdAction): string
/**
 * Gets the nickname string for the #MbimUssdResponse specified at `val`.
 * @param val a MbimUssdResponse.
 */
export function ussdResponseGetString(val: UssdResponse): string
/**
 * Gets the nickname string for the #MbimUssdSessionState specified at `val`.
 * @param val a MbimUssdSessionState.
 */
export function ussdSessionStateGetString(val: UssdSessionState): string
/**
 * Checks whether personal info should be hidden when traces are enabled.
 */
export function utilsGetShowPersonalInfo(): boolean
/**
 * Checks whether MBIM message traces are currently enabled.
 */
export function utilsGetTracesEnabled(): boolean
/**
 * Sets whether personal info is printed when traces are enabled.
 * @param showPersonalInfo %TRUE to show personal info in traces, %FALSE otherwise.
 */
export function utilsSetShowPersonalInfo(showPersonalInfo: boolean): void
/**
 * Sets whether MBIM message traces are enabled or disabled.
 * @param enabled %TRUE to enable traces, %FALSE to disable them.
 */
export function utilsSetTracesEnabled(enabled: boolean): void
/**
 * Get the UUID corresponding to `context_type`.
 * @param contextType a #MbimContextType.
 */
export function uuidFromContextType(contextType: ContextType): Uuid
/**
 * Fills in `uuid` from the printable representation give in `str`.
 * 
 * Only ccepts `str` written with dashes separating items, e.g.:
 *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
 * @param str a MBIM UUID.
 * @param uuid pointer to the target #MbimUuid.
 */
export function uuidFromPrintable(str: string, uuid: Uuid): boolean
/**
 * Get the UUID corresponding to `service`.
 * 
 * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
 * or a custom registered one.
 * @param service a #MbimService.
 */
export function uuidFromService(service: Service): Uuid
/**
 * Gets the nickname string for the #MbimVisibleProvidersAction specified at `val`.
 * @param val a MbimVisibleProvidersAction.
 */
export function visibleProvidersActionGetString(val: VisibleProvidersAction): string
/**
 * Gets the nickname string for the #MbimVoiceCallState specified at `val`.
 * @param val a MbimVoiceCallState.
 */
export function voiceCallStateGetString(val: VoiceCallState): string
/**
 * Gets the nickname string for the #MbimVoiceClass specified at `val`.
 * @param val a MbimVoiceClass.
 */
export function voiceClassGetString(val: VoiceClass): string
/**
 * Gets the nickname string for the #MbimWakeType specified at `val`.
 * @param val a MbimWakeType.
 */
export function wakeTypeGetString(val: WakeType): string
export module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-error`
     */
    export interface DeviceErrorSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `device-indicate-status`
     */
    export interface DeviceIndicateStatusSignalCallback {
        (object: Message): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Mbim-1.0.Mbim.Device

        deviceFile?: Gio.File | null
        deviceInSession?: boolean | null
        deviceTransactionId?: number | null
    }

}

export interface Device extends Gio.AsyncInitable {

    // Own properties of Mbim-1.0.Mbim.Device

    readonly deviceFile: Gio.File
    deviceInSession: boolean
    deviceTransactionId: number

    // Owm methods of Mbim-1.0.Mbim.Device

    /**
     * Asynchronously creates a new virtual network device node on top of
     * `base_ifname`. This allows having multiple net interfaces running on top of
     * another using multiplexing.
     * 
     * If the kernel driver doesn't allow this functionality, a
     * %MBIM_CORE_ERROR_UNSUPPORTED error will be returned.
     * 
     * The operation may fail if the given interface name is not associated to the
     * MBIM control port managed by the #MbimDevice.
     * 
     * Depending on the kernel driver in use, the given `ifname_prefix` may be
     * ignored. The user should not assume that the returned link interface name is
     * prefixed with `ifname_prefix` as it may not be the case.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_add_link_finish() to get the result of the operation.
     * @param sessionId the session id for the link, in the   [#MBIM_DEVICE_SESSION_ID_MIN,#MBIM_DEVICE_SESSION_ID_MAX] range, or   #MBIM_DEVICE_SESSION_ID_AUTOMATIC to find the first available session id.
     * @param baseIfname the interface which the new link will be created on.
     * @param ifnamePrefix the prefix suggested to be used for the name of the new link   created.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    addLink(sessionId: number, baseIfname: string, ifnamePrefix: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_add_link().
     * @param res a #GAsyncResult.
     * @param sessionId the session ID for the link created.
     */
    addLinkFinish(res: Gio.AsyncResult, sessionId: number): string
    /**
     * Checks whether link management is supported by the kernel.
     */
    checkLinkSupported(): boolean
    /**
     * Checks the version number of the MS MBIMEx support in the device instance
     * against the one given as input.
     * @param msMbimexVersionMajor major version number of the MS MBIMEx support.
     * @param msMbimexVersionMinor minor version number of the MS MBIMEx support.
     */
    checkMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean
    /**
     * Asynchronously closes a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_close_finish() to get the result of the operation.
     * @param timeout maximum time, in seconds, to wait for the device to be closed.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    close(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous close operation started with mbim_device_close().
     * @param res a #GAsyncResult.
     */
    closeFinish(res: Gio.AsyncResult): boolean
    /**
     * Forces the #MbimDevice to be closed.
     */
    closeForce(): boolean
    /**
     * Asynchronously sends a #MbimMessage to the device.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_command_finish() to get the result of the operation.
     * @param message the message to send.
     * @param timeout maximum time, in seconds, to wait for the response.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    command(message: Message, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_command().
     * @param res a #GAsyncResult.
     */
    commandFinish(res: Gio.AsyncResult): Message
    /**
     * Asynchronously deletes all virtual network interfaces that have been previously
     * created with mbim_device_add_link() in `base_ifname`.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_delete_link_finish() to get the result of the operation.
     * 
     * <note><para>
     * There is no guarantee that other processes haven't created new links by the
     * time this method returns. This method should be used with caution, or in setups
     * where only one single process is expected to do MBIM network interface link
     * management.
     * </para></note>
     * @param baseIfname the interface where all links are available.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    deleteAllLinks(baseIfname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_all_links().
     * @param res a #GAsyncResult.
     */
    deleteAllLinksFinish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously deletes a virtual network interface that has been previously
     * created with mbim_device_add_link().
     * 
     * If the kernel driver doesn't allow this functionality, a
     * %MBIM_CORE_ERROR_UNSUPPORTED error will be returned.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_delete_link_finish() to get the result of the operation.
     * @param ifname the name of the link to remove.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    deleteLink(ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_link().
     * @param res a #GAsyncResult.
     */
    deleteLinkFinish(res: Gio.AsyncResult): boolean
    /**
     * Get the version number of the MS MBIMEx support.
     * 
     * The reported version will be 1 if the initialization sequence to agree on
     * which version to use hasn't been run (e.g. with mbim_device_open_full() and
     * the explicit %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3 flag).
     * @param outMsMbimexVersionMinor output location for the minor version number of  the MS MBIMEx support, or %NULL if not needed.
     */
    getMsMbimexVersion(outMsMbimexVersionMinor: number): number
    /**
     * Acquire the next transaction ID of this #MbimDevice.
     * The internal transaction ID gets incremented.
     */
    getNextTransactionId(): number
    /**
     * Get the system path of the underlying MBIM device.
     */
    getPath(): string
    /**
     * Get the system path of the underlying MBIM device in UTF-8.
     */
    getPathDisplay(): string
    /**
     * Acquire the transaction ID of this #MbimDevice without
     * incrementing the internal transaction ID.
     */
    getTransactionId(): number
    /**
     * Checks whether the #MbimDevice is open for I/O.
     */
    isOpen(): boolean
    /**
     * Synchronously lists all virtual network interfaces that have been previously
     * created with mbim_device_add_link() in `base_ifname`.
     * @param baseIfname the base interface.
     */
    listLinks(baseIfname: string): [ /* returnType */ boolean, /* outLinks */ string[] ]
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_finish() to get the result of the operation.
     * @param timeout maximum time, in seconds, to wait for the device to be opened.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    open(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open().
     * @param res a #GAsyncResult.
     */
    openFinish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * This method is an extension of the generic mbim_device_open(), which allows
     * launching the #MbimDevice with proxy support.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_full_finish() to get the result of the operation.
     * @param flags a set of #MbimDeviceOpenFlags.
     * @param timeout maximum time, in seconds, to wait for the device to be opened.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    openFull(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open_full().
     * @param res a #GAsyncResult.
     */
    openFullFinish(res: Gio.AsyncResult): boolean
    /**
     * Set the version number of the MS MBIMEx support assumed in the device
     * instance, which may have been set already by a different process or
     * device instance.
     * 
     * If this operation specifies the wrong MBIMEx version agreed between host
     * and device, the message processing on this device instance may fail.
     * 
     * This operation does not do any MBIMEx version exchange with the device,
     * the only way to do that is with mbim_device_open_full() and the explicit
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3
     * flag.
     * @param msMbimexVersionMajor major version number of the MS MBIMEx support.
     * @param msMbimexVersionMinor minor version number of the MS MBIMEx support.
     */
    setMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean

    // Own signals of Mbim-1.0.Mbim.Device

    connect(sigName: "device-error", callback: Device.DeviceErrorSignalCallback): number
    on(sigName: "device-error", callback: Device.DeviceErrorSignalCallback): number
    once(sigName: "device-error", callback: Device.DeviceErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-error", ...args: any[]): void
    connect(sigName: "device-indicate-status", callback: Device.DeviceIndicateStatusSignalCallback): number
    on(sigName: "device-indicate-status", callback: Device.DeviceIndicateStatusSignalCallback): number
    once(sigName: "device-indicate-status", callback: Device.DeviceIndicateStatusSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-indicate-status", ...args: any[]): void
    connect(sigName: "device-removed", callback: Device.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Device.DeviceRemovedSignalCallback): number
    once(sigName: "device-removed", callback: Device.DeviceRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of Mbim-1.0.Mbim.Device

    connect(sigName: "notify::device-file", callback: any): number
    on(sigName: "notify::device-file", callback: any): number
    once(sigName: "notify::device-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device-file", ...args: any[]): void
    connect(sigName: "notify::device-in-session", callback: any): number
    on(sigName: "notify::device-in-session", callback: any): number
    once(sigName: "notify::device-in-session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device-in-session", ...args: any[]): void
    connect(sigName: "notify::device-transaction-id", callback: any): number
    on(sigName: "notify::device-transaction-id", callback: any): number
    once(sigName: "notify::device-transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device-transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MbimDevice structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
export class Device extends GObject.Object {

    // Own properties of Mbim-1.0.Mbim.Device

    static name: string

    // Constructors of Mbim-1.0.Mbim.Device

    constructor(config?: Device.ConstructorProperties) 
    /**
     * Finishes an operation started with mbim_device_new().
     * @constructor 
     * @param res a #GAsyncResult.
     */
    static newFinish(res: Gio.AsyncResult): Device
    _init(config?: Device.ConstructorProperties): void
    /**
     * Asynchronously creates a #MbimDevice object to manage `file`.
     * When the operation is finished, `callback` will be invoked. You can then call
     * mbim_device_new_finish() to get the result of the operation.
     * @param file a #GFile.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished.
     */
    static new(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Proxy {

    // Own properties of Mbim-1.0.Mbim.Proxy

    readonly mbimProxyNClients: number
    readonly mbimProxyNDevices: number

    // Own fields of Mbim-1.0.Mbim.Proxy

    parent: GObject.Object
    priv: ProxyPrivate

    // Class property signals of Mbim-1.0.Mbim.Proxy

    connect(sigName: "notify::mbim-proxy-n-clients", callback: any): number
    on(sigName: "notify::mbim-proxy-n-clients", callback: any): number
    once(sigName: "notify::mbim-proxy-n-clients", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mbim-proxy-n-clients", ...args: any[]): void
    connect(sigName: "notify::mbim-proxy-n-devices", callback: any): number
    on(sigName: "notify::mbim-proxy-n-devices", callback: any): number
    once(sigName: "notify::mbim-proxy-n-devices", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mbim-proxy-n-devices", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MbimProxy structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
export class Proxy extends GObject.Object {

    // Own properties of Mbim-1.0.Mbim.Proxy

    static name: string

    // Constructors of Mbim-1.0.Mbim.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    /**
     * Creates a #MbimProxy object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a #MbimProxy object.
     * @constructor 
     */
    static new(): Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

export interface AtdsProvider {

    // Own fields of Mbim-1.0.Mbim.AtdsProvider

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #MbimProviderState given as a #guint32.
     * @field 
     */
    providerState: number
    /**
     * a string.
     * @field 
     */
    providerName: string
    /**
     * a #MbimAtdsProviderPlmnMode given as a #guint32.
     * @field 
     */
    plmnMode: number
    /**
     * a #guint32.
     * @field 
     */
    rssi: number
    /**
     * a #guint32.
     * @field 
     */
    errorRate: number
}

/**
 * A MbimAtdsProvider element.
 * @record 
 */
export class AtdsProvider {

    // Own properties of Mbim-1.0.Mbim.AtdsProvider

    static name: string

    // Constructors of Mbim-1.0.Mbim.AtdsProvider

    /**
     * Frees the memory allocated for the array of #MbimAtdsProvider structs.
     * @param array a #NULL terminated array of #MbimAtdsProvider structs.
     */
    static arrayFree(array: AtdsProviderArray): void
}

export interface CellInfoCdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoCdma

    /**
     * a #guint32.
     * @field 
     */
    servingCellFlag: number
    /**
     * a #guint32.
     * @field 
     */
    nid: number
    /**
     * a #guint32.
     * @field 
     */
    sid: number
    /**
     * a #guint32.
     * @field 
     */
    baseStationId: number
    /**
     * a #guint32.
     * @field 
     */
    baseLatitude: number
    /**
     * a #guint32.
     * @field 
     */
    baseLongitude: number
    /**
     * a #guint32.
     * @field 
     */
    refPn: number
    /**
     * a #guint32.
     * @field 
     */
    gpsSeconds: number
    /**
     * a #guint32.
     * @field 
     */
    pilotStrength: number
}

/**
 * A MbimCellInfoCdma element.
 * @record 
 */
export class CellInfoCdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoCdma

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoCdma

    /**
     * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
     */
    static arrayFree(array: CellInfoCdmaArray): void
}

export interface CellInfoNeighboringGsm {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    arfcn: number
    /**
     * a #guint32.
     * @field 
     */
    baseStationId: number
    /**
     * a #guint32.
     * @field 
     */
    rxLevel: number
}

/**
 * A MbimCellInfoNeighboringGsm element.
 * @record 
 */
export class CellInfoNeighboringGsm {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
     */
    static arrayFree(array: CellInfoNeighboringGsmArray): void
}

export interface CellInfoNeighboringLte {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringLte

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    earfcn: number
    /**
     * a #guint32.
     * @field 
     */
    physicalCellId: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #gint32.
     * @field 
     */
    rsrp: number
    /**
     * a #gint32.
     * @field 
     */
    rsrq: number
}

/**
 * A MbimCellInfoNeighboringLte element.
 * @record 
 */
export class CellInfoNeighboringLte {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringLte

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringLte

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
     */
    static arrayFree(array: CellInfoNeighboringLteArray): void
}

export interface CellInfoNeighboringNr {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringNr

    /**
     * a #MbimDataSubclass given as a #guint32.
     * @field 
     */
    systemSubType: number
    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a string.
     * @field 
     */
    cellId: string
    /**
     * a #guint32.
     * @field 
     */
    physicalCellId: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    sinr: number
}

/**
 * A MbimCellInfoNeighboringNr element.
 * @record 
 */
export class CellInfoNeighboringNr {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringNr

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringNr

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
     */
    static arrayFree(array: CellInfoNeighboringNrArray): void
}

export interface CellInfoNeighboringTdscdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    cellParameterId: number
    /**
     * a #guint32.
     * @field 
     */
    timingAdvance: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #guint32.
     * @field 
     */
    pathLoss: number
}

/**
 * A MbimCellInfoNeighboringTdscdma element.
 * @record 
 */
export class CellInfoNeighboringTdscdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
     */
    static arrayFree(array: CellInfoNeighboringTdscdmaArray): void
}

export interface CellInfoNeighboringUmts {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    primaryScramblingCode: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #gint32.
     * @field 
     */
    ecno: number
    /**
     * a #guint32.
     * @field 
     */
    pathLoss: number
}

/**
 * A MbimCellInfoNeighboringUmts element.
 * @record 
 */
export class CellInfoNeighboringUmts {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
     */
    static arrayFree(array: CellInfoNeighboringUmtsArray): void
}

export interface CellInfoServingGsm {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingGsm

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    timingAdvance: number
    /**
     * a #guint32.
     * @field 
     */
    arfcn: number
    /**
     * a #guint32.
     * @field 
     */
    baseStationId: number
    /**
     * a #guint32.
     * @field 
     */
    rxLevel: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingGsm

    /**
     * Frees the memory allocated for the #MbimCellInfoServingGsm.
     */
    free(): void
}

/**
 * A MbimCellInfoServingGsm element.
 * @record 
 */
export class CellInfoServingGsm {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingGsm

    static name: string
}

export interface CellInfoServingLte {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingLte

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    earfcn: number
    /**
     * a #guint32.
     * @field 
     */
    physicalCellId: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #gint32.
     * @field 
     */
    rsrp: number
    /**
     * a #gint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    timingAdvance: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingLte

    /**
     * Frees the memory allocated for the #MbimCellInfoServingLte.
     */
    free(): void
}

/**
 * A MbimCellInfoServingLte element.
 * @record 
 */
export class CellInfoServingLte {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingLte

    static name: string
}

export interface CellInfoServingNr {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingNr

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint64.
     * @field 
     */
    nci: number
    /**
     * a #guint32.
     * @field 
     */
    physicalCellId: number
    /**
     * a #guint32.
     * @field 
     */
    nrarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    sinr: number
    /**
     * a #guint64.
     * @field 
     */
    timingAdvance: number
}

/**
 * A MbimCellInfoServingNr element.
 * @record 
 */
export class CellInfoServingNr {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingNr

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoServingNr

    /**
     * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
     */
    static arrayFree(array: CellInfoServingNrArray): void
}

export interface CellInfoServingTdscdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingTdscdma

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    cellParameterId: number
    /**
     * a #guint32.
     * @field 
     */
    timingAdvance: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #guint32.
     * @field 
     */
    pathLoss: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingTdscdma

    /**
     * Frees the memory allocated for the #MbimCellInfoServingTdscdma.
     */
    free(): void
}

/**
 * A MbimCellInfoServingTdscdma element.
 * @record 
 */
export class CellInfoServingTdscdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingTdscdma

    static name: string
}

export interface CellInfoServingUmts {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingUmts

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #guint32.
     * @field 
     */
    locationAreaCode: number
    /**
     * a #guint32.
     * @field 
     */
    cellId: number
    /**
     * a #guint32.
     * @field 
     */
    frequencyInfoUl: number
    /**
     * a #guint32.
     * @field 
     */
    frequencyInfoDl: number
    /**
     * a #guint32.
     * @field 
     */
    frequencyInfoNt: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    primaryScramblingCode: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #gint32.
     * @field 
     */
    ecno: number
    /**
     * a #guint32.
     * @field 
     */
    pathLoss: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingUmts

    /**
     * Frees the memory allocated for the #MbimCellInfoServingUmts.
     */
    free(): void
}

/**
 * A MbimCellInfoServingUmts element.
 * @record 
 */
export class CellInfoServingUmts {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingUmts

    static name: string
}

export interface DeprecatedLteAttachStatus {

    // Own fields of Mbim-1.0.Mbim.DeprecatedLteAttachStatus

    lteAttachState: number
    ipType: number
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
}

export class DeprecatedLteAttachStatus {

    // Own properties of Mbim-1.0.Mbim.DeprecatedLteAttachStatus

    static name: string
}

export interface DeviceClass {
}

export abstract class DeviceClass {

    // Own properties of Mbim-1.0.Mbim.DeviceClass

    static name: string
}

export interface DevicePrivate {
}

export class DevicePrivate {

    // Own properties of Mbim-1.0.Mbim.DevicePrivate

    static name: string
}

export interface DeviceServiceElement {

    // Own fields of Mbim-1.0.Mbim.DeviceServiceElement

    /**
     * a #MbimUuid.
     * @field 
     */
    deviceServiceId: Uuid
    /**
     * a #guint32.
     * @field 
     */
    dssPayload: number
    /**
     * a #guint32.
     * @field 
     */
    maxDssInstances: number
    /**
     * a #guint32.
     * @field 
     */
    cidsCount: number
    /**
     * an array of #guint32 values.
     * @field 
     */
    cids: number
}

/**
 * A MbimDeviceServiceElement element.
 * @record 
 */
export class DeviceServiceElement {

    // Own properties of Mbim-1.0.Mbim.DeviceServiceElement

    static name: string

    // Constructors of Mbim-1.0.Mbim.DeviceServiceElement

    /**
     * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
     * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
     */
    static arrayFree(array: DeviceServiceElementArray): void
}

export interface EventEntry {

    // Own fields of Mbim-1.0.Mbim.EventEntry

    /**
     * a #MbimUuid.
     * @field 
     */
    deviceServiceId: Uuid
    /**
     * a #guint32.
     * @field 
     */
    cidsCount: number
    /**
     * an array of #guint32 values.
     * @field 
     */
    cids: number
}

/**
 * A MbimEventEntry element.
 * @record 
 */
export class EventEntry {

    // Own properties of Mbim-1.0.Mbim.EventEntry

    static name: string

    // Constructors of Mbim-1.0.Mbim.EventEntry

    /**
     * Frees the memory allocated for the array of #MbimEventEntry structs.
     * @param array a #NULL terminated array of #MbimEventEntry structs.
     */
    static arrayFree(array: EventEntryArray): void
}

export interface IPv4 {

    // Own fields of Mbim-1.0.Mbim.IPv4

    /**
     * 4 bytes specifying the IPv4 address.
     * @field 
     */
    addr: Uint8Array
}

/**
 * An IPv4 address.
 * @record 
 */
export class IPv4 {

    // Own properties of Mbim-1.0.Mbim.IPv4

    static name: string
}

export interface IPv4Element {

    // Own fields of Mbim-1.0.Mbim.IPv4Element

    /**
     * a #guint32.
     * @field 
     */
    onLinkPrefixLength: number
    /**
     * a #MbimIPv4.
     * @field 
     */
    ipv4Address: IPv4
}

/**
 * A MbimIPv4Element element.
 * @record 
 */
export class IPv4Element {

    // Own properties of Mbim-1.0.Mbim.IPv4Element

    static name: string

    // Constructors of Mbim-1.0.Mbim.IPv4Element

    /**
     * Frees the memory allocated for the array of #MbimIPv4Element structs.
     * @param array a #NULL terminated array of #MbimIPv4Element structs.
     */
    static arrayFree(array: IPv4ElementArray): void
}

export interface IPv6 {

    // Own fields of Mbim-1.0.Mbim.IPv6

    /**
     * 16 bytes specifying the IPv6 address.
     * @field 
     */
    addr: Uint8Array
}

/**
 * An IPv6 address.
 * @record 
 */
export class IPv6 {

    // Own properties of Mbim-1.0.Mbim.IPv6

    static name: string
}

export interface IPv6Element {

    // Own fields of Mbim-1.0.Mbim.IPv6Element

    /**
     * a #guint32.
     * @field 
     */
    onLinkPrefixLength: number
    /**
     * a #MbimIPv6
     * @field 
     */
    ipv6Address: IPv6
}

/**
 * A MbimIPv6Element element.
 * @record 
 */
export class IPv6Element {

    // Own properties of Mbim-1.0.Mbim.IPv6Element

    static name: string

    // Constructors of Mbim-1.0.Mbim.IPv6Element

    /**
     * Frees the memory allocated for the array of #MbimIPv6Element structs.
     * @param array a #NULL terminated array of #MbimIPv6Element structs.
     */
    static arrayFree(array: IPv6ElementArray): void
}

export interface LteAttachConfiguration {

    // Own fields of Mbim-1.0.Mbim.LteAttachConfiguration

    /**
     * a #MbimContextIpType given as a #guint32.
     * @field 
     */
    ipType: number
    /**
     * a #MbimLteAttachContextRoamingControl given as a #guint32.
     * @field 
     */
    roaming: number
    /**
     * a #MbimContextSource given as a #guint32.
     * @field 
     */
    source: number
    /**
     * a string.
     * @field 
     */
    accessString: string
    /**
     * a string.
     * @field 
     */
    userName: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    authProtocol: number
}

/**
 * A MbimLteAttachConfiguration element.
 * @record 
 */
export class LteAttachConfiguration {

    // Own properties of Mbim-1.0.Mbim.LteAttachConfiguration

    static name: string

    // Constructors of Mbim-1.0.Mbim.LteAttachConfiguration

    /**
     * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
     * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
     */
    static arrayFree(array: LteAttachConfigurationArray): void
}

export interface Message {

    // Owm methods of Mbim-1.0.Mbim.Message

    /**
     * Parses and returns parameters of the 'Location' response command in the 'ATDS' service.
     */
    atdsLocationResponseParse(): [ /* returnType */ boolean, /* outLac */ number, /* outTac */ number, /* outCellId */ number ]
    /**
     * Parses and returns parameters of the 'Operators' response command in the 'ATDS' service.
     */
    atdsOperatorsResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ AtdsProvider[] ]
    /**
     * Parses and returns parameters of the 'RAT' response command in the 'ATDS' service.
     */
    atdsRatResponseParse(): [ /* returnType */ boolean, /* outMode */ AtdsRatMode ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'ATDS' service.
     */
    atdsRegisterStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outRegisterState */ RegisterState, /* outRegisterMode */ RegisterMode, /* outAvailableDataClasses */ DataClass, /* outCurrentCellularClass */ CellularClass, /* outProviderId */ string, /* outProviderName */ string, /* outRoamingText */ string, /* outRegistrationFlag */ RegistrationFlag ]
    /**
     * Parses and returns parameters of the 'Signal' response command in the 'ATDS' service.
     */
    atdsSignalResponseParse(): [ /* returnType */ boolean, /* outRssi */ number, /* outErrorRate */ number, /* outRscp */ number, /* outEcno */ number, /* outRsrq */ number, /* outRsrp */ number, /* outRssnr */ number ]
    /**
     * Parses and returns parameters of the 'Aka' response command in the 'Auth' service.
     */
    authAkaResponseParse(): [ /* returnType */ boolean, /* outRes */ Uint8Array, /* outResLen */ number, /* outIntegratingKey */ Uint8Array, /* outCipheringKey */ Uint8Array, /* outAuts */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Akap' response command in the 'Auth' service.
     */
    authAkapResponseParse(): [ /* returnType */ boolean, /* outRes */ Uint8Array, /* outResLen */ number, /* outIntegratingKey */ Uint8Array, /* outCipheringKey */ Uint8Array, /* outAuts */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Sim' response command in the 'Auth' service.
     */
    authSimResponseParse(): [ /* returnType */ boolean, /* outSres1 */ number, /* outKc1 */ number, /* outSres2 */ number, /* outKc2 */ number, /* outSres3 */ number, /* outKc3 */ number, /* outN */ number ]
    /**
     * Gets the result of the 'Close' operation in the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    closeDoneGetResult(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    closeDoneGetStatusCode(): StatusError
    /**
     * Appends the contents of `buffer` to `self`.
     * @param buffer raw buffer to append to the message.
     * @param bufferSize length of the data in `buffer`.
     */
    commandAppend(buffer: number, bufferSize: number): void
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetCid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Gets the result of the 'Command' operation in the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetResult(): boolean
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetServiceId(): Uuid
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetStatusCode(): StatusError
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetCid(): number
    /**
     * Get the command type of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetCommandType(): MessageCommandType
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetServiceId(): Uuid
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Basic Connect' service.
     */
    connectNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outActivationState */ ActivationState, /* outVoiceCallState */ VoiceCallState, /* outIpType */ ContextIpType, /* outContextType */ Uuid, /* outNwError */ number ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Basic Connect' service.
     */
    connectResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outActivationState */ ActivationState, /* outVoiceCallState */ VoiceCallState, /* outIpType */ ContextIpType, /* outContextType */ Uuid, /* outNwError */ number ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Basic Connect' service.
     */
    deviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType, /* outCellularClass */ CellularClass, /* outVoiceClass */ VoiceClass, /* outSimClass */ SimClass, /* outDataClass */ DataClass, /* outSmsCaps */ SmsCaps, /* outControlCaps */ CtrlCaps, /* outMaxSessions */ number, /* outCustomDataClass */ string, /* outDeviceId */ string, /* outFirmwareInfo */ string, /* outHardwareInfo */ string ]
    /**
     * Parses and returns parameters of the 'Device Service Subscribe List' response command in the 'Basic Connect' service.
     */
    deviceServiceSubscribeListResponseParse(): [ /* returnType */ boolean, /* outEventsCount */ number, /* outEvents */ EventEntry[] ]
    /**
     * Create a new request for the 'Events' response command in the 'Basic Connect' service.
     * @param eventsCount return location for a #guint32, or %NULL if the 'EventsCount' field is not needed.
     * @param events return location for a newly allocated array of #MbimEventEntrys, or %NULL if the 'Events' field is not needed. Free the returned value with mbim_event_entry_array_free().
     */
    deviceServiceSubscriberListResponseParse(eventsCount: number, events: EventEntry): boolean
    /**
     * Parses and returns parameters of the 'Device Services' response command in the 'Basic Connect' service.
     */
    deviceServicesResponseParse(): [ /* returnType */ boolean, /* outDeviceServicesCount */ number, /* outMaxDssSessions */ number, /* outDeviceServices */ DeviceServiceElement[] ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'DSS' service.
     */
    dssConnectResponseParse(): boolean
    /**
     * Create a #MbimMessage with the same contents as `self`.
     */
    dup(): Message
    /**
     * Parses and returns parameters of the 'Emergency Mode' notification command in the 'Basic Connect' service.
     */
    emergencyModeNotificationParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState ]
    /**
     * Parses and returns parameters of the 'Emergency Mode' response command in the 'Basic Connect' service.
     */
    emergencyModeResponseParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState ]
    /**
     * Get the error in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    errorGetError(): GLib.Error
    /**
     * Get the error code in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    errorGetErrorStatusCode(): ProtocolError
    /**
     * Gets the whole message length.
     */
    getMessageLength(): number
    /**
     * Gets the message type.
     */
    getMessageType(): MessageType
    /**
     * Gets a printable string with the contents of the whole MBIM message.
     * 
     * This method will not fail if the parsing of the message contents fails,
     * a fallback text with the error will be included in the generated printable
     * information instead.
     * @param linePrefix prefix string to use in each new generated line.
     * @param headersOnly %TRUE if only basic headers should be printed.
     */
    getPrintable(linePrefix: string, headersOnly: boolean): string
    /**
     * Gets a printable string with the contents of the whole MBIM message.
     * 
     * Unlike mbim_message_get_printable(), this method allows specifying the
     * MBIMEx version agreed between host and device, so that the correct
     * processing and parsing is done on messages in the newer MBIMEx versions.
     * 
     * If `mbimex_version_major` < 2, this method behaves exactly as
     * mbim_message_get_printable().
     * 
     * If the specified `mbimex_version_major` is unsupported, an error will be
     * returned.
     * 
     * This method will not fail if the parsing of the message contents fails,
     * a fallback text with the error will be included in the generated printable
     * information instead.
     * @param mbimexVersionMajor major version of the agreed MBIMEx support.
     * @param mbimexVersionMinor minor version of the agreed MBIMEx support.
     * @param linePrefix prefix string to use in each new generated line.
     * @param headersOnly %TRUE if only basic headers should be printed.
     */
    getPrintableFull(mbimexVersionMajor: number, mbimexVersionMinor: number, linePrefix: string, headersOnly: boolean): string
    /**
     * Gets the whole raw data buffer of the #MbimMessage.
     */
    getRaw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the transaction ID of the message.
     */
    getTransactionId(): number
    /**
     * Parses and returns parameters of the 'Home Provider' response command in the 'Basic Connect' service.
     */
    homeProviderResponseParse(): [ /* returnType */ boolean, /* outProvider */ Provider ]
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetCid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetServiceId(): Uuid
    /**
     * Parses and returns parameters of the 'IP Configuration' notification command in the 'Basic Connect' service.
     */
    ipConfigurationNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag, /* outIpv4AddressCount */ number, /* outIpv4Address */ IPv4Element[], /* outIpv6AddressCount */ number, /* outIpv6Address */ IPv6Element[], /* outIpv4Gateway */ IPv4, /* outIpv6Gateway */ IPv6, /* outIpv4DnsServerCount */ number, /* outIpv4DnsServer */ IPv4[], /* outIpv6DnsServerCount */ number, /* outIpv6DnsServer */ IPv6[], /* outIpv4Mtu */ number, /* outIpv6Mtu */ number ]
    /**
     * Parses and returns parameters of the 'IP Configuration' response command in the 'Basic Connect' service.
     */
    ipConfigurationResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag, /* outIpv4AddressCount */ number, /* outIpv4Address */ IPv4Element[], /* outIpv6AddressCount */ number, /* outIpv6Address */ IPv6Element[], /* outIpv4Gateway */ IPv4, /* outIpv6Gateway */ IPv6, /* outIpv4DnsServerCount */ number, /* outIpv4DnsServer */ IPv4[], /* outIpv6DnsServerCount */ number, /* outIpv6DnsServer */ IPv6[], /* outIpv4Mtu */ number, /* outIpv6Mtu */ number ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Basic Connect' service.
     */
    ipPacketFiltersResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outPacketFiltersCount */ number, /* outPacketFilters */ PacketFilter[] ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsBaseStationsInfoResponseParse(): [ /* returnType */ boolean, /* outSystemType */ DataClass, /* outGsmServingCell */ CellInfoServingGsm | null, /* outUmtsServingCell */ CellInfoServingUmts | null, /* outTdscdmaServingCell */ CellInfoServingTdscdma | null, /* outLteServingCell */ CellInfoServingLte | null, /* outGsmNeighboringCellsCount */ number, /* outGsmNeighboringCells */ CellInfoNeighboringGsm[] | null, /* outUmtsNeighboringCellsCount */ number, /* outUmtsNeighboringCells */ CellInfoNeighboringUmts[] | null, /* outTdscdmaNeighboringCellsCount */ number, /* outTdscdmaNeighboringCells */ CellInfoNeighboringTdscdma[] | null, /* outLteNeighboringCellsCount */ number, /* outLteNeighboringCells */ CellInfoNeighboringLte[] | null, /* outCdmaCellsCount */ number, /* outCdmaCells */ CellInfoCdma[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsDeviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType, /* outCellularClass */ CellularClass, /* outVoiceClass */ VoiceClass, /* outSmsClass */ SimClass, /* outDataClass */ DataClass, /* outSmsCaps */ SmsCaps, /* outControlCaps */ CtrlCaps, /* outMaxSessions */ number, /* outCustomDataClass */ string, /* outDeviceId */ string, /* outFirmwareInfo */ string, /* outHardwareInfo */ string, /* outExecutorIndex */ number ]
    /**
     * Parses and returns parameters of the 'Device Slot Mappings' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsDeviceSlotMappingsResponseParse(): [ /* returnType */ boolean, /* outMapCount */ number, /* outSlotMap */ Slot[] ]
    /**
     * Parses and returns parameters of the 'Location Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLocationInfoStatusNotificationParse(): [ /* returnType */ boolean, /* outLocationAreaCode */ number, /* outTrackingAreaCode */ number, /* outCellId */ number ]
    /**
     * Parses and returns parameters of the 'Location Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLocationInfoStatusResponseParse(): [ /* returnType */ boolean, /* outLocationAreaCode */ number, /* outTrackingAreaCode */ number, /* outCellId */ number ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachConfigurationNotificationParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number, /* outConfigurations */ LteAttachConfiguration[] ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachConfigurationResponseParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number, /* outConfigurations */ LteAttachConfiguration[] ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachInfoNotificationParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState, /* outIpType */ ContextIpType, /* outAccessString */ string, /* outUserName */ string, /* outPassword */ string, /* outCompression */ Compression, /* outAuthProtocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachInfoResponseParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState, /* outIpType */ ContextIpType, /* outAccessString */ string, /* outUserName */ string, /* outPassword */ string, /* outCompression */ Compression, /* outAuthProtocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachStatusNotificationParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ DeprecatedLteAttachStatus ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachStatusResponseParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ DeprecatedLteAttachStatus ]
    /**
     * Parses and returns parameters of the 'PCO' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsPcoNotificationParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue ]
    /**
     * Parses and returns parameters of the 'PCO' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsPcoResponseParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsProvisionedContextsNotificationParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number, /* outProvisionedContexts */ ProvisionedContextElementV2[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsProvisionedContextsResponseParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number, /* outProvisionedContexts */ ProvisionedContextElementV2[] ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSlotInfoStatusNotificationParse(): [ /* returnType */ boolean, /* outSlotIndex */ number, /* outState */ UiccSlotState ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSlotInfoStatusResponseParse(): [ /* returnType */ boolean, /* outSlotIndex */ number, /* outState */ UiccSlotState ]
    /**
     * Parses and returns parameters of the 'Sys Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSysCapsResponseParse(): [ /* returnType */ boolean, /* outNumberOfExecutors */ number, /* outNumberOfSlots */ number, /* outConcurrency */ number, /* outModemId */ number ]
    /**
     * Parses and returns parameters of the 'Version' response command in the 'Ms Basic Connect Extensions V2' service.
     */
    msBasicConnectExtensionsV2VersionResponseParse(): [ /* returnType */ boolean, /* outMbimVersion */ number, /* outMbimExtendedVersion */ number ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3BaseStationsInfoResponseParse(): [ /* returnType */ boolean, /* outSystemType */ DataClassV3, /* outSystemSubType */ DataSubclass, /* outGsmServingCell */ CellInfoServingGsm | null, /* outUmtsServingCell */ CellInfoServingUmts | null, /* outTdscdmaServingCell */ CellInfoServingTdscdma | null, /* outLteServingCell */ CellInfoServingLte | null, /* outGsmNeighboringCellsCount */ number, /* outGsmNeighboringCells */ CellInfoNeighboringGsm[] | null, /* outUmtsNeighboringCellsCount */ number, /* outUmtsNeighboringCells */ CellInfoNeighboringUmts[] | null, /* outTdscdmaNeighboringCellsCount */ number, /* outTdscdmaNeighboringCells */ CellInfoNeighboringTdscdma[] | null, /* outLteNeighboringCellsCount */ number, /* outLteNeighboringCells */ CellInfoNeighboringLte[] | null, /* outCdmaCellsCount */ number, /* outCdmaCells */ CellInfoCdma[] | null, /* outNrServingCellsCount */ number, /* outNrServingCells */ CellInfoServingNr[] | null, /* outNrNeighborCellsCount */ number, /* outNrNeighborCells */ CellInfoNeighboringNr[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3DeviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType, /* outCellularClass */ CellularClass, /* outVoiceClass */ VoiceClass, /* outSimClass */ SimClass, /* outDataClass */ DataClassV3, /* outSmsCaps */ SmsCaps, /* outControlCaps */ CtrlCaps, /* outDataSubclass */ DataSubclass, /* outMaxSessions */ number, /* outExecutorIndex */ number, /* outWcdmaBandClass */ number, /* outLteBandClassCount */ number, /* outLteBandClass */ number | null, /* outNrBandClassCount */ number, /* outNrBandClass */ number | null, /* outCustomDataClass */ string, /* outDeviceId */ string, /* outFirmwareInfo */ string, /* outHardwareInfo */ string ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3LteAttachInfoNotificationParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState, /* outNwError */ NwError, /* outIpType */ ContextIpType, /* outAccessString */ string, /* outUserName */ string, /* outPassword */ string, /* outCompression */ Compression, /* outAuthProtocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3LteAttachInfoResponseParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState, /* outNwError */ NwError, /* outIpType */ ContextIpType, /* outAccessString */ string, /* outUserName */ string, /* outPassword */ string, /* outCompression */ Compression, /* outAuthProtocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3ModemConfigurationNotificationParse(): [ /* returnType */ boolean, /* outModemConfigurationStatus */ ModemConfigurationStatus, /* outConfigurationName */ string, /* outUnnamedIes */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3ModemConfigurationResponseParse(): [ /* returnType */ boolean, /* outConfigurationStatus */ ModemConfigurationStatus, /* outConfigurationName */ string, /* outUnnamedIes */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Registration Parameters' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3RegistrationParametersResponseParse(): [ /* returnType */ boolean, /* outMicoMode */ MicoMode, /* outDrxCycle */ DrxCycle, /* outLadnInfo */ LadnInfo, /* outDefaultPduActivationHint */ DefaultPduActivationHint, /* outReRegisterIfNedeed */ boolean, /* outUnnamedIes */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Wake Reason' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3WakeReasonResponseParse(): [ /* returnType */ boolean, /* outWakeType */ WakeType, /* outSessionId */ number, /* outWakeTlv */ Tlv ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2PacketServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outCurrentDataClass */ DataClass, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number, /* outFrequencyRange */ FrequencyRange ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2PacketServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outCurrentDataClass */ DataClass, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number, /* outFrequencyRange */ FrequencyRange ]
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2RegisterStateNotificationParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outRegisterState */ RegisterState, /* outRegisterMode */ RegisterMode, /* outAvailableDataClasses */ DataClass, /* outCurrentCellularClass */ CellularClass, /* outProviderId */ string, /* outProviderName */ string, /* outRoamingText */ string, /* outRegistrationFlag */ RegistrationFlag, /* outPreferredDataClasses */ DataClass ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2RegisterStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outRegisterState */ RegisterState, /* outRegisterMode */ RegisterMode, /* outAvailableDataClasses */ DataClass, /* outCurrentCellularClass */ CellularClass, /* outProviderId */ string, /* outProviderName */ string, /* outRoamingText */ string, /* outRegistrationFlag */ RegistrationFlag, /* outPreferredDataClasses */ DataClass ]
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2SignalStateNotificationParse(): [ /* returnType */ boolean, /* outRssi */ number, /* outErrorRate */ number, /* outSignalStrengthInterval */ number, /* outRssiThreshold */ number, /* outErrorRateThreshold */ number, /* outRsrpSnrCount */ number, /* outRsrpSnr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2SignalStateResponseParse(): [ /* returnType */ boolean, /* outRssi */ number, /* outErrorRate */ number, /* outSignalStrengthInterval */ number, /* outRssiThreshold */ number, /* outErrorRateThreshold */ number, /* outRsrpSnrCount */ number, /* outRsrpSnr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3ConnectNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outActivationState */ ActivationState, /* outVoiceCallState */ VoiceCallState, /* outIpType */ ContextIpType, /* outContextType */ Uuid, /* outNwError */ number, /* outMediaPreference */ AccessMediaType, /* outAccessString */ string, /* outUnnamedIes */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3ConnectResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outActivationState */ ActivationState, /* outVoiceCallState */ VoiceCallState, /* outIpType */ ContextIpType, /* outContextType */ Uuid, /* outNwError */ number, /* outMediaPreference */ AccessMediaType, /* outAccessString */ string, /* outUnnamedIes */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3IpPacketFiltersResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number, /* outPacketFiltersCount */ number, /* outPacketFilters */ PacketFilterV3[] ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3PacketServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outHighestAvailableDataClass */ DataClassV3, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number, /* outFrequencyRange */ FrequencyRange, /* outDataSubclass */ DataSubclass, /* outTai */ Tai ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3PacketServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outHighestAvailableDataClass */ DataClassV3, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number, /* outFrequencyRange */ FrequencyRange, /* outDataSubclass */ DataSubclass, /* outTai */ Tai ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3SubscriberReadyStatusNotificationParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState, /* outFlags */ SubscriberReadyStatusFlag, /* outSubscriberId */ string, /* outSimIccId */ string, /* outReadyInfo */ ReadyInfoFlag, /* outTelephoneNumbersCount */ number, /* outTelephoneNumbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3SubscriberReadyStatusResponseParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState, /* outFlags */ SubscriberReadyStatusFlag, /* outSubscriberId */ string, /* outSimIccId */ string, /* outReadyInfo */ ReadyInfoFlag, /* outTelephoneNumbersCount */ number, /* outTelephoneNumbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Get' response command in the 'MS Firmware ID' service.
     */
    msFirmwareIdGetResponseParse(): [ /* returnType */ boolean, /* outFirmwareId */ Uuid ]
    /**
     * Parses and returns parameters of the 'Config' response command in the 'MS SAR' service.
     */
    msSarConfigResponseParse(): [ /* returnType */ boolean, /* outMode */ SarControlMode, /* outBackoffState */ SarBackoffState, /* outWifiIntegration */ SarWifiHardwareState, /* outConfigStatesCount */ number, /* outConfigStates */ SarConfigState[] ]
    /**
     * Parses and returns parameters of the 'Transmission status' notification command in the 'MS SAR' service.
     */
    msSarTransmissionStatusNotificationParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus, /* outTransmissionStatus */ TransmissionState, /* outHysteresisTimer */ number ]
    /**
     * Parses and returns parameters of the 'Transmission status' response command in the 'MS SAR' service.
     */
    msSarTransmissionStatusResponseParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus, /* outTransmissionStatus */ TransmissionState, /* outHysteresisTimer */ number ]
    /**
     * Parses and returns parameters of the 'APDU' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessApduResponseParse(): [ /* returnType */ boolean, /* outStatus */ number, /* outResponse */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'ATR' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessAtrResponseParse(): [ /* returnType */ boolean, /* outAtr */ string ]
    /**
     * Parses and returns parameters of the 'Close Channel' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessCloseChannelResponseParse(): [ /* returnType */ boolean, /* outStatus */ number ]
    /**
     * Parses and returns parameters of the 'Open Channel' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessOpenChannelResponseParse(): [ /* returnType */ boolean, /* outStatus */ number, /* outChannel */ number, /* outResponse */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Reset' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessResetResponseParse(): [ /* returnType */ boolean, /* outPassThroughStatus */ UiccPassThroughStatus ]
    /**
     * Parses and returns parameters of the 'Terminal Capability' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessTerminalCapabilityResponseParse(): [ /* returnType */ boolean, /* outTerminalCapabilityCount */ number, /* outTerminalCapability */ TerminalCapabilityInfo[] ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' notification command in the 'Basic Connect' service.
     */
    multicarrierProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' response command in the 'Basic Connect' service.
     */
    multicarrierProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Network Idle Hint' response command in the 'Basic Connect' service.
     */
    networkIdleHintResponseParse(): [ /* returnType */ boolean, /* outState */ NetworkIdleHintState ]
    /**
     * Gets the result of the 'Open' operation in the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    openDoneGetResult(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    openDoneGetStatusCode(): StatusError
    /**
     * Get the maximum control transfer set to be used in the #MbimMessage of type
     * %MBIM_MESSAGE_TYPE_OPEN.
     */
    openGetMaxControlTransfer(): number
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Basic Connect' service.
     */
    packetServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outHighestAvailableDataClass */ DataClass, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Basic Connect' service.
     */
    packetServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number, /* outPacketServiceState */ PacketServiceState, /* outHighestAvailableDataClass */ DataClass, /* outUplinkSpeed */ number, /* outDownlinkSpeed */ number ]
    /**
     * Parses and returns parameters of the 'Packet Statistics' response command in the 'Basic Connect' service.
     */
    packetStatisticsResponseParse(): [ /* returnType */ boolean, /* outInDiscards */ number, /* outInErrors */ number, /* outInOctets */ number, /* outInPackets */ number, /* outOutOctets */ number, /* outOutPackets */ number, /* outOutErrors */ number, /* outOutDiscards */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' notification command in the 'Phonebook' service.
     */
    phonebookConfigurationNotificationParse(): [ /* returnType */ boolean, /* outState */ PhonebookState, /* outNumberOfEntries */ number, /* outUsedEntries */ number, /* outMaxNumberLength */ number, /* outMaxName */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Phonebook' service.
     */
    phonebookConfigurationResponseParse(): [ /* returnType */ boolean, /* outState */ PhonebookState, /* outNumberOfEntries */ number, /* outUsedEntries */ number, /* outMaxNumberLength */ number, /* outMaxName */ number ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'Phonebook' service.
     */
    phonebookDeleteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Read' response command in the 'Phonebook' service.
     */
    phonebookReadResponseParse(): [ /* returnType */ boolean, /* outEntryCount */ number, /* outEntries */ PhonebookEntry[] ]
    /**
     * Parses and returns parameters of the 'Write' response command in the 'Phonebook' service.
     */
    phonebookWriteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Pin List' response command in the 'Basic Connect' service.
     */
    pinListResponseParse(): [ /* returnType */ boolean, /* outPinDescPin1 */ PinDesc, /* outPinDescPin2 */ PinDesc, /* outPinDescDeviceSimPin */ PinDesc, /* outPinDescDeviceFirstSimPin */ PinDesc, /* outPinDescNetworkPin */ PinDesc, /* outPinDescNetworkSubsetPin */ PinDesc, /* outPinDescServiceProviderPin */ PinDesc, /* outPinDescCorporatePin */ PinDesc, /* outPinDescSubsidyLock */ PinDesc, /* outPinDescCustom */ PinDesc ]
    /**
     * Parses and returns parameters of the 'Pin' response command in the 'Basic Connect' service.
     */
    pinResponseParse(): [ /* returnType */ boolean, /* outPinType */ PinType, /* outPinState */ PinState, /* outRemainingAttempts */ number ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' notification command in the 'Basic Connect' service.
     */
    preferredProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' response command in the 'Basic Connect' service.
     */
    preferredProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Basic Connect' service.
     */
    provisionedContextsNotificationParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number, /* outProvisionedContexts */ ProvisionedContextElement[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Basic Connect' service.
     */
    provisionedContextsResponseParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number, /* outProvisionedContexts */ ProvisionedContextElement[] ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Proxy Control' service.
     */
    proxyControlConfigurationResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Version' notification command in the 'Proxy Control' service.
     */
    proxyControlVersionNotificationParse(): [ /* returnType */ boolean, /* outMbimVersion */ number, /* outMbimExtendedVersion */ number ]
    /**
     * Parses and returns parameters of the 'File Open' response command in the 'QDU' service.
     */
    qduFileOpenResponseParse(): [ /* returnType */ boolean, /* outMaxTransferSize */ number, /* outMaxWindowSize */ number ]
    /**
     * Parses and returns parameters of the 'File Write' response command in the 'QDU' service.
     */
    qduFileWriteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Quectel Read Version' response command in the 'QDU' service.
     */
    qduQuectelReadVersionResponseParse(): [ /* returnType */ boolean, /* outVersionId */ number, /* outVersion */ string ]
    /**
     * Parses and returns parameters of the 'Quectel Reboot' response command in the 'QDU' service.
     */
    qduQuectelRebootResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Update Session' response command in the 'QDU' service.
     */
    qduUpdateSessionResponseParse(): [ /* returnType */ boolean, /* outCurrentSessionType */ QduSessionType, /* outCurrentSessionStatus */ QduSessionStatus, /* outLastSessionType */ QduSessionType, /* outLastSessionResult */ QduSessionResult, /* outLastSessionErrorOffset */ number, /* outLastSessionErrorSize */ number ]
    /**
     * Parses and returns parameters of the 'msg' notification command in the 'QMI' service.
     */
    qmiMsgNotificationParse(): [ /* returnType */ boolean, /* outQmux */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'msg' response command in the 'QMI' service.
     */
    qmiMsgResponseParse(): [ /* returnType */ boolean, /* outQmux */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Quectel' service.
     */
    quectelRadioStateResponseParse(): [ /* returnType */ boolean, /* outRadioState */ QuectelRadioSwitchState ]
    /**
     * Parses and returns parameters of the 'Radio State' notification command in the 'Basic Connect' service.
     */
    radioStateNotificationParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState, /* outSwRadioState */ RadioSwitchState ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Basic Connect' service.
     */
    radioStateResponseParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState, /* outSwRadioState */ RadioSwitchState ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Message
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Basic Connect' service.
     */
    registerStateNotificationParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outRegisterState */ RegisterState, /* outRegisterMode */ RegisterMode, /* outAvailableDataClasses */ DataClass, /* outCurrentCellularClass */ CellularClass, /* outProviderId */ string, /* outProviderName */ string, /* outRoamingText */ string, /* outRegistrationFlag */ RegistrationFlag ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Basic Connect' service.
     */
    registerStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outRegisterState */ RegisterState, /* outRegisterMode */ RegisterMode, /* outAvailableDataClasses */ DataClass, /* outCurrentCellularClass */ CellularClass, /* outProviderId */ string, /* outProviderName */ string, /* outRoamingText */ string, /* outRegistrationFlag */ RegistrationFlag ]
    /**
     * Gets the result of the operation from the response message, which
     * can be either a %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message or a message of the
     * specified `expected` type.
     * @param expected expected #MbimMessageType if there isn't any error in the operation.
     */
    responseGetResult(expected: MessageType): boolean
    /**
     * Parses and returns parameters of the 'Service Activation' response command in the 'Basic Connect' service.
     */
    serviceActivationResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError, /* outBuffer */ Uint8Array ]
    /**
     * Sets the transaction ID of the message.
     * @param transactionId the transaction id.
     */
    setTransactionId(transactionId: number): void
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Basic Connect' service.
     */
    signalStateNotificationParse(): [ /* returnType */ boolean, /* outRssi */ number, /* outErrorRate */ number, /* outSignalStrengthInterval */ number, /* outRssiThreshold */ number, /* outErrorRateThreshold */ number ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Basic Connect' service.
     */
    signalStateResponseParse(): [ /* returnType */ boolean, /* outRssi */ number, /* outErrorRate */ number, /* outSignalStrengthInterval */ number, /* outRssiThreshold */ number, /* outErrorRateThreshold */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'SMS' service.
     */
    smsConfigurationResponseParse(): [ /* returnType */ boolean, /* outSmsStorageState */ SmsStorageState, /* outFormat */ SmsFormat, /* outMaxMessages */ number, /* outCdmaShortMessageSize */ number, /* outScAddress */ string ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'SMS' service.
     */
    smsDeleteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Message Store Status' notification command in the 'SMS' service.
     */
    smsMessageStoreStatusNotificationParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag, /* outMessageIndex */ number ]
    /**
     * Parses and returns parameters of the 'Message Store Status' response command in the 'SMS' service.
     */
    smsMessageStoreStatusResponseParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag, /* outMessageIndex */ number ]
    /**
     * Parses and returns parameters of the 'Read' notification command in the 'SMS' service.
     */
    smsReadNotificationParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat, /* outMessagesCount */ number, /* outPduMessages */ SmsPduReadRecord[], /* outCdmaMessages */ SmsCdmaReadRecord[] ]
    /**
     * Parses and returns parameters of the 'Read' response command in the 'SMS' service.
     */
    smsReadResponseParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat, /* outMessagesCount */ number, /* outPduMessages */ SmsPduReadRecord[], /* outCdmaMessages */ SmsCdmaReadRecord[] ]
    /**
     * Parses and returns parameters of the 'Send' response command in the 'SMS' service.
     */
    smsSendResponseParse(): [ /* returnType */ boolean, /* outMessageReference */ number ]
    /**
     * Parses and returns parameters of the 'Envelope' response command in the 'STK' service.
     */
    stkEnvelopeResponseParse(): [ /* returnType */ boolean, /* outEnvelopeSupport */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Pac' notification command in the 'STK' service.
     */
    stkPacNotificationParse(): [ /* returnType */ boolean, /* outPacType */ StkPacType, /* outDataBuffer */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Pac' response command in the 'STK' service.
     */
    stkPacResponseParse(): [ /* returnType */ boolean, /* outPacSupport */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Terminal Response' response command in the 'STK' service.
     */
    stkTerminalResponseResponseParse(): [ /* returnType */ boolean, /* outResultData */ Uint8Array, /* outStatusWords */ number ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Basic Connect' service.
     */
    subscriberReadyStatusNotificationParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState, /* outSubscriberId */ string, /* outSimIccId */ string, /* outReadyInfo */ ReadyInfoFlag, /* outTelephoneNumbersCount */ number, /* outTelephoneNumbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Basic Connect' service.
     */
    subscriberReadyStatusResponseParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState, /* outSubscriberId */ string, /* outSimIccId */ string, /* outReadyInfo */ ReadyInfoFlag, /* outTelephoneNumbersCount */ number, /* outTelephoneNumbers */ string[] ]
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Parses and returns parameters of the '' notification command in the 'USSD' service.
     */
    ussdNotificationParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse, /* outSessionState */ UssdSessionState, /* outDataCodingScheme */ number, /* outPayload */ Uint8Array ]
    /**
     * Parses and returns parameters of the '' response command in the 'USSD' service.
     */
    ussdResponseParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse, /* outSessionState */ UssdSessionState, /* outDataCodingScheme */ number, /* outPayload */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Visible Providers' response command in the 'Basic Connect' service.
     */
    visibleProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number, /* outProviders */ Provider[] ]
}

/**
 * An opaque type representing a MBIM message.
 * @record 
 */
export class Message {

    // Own properties of Mbim-1.0.Mbim.Message

    static name: string

    // Constructors of Mbim-1.0.Mbim.Message

    /**
     * Create a new request for the 'Location' query command in the 'ATDS' service.
     * @constructor 
     */
    static atdsLocationQueryNew(): Message
    /**
     * Create a new request for the 'Operators' query command in the 'ATDS' service.
     * @constructor 
     */
    static atdsOperatorsQueryNew(): Message
    /**
     * Create a new request for the 'RAT' query command in the 'ATDS' service.
     * @constructor 
     */
    static atdsRatQueryNew(): Message
    /**
     * Create a new request for the 'RAT' set command in the 'ATDS' service.
     * @constructor 
     * @param mode the 'Mode' field, given as a #MbimAtdsRatMode.
     */
    static atdsRatSetNew(mode: AtdsRatMode): Message
    /**
     * Create a new request for the 'Register State' query command in the 'ATDS' service.
     * @constructor 
     */
    static atdsRegisterStateQueryNew(): Message
    /**
     * Create a new request for the 'Signal' query command in the 'ATDS' service.
     * @constructor 
     */
    static atdsSignalQueryNew(): Message
    /**
     * Create a new request for the 'Aka' query command in the 'Auth' service.
     * @constructor 
     * @param rand the 'Rand' field, given as an array of 16 #guint8 values.
     * @param autn the 'Autn' field, given as an array of 16 #guint8 values.
     */
    static authAkaQueryNew(rand: Uint8Array, autn: Uint8Array): Message
    /**
     * Create a new request for the 'Akap' query command in the 'Auth' service.
     * @constructor 
     * @param rand the 'Rand' field, given as an array of 16 #guint8 values.
     * @param autn the 'Autn' field, given as an array of 16 #guint8 values.
     * @param networkName the 'NetworkName' field, given as a string.
     */
    static authAkapQueryNew(rand: Uint8Array, autn: Uint8Array, networkName: string): Message
    /**
     * Create a new request for the 'Sim' query command in the 'Auth' service.
     * @constructor 
     * @param rand1 the 'Rand1' field, given as an array of 16 #guint8 values.
     * @param rand2 the 'Rand2' field, given as an array of 16 #guint8 values.
     * @param rand3 the 'Rand3' field, given as an array of 16 #guint8 values.
     * @param n the 'N' field, given as a #guint32.
     */
    static authSimQueryNew(rand1: Uint8Array, rand2: Uint8Array, rand3: Uint8Array, n: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_CLOSE_DONE with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     * @param errorStatusCode a #MbimStatusError.
     */
    static closeDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_CLOSE with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     */
    static closeNew(transactionId: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_COMMAND with the
     * specified parameters and an empty information buffer.
     * @constructor 
     * @param transactionId transaction ID.
     * @param service a #MbimService.
     * @param cid the command ID.
     * @param commandType the command type.
     */
    static commandNew(transactionId: number, service: Service, cid: number, commandType: MessageCommandType): Message
    /**
     * Create a new request for the 'Connect' query command in the 'Basic Connect' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param activationState the 'ActivationState' field, given as a #MbimActivationState.
     * @param voiceCallState the 'VoiceCallState' field, given as a #MbimVoiceCallState.
     * @param ipType the 'IpType' field, given as a #MbimContextIpType.
     * @param contextType the 'ContextType' field, given as a #MbimUuid.
     * @param nwError the 'NwError' field, given as a #guint32.
     */
    static connectQueryNew(sessionId: number, activationState: ActivationState, voiceCallState: VoiceCallState, ipType: ContextIpType, contextType: Uuid, nwError: number): Message
    /**
     * Create a new request for the 'Connect' set command in the 'Basic Connect' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param activationCommand the 'ActivationCommand' field, given as a #MbimActivationCommand.
     * @param accessString the 'AccessString' field, given as a string.
     * @param userName the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param authProtocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param ipType the 'IpType' field, given as a #MbimContextIpType.
     * @param contextType the 'ContextType' field, given as a #MbimUuid.
     */
    static connectSetNew(sessionId: number, activationCommand: ActivationCommand, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid): Message
    /**
     * Create a new request for the 'Device Caps' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static deviceCapsQueryNew(): Message
    /**
     * Create a new request for the 'Device Service Subscribe List' set command in the 'Basic Connect' service.
     * @constructor 
     * @param eventsCount the 'EventsCount' field, given as a #guint32.
     * @param events the 'Events' field, given as an array of #MbimEventEntry items.
     */
    static deviceServiceSubscribeListSetNew(eventsCount: number, events: EventEntry[]): Message
    /**
     * Create a new request for the 'Device Service Subscribe List' set command in the 'Basic Connect' service.
     * @constructor 
     * @param eventsCount the 'EventsCount' field, given as a #guint32.
     * @param events the 'Events' field, given as an array of #MbimEventEntrys.
     */
    static deviceServiceSubscriberListSetNew(eventsCount: number, events: EventEntry): Message
    /**
     * Create a new request for the 'Device Services' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static deviceServicesQueryNew(): Message
    /**
     * Create a new request for the 'Connect' set command in the 'DSS' service.
     * @constructor 
     * @param deviceServiceId the 'DeviceServiceId' field, given as a #MbimUuid.
     * @param dssSessionId the 'DssSessionId' field, given as a #guint32.
     * @param dssLinkState the 'DssLinkState' field, given as a #MbimDssLinkState.
     */
    static dssConnectSetNew(deviceServiceId: Uuid, dssSessionId: number, dssLinkState: DssLinkState): Message
    /**
     * Create a new request for the 'Emergency Mode' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static emergencyModeQueryNew(): Message
    /**
     * Create a new request for the 'Emergency Mode' set command in the 'Basic Connect' service.
     * @constructor 
     * @param state the 'State' field, given as a #MbimEmergencyModeState.
     */
    static emergencyModeSetNew(state: EmergencyModeState): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_HOST_ERROR with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     * @param errorStatusCode a #MbimProtocolError.
     */
    static errorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_FUNCTION_ERROR with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     * @param errorStatusCode a #MbimProtocolError.
     */
    static functionErrorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    /**
     * Create a new request for the 'Home Provider' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static homeProviderQueryNew(): Message
    /**
     * Create a new request for the 'Home Provider' set command in the 'Basic Connect' service.
     * @constructor 
     * @param provider the 'Provider' field, given as a #MbimProvider.
     */
    static homeProviderSetNew(provider: Provider): Message
    /**
     * Create a new request for the 'Modem Reboot' set command in the 'Intel Firmware Update' service.
     * @constructor 
     */
    static intelFirmwareUpdateModemRebootSetNew(): Message
    /**
     * Create a new request for the 'IP Configuration' query command in the 'Basic Connect' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param ipv4ConfigurationAvailable the 'IPv4ConfigurationAvailable' field, given as a #MbimIPConfigurationAvailableFlag.
     * @param ipv6ConfigurationAvailable the 'IPv6ConfigurationAvailable' field, given as a #MbimIPConfigurationAvailableFlag.
     * @param ipv4AddressCount the 'IPv4AddressCount' field, given as a #guint32.
     * @param ipv4Address the 'IPv4Address' field, given as an array of #MbimIPv4Element items.
     * @param ipv6AddressCount the 'IPv6AddressCount' field, given as a #guint32.
     * @param ipv6Address the 'IPv6Address' field, given as an array of #MbimIPv6Element items.
     * @param ipv4Gateway the 'IPv4Gateway' field, given as a #MbimIPv4.
     * @param ipv6Gateway the 'IPv6Gateway' field, given as a #MbimIPv6.
     * @param ipv4DnsServerCount the 'IPv4DnsServerCount' field, given as a #guint32.
     * @param ipv4DnsServer the 'IPv4DnsServer' field, given as an array of #MbimIPv4 items.
     * @param ipv6DnsServerCount the 'IPv6DnsServerCount' field, given as a #guint32.
     * @param ipv6DnsServer the 'IPv6DnsServer' field, given as an array of #MbimIPv6 items.
     * @param ipv4Mtu the 'IPv4Mtu' field, given as a #guint32.
     * @param ipv6Mtu the 'IPv6Mtu' field, given as a #guint32.
     */
    static ipConfigurationQueryNew(sessionId: number, ipv4ConfigurationAvailable: IPConfigurationAvailableFlag, ipv6ConfigurationAvailable: IPConfigurationAvailableFlag, ipv4AddressCount: number, ipv4Address: IPv4Element[], ipv6AddressCount: number, ipv6Address: IPv6Element[], ipv4Gateway: IPv4, ipv6Gateway: IPv6, ipv4DnsServerCount: number, ipv4DnsServer: IPv4[], ipv6DnsServerCount: number, ipv6DnsServer: IPv6[], ipv4Mtu: number, ipv6Mtu: number): Message
    /**
     * Create a new request for the 'IP Packet Filters' query command in the 'Basic Connect' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param packetFiltersCount the 'PacketFiltersCount' field, given as a #guint32.
     * @param packetFilters the 'PacketFilters' field, given as an array of #MbimPacketFilter items.
     */
    static ipPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' set command in the 'Basic Connect' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param packetFiltersCount the 'PacketFiltersCount' field, given as a #guint32.
     * @param packetFilters the 'PacketFilters' field, given as an array of #MbimPacketFilter items.
     */
    static ipPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    /**
     * Create a new request for the 'Base Stations Info' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param maxGsmCount the 'MaxGsmCount' field, given as a #guint32.
     * @param maxUmtsCount the 'MaxUmtsCount' field, given as a #guint32.
     * @param maxTdscdmaCount the 'MaxTdscdmaCount' field, given as a #guint32.
     * @param maxLteCount the 'MaxLteCount' field, given as a #guint32.
     * @param maxCdmaCount the 'MaxCdmaCount' field, given as a #guint32.
     */
    static msBasicConnectExtensionsBaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number): Message
    /**
     * Create a new request for the 'Device Caps' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsDeviceCapsQueryNew(): Message
    /**
     * Create a new request for the 'Device Slot Mappings' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsDeviceSlotMappingsQueryNew(): Message
    /**
     * Create a new request for the 'Device Slot Mappings' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param mapCount the 'MapCount' field, given as a #guint32.
     * @param slotMap the 'SlotMap' field, given as an array of #MbimSlot items.
     */
    static msBasicConnectExtensionsDeviceSlotMappingsSetNew(mapCount: number, slotMap: Slot[]): Message
    /**
     * Create a new request for the 'Location Info Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsLocationInfoStatusQueryNew(): Message
    /**
     * Create a new request for the 'Lte Attach Configuration' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsLteAttachConfigurationQueryNew(): Message
    /**
     * Create a new request for the 'Lte Attach Configuration' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param operation the 'Operation' field, given as a #MbimLteAttachContextOperation.
     * @param configurationCount the 'ConfigurationCount' field, given as a #guint32.
     * @param configurations the 'Configurations' field, given as an array of #MbimLteAttachConfiguration items.
     */
    static msBasicConnectExtensionsLteAttachConfigurationSetNew(operation: LteAttachContextOperation, configurationCount: number, configurations: LteAttachConfiguration[]): Message
    /**
     * Create a new request for the 'Lte Attach Info' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsLteAttachInfoQueryNew(): Message
    /**
     * Create a new request for the 'Lte Attach Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsLteAttachStatusQueryNew(): Message
    /**
     * Create a new request for the 'PCO' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param pcoValue the 'PcoValue' field, given as a #MbimPcoValue.
     */
    static msBasicConnectExtensionsPcoQueryNew(pcoValue: PcoValue): Message
    /**
     * Create a new request for the 'Provisioned Contexts' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsProvisionedContextsQueryNew(): Message
    /**
     * Create a new request for the 'Provisioned Contexts' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param operation the 'Operation' field, given as a #MbimContextOperation.
     * @param contextType the 'ContextType' field, given as a #MbimUuid.
     * @param ipType the 'IpType' field, given as a #MbimContextIpType.
     * @param state the 'State' field, given as a #MbimContextState.
     * @param roaming the 'Roaming' field, given as a #MbimContextRoamingControl.
     * @param mediaType the 'MediaType' field, given as a #MbimContextMediaType.
     * @param source the 'Source' field, given as a #MbimContextSource.
     * @param accessString the 'AccessString' field, given as a string.
     * @param userName the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param authProtocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     */
    static msBasicConnectExtensionsProvisionedContextsSetNew(operation: ContextOperation, contextType: Uuid, ipType: ContextIpType, state: ContextState, roaming: ContextRoamingControl, mediaType: ContextMediaType, source: ContextSource, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol): Message
    /**
     * Create a new request for the 'Slot Info Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param slotIndex the 'SlotIndex' field, given as a #guint32.
     */
    static msBasicConnectExtensionsSlotInfoStatusQueryNew(slotIndex: number): Message
    /**
     * Create a new request for the 'Sys Caps' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static msBasicConnectExtensionsSysCapsQueryNew(): Message
    /**
     * Create a new request for the 'Version' query command in the 'Ms Basic Connect Extensions V2' service.
     * @constructor 
     * @param mbimVersion the 'MbimVersion' field, given as a #guint16.
     * @param mbimExtendedVersion the 'MbimExtendedVersion' field, given as a #guint16.
     */
    static msBasicConnectExtensionsV2VersionQueryNew(mbimVersion: number, mbimExtendedVersion: number): Message
    /**
     * Create a new request for the 'Base Stations Info' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     * @param maxGsmCount the 'MaxGsmCount' field, given as a #guint32.
     * @param maxUmtsCount the 'MaxUmtsCount' field, given as a #guint32.
     * @param maxTdscdmaCount the 'MaxTdscdmaCount' field, given as a #guint32.
     * @param maxLteCount the 'MaxLteCount' field, given as a #guint32.
     * @param maxCdmaCount the 'MaxCdmaCount' field, given as a #guint32.
     * @param maxNrCount the 'MaxNrCount' field, given as a #guint32.
     */
    static msBasicConnectExtensionsV3BaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number, maxNrCount: number): Message
    /**
     * Create a new request for the 'Modem Configuration' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static msBasicConnectExtensionsV3ModemConfigurationQueryNew(): Message
    /**
     * Create a new request for the 'Registration Parameters' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static msBasicConnectExtensionsV3RegistrationParametersQueryNew(): Message
    /**
     * Create a new request for the 'Registration Parameters' set command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     * @param micoMode the 'MicoMode' field, given as a #MbimMicoMode.
     * @param drxCycle the 'DrxCycle' field, given as a #MbimDrxCycle.
     * @param ladnInfo the 'LadnInfo' field, given as a #MbimLadnInfo.
     * @param defaultPduActivationHint the 'DefaultPduActivationHint' field, given as a #MbimDefaultPduActivationHint.
     * @param reRegisterIfNedeed the 'ReRegisterIfNedeed' field, given as a #gboolean.
     * @param unnamedIes the 'UnnamedIes' field, given as a list of # items.
     */
    static msBasicConnectExtensionsV3RegistrationParametersSetNew(micoMode: MicoMode, drxCycle: DrxCycle, ladnInfo: LadnInfo, defaultPduActivationHint: DefaultPduActivationHint, reRegisterIfNedeed: boolean, unnamedIes: Tlv[]): Message
    /**
     * Create a new request for the 'Wake Reason' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static msBasicConnectExtensionsV3WakeReasonQueryNew(): Message
    /**
     * Create a new request for the 'Connect' query command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     */
    static msBasicConnectV3ConnectQueryNew(sessionId: number): Message
    /**
     * Create a new request for the 'Connect' set command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param activationCommand the 'ActivationCommand' field, given as a #MbimActivationCommand.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param authProtocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param ipType the 'IpType' field, given as a #MbimContextIpType.
     * @param contextType the 'ContextType' field, given as a #MbimUuid.
     * @param mediaPreference the 'MediaPreference' field, given as a #MbimAccessMediaType.
     * @param accessString the 'AccessString' field, given as a string.
     * @param userName the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param unnamedIes the 'UnnamedIes' field, given as a list of # items.
     */
    static msBasicConnectV3ConnectSetNew(sessionId: number, activationCommand: ActivationCommand, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid, mediaPreference: AccessMediaType, accessString: string, userName: string, password: string, unnamedIes: Tlv[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' query command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param packetFiltersCount the 'PacketFiltersCount' field, given as a #guint32.
     * @param packetFilters the 'PacketFilters' field, given as an array of #MbimPacketFilterV3 items.
     */
    static msBasicConnectV3IpPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' set command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param sessionId the 'SessionId' field, given as a #guint32.
     * @param packetFiltersCount the 'PacketFiltersCount' field, given as a #guint32.
     * @param packetFilters the 'PacketFilters' field, given as an array of #MbimPacketFilterV3 items.
     */
    static msBasicConnectV3IpPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    /**
     * Create a new request for the 'Get' query command in the 'MS Firmware ID' service.
     * @constructor 
     */
    static msFirmwareIdGetQueryNew(): Message
    /**
     * Create a new request for the 'Notify' set command in the 'MS Host Shutdown' service.
     * @constructor 
     */
    static msHostShutdownNotifySetNew(): Message
    /**
     * Create a new request for the 'Config' query command in the 'MS SAR' service.
     * @constructor 
     */
    static msSarConfigQueryNew(): Message
    /**
     * Create a new request for the 'Config' set command in the 'MS SAR' service.
     * @constructor 
     * @param mode the 'Mode' field, given as a #MbimSarControlMode.
     * @param backoffState the 'BackoffState' field, given as a #MbimSarBackoffState.
     * @param configStatesCount the 'ConfigStatesCount' field, given as a #guint32.
     * @param configStates the 'ConfigStates' field, given as an array of #MbimSarConfigState items.
     */
    static msSarConfigSetNew(mode: SarControlMode, backoffState: SarBackoffState, configStatesCount: number, configStates: SarConfigState[]): Message
    /**
     * Create a new request for the 'Transmission status' query command in the 'MS SAR' service.
     * @constructor 
     */
    static msSarTransmissionStatusQueryNew(): Message
    /**
     * Create a new request for the 'Transmission status' set command in the 'MS SAR' service.
     * @constructor 
     * @param channelNotification the 'ChannelNotification' field, given as a #MbimTransmissionNotificationStatus.
     * @param hysteresisTimer the 'HysteresisTimer' field, given as a #guint32.
     */
    static msSarTransmissionStatusSetNew(channelNotification: TransmissionNotificationStatus, hysteresisTimer: number): Message
    /**
     * Create a new request for the 'APDU' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param channel the 'Channel' field, given as a #guint32.
     * @param secureMessaging the 'SecureMessaging' field, given as a #MbimUiccSecureMessaging.
     * @param classByteType the 'ClassByteType' field, given as a #MbimUiccClassByteType.
     * @param command the 'Command' field, given as an array of #guint8 values.
     */
    static msUiccLowLevelAccessApduSetNew(channel: number, secureMessaging: UiccSecureMessaging, classByteType: UiccClassByteType, command: Uint8Array): Message
    /**
     * Create a new request for the 'ATR' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static msUiccLowLevelAccessAtrQueryNew(): Message
    /**
     * Create a new request for the 'Close Channel' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param channel the 'Channel' field, given as a #guint32.
     * @param channelGroup the 'ChannelGroup' field, given as a #guint32.
     */
    static msUiccLowLevelAccessCloseChannelSetNew(channel: number, channelGroup: number): Message
    /**
     * Create a new request for the 'Open Channel' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param appId the 'AppId' field, given as an array of #guint8 values.
     * @param selectP2Arg the 'SelectP2Arg' field, given as a #guint32.
     * @param channelGroup the 'ChannelGroup' field, given as a #guint32.
     */
    static msUiccLowLevelAccessOpenChannelSetNew(appId: Uint8Array, selectP2Arg: number, channelGroup: number): Message
    /**
     * Create a new request for the 'Reset' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static msUiccLowLevelAccessResetQueryNew(): Message
    /**
     * Create a new request for the 'Reset' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param passThroughAction the 'PassThroughAction' field, given as a #MbimUiccPassThroughAction.
     */
    static msUiccLowLevelAccessResetSetNew(passThroughAction: UiccPassThroughAction): Message
    /**
     * Create a new request for the 'Terminal Capability' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static msUiccLowLevelAccessTerminalCapabilityQueryNew(): Message
    /**
     * Create a new request for the 'Terminal Capability' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param terminalCapabilityCount the 'TerminalCapabilityCount' field, given as a #guint32.
     * @param terminalCapability the 'TerminalCapability' field, given as an array of #MbimTerminalCapabilityInfo items.
     */
    static msUiccLowLevelAccessTerminalCapabilitySetNew(terminalCapabilityCount: number, terminalCapability: TerminalCapabilityInfo[]): Message
    /**
     * Create a new request for the 'Multicarrier Providers' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static multicarrierProvidersQueryNew(): Message
    /**
     * Create a new request for the 'Multicarrier Providers' set command in the 'Basic Connect' service.
     * @constructor 
     * @param providersCount the 'ProvidersCount' field, given as a #guint32.
     * @param providers the 'Providers' field, given as an array of #MbimProvider items.
     */
    static multicarrierProvidersSetNew(providersCount: number, providers: Provider[]): Message
    /**
     * Create a new request for the 'Network Idle Hint' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static networkIdleHintQueryNew(): Message
    /**
     * Create a new request for the 'Network Idle Hint' set command in the 'Basic Connect' service.
     * @constructor 
     * @param state the 'State' field, given as a #MbimNetworkIdleHintState.
     */
    static networkIdleHintSetNew(state: NetworkIdleHintState): Message
    /**
     * Create a #MbimMessage with the given contents.
     * @constructor 
     * @param data contents of the message.
     * @param dataLength length of the message.
     */
    constructor(data: number, dataLength: number) 
    /**
     * Create a #MbimMessage with the given contents.
     * @constructor 
     * @param data contents of the message.
     * @param dataLength length of the message.
     */
    static new(data: number, dataLength: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_OPEN_DONE with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     * @param errorStatusCode a #MbimStatusError.
     */
    static openDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_OPEN with the specified
     * parameters.
     * @constructor 
     * @param transactionId transaction ID.
     * @param maxControlTransfer maximum control transfer.
     */
    static openNew(transactionId: number, maxControlTransfer: number): Message
    /**
     * Create a new request for the 'Packet Service' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static packetServiceQueryNew(): Message
    /**
     * Create a new request for the 'Packet Service' set command in the 'Basic Connect' service.
     * @constructor 
     * @param packetServiceAction the 'PacketServiceAction' field, given as a #MbimPacketServiceAction.
     */
    static packetServiceSetNew(packetServiceAction: PacketServiceAction): Message
    /**
     * Create a new request for the 'Packet Statistics' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static packetStatisticsQueryNew(): Message
    /**
     * Create a new request for the 'Configuration' query command in the 'Phonebook' service.
     * @constructor 
     */
    static phonebookConfigurationQueryNew(): Message
    /**
     * Create a new request for the 'Delete' set command in the 'Phonebook' service.
     * @constructor 
     * @param filterFlag the 'FilterFlag' field, given as a #MbimPhonebookFlag.
     * @param filterMessageIndex the 'FilterMessageIndex' field, given as a #guint32.
     */
    static phonebookDeleteSetNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    /**
     * Create a new request for the 'Read' query command in the 'Phonebook' service.
     * @constructor 
     * @param filterFlag the 'FilterFlag' field, given as a #MbimPhonebookFlag.
     * @param filterMessageIndex the 'FilterMessageIndex' field, given as a #guint32.
     */
    static phonebookReadQueryNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    /**
     * Create a new request for the 'Write' set command in the 'Phonebook' service.
     * @constructor 
     * @param saveFlag the 'SaveFlag' field, given as a #MbimPhonebookWriteFlag.
     * @param saveIndex the 'SaveIndex' field, given as a #guint32.
     * @param number the 'Number' field, given as a string.
     * @param name the 'Name' field, given as a string.
     */
    static phonebookWriteSetNew(saveFlag: PhonebookWriteFlag, saveIndex: number, number: string, name: string): Message
    /**
     * Create a new request for the 'Pin List' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static pinListQueryNew(): Message
    /**
     * Create a new request for the 'Pin' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static pinQueryNew(): Message
    /**
     * Create a new request for the 'Pin' set command in the 'Basic Connect' service.
     * @constructor 
     * @param pinType the 'PinType' field, given as a #MbimPinType.
     * @param pinOperation the 'PinOperation' field, given as a #MbimPinOperation.
     * @param pin the 'Pin' field, given as a string.
     * @param newPin the 'NewPin' field, given as a string.
     */
    static pinSetNew(pinType: PinType, pinOperation: PinOperation, pin: string, newPin: string): Message
    /**
     * Create a new request for the 'Preferred Providers' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static preferredProvidersQueryNew(): Message
    /**
     * Create a new request for the 'Preferred Providers' set command in the 'Basic Connect' service.
     * @constructor 
     * @param providersCount the 'ProvidersCount' field, given as a #guint32.
     * @param providers the 'Providers' field, given as an array of #MbimProvider items.
     */
    static preferredProvidersSetNew(providersCount: number, providers: Provider[]): Message
    /**
     * Create a new request for the 'Provisioned Contexts' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static provisionedContextsQueryNew(): Message
    /**
     * Create a new request for the 'Provisioned Contexts' set command in the 'Basic Connect' service.
     * @constructor 
     * @param contextId the 'ContextId' field, given as a #guint32.
     * @param contextType the 'ContextType' field, given as a #MbimUuid.
     * @param accessString the 'AccessString' field, given as a string.
     * @param userName the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param authProtocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param providerId the 'ProviderId' field, given as a string.
     */
    static provisionedContextsSetNew(contextId: number, contextType: Uuid, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, providerId: string): Message
    /**
     * Create a new request for the 'Configuration' set command in the 'Proxy Control' service.
     * @constructor 
     * @param devicePath the 'DevicePath' field, given as a string.
     * @param timeout the 'Timeout' field, given as a #guint32.
     */
    static proxyControlConfigurationSetNew(devicePath: string, timeout: number): Message
    /**
     * Create a new request for the 'File Open' query command in the 'QDU' service.
     * @constructor 
     */
    static qduFileOpenQueryNew(): Message
    /**
     * Create a new request for the 'File Open' set command in the 'QDU' service.
     * @constructor 
     * @param fileType the 'FileType' field, given as a #MbimQduFileType.
     * @param fileSize the 'FileSize' field, given as a #guint32.
     */
    static qduFileOpenSetNew(fileType: QduFileType, fileSize: number): Message
    /**
     * Create a new request for the 'File Write' set command in the 'QDU' service.
     * @constructor 
     * @param dataBuffer the 'DataBuffer' field, given as an array of #guint8 values.
     */
    static qduFileWriteSetNew(dataBuffer: Uint8Array): Message
    /**
     * Create a new request for the 'Quectel Read Version' set command in the 'QDU' service.
     * @constructor 
     * @param versionType the 'VersionType' field, given as a #MbimQduQuectelVersionType.
     */
    static qduQuectelReadVersionSetNew(versionType: QduQuectelVersionType): Message
    /**
     * Create a new request for the 'Quectel Reboot' set command in the 'QDU' service.
     * @constructor 
     * @param rebootType the 'RebootType' field, given as a #MbimQduQuectelRebootType.
     */
    static qduQuectelRebootSetNew(rebootType: QduQuectelRebootType): Message
    /**
     * Create a new request for the 'Update Session' query command in the 'QDU' service.
     * @constructor 
     */
    static qduUpdateSessionQueryNew(): Message
    /**
     * Create a new request for the 'Update Session' set command in the 'QDU' service.
     * @constructor 
     * @param sessionAction the 'SessionAction' field, given as a #MbimQduSessionAction.
     * @param sessionType the 'SessionType' field, given as a #MbimQduSessionType.
     */
    static qduUpdateSessionSetNew(sessionAction: QduSessionAction, sessionType: QduSessionType): Message
    /**
     * Create a new request for the 'msg' set command in the 'QMI' service.
     * @constructor 
     * @param qmiMsg the 'QmiMsg' field, given as an array of #guint8 values.
     */
    static qmiMsgSetNew(qmiMsg: Uint8Array): Message
    /**
     * Create a new request for the 'Radio State' query command in the 'Quectel' service.
     * @constructor 
     */
    static quectelRadioStateQueryNew(): Message
    /**
     * Create a new request for the 'Radio State' set command in the 'Quectel' service.
     * @constructor 
     * @param radioState the 'RadioState' field, given as a #MbimQuectelRadioSwitchState.
     */
    static quectelRadioStateSetNew(radioState: QuectelRadioSwitchState): Message
    /**
     * Create a new request for the 'Radio State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static radioStateQueryNew(): Message
    /**
     * Create a new request for the 'Radio State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param radioState the 'RadioState' field, given as a #MbimRadioSwitchState.
     */
    static radioStateSetNew(radioState: RadioSwitchState): Message
    /**
     * Create a new request for the 'Register State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static registerStateQueryNew(): Message
    /**
     * Create a new request for the 'Register State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param providerId the 'ProviderId' field, given as a string.
     * @param registerAction the 'RegisterAction' field, given as a #MbimRegisterAction.
     * @param dataClass the 'DataClass' field, given as a #MbimDataClass.
     */
    static registerStateSetNew(providerId: string, registerAction: RegisterAction, dataClass: DataClass): Message
    /**
     * Create a new request for the 'Service Activation' set command in the 'Basic Connect' service.
     * @constructor 
     * @param buffer the 'Buffer' field, given as an array of #guint8 values.
     */
    static serviceActivationSetNew(buffer: Uint8Array): Message
    /**
     * Create a new request for the 'Signal State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static signalStateQueryNew(): Message
    /**
     * Create a new request for the 'Signal State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param signalStrengthInterval the 'SignalStrengthInterval' field, given as a #guint32.
     * @param rssiThreshold the 'RssiThreshold' field, given as a #guint32.
     * @param errorRateThreshold the 'ErrorRateThreshold' field, given as a #guint32.
     */
    static signalStateSetNew(signalStrengthInterval: number, rssiThreshold: number, errorRateThreshold: number): Message
    /**
     * Create a new request for the 'Configuration' query command in the 'SMS' service.
     * @constructor 
     */
    static smsConfigurationQueryNew(): Message
    /**
     * Create a new request for the 'Configuration' set command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param scAddress the 'ScAddress' field, given as a string.
     */
    static smsConfigurationSetNew(format: SmsFormat, scAddress: string): Message
    /**
     * Create a new request for the 'Delete' set command in the 'SMS' service.
     * @constructor 
     * @param flag the 'Flag' field, given as a #MbimSmsFlag.
     * @param messageIndex the 'MessageIndex' field, given as a #guint32.
     */
    static smsDeleteSetNew(flag: SmsFlag, messageIndex: number): Message
    /**
     * Create a new request for the 'Message Store Status' query command in the 'SMS' service.
     * @constructor 
     */
    static smsMessageStoreStatusQueryNew(): Message
    /**
     * Create a new request for the 'Read' query command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param flag the 'Flag' field, given as a #MbimSmsFlag.
     * @param messageIndex the 'MessageIndex' field, given as a #guint32.
     */
    static smsReadQueryNew(format: SmsFormat, flag: SmsFlag, messageIndex: number): Message
    /**
     * Create a new request for the 'Send' set command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param pduMessage the 'PduMessage' field, given as a #MbimSmsPduSendRecord.
     * @param cdmaMessage the 'CdmaMessage' field, given as a #MbimSmsCdmaSendRecord.
     */
    static smsSendSetNew(format: SmsFormat, pduMessage: SmsPduSendRecord, cdmaMessage: SmsCdmaSendRecord): Message
    /**
     * Create a new request for the 'Envelope' query command in the 'STK' service.
     * @constructor 
     */
    static stkEnvelopeQueryNew(): Message
    /**
     * Create a new request for the 'Envelope' set command in the 'STK' service.
     * @constructor 
     * @param data the 'Data' field, given as an array of #guint8 values.
     */
    static stkEnvelopeSetNew(data: Uint8Array): Message
    /**
     * Create a new request for the 'Pac' query command in the 'STK' service.
     * @constructor 
     */
    static stkPacQueryNew(): Message
    /**
     * Create a new request for the 'Pac' set command in the 'STK' service.
     * @constructor 
     * @param pacHostControl the 'PacHostControl' field, given as an array of 32 #guint8 values.
     */
    static stkPacSetNew(pacHostControl: Uint8Array): Message
    /**
     * Create a new request for the 'Terminal Response' set command in the 'STK' service.
     * @constructor 
     * @param response the 'Response' field, given as an array of #guint8 values.
     */
    static stkTerminalResponseSetNew(response: Uint8Array): Message
    /**
     * Create a new request for the 'Subscriber Ready Status' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static subscriberReadyStatusQueryNew(): Message
    /**
     * Create a new request for the '' set command in the 'USSD' service.
     * @constructor 
     * @param action the 'Action' field, given as a #MbimUssdAction.
     * @param dataCodingScheme the 'DataCodingScheme' field, given as a #guint32.
     * @param payload the 'Payload' field, given as an array of #guint8 values.
     */
    static ussdSetNew(action: UssdAction, dataCodingScheme: number, payload: Uint8Array): Message
    /**
     * Create a new request for the 'Visible Providers' query command in the 'Basic Connect' service.
     * @constructor 
     * @param action the 'Action' field, given as a #MbimVisibleProvidersAction.
     */
    static visibleProvidersQueryNew(action: VisibleProvidersAction): Message
}

export interface PacketFilter {

    // Own fields of Mbim-1.0.Mbim.PacketFilter

    /**
     * a #guint32.
     * @field 
     */
    filterSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packetFilter: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packetMask: number
}

/**
 * A MbimPacketFilter element.
 * @record 
 */
export class PacketFilter {

    // Own properties of Mbim-1.0.Mbim.PacketFilter

    static name: string

    // Constructors of Mbim-1.0.Mbim.PacketFilter

    /**
     * Frees the memory allocated for the array of #MbimPacketFilter structs.
     * @param array a #NULL terminated array of #MbimPacketFilter structs.
     */
    static arrayFree(array: PacketFilterArray): void
}

export interface PacketFilterV3 {

    // Own fields of Mbim-1.0.Mbim.PacketFilterV3

    /**
     * a #guint32.
     * @field 
     */
    filterSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packetFilter: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packetMask: number
    /**
     * a #guint32.
     * @field 
     */
    filterId: number
}

/**
 * A MbimPacketFilterV3 element.
 * @record 
 */
export class PacketFilterV3 {

    // Own properties of Mbim-1.0.Mbim.PacketFilterV3

    static name: string

    // Constructors of Mbim-1.0.Mbim.PacketFilterV3

    /**
     * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
     * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
     */
    static arrayFree(array: PacketFilterV3Array): void
}

export interface PcoValue {

    // Own fields of Mbim-1.0.Mbim.PcoValue

    /**
     * a #guint32.
     * @field 
     */
    sessionId: number
    /**
     * a #guint32.
     * @field 
     */
    pcoDataSize: number
    /**
     * a #MbimPcoType given as a #guint32.
     * @field 
     */
    pcoDataType: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pcoDataBuffer: number

    // Owm methods of Mbim-1.0.Mbim.PcoValue

    /**
     * Frees the memory allocated for the #MbimPcoValue.
     */
    free(): void
}

/**
 * A MbimPcoValue element.
 * @record 
 */
export class PcoValue {

    // Own properties of Mbim-1.0.Mbim.PcoValue

    static name: string
}

export interface PhonebookEntry {

    // Own fields of Mbim-1.0.Mbim.PhonebookEntry

    /**
     * a #guint32.
     * @field 
     */
    entryIndex: number
    /**
     * a string.
     * @field 
     */
    number: string
    /**
     * a string.
     * @field 
     */
    name: string
}

/**
 * A MbimPhonebookEntry element.
 * @record 
 */
export class PhonebookEntry {

    // Own properties of Mbim-1.0.Mbim.PhonebookEntry

    static name: string

    // Constructors of Mbim-1.0.Mbim.PhonebookEntry

    /**
     * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
     * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
     */
    static arrayFree(array: PhonebookEntryArray): void
}

export interface PinDesc {

    // Own fields of Mbim-1.0.Mbim.PinDesc

    /**
     * a #MbimPinMode given as a #guint32.
     * @field 
     */
    pinMode: number
    /**
     * a #MbimPinFormat given as a #guint32.
     * @field 
     */
    pinFormat: number
    /**
     * a #guint32.
     * @field 
     */
    pinLengthMin: number
    /**
     * a #guint32.
     * @field 
     */
    pinLengthMax: number

    // Owm methods of Mbim-1.0.Mbim.PinDesc

    /**
     * Frees the memory allocated for the #MbimPinDesc.
     */
    free(): void
}

/**
 * A MbimPinDesc element.
 * @record 
 */
export class PinDesc {

    // Own properties of Mbim-1.0.Mbim.PinDesc

    static name: string
}

export interface Provider {

    // Own fields of Mbim-1.0.Mbim.Provider

    /**
     * a string.
     * @field 
     */
    providerId: string
    /**
     * a #MbimProviderState given as a #guint32.
     * @field 
     */
    providerState: number
    /**
     * a string.
     * @field 
     */
    providerName: string
    /**
     * a #MbimCellularClass given as a #guint32.
     * @field 
     */
    cellularClass: number
    /**
     * a #guint32.
     * @field 
     */
    rssi: number
    /**
     * a #guint32.
     * @field 
     */
    errorRate: number

    // Owm methods of Mbim-1.0.Mbim.Provider

    /**
     * Frees the memory allocated for the #MbimProvider.
     */
    free(): void
}

/**
 * A MbimProvider element.
 * @record 
 */
export class Provider {

    // Own properties of Mbim-1.0.Mbim.Provider

    static name: string

    // Constructors of Mbim-1.0.Mbim.Provider

    /**
     * Frees the memory allocated for the array of #MbimProvider structs.
     * @param array a #NULL terminated array of #MbimProvider structs.
     */
    static arrayFree(array: ProviderArray): void
}

export interface ProvisionedContextElement {

    // Own fields of Mbim-1.0.Mbim.ProvisionedContextElement

    /**
     * a #guint32.
     * @field 
     */
    contextId: number
    /**
     * a #MbimUuid.
     * @field 
     */
    contextType: Uuid
    /**
     * a string.
     * @field 
     */
    accessString: string
    /**
     * a string.
     * @field 
     */
    userName: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    authProtocol: number
}

/**
 * A MbimProvisionedContextElement element.
 * @record 
 */
export class ProvisionedContextElement {

    // Own properties of Mbim-1.0.Mbim.ProvisionedContextElement

    static name: string

    // Constructors of Mbim-1.0.Mbim.ProvisionedContextElement

    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
     */
    static arrayFree(array: ProvisionedContextElementArray): void
}

export interface ProvisionedContextElementV2 {

    // Own fields of Mbim-1.0.Mbim.ProvisionedContextElementV2

    /**
     * a #guint32.
     * @field 
     */
    contextId: number
    /**
     * a #MbimUuid.
     * @field 
     */
    contextType: Uuid
    /**
     * a #MbimContextIpType given as a #guint32.
     * @field 
     */
    ipType: number
    /**
     * a #MbimContextState given as a #guint32.
     * @field 
     */
    state: number
    /**
     * a #MbimContextRoamingControl given as a #guint32.
     * @field 
     */
    roaming: number
    /**
     * a #MbimContextMediaType given as a #guint32.
     * @field 
     */
    mediaType: number
    /**
     * a #MbimContextSource given as a #guint32.
     * @field 
     */
    source: number
    /**
     * a string.
     * @field 
     */
    accessString: string
    /**
     * a string.
     * @field 
     */
    userName: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    authProtocol: number
}

/**
 * A MbimProvisionedContextElementV2 element.
 * @record 
 */
export class ProvisionedContextElementV2 {

    // Own properties of Mbim-1.0.Mbim.ProvisionedContextElementV2

    static name: string

    // Constructors of Mbim-1.0.Mbim.ProvisionedContextElementV2

    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
     */
    static arrayFree(array: ProvisionedContextElementV2Array): void
}

export interface ProxyClass {

    // Own fields of Mbim-1.0.Mbim.ProxyClass

    parent: GObject.ObjectClass
}

export abstract class ProxyClass {

    // Own properties of Mbim-1.0.Mbim.ProxyClass

    static name: string
}

export interface ProxyPrivate {
}

export class ProxyPrivate {

    // Own properties of Mbim-1.0.Mbim.ProxyPrivate

    static name: string
}

export interface RsrpSnrInfo {

    // Own fields of Mbim-1.0.Mbim.RsrpSnrInfo

    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    snr: number
    /**
     * a #guint32.
     * @field 
     */
    rsrpThreshold: number
    /**
     * a #guint32.
     * @field 
     */
    snrThreshold: number
    /**
     * a #MbimDataClass given as a #guint32.
     * @field 
     */
    systemType: number
}

/**
 * A MbimRsrpSnrInfo element.
 * @record 
 */
export class RsrpSnrInfo {

    // Own properties of Mbim-1.0.Mbim.RsrpSnrInfo

    static name: string

    // Constructors of Mbim-1.0.Mbim.RsrpSnrInfo

    /**
     * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
     * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
     */
    static arrayFree(array: RsrpSnrInfoArray): void
}

export interface SarConfigState {

    // Own fields of Mbim-1.0.Mbim.SarConfigState

    /**
     * a #guint32.
     * @field 
     */
    antennaIndex: number
    /**
     * a #guint32.
     * @field 
     */
    backoffIndex: number
}

/**
 * A MbimSarConfigState element.
 * @record 
 */
export class SarConfigState {

    // Own properties of Mbim-1.0.Mbim.SarConfigState

    static name: string

    // Constructors of Mbim-1.0.Mbim.SarConfigState

    /**
     * Frees the memory allocated for the array of #MbimSarConfigState structs.
     * @param array a #NULL terminated array of #MbimSarConfigState structs.
     */
    static arrayFree(array: SarConfigStateArray): void
}

export interface Slot {

    // Own fields of Mbim-1.0.Mbim.Slot

    /**
     * a #guint32.
     * @field 
     */
    slot: number
}

/**
 * A MbimSlot element.
 * @record 
 */
export class Slot {

    // Own properties of Mbim-1.0.Mbim.Slot

    static name: string

    // Constructors of Mbim-1.0.Mbim.Slot

    /**
     * Frees the memory allocated for the array of #MbimSlot structs.
     * @param array a #NULL terminated array of #MbimSlot structs.
     */
    static arrayFree(array: SlotArray): void
}

export interface SmsCdmaReadRecord {

    // Own fields of Mbim-1.0.Mbim.SmsCdmaReadRecord

    /**
     * a #guint32.
     * @field 
     */
    messageIndex: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     * @field 
     */
    messageStatus: number
    /**
     * a string.
     * @field 
     */
    address: string
    /**
     * a string.
     * @field 
     */
    timestamp: string
    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     * @field 
     */
    encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     * @field 
     */
    language: number
    /**
     * size of the encoded_message array.
     * @field 
     */
    encodedMessageSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    encodedMessage: number
    /**
     * a #guint32.
     * @field 
     */
    encodedMessageSizeInCharacters: number
}

/**
 * A MbimSmsCdmaReadRecord element.
 * @record 
 */
export class SmsCdmaReadRecord {

    // Own properties of Mbim-1.0.Mbim.SmsCdmaReadRecord

    static name: string

    // Constructors of Mbim-1.0.Mbim.SmsCdmaReadRecord

    /**
     * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
     */
    static arrayFree(array: SmsCdmaReadRecordArray): void
}

export interface SmsCdmaSendRecord {

    // Own fields of Mbim-1.0.Mbim.SmsCdmaSendRecord

    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     * @field 
     */
    encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     * @field 
     */
    language: number
    /**
     * a string.
     * @field 
     */
    address: string
    /**
     * size of the encoded_message array.
     * @field 
     */
    encodedMessageSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    encodedMessage: number
    /**
     * a #guint32.
     * @field 
     */
    encodedMessageSizeInCharacters: number

    // Owm methods of Mbim-1.0.Mbim.SmsCdmaSendRecord

    /**
     * Frees the memory allocated for the #MbimSmsCdmaSendRecord.
     */
    free(): void
}

/**
 * A MbimSmsCdmaSendRecord element.
 * @record 
 */
export class SmsCdmaSendRecord {

    // Own properties of Mbim-1.0.Mbim.SmsCdmaSendRecord

    static name: string
}

export interface SmsPduReadRecord {

    // Own fields of Mbim-1.0.Mbim.SmsPduReadRecord

    /**
     * a #guint32.
     * @field 
     */
    messageIndex: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     * @field 
     */
    messageStatus: number
    /**
     * size of the pdu_data array.
     * @field 
     */
    pduDataSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pduData: number
}

/**
 * A MbimSmsPduReadRecord element.
 * @record 
 */
export class SmsPduReadRecord {

    // Own properties of Mbim-1.0.Mbim.SmsPduReadRecord

    static name: string

    // Constructors of Mbim-1.0.Mbim.SmsPduReadRecord

    /**
     * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
     */
    static arrayFree(array: SmsPduReadRecordArray): void
}

export interface SmsPduSendRecord {

    // Own fields of Mbim-1.0.Mbim.SmsPduSendRecord

    /**
     * size of the pdu_data array.
     * @field 
     */
    pduDataSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pduData: number

    // Owm methods of Mbim-1.0.Mbim.SmsPduSendRecord

    /**
     * Frees the memory allocated for the #MbimSmsPduSendRecord.
     */
    free(): void
}

/**
 * A MbimSmsPduSendRecord element.
 * @record 
 */
export class SmsPduSendRecord {

    // Own properties of Mbim-1.0.Mbim.SmsPduSendRecord

    static name: string
}

export interface Tai {

    // Own fields of Mbim-1.0.Mbim.Tai

    /**
     * a #guint16.
     * @field 
     */
    plmnMcc: number
    /**
     * a #guint16.
     * @field 
     */
    plmnMnc: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number

    // Owm methods of Mbim-1.0.Mbim.Tai

    /**
     * Frees the memory allocated for the #MbimTai.
     */
    free(): void
}

/**
 * A MbimTai element.
 * @record 
 */
export class Tai {

    // Own properties of Mbim-1.0.Mbim.Tai

    static name: string
}

export interface TerminalCapabilityInfo {

    // Own fields of Mbim-1.0.Mbim.TerminalCapabilityInfo

    /**
     * size of the terminal_capability_data array.
     * @field 
     */
    terminalCapabilityDataSize: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    terminalCapabilityData: number
}

/**
 * A MbimTerminalCapabilityInfo element.
 * @record 
 */
export class TerminalCapabilityInfo {

    // Own properties of Mbim-1.0.Mbim.TerminalCapabilityInfo

    static name: string

    // Constructors of Mbim-1.0.Mbim.TerminalCapabilityInfo

    /**
     * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
     * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
     */
    static arrayFree(array: TerminalCapabilityInfoArray): void
}

export interface Tlv {

    // Owm methods of Mbim-1.0.Mbim.Tlv

    /**
     * Create a #MbimTlv with the same contents as `self`.
     */
    dup(): Tlv
    /**
     * Gets the whole raw data buffer of the #MbimTlv.
     */
    getRaw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the TLV raw data.
     */
    getTlvData(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Gets the message type.
     */
    getTlvType(): TlvType
    /**
     * Get an array of #guint16 values with the contents in the #MbimTlv.
     * 
     * The method may return a successful return even with on empty arrays (i.e.
     * with `array_size` set to 0 and `array` set to %NULL).
     */
    guint16ArrayGet(): [ /* returnType */ boolean, /* arraySize */ number, /* array */ number ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Tlv
    /**
     * Get a string with the contents in the #MbimTlv.
     */
    stringGet(): string
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Get the contents of a wake command TLV.
     * 
     * The method may return a successful return even with on empty payload (i.e.
     * with `payload_size` set to 0 and `payload` set to %NULL).
     */
    wakeCommandGet(): [ /* returnType */ boolean, /* service */ Uuid, /* cid */ number, /* payloadSize */ number, /* payload */ number ]
    /**
     * Get the contents of a wake packet TLV.
     */
    wakePacketGet(): [ /* returnType */ boolean, /* filterId */ number, /* originalPacketSize */ number, /* packetSize */ number, /* packet */ number ]
}

/**
 * An opaque type representing a MBIM TLV.
 * @record 
 */
export class Tlv {

    // Own properties of Mbim-1.0.Mbim.Tlv

    static name: string

    // Constructors of Mbim-1.0.Mbim.Tlv

    /**
     * Create a #MbimTlv with the given contents.
     * @constructor 
     * @param type a #MbimTlvType.
     * @param data contents of the TLV.
     * @param dataLength length of the message.
     */
    constructor(type: TlvType, data: number, dataLength: number) 
    /**
     * Create a #MbimTlv with the given contents.
     * @constructor 
     * @param type a #MbimTlvType.
     * @param data contents of the TLV.
     * @param dataLength length of the message.
     */
    static new(type: TlvType, data: number, dataLength: number): Tlv
    /**
     * Create a #MbimTlv of type %MBIM_TLV_TYPE_WCHAR_STR with the given contents.
     * @constructor 
     * @param str a string.
     */
    static stringNew(str: string): Tlv
}

export interface Uuid {

    // Own fields of Mbim-1.0.Mbim.Uuid

    a: Uint8Array
    b: Uint8Array
    c: Uint8Array
    d: Uint8Array
    e: Uint8Array

    // Owm methods of Mbim-1.0.Mbim.Uuid

    /**
     * Compare two %MbimUuid values.
     * @param b a #MbimUuid.
     */
    cmp(b: Uuid): boolean
    /**
     * Get a string with the UUID.
     */
    getPrintable(): string
    /**
     * Get the context type corresponding to `uuid`.
     */
    toContextType(): ContextType
    /**
     * Get the service corresponding to `uuid`.
     */
    toService(): Service
}

/**
 * A UUID as defined in MBIM.
 * @record 
 */
export class Uuid {

    // Own properties of Mbim-1.0.Mbim.Uuid

    static name: string

    // Constructors of Mbim-1.0.Mbim.Uuid

    /**
     * Get the UUID corresponding to `context_type`.
     * @param contextType a #MbimContextType.
     */
    static fromContextType(contextType: ContextType): Uuid
    /**
     * Fills in `uuid` from the printable representation give in `str`.
     * 
     * Only ccepts `str` written with dashes separating items, e.g.:
     *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
     * @param str a MBIM UUID.
     * @param uuid pointer to the target #MbimUuid.
     */
    static fromPrintable(str: string, uuid: Uuid): boolean
    /**
     * Get the UUID corresponding to `service`.
     * 
     * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
     * or a custom registered one.
     * @param service a #MbimService.
     */
    static fromService(service: Service): Uuid
}

    export type AtdsProviderArray = AtdsProvider
    export type CellInfoCdmaArray = CellInfoCdma
    export type CellInfoNeighboringGsmArray = CellInfoNeighboringGsm
    export type CellInfoNeighboringLteArray = CellInfoNeighboringLte
    export type CellInfoNeighboringNrArray = CellInfoNeighboringNr
    export type CellInfoNeighboringTdscdmaArray = CellInfoNeighboringTdscdma
    export type CellInfoNeighboringUmtsArray = CellInfoNeighboringUmts
    export type CellInfoServingNrArray = CellInfoServingNr
    export type DeprecatedCidBasicConnect = number
    export type DeprecatedCidMsBasicConnectExtensions = number
    export type DeprecatedNwError = number
    export type DeprecatedRegistrationFlag = number
    export type DeviceServiceElementArray = DeviceServiceElement
    export type EventEntryArray = EventEntry
    export type IPv4ElementArray = IPv4Element
    export type IPv6ElementArray = IPv6Element
    export type LteAttachConfigurationArray = LteAttachConfiguration
    export type LteAttachStatus = DeprecatedLteAttachStatus
    export type PacketFilterArray = PacketFilter
    export type PacketFilterV3Array = PacketFilterV3
    export type PhonebookEntryArray = PhonebookEntry
    export type ProviderArray = Provider
    export type ProvisionedContextElementArray = ProvisionedContextElement
    export type ProvisionedContextElementV2Array = ProvisionedContextElementV2
    export type RsrpSnrInfoArray = RsrpSnrInfo
    export type SarConfigStateArray = SarConfigState
    export type SlotArray = Slot
    export type SmsCdmaReadRecordArray = SmsCdmaReadRecord
    export type SmsPduReadRecordArray = SmsPduReadRecord
    export type TerminalCapabilityInfoArray = TerminalCapabilityInfo