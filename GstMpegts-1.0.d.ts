
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstMpegts-1.0
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * These values correspond to the registered descriptor type from
 * the various ATSC specifications.
 * 
 * Consult the relevant specifications for more details.
 */
export enum ATSCDescriptorType {
    STUFFING,
    AC3,
    CAPTION_SERVICE,
    CONTENT_ADVISORY,
    EXTENDED_CHANNEL_NAME,
    SERVICE_LOCATION,
    TIME_SHIFTED_SERVICE,
    COMPONENT_NAME,
    DCC_DEPARTING_REQUEST,
    DCC_ARRIVING_REQUEST,
    REDISTRIBUTION_CONTROL,
    GENRE,
    PRIVATE_INFORMATION,
    EAC3,
    ENHANCED_SIGNALING,
    DATA_SERVICE,
    PID_COUNT,
    DOWNLOAD_DESCRIPTOR,
    MULTIPROTOCOL_ENCAPSULATION,
    MODULE_LINK,
    CRC32,
    GROUP_LINK,
}
/**
 * Type of mpeg-ts streams for ATSC, as defined by the ATSC Code Points
 * Registry. For convenience, some stream types from %GstMpegtsScteStreamType
 * are also included.
 */
export enum ATSCStreamType {
    /**
     * DigiCipher II video | Identical to ITU-T Rec. H.262 | ISO/IEC 13818-2 Video
     */
    DCII_VIDEO,
    /**
     * ATSC A/53 Audio | AC-3
     */
    AUDIO_AC3,
    /**
     * SCTE-27 Subtitling
     */
    SUBTITLING,
    /**
     * SCTE-19 Isochronous data | Reserved
     */
    ISOCH_DATA,
    /**
     * SCTE-35 Splice Information Table
     */
    SIT,
    /**
     * E-AC-3 A/52:2018
     */
    AUDIO_EAC3,
    /**
     * E-AC-3 A/107 (ATSC 2.0)
     */
    AUDIO_DTS_HD,
}
export enum AtscMGTTableType {
    EIT0,
    EIT127,
    ETT0,
    ETT127,
}
export enum CableOuterFECScheme {
    UNDEFINED,
    NONE,
    RS_204_188,
}
export enum ComponentStreamContent {
    MPEG2_VIDEO,
    MPEG1_LAYER2_AUDIO,
    TELETEXT_OR_SUBTITLE,
    AC_3,
    AVC,
    AAC,
    DTS,
    SRM_CPCM,
}
export enum ContentNibbleHi {
    MOVIE_DRAMA,
    NEWS_CURRENT_AFFAIRS,
    SHOW_GAME_SHOW,
    SPORTS,
    CHILDREN_YOUTH_PROGRAM,
    MUSIC_BALLET_DANCE,
    ARTS_CULTURE,
    SOCIAL_POLITICAL_ECONOMICS,
    EDUCATION_SCIENCE_FACTUAL,
    LEISURE_HOBBIES,
    SPECIAL_CHARACTERISTICS,
}
export enum DVBCodeRate {
    NONE,
    TODO_1_2,
    TODO_2_3,
    TODO_3_4,
    TODO_4_5,
    TODO_5_6,
    TODO_6_7,
    TODO_7_8,
    TODO_8_9,
    AUTO,
    TODO_3_5,
    TODO_9_10,
    TODO_2_5,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered descriptor type from
 * the various DVB specifications.
 * 
 * Consult the relevant specifications for more details.
 */
export enum DVBDescriptorType {
    NETWORK_NAME,
    SERVICE_LIST,
    STUFFING,
    SATELLITE_DELIVERY_SYSTEM,
    CABLE_DELIVERY_SYSTEM,
    VBI_DATA,
    VBI_TELETEXT,
    BOUQUET_NAME,
    SERVICE,
    COUNTRY_AVAILABILITY,
    LINKAGE,
    NVOD_REFERENCE,
    TIME_SHIFTED_SERVICE,
    SHORT_EVENT,
    EXTENDED_EVENT,
    TIME_SHIFTED_EVENT,
    COMPONENT,
    MOSAIC,
    STREAM_IDENTIFIER,
    CA_IDENTIFIER,
    CONTENT,
    PARENTAL_RATING,
    TELETEXT,
    TELEPHONE,
    LOCAL_TIME_OFFSET,
    SUBTITLING,
    TERRESTRIAL_DELIVERY_SYSTEM,
    MULTILINGUAL_NETWORK_NAME,
    MULTILINGUAL_BOUQUET_NAME,
    MULTILINGUAL_SERVICE_NAME,
    MULTILINGUAL_COMPONENT,
    PRIVATE_DATA_SPECIFIER,
    SERVICE_MOVE,
    SHORT_SMOOTHING_BUFFER,
    FREQUENCY_LIST,
    /**
     * Partial Transport Stream descriptor. Only present in SIT Sections.
     * 
     * See also: %GST_MPEGTS_SECTION_SIT, %GstMpegtsSIT
     */
    PARTIAL_TRANSPORT_STREAM,
    DATA_BROADCAST,
    SCRAMBLING,
    DATA_BROADCAST_ID,
    TRANSPORT_STREAM,
    DSNG,
    PDC,
    AC3,
    ANCILLARY_DATA,
    CELL_LIST,
    CELL_FREQUENCY_LINK,
    ANNOUNCEMENT_SUPPORT,
    APPLICATION_SIGNALLING,
    ADAPTATION_FIELD_DATA,
    SERVICE_IDENTIFIER,
    SERVICE_AVAILABILITY,
    DEFAULT_AUTHORITY,
    RELATED_CONTENT,
    TVA_ID,
    CONTENT_IDENTIFIER,
    TIMESLICE_FEC_IDENTIFIER,
    ECM_REPETITION_RATE,
    S2_SATELLITE_DELIVERY_SYSTEM,
    ENHANCED_AC3,
    DTS,
    AAC,
    XAIT_LOCATION,
    FTA_CONTENT_MANAGEMENT,
    EXTENSION,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered extended descriptor
 * type from the various DVB specifications.
 * 
 * Consult the relevant specifications for more details.
 */
export enum DVBExtendedDescriptorType {
    IMAGE_ICON,
    CPCM_DELIVERY_SIGNALLING,
    CP,
    CP_IDENTIFIER,
    T2_DELIVERY_SYSTEM,
    SH_DELIVERY_SYSTEM,
    SUPPLEMENTARY_AUDIO,
    NETWORK_CHANGE_NOTIFY,
    MESSAGE,
    TARGET_REGION,
    TARGET_REGION_NAME,
    SERVICE_RELOCATED,
    XAIT_PID,
    C2_DELIVERY_SYSTEM,
    DTS_HD_AUDIO_STREAM,
    DTS_NEUTRAL,
    VIDEO_DEPTH_RANGE,
    T2MI,
    URI_LINKAGE,
    AC4,
    /**
     * Provide all avaliable audio programme for user selection
     */
    AUDIO_PRESELECTION,
}
export enum DVBLinkageHandOverType {
    RESERVED,
    IDENTICAL,
    LOCAL_VARIATION,
    ASSOCIATED,
}
/**
 * Linkage Type (EN 300 468 v.1.13.1)
 */
export enum DVBLinkageType {
    RESERVED_00,
    INFORMATION,
    EPG,
    CA_REPLACEMENT,
    TS_CONTAINING_COMPLETE_SI,
    SERVICE_REPLACEMENT,
    DATA_BROADCAST,
    RCS_MAP,
    MOBILE_HAND_OVER,
    SYSTEM_SOFTWARE_UPDATE,
    TS_CONTAINING_SSU,
    IP_MAC_NOTIFICATION,
    TS_CONTAINING_INT,
    EVENT,
    EXTENDED_EVENT,
}
export enum DVBScramblingModeType {
    RESERVED,
    CSA1,
    CSA2,
    CSA3_STANDARD,
    CSA3_MINIMAL_ENHANCED,
    CSA3_FULL_ENHANCED,
    CISSA,
    ATIS_0,
    ATIS_F,
}
/**
 * The type of service of a channel.
 * 
 * As specified in Table 87 of ETSI EN 300 468 v1.13.1
 */
export enum DVBServiceType {
    RESERVED_00,
    DIGITAL_TELEVISION,
    DIGITAL_RADIO_SOUND,
    TELETEXT,
    NVOD_REFERENCE,
    NVOD_TIME_SHIFTED,
    MOSAIC,
    FM_RADIO,
    DVB_SRM,
    RESERVED_09,
    ADVANCED_CODEC_DIGITAL_RADIO_SOUND,
    ADVANCED_CODEC_MOSAIC,
    DATA_BROADCAST,
    RESERVED_0D_COMMON_INTERFACE,
    RCS_MAP,
    RCS_FLS,
    DVB_MHP,
    MPEG2_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_SD_NVOD_REFERENCE,
    ADVANCED_CODEC_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_HD_NVOD_REFERENCE,
    ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE,
    RESERVED_FF,
}
/**
 * The type of teletext page.
 * 
 * As specified in Table 100 of ETSI EN 300 468 v1.13.1
 */
export enum DVBTeletextType {
    NITIAL_PAGE,
    UBTITLE_PAGE,
    DDITIONAL_INFO_PAGE,
    ROGRAMME_SCHEDULE_PAGE,
    EARING_IMPAIRED_PAGE,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered descriptor type from
 * the base MPEG-TS specifications (ITU H.222.0 | ISO/IEC 13818-1).
 * 
 * Consult the relevant specifications for more details.
 */
export enum DescriptorType {
    RESERVED_00,
    RESERVED_01,
    VIDEO_STREAM,
    AUDIO_STREAM,
    HIERARCHY,
    REGISTRATION,
    DATA_STREAM_ALIGNMENT,
    TARGET_BACKGROUND_GRID,
    VIDEO_WINDOW,
    CA,
    ISO_639_LANGUAGE,
    SYSTEM_CLOCK,
    MULTIPLEX_BUFFER_UTILISATION,
    COPYRIGHT,
    MAXIMUM_BITRATE,
    PRIVATE_DATA_INDICATOR,
    SMOOTHING_BUFFER,
    STD,
    IBP,
    DSMCC_CAROUSEL_IDENTIFIER,
    DSMCC_ASSOCIATION_TAG,
    DSMCC_DEFERRED_ASSOCIATION_TAG,
    DSMCC_NPT_REFERENCE,
    DSMCC_NPT_ENDPOINT,
    DSMCC_STREAM_MODE,
    DSMCC_STREAM_EVENT,
    MPEG4_VIDEO,
    MPEG4_AUDIO,
    IOD,
    SL,
    FMC,
    EXTERNAL_ES_ID,
    MUX_CODE,
    FMX_BUFFER_SIZE,
    MULTIPLEX_BUFFER,
    CONTENT_LABELING,
    METADATA_POINTER,
    METADATA,
    METADATA_STD,
    AVC_VIDEO,
    IPMP,
    AVC_TIMING_AND_HRD,
    MPEG2_AAC_AUDIO,
    FLEX_MUX_TIMING,
    MPEG4_TEXT,
    MPEG4_AUDIO_EXTENSION,
    AUXILIARY_VIDEO_STREAM,
    SVC_EXTENSION,
    MVC_EXTENSION,
    J2K_VIDEO,
    MVC_OPERATION_POINT,
    MPEG2_STEREOSCOPIC_VIDEO_FORMAT,
    STEREOSCOPIC_PROGRAM_INFO,
    STEREOSCOPIC_VIDEO_INFO,
}
/**
 * Type of mpeg-ts streams for Blu-ray formats. To be matched with the
 * stream-type of a #GstMpegtsSection.
 */
export enum HdmvStreamType {
    AUDIO_LPCM,
    AUDIO_AC3,
    AUDIO_DTS,
    AUDIO_AC3_TRUE_HD,
    AUDIO_AC3_PLUS,
    AUDIO_DTS_HD,
    AUDIO_DTS_HD_MASTER_AUDIO,
    AUDIO_EAC3,
    SUBPICTURE_PGS,
    IGS,
    SUBTITLE,
    AUDIO_AC3_PLUS_SECONDARY,
    AUDIO_DTS_HD_SECONDARY,
}
/**
 * These values correspond to the registered descriptor type from
 * the various ISDB specifications.
 * 
 * Consult the relevant specifications for more details.
 */
export enum ISDBDescriptorType {
    HIERARCHICAL_TRANSMISSION,
    DIGITAL_COPY_CONTROL,
    NETWORK_IDENTIFICATION,
    PARTIAL_TS_TIME,
    AUDIO_COMPONENT,
    HYPERLINK,
    TARGET_REGION,
    DATA_CONTENT,
    VIDEO_DECODE_CONTROL,
    DOWNLOAD_CONTENT,
    CA_EMM_TS,
    CA_CONTRACT_INFORMATION,
    CA_SERVICE,
    TS_INFORMATION,
    EXTENDED_BROADCASTER,
    LOGO_TRANSMISSION,
    BASIC_LOCAL_EVENT,
    REFERENCE,
    NODE_RELATION,
    SHORT_NODE_INFORMATION,
    STC_REFERENCE,
    SERIES,
    EVENT_GROUP,
    SI_PARAMETER,
    BROADCASTER_NAME,
    COMPONENT_GROUP,
    SI_PRIME_TS,
    BOARD_INFORMATION,
    LDT_LINKAGE,
    CONNECTED_TRANSMISSION,
    CONTENT_AVAILABILITY,
    SERVICE_GROUP,
}
export enum Iso639AudioType {
    UNDEFINED,
    CLEAN_EFFECTS,
    HEARING_IMPAIRED,
    VISUAL_IMPAIRED_COMMENTARY,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to miscellaneous descriptor types that are
 * not yet identified from known specifications.
 */
export enum MiscDescriptorType {
    MTS_DESC_DTG_LOGICAL_CHANNEL,
}
export enum ModulationType {
    QPSK,
    QAM_16,
    QAM_32,
    QAM_64,
    QAM_128,
    QAM_256,
    QAM_AUTO,
    VSB_8,
    VSB_16,
    PSK_8,
    APSK_16,
    APSK_32,
    DQPSK,
    QAM_4_NR_,
    NONE,
}
/**
 * Running status of a service.
 * 
 * Corresponds to table 6 of ETSI EN 300 468 (v1.13.0)
 */
export enum RunningStatus {
    UNDEFINED,
    NOT_RUNNING,
    STARTS_IN_FEW_SECONDS,
    PAUSING,
    RUNNING,
    OFF_AIR,
}
/**
 * These values correspond to the ones defined by SCTE (amongst other in ANSI/SCTE 57)
 */
export enum SCTEDescriptorType {
    STUFFING,
    AC3,
    FRAME_RATE,
    EXTENDED_VIDEO,
    COMPONENT_NAME,
    FREQUENCY_SPEC,
    MODULATION_PARAMS,
    TRANSPORT_STREAM_ID,
}
export enum SCTESpliceCommandType {
    NULL,
    SCHEDULE,
    INSERT,
    TIME,
    BANDWIDTH,
    PRIVATE,
}
export enum SCTESpliceDescriptor {
    AVAIL,
    DTMF,
    SEGMENTATION,
    TIME,
    AUDIO,
}
export enum SatellitePolarizationType {
    LINEAR_HORIZONTAL,
    LINEAR_VERTICAL,
    CIRCULAR_LEFT,
    CIRCULAR_RIGHT,
}
export enum SatelliteRolloff {
    TODO_35,
    TODO_20,
    TODO_25,
    RESERVED,
    AUTO,
}
/**
 * Type of mpeg-ts streams for SCTE. Most users would want to use the
 * #GstMpegtsATSCStreamType instead since it also covers these stream types
 */
export enum ScteStreamType {
    /**
     * SCTE-27 Subtitling
     */
    SUBTITLING,
    /**
     * SCTE-19 Isochronous data
     */
    ISOCH_DATA,
    /**
     * SCTE-35 Splice Information Table
     */
    SIT,
    /**
     * SCTE-07 Data Service or
     * Network Resource Table
     */
    DST_NRT,
    /**
     * Type B - DSM-CC Data Carousel
     * [IEC 13818-6])
     */
    DSMCC_DCB,
    /**
     * Enhanced Television Application
     * Signaling (OC-SP-ETV-AM1.0.1-120614)
     */
    SIGNALING,
    /**
     * SCTE-07 Synchronous data
     */
    SYNC_DATA,
    /**
     * SCTE-53 Asynchronous data
     */
    ASYNC_DATA,
}
/**
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered ATSC section `table_id` variants. Unless specified
 * otherwise, they are defined in the "ATSC A/65" specification.
 * 
 * see also: #GstMpegtsSectionTableID and other variants.
 */
export enum SectionATSCTableID {
    /**
     * Master Guide Table (MGT)
     */
    MASTER_GUIDE,
    /**
     * Terrestrial Virtual Channel Table (TVCT)
     */
    TERRESTRIAL_VIRTUAL_CHANNEL,
    /**
     * Cable Virtual Channel Table (CVCT)
     */
    CABLE_VIRTUAL_CHANNEL,
    /**
     * Rating Region Table (RRT)
     */
    RATING_REGION,
    /**
     * Event Information Table (EIT)
     */
    EVENT_INFORMATION,
    /**
     * Extended Text Table (ETT)
     */
    CHANNEL_OR_EVENT_EXTENDED_TEXT,
    /**
     * System Time Table (STT)
     */
    SYSTEM_TIME,
    /**
     * A/90: Data Event Table (DET)
     */
    DATA_EVENT,
    /**
     * A/90: Data Service Table (DST)
     */
    DATA_SERVICE,
    /**
     * A/57B: Program Identifier Table.
     */
    PROGRAM_IDENTIFIER,
    /**
     * A/90: Network Resources Table (NRT)
     */
    NETWORK_RESOURCE,
    /**
     * A/90: Long Term Service Table (LTST)
     */
    LONG_TERM_SERVICE,
    /**
     * Directed Channel Change Table (DCCT)
     */
    DIRECTED_CHANNEL_CHANGE,
    /**
     * Directed Channel Change Selection Code Table (DCCSCT)
     */
    DIRECTED_CHANNEL_CHANGE_SECTION_CODE,
    AGGREGATE_EVENT_INFORMATION,
    AGGREGATE_EXTENDED_TEXT,
    AGGREGATE_DATA_EVENT,
    /**
     * A/81: Satellite Virtual Channel Table
     */
    SATELLITE_VIRTUAL_CHANNEL,
}
/**
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered DVB table_id variants. Unless specified otherwise,
 * they come from the DVB Specification for SI (ETSI EN 300 468).
 * 
 * see also: #GstMpegtsSectionTableID
 */
export enum SectionDVBTableID {
    /**
     * Network Information Table (NIT), Actual Network
     */
    NETWORK_INFORMATION_ACTUAL_NETWORK,
    /**
     * Network Information Table (NIT), Other Network
     */
    NETWORK_INFORMATION_OTHER_NETWORK,
    /**
     * Service Description Table (SDT), Actual Transport Stream
     */
    SERVICE_DESCRIPTION_ACTUAL_TS,
    /**
     * Service Description Table (SDT), Other Transport Stream
     */
    SERVICE_DESCRIPTION_OTHER_TS,
    /**
     * Bouquet Association Table (BAT)
     */
    BOUQUET_ASSOCIATION,
    /**
     * ETSI TS 102 006: Update Notification Table (UNT)
     */
    UPDATE_NOTIFICATION,
    /**
     * ETSI EN 303 560: Downloadable Font Info
     */
    DOWNLOADABLE_FONT_INFO,
    /**
     * Event Information Table (EIT), Actual Transport Stream, present/following
     */
    EVENT_INFORMATION_ACTUAL_TS_PRESENT,
    /**
     * Event Information Table (EIT), Other Transport Stream, present/following
     */
    EVENT_INFORMATION_OTHER_TS_PRESENT,
    /**
     * Event Information Table (EIT), Actual Transport Stream, Schedule (first)
     */
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1,
    /**
     * Event Information Table (EIT), Actual Transport Stream, Schedule (last)
     */
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N,
    /**
     * Event Information Table (EIT), Other Transport Stream, Schedule (first)
     */
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_1,
    /**
     * Event Information Table (EIT), Other Transport Stream, Schedule (last)
     */
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_N,
    /**
     * Time Date Table (TDT)
     */
    TIME_DATE,
    /**
     * Running Status Table (RST)
     */
    RUNNING_STATUS,
    /**
     * Stuffing Table (ST)
     */
    STUFFING,
    /**
     * Time Offset Table (TOT)
     */
    TIME_OFFSET,
    /**
     * ETSI TS 102 323: Application Information Table (AIT)
     */
    APPLICATION_INFORMATION_TABLE,
    /**
     * ETSI TS 102 323: Container Section
     */
    CONTAINER,
    /**
     * ETSI TS 102 323: Related Content Table (RCT)
     */
    RELATED_CONTENT,
    /**
     * ETSI TS 102 323: Content Identifier Table (CIT)
     */
    CONTENT_IDENTIFIER,
    /**
     * ETSI TS 301 192: MPE-FEC Section
     */
    MPE_FEC,
    /**
     * ETSI 103 323: Resolution Provider Notification Table (RNT)
     */
    RESOLUTION_NOTIFICATION,
    /**
     * ETSI TS 102 772: MPE-IFEC Section
     */
    MPE_IFEC,
    /**
     * ETSI TS 102 809: Protection Message Section
     */
    PROTECTION_MESSAGE,
    /**
     * Discontinuity Information Table (DIT)
     */
    DISCONTINUITY_INFORMATION,
    /**
     * Selection Information Table (SIT)
     */
    SELECTION_INFORMATION,
    /**
     * ETSI TR 289: CA Message Table (CMT): ECM 0
     */
    CA_MESSAGE_ECM_0,
    /**
     * ETSI TR 289: CA Message Table (CMT): ECM 1
     */
    CA_MESSAGE_ECM_1,
    /**
     * ETSI TR 289: CA Message Table (CMT): CA System Private (First)
     */
    CA_MESSAGE_SYSTEM_PRIVATE_1,
    /**
     * ETSI TR 289: CA Message Table (CMT): CA System Private (Last)
     */
    CA_MESSAGE_SYSTEM_PRIVATE_N,
    SCT,
    FCT,
    TCT,
    SPT,
    CMT,
    TBTP,
    PCR_PACKET_PAYLOAD,
    TRANSMISSION_MODE_SUPPORT_PAYLOAD,
    TIM,
    LL_FEC_PARITY_DATA_TABLE,
}
/**
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered SCTE table_id variants.
 * 
 * see also: #GstMpegtsSectionTableID
 */
export enum SectionSCTETableID {
    /**
     * SCTE-18 Emergency Alert System
     */
    EAS,
    /**
     * CL-SP-ETV-AM 1.0.1 EBIF message
     */
    EBIF,
    RESERVED,
    /**
     * CL-SP-ETV-AM 1.0.1 EBIF Int. Signaling Sect.
     */
    EISS,
    /**
     * CL-SP-ETV-AM 1.0.1 DSMCC DII message
     */
    DII,
    /**
     * CL-SP-ETV-AM 1.0.1 DSMCC Data Download Block
     */
    DDB,
    /**
     * SCTE-35 splice information is carried in a
     * section stream on a separate PID in the program???s Map Table (PMT) allowing
     * Splice Event notifications to remain associated with the program and pass
     * through multiplexers.
     */
    SPLICE,
}
/**
 * Values for a #GstMpegtsSection table_id
 * 
 * These are the registered ITU H.222.0 | ISO/IEC 13818-1 table_id variants.
 * 
 * see also #GstMpegtsSectionATSCTableID, #GstMpegtsSectionDVBTableID, and
 * #GstMpegtsSectionSCTETableID
 */
export enum SectionTableID {
    /**
     * Program Association Table (PAT)
     */
    PROGRAM_ASSOCIATION,
    /**
     * Conditional Access Table (CAT)
     */
    CONDITIONAL_ACCESS,
    /**
     * Program Map Table (PMT)
     */
    TS_PROGRAM_MAP,
    /**
     * Transport Stream Description Table
     */
    TS_DESCRIPTION,
    /**
     * ISO/IEC 14496 Scene Description Table
     */
    TODO_14496_SCENE_DESCRIPTION,
    /**
     * ISO/IEC 14496 Object Descriptor Table
     */
    TODO_14496_OBJET_DESCRIPTOR,
    /**
     * Metadata Section
     */
    METADATA,
    /**
     * IPMP Control Information
     */
    IPMP_CONTROL_INFORMATION,
    /**
     * ISO/IEC 14496 Section.
     */
    TODO_14496_SECTION,
    /**
     * ISO/IEC 23001-11 (Green Access Unit) Section.
     */
    TODO_23001_11_SECTION,
    /**
     * ISO/ISO 23001-10 (Quality Access Unit) Section.
     */
    TODO_23001_10_SECTION,
    /**
     * DSM-CC Multi-Protocol Encapsulated (MPE) Data
     */
    DSM_CC_MULTIPROTO_ENCAPSULATED_DATA,
    /**
     * DSM-CC U-N Messages
     */
    DSM_CC_U_N_MESSAGES,
    /**
     * DSM-CC Download Data Messages
     */
    DSM_CC_DOWNLOAD_DATA_MESSAGES,
    /**
     * DSM-CC Stream Descriptors
     */
    DSM_CC_STREAM_DESCRIPTORS,
    /**
     * DSM-CC Private Data
     */
    DSM_CC_PRIVATE_DATA,
    /**
     * DSM-CC Addressable Section
     */
    DSM_CC_ADDRESSABLE_SECTIONS,
    /**
     * Unset section table_id (value is forbidden to use in actual sections)
     */
    UNSET,
}
/**
 * Types of #GstMpegtsSection that the library handles. This covers all the
 * MPEG-TS and derivate specification that the library can properly identify and
 * use.
 */
export enum SectionType {
    /**
     * Unknown section type
     */
    UNKNOWN,
    /**
     * Program Association Table (ISO/IEC 13818-1)
     */
    PAT,
    /**
     * Program Map Table (ISO/IEC 13818-1)
     */
    PMT,
    /**
     * Conditional Access Table (ISO/IEC 13818-1)
     */
    CAT,
    /**
     * Transport Stream Description Table (ISO/IEC 13818-1)
     */
    TSDT,
    /**
     * Event Information Table (EN 300 468)
     */
    EIT,
    /**
     * Network Information Table (ISO/IEC 13818-1 / EN 300 468)
     */
    NIT,
    /**
     * Bouquet Association Table ((EN 300 468)
     */
    BAT,
    /**
     * Service Description Table (EN 300 468)
     */
    SDT,
    /**
     * Time and Date Table (EN 300 468)
     */
    TDT,
    /**
     * Time Offset Table (EN 300 468)
     */
    TOT,
    /**
     * Selection Information Table (EN 300 468)
     */
    SIT,
    /**
     * ATSC Terrestrial Virtual Channel Table (A65)
     */
    ATSC_TVCT,
    /**
     * ATSC Cable Virtual Channel Table (A65)
     */
    ATSC_CVCT,
    /**
     * ATSC Master Guide Table (A65)
     */
    ATSC_MGT,
    /**
     * ATSC Extended Text Table (A65)
     */
    ATSC_ETT,
    /**
     * ATSC Event Information Table (A65)
     */
    ATSC_EIT,
    /**
     * ATSC System Time Table (A65)
     */
    ATSC_STT,
    /**
     * ATSC Rating Region Table (A65)
     */
    ATSC_RRT,
    /**
     * SCTE Splice Information Table (SCTE-35)
     */
    SCTE_SIT,
}
/**
 * Type of MPEG-TS stream type.
 * 
 * These values correspond to the base standard registered types. Depending
 * on the variant of mpeg-ts being used (Bluray, ATSC, DVB, ...), other
 * types might also be used, but will not conflict with these.
 * 
 * Corresponds to table 2-34 of ITU H.222.0 | ISO/IEC 13818-1
 */
export enum StreamType {
    /**
     * ITU-T | ISO/IEC Reserved
     */
    RESERVED_00,
    /**
     * ISO/IEC 11172-2 Video (i.e. MPEG-1 Video)
     */
    VIDEO_MPEG1,
    /**
     * Rec. ITU-T H.262 | ISO/IEC 13818-2
     *       Video or ISO/IEC 11172-2 constrained parameter video stream (i.e.
     *       MPEG-2 Video)
     */
    VIDEO_MPEG2,
    /**
     * ISO/IEC 11172-3 Audio
     */
    AUDIO_MPEG1,
    /**
     * ISO/IEC 13818-3 Audio
     */
    AUDIO_MPEG2,
    /**
     * private sections
     */
    PRIVATE_SECTIONS,
    /**
     * PES packets containing private data
     */
    PRIVATE_PES_PACKETS,
    /**
     * ISO/IEC 13522 MHEG
     */
    MHEG,
    /**
     * Annex A DSM-CC
     */
    DSM_CC,
    /**
     * Rec. ITU-T H.222.1
     */
    H_222_1,
    /**
     * ISO/IEC 13818-6 type A
     */
    DSMCC_A,
    /**
     * ISO/IEC 13818-6 type B
     */
    DSMCC_B,
    /**
     * ISO/IEC 13818-6 type C
     */
    DSMCC_C,
    /**
     * ISO/IEC 13818-6 type D
     */
    DSMCC_D,
    /**
     * auxiliary streams
     */
    AUXILIARY,
    /**
     * ISO/IEC 13818-7 Audio (AAC) with ADTS
     *       transport syntax
     */
    AUDIO_AAC_ADTS,
    /**
     * ISO/IEC 14496-2 Visual (MPEG-4 Video)
     */
    VIDEO_MPEG4,
    /**
     * ISO/IEC 14496-3 Audio (AAC) with the LATM
     *       transport syntax as defined in ISO/IEC 14496-3
     */
    AUDIO_AAC_LATM,
    /**
     * ISO/IEC 14496-1
     *       SL-packetized stream or FlexMux stream carried in PES packets
     */
    SL_FLEXMUX_PES_PACKETS,
    /**
     * ISO/IEC 14496-1 SL-packetized
     *       stream or FlexMux stream carried in ISO/IEC 14496_sections
     */
    SL_FLEXMUX_SECTIONS,
    /**
     * ISO/IEC 13818-6 Synchronized
     *       Download Protocol
     */
    SYNCHRONIZED_DOWNLOAD,
    /**
     * Metadata carried in PES packets
     */
    METADATA_PES_PACKETS,
    /**
     * Metadata carried in metadata_sections
     */
    METADATA_SECTIONS,
    /**
     * Metadata carried in ISO/IEC
     *       13818-6 Data Carousel
     */
    METADATA_DATA_CAROUSEL,
    /**
     * Metadata carried in
     *       ISO/IEC 13818-6 Object Carousel
     */
    METADATA_OBJECT_CAROUSEL,
    /**
     * Metadata carried in
     *       ISO/IEC 13818-6 Synchronized Download Protocol
     */
    METADATA_SYNCHRONIZED_DOWNLOAD,
    /**
     * IPMP stream (defined in ISO/IEC 13818-11,
     *       MPEG-2 IPMP)
     */
    MPEG2_IPMP,
    /**
     * AVC video stream conforming to one or
     * more profiles defined in Annex A of Rec. ITU-T H.264 | ISO/IEC 14496-10 or
     * AVC video sub-bitstream of SVC as defined in 2.1.78 or MVC base view
     * sub-bitstream, as defined in 2.1.85, or AVC video sub-bitstream of MVC, as
     * defined in 2.1.88
     */
    VIDEO_H264,
    /**
     * ISO/IEC 14496-3 (AAC) Audio, without
     *       using any additional transport syntax, such as DST, ALS and SLS
     */
    AUDIO_AAC_CLEAN,
    /**
     * ISO/IEC 14496-17 Text
     */
    MPEG4_TIMED_TEXT,
    /**
     * Auxiliary video stream as defined in
     * ISO/IEC 23002-3
     */
    VIDEO_RVC,
    /**
     * SVC video sub-bitstream
     * of an AVC video stream conforming to one or more profiles defined in Annex G
     * of Rec. ITU-T H.264 | ISO/IEC 14496-10
     */
    VIDEO_H264_SVC_SUB_BITSTREAM,
    /**
     * MVC video sub-bitstream
     * of an AVC video stream conforming to one or more profiles defined in Annex H
     * of Rec. ITU-T H.264 | ISO/IEC 14496-10
     */
    VIDEO_H264_MVC_SUB_BITSTREAM,
    /**
     * Video stream conforming to one or more
     *       profiles as defined in Rec. ITU-T T.800 | ISO/IEC 15444-1 (i.e. JPEG 2000)
     */
    VIDEO_JP2K,
    /**
     * Additional view
     * Rec. ITU-T H.262 | ISO/IEC 13818-2 video stream for service-compatible
     * stereoscopic 3D services
     */
    VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW,
    /**
     * Additional view
     * Rec. ITU-T H.264 | ISO/IEC 14496-10 video stream conforming to one or more
     * profiles defined in Annex A for service-compatible stereoscopic 3D services
     */
    VIDEO_H264_STEREO_ADDITIONAL_VIEW,
    /**
     * Rec. ITU-T H.265 | ISO/IEC 23008-2 video
     *      stream or an HEVC temporal video sub-bitstream
     */
    VIDEO_HEVC,
    /**
     * IPMP stream
     */
    IPMP_STREAM,
    /**
     * User Private stream id (used for VC-1) as defined by SMPTE RP227.
     */
    USER_PRIVATE_EA,
}
export enum TerrestrialGuardInterval {
    TODO_1_32,
    TODO_1_16,
    TODO_1_8,
    TODO_1_4,
    AUTO,
    TODO_1_128,
    TODO_19_128,
    TODO_19_256,
    PN420,
    PN595,
    PN945,
}
export enum TerrestrialHierarchy {
    NONE,
    TODO_1,
    TODO_2,
    TODO_4,
    AUTO,
}
export enum TerrestrialTransmissionMode {
    TODO_2K,
    TODO_8K,
    AUTO,
    TODO_4K,
    TODO_1K,
    TODO_16K,
    TODO_32K,
    C1,
    C3780,
}
/**
 * Well-known registration ids, expressed as native-endian 32bit integers. These
 * are used in descriptors of type %GST_MTS_DESC_REGISTRATION. Unless specified
 * otherwise (by use of the "OTHER" prefix), they are all registered by the
 * [SMPTE Registration Authority](https://smpte-ra.org/) or specified in
 * "official" documentation for the given format.
 * @bitfield 
 */
export enum RegistrationId {
    /**
     * Undefined registration id
     */
    TODO_0,
    /**
     * Audio AC-3, ATSC A/52
     */
    AC_3,
    /**
     * SCTE 35, "Digital Program Insertion Cueing Message"
     */
    CUEI,
    /**
     * Dirac Video codec
     */
    DRAC,
    /**
     * DTS Audio
     */
    DTS1,
    /**
     * DTS Audio
     */
    DTS2,
    /**
     * DTS Audio
     */
    DTS3,
    /**
     * SMPTE 302M, Mapping of AES3 Data in mpeg-ts
     */
    BSSD,
    /**
     * Enhanced AC-3 (i.e. EAC3)
     */
    EAC3,
    /**
     * Cablelabs ETV
     */
    ETV1,
    /**
     * ATSC A/53 compliant stream (i.e. ATSC)
     */
    GA94,
    /**
     * Blu-ray, "System Description Blu-ray Disc
     *             Read-Only Format part 3 Audio Visual Basic Specifications"
     */
    HDMV,
    /**
     * SMPTE RP217 : Non-synchronized Mapping of KLV
     *             Packets in mpeg-ts
     */
    KLVA,
    /**
     * Opus Audio
     */
    OPUS,
    /**
     * HDV (Sony)
     */
    TSHV,
    /**
     * Video VC-1, SMPTE RP227 "VC-1 Bitstream Transport Encodings"
     */
    VC_1,
    /**
     * Audio AC-4, ETSI 103 190-2
     */
    AC_4,
    /**
     * HEVC / h265
     */
    OTHER_HEVC,
}
/**
 * Creates a #GstMpegtsDescriptor with custom `tag` and `data`
 * @param tag descriptor tag
 * @param data descriptor data (after tag and length field)
 */
export function descriptorFromCustom(tag: number, data: Uint8Array): Descriptor
/**
 * Creates a #GstMpegtsDescriptor with custom `tag,` `tag_extension` and `data`
 * @param tag descriptor tag
 * @param tagExtension descriptor tag extension
 * @param data descriptor data (after tag and length field)
 */
export function descriptorFromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
/**
 * Creates a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_NETWORK_NAME,
 * with the network name `name`. The data field of the #GstMpegtsDescriptor
 * will be allocated, and transferred to the caller.
 * @param name the network name to set
 */
export function descriptorFromDvbNetworkName(name: string): Descriptor
/**
 * Fills a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_SERVICE.
 * The data field of the #GstMpegtsDescriptor will be allocated,
 * and transferred to the caller.
 * @param serviceType Service type defined as a #GstMpegtsDVBServiceType
 * @param serviceName Name of the service
 * @param serviceProvider Name of the service provider
 */
export function descriptorFromDvbService(serviceType: DVBServiceType, serviceName: string | null, serviceProvider: string | null): Descriptor
export function descriptorFromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
/**
 * Creates a %GST_MTS_DESC_ISO_639_LANGUAGE #GstMpegtsDescriptor with
 * a single language
 * @param language ISO-639-2 language 3-char code
 */
export function descriptorFromIso639Language(language: string): Descriptor
/**
 * Creates a %GST_MTS_DESC_REGISTRATION #GstMpegtsDescriptor
 * @param formatIdentifier a 4 character format identifier string
 * @param additionalInfo pointer to optional additional info
 */
export function descriptorFromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
export function descriptorParseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
export function descriptorParseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
export function dvbComponentDescriptorFree(source: ComponentDescriptor): void
/**
 * Creates a new #GstEvent for a #GstMpegtsSection.
 * @param section The #GstMpegtsSection to put in a message
 */
export function eventNewMpegtsSection(section: Section): Gst.Event
/**
 * Extracts the #GstMpegtsSection contained in the `event` #GstEvent
 * @param event #GstEvent containing a #GstMpegtsSection
 */
export function eventParseMpegtsSection(event: Gst.Event): Section
/**
 * Finds the first descriptor of type `tag` in the array.
 * 
 * Note: To look for descriptors that can be present more than once in an
 * array of descriptors, iterate the #GArray manually.
 * @param descriptors an array of #GstMpegtsDescriptor
 * @param tag the tag to look for
 */
export function findDescriptor(descriptors: Descriptor[], tag: number): Descriptor
/**
 * Finds the first descriptor of type `tag` with `tag_extension` in the array.
 * 
 * Note: To look for descriptors that can be present more than once in an
 * array of descriptors, iterate the #GArray manually.
 * @param descriptors an array of #GstMpegtsDescriptor
 * @param tag the tag to look for
 * @param tagExtension 
 */
export function findDescriptorWithExtension(descriptors: Descriptor[], tag: number, tagExtension: number): Descriptor
/**
 * Initializes the MPEG-TS helper library. Must be called before any
 * usage.
 */
export function initialize(): void
/**
 * Creates a new #GstMessage for a `GstMpegtsSection`.
 * @param parent The creator of the message
 * @param section The #GstMpegtsSection to put in a message
 */
export function messageNewMpegtsSection(parent: Gst.Object, section: Section): Gst.Message
/**
 * Returns the #GstMpegtsSection contained in a message.
 * @param message a #GstMessage
 */
export function messageParseMpegtsSection(message: Gst.Message): Section
/**
 * Parses the descriptors present in `buffer` and returns them as an
 * array.
 * 
 * Note: The data provided in `buffer` will not be copied.
 * @param buffer descriptors to parse
 * @param bufLen Size of `buffer`
 */
export function parseDescriptors(buffer: number, bufLen: number): Descriptor[]
/**
 * Allocates a new #GPtrArray for #GstMpegtsPatProgram. The array can be filled
 * and then converted to a PAT section with gst_mpegts_section_from_pat().
 */
export function patNew(): PatProgram[]
/**
 * Allocates and initializes a new INSERT command #GstMpegtsSCTESIT
 * setup to cancel the specified `event_id`.
 * @param eventId The event ID to cancel.
 */
export function scteCancelNew(eventId: number): SCTESIT
/**
 * Allocates and initializes a NULL command #GstMpegtsSCTESIT.
 */
export function scteNullNew(): SCTESIT
/**
 * Allocates and initializes a new "Splice In" INSERT command
 * #GstMpegtsSCTESIT for the given `event_id` and `splice_time`.
 * 
 * If the `splice_time` is #G_MAXUINT64 then the event will be
 * immediate as opposed to for the target `splice_time`.
 * @param eventId The event ID.
 * @param spliceTime The running time for the splice event
 */
export function scteSpliceInNew(eventId: number, spliceTime: Gst.ClockTime): SCTESIT
/**
 * Allocates and initializes a new "Splice Out" INSERT command
 * #GstMpegtsSCTESIT for the given `event_id,` `splice_time` and
 * `duration`.
 * 
 * If the `splice_time` is #G_MAXUINT64 then the event will be
 * immediate as opposed to for the target `splice_time`.
 * 
 * If the `duration` is 0 it won't be specified in the event.
 * @param eventId The event ID.
 * @param spliceTime The running time for the splice event
 * @param duration The optional duration.
 */
export function scteSpliceOutNew(eventId: number, spliceTime: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
export function sectionFromAtscMgt(mgt: AtscMGT): Section
export function sectionFromAtscRrt(rrt: AtscRRT): Section
export function sectionFromAtscStt(stt: AtscSTT): Section
/**
 * Ownership of `nit` is taken. The data in `nit` is managed by the #GstMpegtsSection
 * @param nit a #GstMpegtsNIT to create the #GstMpegtsSection from
 */
export function sectionFromNit(nit: NIT): Section
/**
 * Creates a PAT #GstMpegtsSection from the `programs` array of #GstMpegtsPatPrograms
 * @param programs an array of #GstMpegtsPatProgram
 * @param tsId Transport stream ID of the PAT
 */
export function sectionFromPat(programs: PatProgram[], tsId: number): Section
/**
 * Creates a #GstMpegtsSection from `pmt` that is bound to `pid`
 * @param pmt a #GstMpegtsPMT to create a #GstMpegtsSection from
 * @param pid The PID that the #GstMpegtsPMT belongs to
 */
export function sectionFromPmt(pmt: PMT, pid: number): Section
/**
 * Ownership of `sit` is taken. The data in `sit` is managed by the #GstMpegtsSection
 * @param sit a #GstMpegtsSCTESIT to create the #GstMpegtsSection from
 * @param pid 
 */
export function sectionFromScteSit(sit: SCTESIT, pid: number): Section
/**
 * Ownership of `sdt` is taken. The data in `sdt` is managed by the #GstMpegtsSection
 * @param sdt a #GstMpegtsSDT to create the #GstMpegtsSection from
 */
export function sectionFromSdt(sdt: SDT): Section
export interface PacketizeFunc {
    (section: Section): boolean
}
export interface AtscEIT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscEIT

    /**
     * The source id
     * @field 
     */
    sourceId: number
    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * Events
     * @field 
     */
    events: AtscEITEvent[]
}

/**
 * Event Information Table (ATSC)
 * @record 
 */
export class AtscEIT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscEIT

    static name: string
}

export interface AtscEITEvent {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscEITEvent

    /**
     * The event id
     * @field 
     */
    eventId: number
    /**
     * The start time
     * @field 
     */
    startTime: number
    /**
     * The etm location
     * @field 
     */
    etmLocation: number
    /**
     * The length in seconds
     * @field 
     */
    lengthInSeconds: number
    /**
     * the titles
     * @field 
     */
    titles: AtscMultString[]
    /**
     * descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * An ATSC EIT Event
 * @record 
 */
export class AtscEITEvent {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscEITEvent

    static name: string
}

export interface AtscETT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscETT

    ettTableIdExtension: number
    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * The etm id
     * @field 
     */
    etmId: number
    /**
     * List of texts
     * @field 
     */
    messages: AtscMultString[]
}

/**
 * Extended Text Table (ATSC)
 * @record 
 */
export class AtscETT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscETT

    static name: string
}

export interface AtscMGT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscMGT

    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * The numbers of subtables
     * @field 
     */
    tablesDefined: number
    /**
     * the tables
     * @field 
     */
    tables: AtscMGTTable[]
    /**
     * descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Master Guide Table (A65)
 * @record 
 */
export class AtscMGT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscMGT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.AtscMGT

    constructor() 
    static new(): AtscMGT
}

export interface AtscMGTTable {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscMGTTable

    /**
     * #GstMpegtsAtscMGTTableType
     * @field 
     */
    tableType: number
    /**
     * The packet ID
     * @field 
     */
    pid: number
    /**
     * The version number
     * @field 
     */
    versionNumber: number
    numberBytes: number
    /**
     * descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Source from a `GstMpegtsAtscMGT`
 * @record 
 */
export class AtscMGTTable {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscMGTTable

    static name: string
}

export interface AtscMultString {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscMultString

    /**
     * The ISO639 language code
     * @field 
     */
    iso639Langcode: number[]
    segments: AtscStringSegment[]
}

export class AtscMultString {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscMultString

    static name: string
}

export interface AtscRRT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscRRT

    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * the names
     * @field 
     */
    names: AtscMultString[]
    /**
     * the number of dimensions defined for this rating table
     * @field 
     */
    dimensionsDefined: number
    /**
     * A set of dimensions
     * @field 
     */
    dimensions: AtscRRTDimension[]
    /**
     * descriptors
     * @field 
     */
    descriptors: object[]
}

/**
 * Region Rating Table (A65)
 * @record 
 */
export class AtscRRT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscRRT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.AtscRRT

    constructor() 
    static new(): AtscRRT
}

export interface AtscRRTDimension {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscRRTDimension

    /**
     * the names
     * @field 
     */
    names: AtscMultString[]
    /**
     * whether the ratings represent a graduated scale
     * @field 
     */
    graduatedScale: boolean
    /**
     * the number of values defined for this dimension
     * @field 
     */
    valuesDefined: number
    /**
     * set of values
     * @field 
     */
    values: AtscRRTDimensionValue[]
}

export class AtscRRTDimension {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscRRTDimension

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.AtscRRTDimension

    constructor() 
    static new(): AtscRRTDimension
}

export interface AtscRRTDimensionValue {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue

    /**
     * the abbreviated ratings
     * @field 
     */
    abbrevRatings: AtscMultString[]
    /**
     * the ratings
     * @field 
     */
    ratings: AtscMultString[]
}

export class AtscRRTDimensionValue {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue

    constructor() 
    static new(): AtscRRTDimensionValue
}

export interface AtscSTT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscSTT

    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * The system time
     * @field 
     */
    systemTime: number
    /**
     * The GPS to UTC offset
     * @field 
     */
    gpsUtcOffset: number
    dsStatus: boolean
    /**
     * The day of month
     * @field 
     */
    dsDayofmonth: number
    /**
     * The hour
     * @field 
     */
    dsHour: number
    /**
     * descriptors
     * @field 
     */
    descriptors: Descriptor[]
    /**
     * The UTC date and time
     * @field 
     */
    utcDatetime: Gst.DateTime

    // Owm methods of GstMpegts-1.0.GstMpegts.AtscSTT

    getDatetimeUtc(): Gst.DateTime
}

/**
 * System Time Table (A65)
 * @record 
 */
export class AtscSTT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscSTT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.AtscSTT

    constructor() 
    static new(): AtscSTT
}

export interface AtscStringSegment {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscStringSegment

    /**
     * The compression type
     * @field 
     */
    compressionType: number
    /**
     * The mode
     * @field 
     */
    mode: number
    /**
     * The size of compressed data
     * @field 
     */
    compressedDataSize: number
    /**
     * The compressed data
     * @field 
     */
    compressedData: number
    cachedString: string

    // Owm methods of GstMpegts-1.0.GstMpegts.AtscStringSegment

    getString(): string
    setString(string: string, compressionType: number, mode: number): boolean
}

/**
 * A string segment
 * @record 
 */
export class AtscStringSegment {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscStringSegment

    static name: string
}

export interface AtscVCT {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscVCT

    /**
     * The transport stream
     * @field 
     */
    transportStreamId: number
    /**
     * The protocol version
     * @field 
     */
    protocolVersion: number
    /**
     * sources
     * @field 
     */
    sources: AtscVCTSource[]
    /**
     * descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Represents both:
 *   Terrestrial Virtual Channel Table (A65)
 *   Cable Virtual Channel Table (A65)
 * @record 
 */
export class AtscVCT {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscVCT

    static name: string
}

export interface AtscVCTSource {

    // Own fields of GstMpegts-1.0.GstMpegts.AtscVCTSource

    /**
     * The short name of a source
     * @field 
     */
    shortName: string
    /**
     * The major channel number
     * @field 
     */
    majorChannelNumber: number
    /**
     * The minor channel number
     * @field 
     */
    minorChannelNumber: number
    /**
     * The modulation mode
     * @field 
     */
    modulationMode: number
    /**
     * The carrier frequency
     * @field 
     */
    carrierFrequency: number
    /**
     * The transport stream ID
     * @field 
     */
    channelTSID: number
    /**
     * The program number (see #GstMpegtsPatProgram)
     * @field 
     */
    programNumber: number
    /**
     * The ETM location
     * @field 
     */
    eTMLocation: number
    /**
     * is access controlled
     * @field 
     */
    accessControlled: boolean
    /**
     * is hidden
     * @field 
     */
    hidden: boolean
    /**
     * is path select, CVCT only
     * @field 
     */
    pathSelect: boolean
    /**
     * is out of band, CVCT only
     * @field 
     */
    outOfBand: boolean
    /**
     * is hide guide
     * @field 
     */
    hideGuide: boolean
    /**
     * The service type
     * @field 
     */
    serviceType: number
    /**
     * The source id
     * @field 
     */
    sourceId: number
    /**
     * an array of #GstMpegtsDescriptor
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Source from a %GstMpegtsAtscVCT, can be used both for TVCT and CVCT tables
 * @record 
 */
export class AtscVCTSource {

    // Own properties of GstMpegts-1.0.GstMpegts.AtscVCTSource

    static name: string
}

export interface AudioPreselectionDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor

    /**
     * 5-bit
     * @field 
     */
    preselectionId: number
    /**
     * 3-bit field
     * @field 
     */
    audioRenderingIndication: number
    /**
     * visually impaired
     * @field 
     */
    audioDescription: boolean
    spokenSubtitles: boolean
    dialogueEnhancement: boolean
    interactivityEnabled: boolean
    languageCodePresent: boolean
    textLabelPresent: boolean
    /**
     * indicates if this PID conveys a complete audio programme
     * @field 
     */
    multiStreamInfoPresent: boolean
    futureExtension: boolean
    /**
     * NULL terminated ISO 639 language code.
     * @field 
     */
    languageCode: string
    messageId: number
}

/**
 * Table 110: Audio Preselection Descriptor (ETSI EN 300 468 v1.16.1)
 * @record 
 */
export class AudioPreselectionDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor

    static name: string
}

export interface BAT {

    // Own fields of GstMpegts-1.0.GstMpegts.BAT

    descriptors: Descriptor[]
    streams: BATStream[]
}

/**
 * DVB Bouquet Association Table (EN 300 468)
 * @record 
 */
export class BAT {

    // Own properties of GstMpegts-1.0.GstMpegts.BAT

    static name: string
}

export interface BATStream {

    // Own fields of GstMpegts-1.0.GstMpegts.BATStream

    transportStreamId: number
    originalNetworkId: number
    descriptors: object[]
}

export class BATStream {

    // Own properties of GstMpegts-1.0.GstMpegts.BATStream

    static name: string
}

export interface CableDeliverySystemDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor

    /**
     * the frequency in Hz (Hertz)
     * @field 
     */
    frequency: number
    /**
     * the outer FEC scheme used
     * @field 
     */
    outerFec: CableOuterFECScheme
    /**
     * Modulation scheme used
     * @field 
     */
    modulation: ModulationType
    /**
     * Symbol rate (in symbols per second)
     * @field 
     */
    symbolRate: number
    /**
     * inner FEC scheme used
     * @field 
     */
    fecInner: DVBCodeRate

    // Owm methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor

    free(): void
}

/**
 * Cable Delivery System Descriptor (EN 300 468 v.1.13.1)
 * @record 
 */
export class CableDeliverySystemDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor

    static name: string
}

export interface ComponentDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor

    streamContent: number
    componentType: number
    componentTag: number
    languageCode: string
    text: string
}

export class ComponentDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.ComponentDescriptor

    static name: string
}

export interface Content {

    // Own fields of GstMpegts-1.0.GstMpegts.Content

    contentNibble1: ContentNibbleHi
    contentNibble2: number
    userByte: number
}

export class Content {

    // Own properties of GstMpegts-1.0.GstMpegts.Content

    static name: string
}

export interface DVBLinkageDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor

    /**
     * the transport id
     * @field 
     */
    transportStreamId: number
    /**
     * the original network id
     * @field 
     */
    originalNetworkId: number
    /**
     * the service id
     * @field 
     */
    serviceId: number
    /**
     * the type which `linkage_data` has
     * @field 
     */
    linkageType: DVBLinkageType
    /**
     * the length for `private_data_bytes`
     * @field 
     */
    privateDataLength: number
    /**
     * additional data bytes
     * @field 
     */
    privateDataBytes: number

    // Owm methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor

    free(): void
    getEvent(): DVBLinkageEvent
    getExtendedEvent(): DVBLinkageExtendedEvent[]
    getMobileHandOver(): DVBLinkageMobileHandOver
}

export class DVBLinkageDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor

    static name: string
}

export interface DVBLinkageEvent {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent

    targetEventId: number
    targetListed: boolean
    eventSimulcast: boolean
}

export class DVBLinkageEvent {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBLinkageEvent

    static name: string
}

export interface DVBLinkageExtendedEvent {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent

    targetEventId: number
    targetListed: boolean
    eventSimulcast: boolean
    linkType: number
    targetIdType: number
    originalNetworkIdFlag: boolean
    serviceIdFlag: boolean
    userDefinedId: number
    targetTransportStreamId: number
    targetOriginalNetworkId: number
    targetServiceId: number
}

export class DVBLinkageExtendedEvent {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent

    static name: string
}

export interface DVBLinkageMobileHandOver {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver

    handOverType: DVBLinkageHandOverType
    originType: boolean
    networkId: number
    initialServiceId: number
}

export class DVBLinkageMobileHandOver {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver

    static name: string
}

export interface DVBParentalRatingItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem

    countryCode: string
    rating: number
}

export class DVBParentalRatingItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem

    static name: string
}

export interface DVBServiceListItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem

    /**
     * the id of a service
     * @field 
     */
    serviceId: number
    /**
     * the type of a service
     * @field 
     */
    type: DVBServiceType
}

export class DVBServiceListItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DVBServiceListItem

    static name: string
}

export interface DataBroadcastDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor

    /**
     * the data broadcast id
     * @field 
     */
    dataBroadcastId: number
    /**
     * the component tag
     * @field 
     */
    componentTag: number
    length: number
    /**
     * the selector byte field
     * @field 
     */
    selectorBytes: number
    /**
     * language of `text`
     * @field 
     */
    languageCode: string
    /**
     * description of data broadcast
     * @field 
     */
    text: string

    // Owm methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor

    free(): void
}

export class DataBroadcastDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor

    static name: string
}

export interface Descriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.Descriptor

    /**
     * the type of descriptor
     * @field 
     */
    tag: number
    /**
     * the extended type (if `descriptor_tag` is 0x7f)
     * @field 
     */
    tagExtension: number
    /**
     * the length of the descriptor content (excluding tag/length field)
     * @field 
     */
    length: number
    /**
     * the full descriptor data (including tag, extension, length). The first
     * two bytes are the `tag` and `length`.
     * @field 
     */
    data: number

    // Owm methods of GstMpegts-1.0.GstMpegts.Descriptor

    /**
     * Frees `desc`
     */
    free(): void
    /**
     * Parses out a list of audio preselection from the `descriptor`.
     */
    parseAudioPreselectionList(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    /**
     * Extracts the Conditional Access information from `descriptor`.
     */
    parseCa(): [ /* returnType */ boolean, /* caSystemId */ number, /* caPid */ number, /* privateData */ Uint8Array ]
    /**
     * Extracts the cable delivery system information from `descriptor`.
     */
    parseCableDeliverySystem(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    /**
     * Extracts the bouquet name from `descriptor`.
     */
    parseDvbBouquetName(): [ /* returnType */ boolean, /* bouquetName */ string ]
    /**
     * Extracts ca id's from `descriptor`.
     */
    parseDvbCaIdentifier(): [ /* returnType */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB component information from `descriptor`.
     */
    parseDvbComponent(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    /**
     * Extracts the DVB content information from `descriptor`.
     */
    parseDvbContent(): [ /* returnType */ boolean, /* content */ Content[] ]
    /**
     * Parses out the data broadcast from the `descriptor`.
     */
    parseDvbDataBroadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    /**
     * Parses out the data broadcast id from the `descriptor`.
     */
    parseDvbDataBroadcastId(): [ /* returnType */ boolean, /* dataBroadcastId */ number, /* idSelectorBytes */ Uint8Array ]
    /**
     * Extracts the DVB extended event information from `descriptor`.
     */
    parseDvbExtendedEvent(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    /**
     * Parses out a list of frequencies from the `descriptor`.
     */
    parseDvbFrequencyList(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB linkage information from `descriptor`.
     */
    parseDvbLinkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    /**
     * Parses out the multilingual bouquet name from the `descriptor`.
     */
    parseDvbMultilingualBouquetName(): [ /* returnType */ boolean, /* bouquetNameItems */ DvbMultilingualBouquetNameItem[] ]
    /**
     * Parses out the multilingual component from the `descriptor`.
     */
    parseDvbMultilingualComponent(): [ /* returnType */ boolean, /* componentTag */ number, /* componentDescriptionItems */ DvbMultilingualComponentItem[] ]
    /**
     * Parses out the multilingual network name from the `descriptor`.
     */
    parseDvbMultilingualNetworkName(): [ /* returnType */ boolean, /* networkNameItems */ DvbMultilingualNetworkNameItem[] ]
    /**
     * Parses out the multilingual service name from the `descriptor`.
     */
    parseDvbMultilingualServiceName(): [ /* returnType */ boolean, /* serviceNameItems */ DvbMultilingualServiceNameItem[] ]
    /**
     * Parses out the dvb network name from the `descriptor:`
     */
    parseDvbNetworkName(): [ /* returnType */ boolean, /* name */ string ]
    /**
     * Extracts the DVB parental rating information from `descriptor`.
     */
    parseDvbParentalRating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    /**
     * Parses out the private data specifier from the `descriptor`.
     */
    parseDvbPrivateDataSpecifier(): [ /* returnType */ boolean, /* privateDataSpecifier */ number, /* privateData */ Uint8Array ]
    /**
     * Parses out the scrambling mode from the `descriptor`.
     */
    parseDvbScrambling(): [ /* returnType */ boolean, /* scramblingMode */ DVBScramblingModeType ]
    /**
     * Extracts the dvb service information from `descriptor`.
     */
    parseDvbService(): [ /* returnType */ boolean, /* serviceType */ DVBServiceType, /* serviceName */ string, /* providerName */ string ]
    /**
     * Parses out a list of services from the `descriptor:`
     */
    parseDvbServiceList(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    /**
     * Extracts the DVB short event information from `descriptor`.
     */
    parseDvbShortEvent(): [ /* returnType */ boolean, /* languageCode */ string, /* eventName */ string, /* text */ string ]
    /**
     * Extracts the component tag from `descriptor`.
     */
    parseDvbStreamIdentifier(): [ /* returnType */ boolean, /* componentTag */ number ]
    /**
     * Parses out the stuffing bytes from the `descriptor`.
     */
    parseDvbStuffing(): [ /* returnType */ boolean, /* stuffingBytes */ number ]
    /**
     * Extracts the DVB subtitling informatio from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     * @param idx Table id of the entry to parse
     */
    parseDvbSubtitlingIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number, /* compositionPageId */ number, /* ancillaryPageId */ number ]
    parseDvbSubtitlingNb(): number
    /**
     * Parses out the DVB-T2 delivery system from the `descriptor`.
     */
    parseDvbT2DeliverySystem(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    /**
     * Parses teletext number `idx` in the `descriptor`. The language is in ISO639 format.
     * @param idx The id of the teletext to get
     */
    parseDvbTeletextIdx(idx: number): [ /* returnType */ boolean, /* languageCode */ string, /* teletextType */ DVBTeletextType, /* magazineNumber */ number, /* pageNumber */ number ]
    /**
     * Find the number of teletext entries in `descriptor`
     */
    parseDvbTeletextNb(): number
    /**
     * Extracts the iso 639-2 language information from `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     */
    parseIso639Language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    /**
     * Extracts the iso 639-2 language information from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     * @param idx Table id of the language to parse
     */
    parseIso639LanguageIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audioType */ Iso639AudioType ]
    parseIso639LanguageNb(): number
    /**
     * Extracts the logical channels from `descriptor`.
     */
    parseLogicalChannel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    /**
     * Extracts the Registration information from `descriptor`.
     */
    parseRegistration(): [ /* returnType */ boolean, /* registrationId */ number, /* additionalInfo */ Uint8Array ]
    /**
     * Extracts the satellite delivery system information from `descriptor`.
     */
    parseSatelliteDeliverySystem(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    /**
     * Parses out the terrestrial delivery system from the `descriptor`.
     */
    parseTerrestrialDeliverySystem(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
}

/**
 * These are the base descriptor types and methods.
 * 
 * For more details, refer to the ITU H.222.0 or ISO/IEC 13818-1 specifications
 * and other specifications mentioned in the documentation.
 * @record 
 */
export class Descriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.Descriptor

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.Descriptor

    /**
     * Creates a #GstMpegtsDescriptor with custom `tag` and `data`
     * @param tag descriptor tag
     * @param data descriptor data (after tag and length field)
     */
    static fromCustom(tag: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor with custom `tag,` `tag_extension` and `data`
     * @param tag descriptor tag
     * @param tagExtension descriptor tag extension
     * @param data descriptor data (after tag and length field)
     */
    static fromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_NETWORK_NAME,
     * with the network name `name`. The data field of the #GstMpegtsDescriptor
     * will be allocated, and transferred to the caller.
     * @param name the network name to set
     */
    static fromDvbNetworkName(name: string): Descriptor
    /**
     * Fills a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_SERVICE.
     * The data field of the #GstMpegtsDescriptor will be allocated,
     * and transferred to the caller.
     * @param serviceType Service type defined as a #GstMpegtsDVBServiceType
     * @param serviceName Name of the service
     * @param serviceProvider Name of the service provider
     */
    static fromDvbService(serviceType: DVBServiceType, serviceName: string | null, serviceProvider: string | null): Descriptor
    static fromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    /**
     * Creates a %GST_MTS_DESC_ISO_639_LANGUAGE #GstMpegtsDescriptor with
     * a single language
     * @param language ISO-639-2 language 3-char code
     */
    static fromIso639Language(language: string): Descriptor
    /**
     * Creates a %GST_MTS_DESC_REGISTRATION #GstMpegtsDescriptor
     * @param formatIdentifier a 4 character format identifier string
     * @param additionalInfo pointer to optional additional info
     */
    static fromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
    static parseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
    static parseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
}

export interface DvbMultilingualBouquetNameItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem

    /**
     * the ISO 639 language code
     * @field 
     */
    languageCode: string
    /**
     * the bouquet name
     * @field 
     */
    bouquetName: string
}

/**
 * a multilingual bouquet name entry
 * @record 
 */
export class DvbMultilingualBouquetNameItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem

    static name: string
}

export interface DvbMultilingualComponentItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem

    /**
     * the ISO 639 language code
     * @field 
     */
    languageCode: string
    /**
     * the component description
     * @field 
     */
    description: string
}

export class DvbMultilingualComponentItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem

    static name: string
}

export interface DvbMultilingualNetworkNameItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem

    /**
     * the ISO 639 language code
     * @field 
     */
    languageCode: string
    /**
     * the network name
     * @field 
     */
    networkName: string
}

/**
 * a multilingual network name entry
 * @record 
 */
export class DvbMultilingualNetworkNameItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem

    static name: string
}

export interface DvbMultilingualServiceNameItem {

    // Own fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem

    /**
     * the ISO 639 language code
     * @field 
     */
    languageCode: string
    /**
     * the provider name
     * @field 
     */
    providerName: string
    /**
     * the service name
     * @field 
     */
    serviceName: string
}

/**
 * a multilingual service name entry
 * @record 
 */
export class DvbMultilingualServiceNameItem {

    // Own properties of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem

    static name: string
}

export interface EIT {

    // Own fields of GstMpegts-1.0.GstMpegts.EIT

    transportStreamId: number
    originalNetworkId: number
    segmentLastSectionNumber: number
    lastTableId: number
    actualStream: boolean
    presentFollowing: boolean
    /**
     * List of events
     * @field 
     */
    events: EITEvent[]
}

/**
 * Event Information Table (EN 300 468)
 * @record 
 */
export class EIT {

    // Own properties of GstMpegts-1.0.GstMpegts.EIT

    static name: string
}

export interface EITEvent {

    // Own fields of GstMpegts-1.0.GstMpegts.EITEvent

    eventId: number
    startTime: Gst.DateTime
    duration: number
    runningStatus: RunningStatus
    freeCAMode: boolean
    /**
     * List of descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Event from a `GstMpegtsEIT`
 * @record 
 */
export class EITEvent {

    // Own properties of GstMpegts-1.0.GstMpegts.EITEvent

    static name: string
}

export interface ExtendedEventDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor

    descriptorNumber: number
    lastDescriptorNumber: number
    /**
     * NULL terminated language code.
     * @field 
     */
    languageCode: string
    /**
     * the #GstMpegtsExtendedEventItem
     * @field 
     */
    items: ExtendedEventItem[]
    text: string

    // Owm methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor

    free(): void
}

/**
 * Extended Event Descriptor (EN 300 468 v.1.13.1)
 * @record 
 */
export class ExtendedEventDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor

    static name: string
}

export interface ExtendedEventItem {

    // Own fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem

    itemDescription: string
    item: string
}

export class ExtendedEventItem {

    // Own properties of GstMpegts-1.0.GstMpegts.ExtendedEventItem

    static name: string
}

export interface ISO639LanguageDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor

    nbLanguage: number
    language: string[]
    audioType: Iso639AudioType[]

    // Owm methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor

    descriptorFree(): void
}

export class ISO639LanguageDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor

    static name: string
}

export interface LogicalChannel {

    // Own fields of GstMpegts-1.0.GstMpegts.LogicalChannel

    serviceId: number
    visibleService: boolean
    logicalChannelNumber: number
}

export class LogicalChannel {

    // Own properties of GstMpegts-1.0.GstMpegts.LogicalChannel

    static name: string
}

export interface LogicalChannelDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor

    nbChannels: number
    channels: LogicalChannel[]
}

export class LogicalChannelDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor

    static name: string
}

export interface NIT {

    // Own fields of GstMpegts-1.0.GstMpegts.NIT

    /**
     * Whether this NIT corresponds to the actual stream
     * @field 
     */
    actualNetwork: boolean
    /**
     * ID of the network that this NIT describes
     * @field 
     */
    networkId: number
    /**
     * the global descriptors
     * @field 
     */
    descriptors: Descriptor[]
    /**
     * the streams
     * @field 
     */
    streams: NITStream[]
}

/**
 * Network Information Table (ISO/IEC 13818-1 / EN 300 468)
 * @record 
 */
export class NIT {

    // Own properties of GstMpegts-1.0.GstMpegts.NIT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.NIT

    /**
     * Allocates and initializes a #GstMpegtsNIT.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsNIT.
     * @constructor 
     */
    static new(): NIT
}

export interface NITStream {

    // Own fields of GstMpegts-1.0.GstMpegts.NITStream

    transportStreamId: number
    originalNetworkId: number
    descriptors: Descriptor[]
}

export class NITStream {

    // Own properties of GstMpegts-1.0.GstMpegts.NITStream

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.NITStream

    /**
     * Allocates and initializes a #GstMpegtsNITStream
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsNITStream
     * @constructor 
     */
    static new(): NITStream
}

export interface PMT {

    // Own fields of GstMpegts-1.0.GstMpegts.PMT

    /**
     * PID of the stream containing the PCR for this program.
     * @field 
     */
    pcrPid: number
    /**
     * The program to which this PMT is applicable.
     * @field 
     */
    programNumber: number
    /**
     * Array of #GstMpegtsDescriptor
     * @field 
     */
    descriptors: Descriptor[]
    /**
     * Array of #GstMpegtsPMTStream
     * @field 
     */
    streams: PMTStream[]
}

/**
 * Program Map Table (ISO/IEC 13818-1). Provides the mappings between program
 * numbers and the program elements that comprise them.
 * 
 * The program_number is contained in the subtable_extension field of the
 * container #GstMpegtsSection.
 * @record 
 */
export class PMT {

    // Own properties of GstMpegts-1.0.GstMpegts.PMT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.PMT

    /**
     * Allocates and initializes a new #GstMpegtsPMT. #GstMpegtsPMTStream can be
     * added to the streams array, and global PMT #GstMpegtsDescriptor to the
     * descriptors array.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a new #GstMpegtsPMT. #GstMpegtsPMTStream can be
     * added to the streams array, and global PMT #GstMpegtsDescriptor to the
     * descriptors array.
     * @constructor 
     */
    static new(): PMT
}

export interface PMTStream {

    // Own fields of GstMpegts-1.0.GstMpegts.PMTStream

    /**
     * the type of stream. See #GstMpegtsStreamType
     * @field 
     */
    streamType: number
    /**
     * the PID of the stream
     * @field 
     */
    pid: number
    /**
     * the descriptors of the
     * stream
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * An individual stream definition of a #GstMpegtsPMT.
 * @record 
 */
export class PMTStream {

    // Own properties of GstMpegts-1.0.GstMpegts.PMTStream

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.PMTStream

    /**
     * Allocates and initializes a new #GstMpegtsPMTStream.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a new #GstMpegtsPMTStream.
     * @constructor 
     */
    static new(): PMTStream
}

export interface PatProgram {

    // Own fields of GstMpegts-1.0.GstMpegts.PatProgram

    /**
     * the program number
     * @field 
     */
    programNumber: number
    /**
     * the network of program map PID
     * @field 
     */
    networkOrProgramMapPID: number
}

/**
 * A program entry from a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
 * @record 
 */
export class PatProgram {

    // Own properties of GstMpegts-1.0.GstMpegts.PatProgram

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.PatProgram

    /**
     * Allocates a new #GstMpegtsPatProgram.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a new #GstMpegtsPatProgram.
     * @constructor 
     */
    static new(): PatProgram
}

export interface SCTESIT {

    // Own fields of GstMpegts-1.0.GstMpegts.SCTESIT

    encryptedPacket: boolean
    encryptionAlgorithm: number
    ptsAdjustment: number
    cwIndex: number
    tier: number
    spliceCommandLength: number
    spliceCommandType: SCTESpliceCommandType
    spliceTimeSpecified: boolean
    spliceTime: number
    splices: object[]
    descriptors: object[]
    /**
     * When encrypted, or when encountering an unknown command type,
     * we may still want to pass the sit through.
     * @field 
     */
    fullyParsed: boolean
    /**
     * When the SIT was constructed by the application, splice times
     * are in running_time and must be translated before packetizing.
     * @field 
     */
    isRunningTime: boolean
}

export class SCTESIT {

    // Own properties of GstMpegts-1.0.GstMpegts.SCTESIT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.SCTESIT

    /**
     * Allocates and initializes a #GstMpegtsSCTESIT.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsSCTESIT.
     * @constructor 
     */
    static new(): SCTESIT
}

export interface SCTESpliceComponent {

    // Own fields of GstMpegts-1.0.GstMpegts.SCTESpliceComponent

    /**
     * the elementary PID stream containing the Splice Point
     * @field 
     */
    tag: number
    /**
     * Whether `splice_time` was specified
     * @field 
     */
    spliceTimeSpecified: boolean
    /**
     * the presentation time of the signaled splice event
     * @field 
     */
    spliceTime: number
    /**
     * The UTC time of the signaled splice event
     * @field 
     */
    utcSpliceTime: number
}

/**
 * Per-PID splice information.
 * @record 
 */
export class SCTESpliceComponent {

    // Own properties of GstMpegts-1.0.GstMpegts.SCTESpliceComponent

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.SCTESpliceComponent

    /**
     * Allocates and initializes a #GstMpegtsSCTESpliceComponent.
     * @constructor 
     * @param tag the elementary PID stream identifier
     */
    constructor(tag: number) 
    /**
     * Allocates and initializes a #GstMpegtsSCTESpliceComponent.
     * @constructor 
     * @param tag the elementary PID stream identifier
     */
    static new(tag: number): SCTESpliceComponent
}

export interface SCTESpliceEvent {

    // Own fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent

    insertEvent: boolean
    spliceEventId: number
    spliceEventCancelIndicator: boolean
    outOfNetworkIndicator: boolean
    programSpliceFlag: boolean
    durationFlag: boolean
    spliceImmediateFlag: boolean
    programSpliceTimeSpecified: boolean
    programSpliceTime: number
    /**
     * The UTC time of the signaled splice event
     * @field 
     */
    utcSpliceTime: number
    /**
     * Per-PID splice time information
     * @field 
     */
    components: object[]
    breakDurationAutoReturn: boolean
    breakDuration: number
    uniqueProgramId: number
    availNum: number
    availsExpected: number
}

export class SCTESpliceEvent {

    // Own properties of GstMpegts-1.0.GstMpegts.SCTESpliceEvent

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.SCTESpliceEvent

    /**
     * Allocates and initializes a #GstMpegtsSCTESpliceEvent.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsSCTESpliceEvent.
     * @constructor 
     */
    static new(): SCTESpliceEvent
}

export interface SDT {

    // Own fields of GstMpegts-1.0.GstMpegts.SDT

    /**
     * Network ID of the originating delivery system
     * @field 
     */
    originalNetworkId: number
    /**
     * True if the table describes this transport stream
     * @field 
     */
    actualTs: boolean
    /**
     * ID of this transport stream
     * @field 
     */
    transportStreamId: number
    /**
     * List of services
     * @field 
     */
    services: SDTService[]
}

/**
 * Service Description Table (EN 300 468)
 * @record 
 */
export class SDT {

    // Own properties of GstMpegts-1.0.GstMpegts.SDT

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.SDT

    /**
     * Allocates and initializes a #GstMpegtsSDT.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsSDT.
     * @constructor 
     */
    static new(): SDT
}

export interface SDTService {

    // Own fields of GstMpegts-1.0.GstMpegts.SDTService

    /**
     * The program number this table belongs to
     * @field 
     */
    serviceId: number
    /**
     * EIT schedule information is present in this transport stream
     * @field 
     */
    eITScheduleFlag: boolean
    /**
     * EIT present/following information is present in this transport stream
     * @field 
     */
    eITPresentFollowingFlag: boolean
    /**
     * Status of this service
     * @field 
     */
    runningStatus: RunningStatus
    /**
     * True if one or more streams is controlled by a CA system
     * @field 
     */
    freeCAMode: boolean
    /**
     * List of descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

export class SDTService {

    // Own properties of GstMpegts-1.0.GstMpegts.SDTService

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.SDTService

    /**
     * Allocates and initializes a #GstMpegtsSDTService.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates and initializes a #GstMpegtsSDTService.
     * @constructor 
     */
    static new(): SDTService
}

export interface SIT {

    // Own fields of GstMpegts-1.0.GstMpegts.SIT

    /**
     * List of descriptors
     * @field 
     */
    descriptors: Descriptor[]
    /**
     * List of services
     * @field 
     */
    services: SITService[]
}

/**
 * Selection Information Table (EN 300 468)
 * @record 
 */
export class SIT {

    // Own properties of GstMpegts-1.0.GstMpegts.SIT

    static name: string
}

export interface SITService {

    // Own fields of GstMpegts-1.0.GstMpegts.SITService

    /**
     * The Program number this table belongs to
     * @field 
     */
    serviceId: number
    /**
     * Status of this service
     * @field 
     */
    runningStatus: RunningStatus
    /**
     * List of descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * SIT Service entry
 * @record 
 */
export class SITService {

    // Own properties of GstMpegts-1.0.GstMpegts.SITService

    static name: string
}

export interface SatelliteDeliverySystemDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor

    /**
     * the frequency in kHz (kiloHertz)
     * @field 
     */
    frequency: number
    /**
     * the orbital position in degrees
     * @field 
     */
    orbitalPosition: number
    /**
     * If %TRUE, the satellite is in the eastern part of the orbit,
     * else in the western part.
     * @field 
     */
    westEast: boolean
    /**
     * The polarization of the transmitted signal
     * @field 
     */
    polarization: SatellitePolarizationType
    /**
     * Roll-off factor used in DVB-S2
     * @field 
     */
    rollOff: SatelliteRolloff
    /**
     * modulation system, %TRUE if DVB-S2, else DVB-S
     * @field 
     */
    modulationSystem: boolean
    /**
     * Modulation scheme used
     * @field 
     */
    modulationType: ModulationType
    /**
     * Symbol rate (in symbols per second)
     * @field 
     */
    symbolRate: number
    /**
     * inner FEC scheme used
     * @field 
     */
    fecInner: DVBCodeRate
}

/**
 * Satellite Delivery System Descriptor (EN 300 468 v.1.13.1)
 * @record 
 */
export class SatelliteDeliverySystemDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor

    static name: string
}

export interface Section {

    // Own fields of GstMpegts-1.0.GstMpegts.Section

    /**
     * The type of section.
     * @field 
     */
    sectionType: SectionType
    /**
     * The PID on which this section was found or belongs to.
     * @field 
     */
    pid: number
    /**
     * The table id of this section. See %GstMpegtsSectionTableID and
     *      derivates for more information.
     * @field 
     */
    tableId: number
    /**
     * This meaning differs per section. See the documentation
     *      of the parsed section type for the meaning of this field
     * @field 
     */
    subtableExtension: number
    /**
     * Version of the section.
     * @field 
     */
    versionNumber: number
    /**
     * Applies to current/next stream or not
     * @field 
     */
    currentNextIndicator: boolean
    /**
     * Number of the section (if multiple)
     * @field 
     */
    sectionNumber: number
    /**
     * Number of the last expected section (if multiple)
     * @field 
     */
    lastSectionNumber: number
    /**
     * Checksum (if applicable)
     * @field 
     */
    crc: number

    // Owm methods of GstMpegts-1.0.GstMpegts.Section

    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    getAtscCvct(): AtscVCT
    /**
     * Returns the #GstMpegtsAtscEIT contained in the `section`.
     */
    getAtscEit(): AtscEIT
    /**
     * Returns the #GstMpegtsAtscETT contained in the `section`.
     */
    getAtscEtt(): AtscETT
    /**
     * Returns the #GstMpegtsAtscMGT contained in the `section`.
     */
    getAtscMgt(): AtscMGT
    /**
     * Returns the #GstMpegtsAtscRRT contained in the `section`.
     */
    getAtscRrt(): AtscRRT
    /**
     * Returns the #GstMpegtsAtscSTT contained in the `section`.
     */
    getAtscStt(): AtscSTT
    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    getAtscTvct(): AtscVCT
    /**
     * Returns the #GstMpegtsBAT contained in the `section`.
     */
    getBat(): BAT
    /**
     * Parses a Conditional Access Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the Conditional
     * Access Table.
     */
    getCat(): Descriptor[]
    /**
     * Gets the original unparsed section data.
     */
    getData(): any
    /**
     * Returns the #GstMpegtsEIT contained in the `section`.
     */
    getEit(): EIT
    /**
     * Returns the #GstMpegtsNIT contained in the `section`.
     */
    getNit(): NIT
    /**
     * Parses a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
     * 
     * Returns the array of #GstMpegtsPatProgram contained in the section.
     * 
     * Note: The PAT `transport_stream_id` field corresponds to the
     * "subtable_extension" field of the provided `section`.
     */
    getPat(): PatProgram[]
    /**
     * Parses the Program Map Table contained in the `section`.
     */
    getPmt(): PMT
    /**
     * Returns the #GstMpegtsSCTESIT contained in the `section`.
     */
    getScteSit(): SCTESIT
    /**
     * Returns the #GstMpegtsSDT contained in the `section`.
     */
    getSdt(): SDT
    /**
     * Returns the #GstMpegtsSIT contained in the `section`.
     */
    getSit(): SIT
    /**
     * Returns the #GstDateTime of the TDT
     */
    getTdt(): Gst.DateTime
    /**
     * Returns the #GstMpegtsTOT contained in the `section`.
     */
    getTot(): TOT
    /**
     * Parses a Transport Stream Description Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the section
     */
    getTsdt(): Descriptor[]
    /**
     * Packetize (i.e. serialize) the `section`. If the data in `section` has already
     * been packetized, the data pointer is returned immediately. Otherwise, the
     * data field is allocated and populated.
     */
    packetize(): [ /* returnType */ number, /* outputSize */ number ]
    /**
     * Creates a custom #GstEvent with a `GstMpegtsSection` and send it the `element`
     * #GstElement.
     * @param element The #GstElement to send to section event to
     */
    sendEvent(element: Gst.Element): boolean
}

/**
 * ## Generic usage of sections with %GstMpegtsSection
 * 
 * The %GstMpegtsSection object is the representation of MPEG-TS Section (SI or
 * PSI).
 * 
 * Various elements can post those on the bus via %GstMessage of type
 * %GST_MESSAGE_ELEMENT. The gst_message_parse_mpegts_section() function
 * provides access to the section.
 * 
 * Applications (or other elements) can create them either by using one of the
 * `gst_mpegts_section_from_*` functions, or by providing the raw SI data via
 * gst_mpegts_section_new().
 * 
 * Elements outputting MPEG-TS streams can also create sections using the
 * various convenience functions and then get the packetized data (to be
 * inserted in MPEG-TS packets) using gst_mpegts_section_packetize().
 * 
 * For more details, refer to the ITU H.222.0 or ISO/IEC 13818-1 specifications
 * and other specifications mentioned in the documentation.
 * 
 * # Supported base MPEG-TS sections
 * These are the sections for which parsing and packetizing code exists.
 * 
 * ## Program Association Table (PAT)
 * See:
 * * gst_mpegts_section_get_pat()
 * * gst_mpegts_pat_program_new()
 * * %GstMpegtsPatProgram
 * 
 * ## Conditional Access Table (CAT)
 * See:
 * * gst_mpegts_section_get_cat()
 * 
 * ## Program Map Table (PMT)
 * See:
 * * %GstMpegtsPMT
 * * gst_mpegts_section_get_pmt()
 * * gst_mpegts_pmt_new()
 * * %GstMpegtsPMTStream
 * 
 * ## Transport Stream Description Table (TSDT)
 * See:
 * * gst_mpegts_section_get_tsdt()
 * # API
 * @record 
 */
export class Section {

    // Own properties of GstMpegts-1.0.GstMpegts.Section

    static name: string

    // Constructors of GstMpegts-1.0.GstMpegts.Section

    /**
     * Creates a new #GstMpegtsSection from the provided `data`.
     * 
     * Note: Ensuring `data` is big enough to contain the full section is the
     * responsibility of the caller. If it is not big enough, %NULL will be
     * returned.
     * 
     * Note: it is the responsibility of the caller to ensure `data` does point
     * to the beginning of the section.
     * @constructor 
     * @param pid the PID to which this section belongs
     * @param data a pointer to the beginning of the section (i.e. the first byte should contain the `table_id` field).
     */
    constructor(pid: number, data: Uint8Array) 
    /**
     * Creates a new #GstMpegtsSection from the provided `data`.
     * 
     * Note: Ensuring `data` is big enough to contain the full section is the
     * responsibility of the caller. If it is not big enough, %NULL will be
     * returned.
     * 
     * Note: it is the responsibility of the caller to ensure `data` does point
     * to the beginning of the section.
     * @constructor 
     * @param pid the PID to which this section belongs
     * @param data a pointer to the beginning of the section (i.e. the first byte should contain the `table_id` field).
     */
    static new(pid: number, data: Uint8Array): Section
    static fromAtscMgt(mgt: AtscMGT): Section
    static fromAtscRrt(rrt: AtscRRT): Section
    static fromAtscStt(stt: AtscSTT): Section
    /**
     * Ownership of `nit` is taken. The data in `nit` is managed by the #GstMpegtsSection
     * @param nit a #GstMpegtsNIT to create the #GstMpegtsSection from
     */
    static fromNit(nit: NIT): Section
    /**
     * Creates a PAT #GstMpegtsSection from the `programs` array of #GstMpegtsPatPrograms
     * @param programs an array of #GstMpegtsPatProgram
     * @param tsId Transport stream ID of the PAT
     */
    static fromPat(programs: PatProgram[], tsId: number): Section
    /**
     * Creates a #GstMpegtsSection from `pmt` that is bound to `pid`
     * @param pmt a #GstMpegtsPMT to create a #GstMpegtsSection from
     * @param pid The PID that the #GstMpegtsPMT belongs to
     */
    static fromPmt(pmt: PMT, pid: number): Section
    /**
     * Ownership of `sit` is taken. The data in `sit` is managed by the #GstMpegtsSection
     * @param sit a #GstMpegtsSCTESIT to create the #GstMpegtsSection from
     * @param pid 
     */
    static fromScteSit(sit: SCTESIT, pid: number): Section
    /**
     * Ownership of `sdt` is taken. The data in `sdt` is managed by the #GstMpegtsSection
     * @param sdt a #GstMpegtsSDT to create the #GstMpegtsSection from
     */
    static fromSdt(sdt: SDT): Section
}

export interface T2DeliverySystemCell {

    // Own fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell

    /**
     * id of the cell
     * @field 
     */
    cellId: number
    /**
     * centre frequencies in Hz
     * @field 
     */
    centreFrequencies: number[]
    subCells: T2DeliverySystemCellExtension[]
}

export class T2DeliverySystemCell {

    // Own properties of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell

    static name: string
}

export interface T2DeliverySystemCellExtension {

    // Own fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension

    /**
     * id of the sub cell
     * @field 
     */
    cellIdExtension: number
    /**
     * centre frequency of the sub cell in Hz
     * @field 
     */
    transposerFrequency: number
}

export class T2DeliverySystemCellExtension {

    // Own properties of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension

    static name: string
}

export interface T2DeliverySystemDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor

    plpId: number
    t2SystemId: number
    sisoMiso: number
    bandwidth: number
    guardInterval: TerrestrialGuardInterval
    transmissionMode: TerrestrialTransmissionMode
    otherFrequency: boolean
    tfs: boolean
    cells: T2DeliverySystemCell[]

    // Owm methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor

    free(): void
}

/**
 * describe DVB-T2 transmissions according to EN 302 755
 * @record 
 */
export class T2DeliverySystemDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor

    static name: string
}

export interface TOT {

    // Own fields of GstMpegts-1.0.GstMpegts.TOT

    utcTime: Gst.DateTime
    /**
     * List of descriptors
     * @field 
     */
    descriptors: Descriptor[]
}

/**
 * Time Offset Table (EN 300 468)
 * @record 
 */
export class TOT {

    // Own properties of GstMpegts-1.0.GstMpegts.TOT

    static name: string
}

export interface TerrestrialDeliverySystemDescriptor {

    // Own fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor

    /**
     * the frequency in Hz (Hertz)
     * @field 
     */
    frequency: number
    /**
     * the bandwidth in Hz (Hertz)
     * @field 
     */
    bandwidth: number
    /**
     * %TRUE High Priority %FALSE Low Priority
     * @field 
     */
    priority: boolean
    /**
     * %TRUE no time slicing %FALSE time slicing
     * @field 
     */
    timeSlicing: boolean
    /**
     * %TRUE no mpe-fec is used %FALSE mpe-fec is use
     * @field 
     */
    mpeFec: boolean
    /**
     * the constellation
     * @field 
     */
    constellation: ModulationType
    /**
     * the hierarchy
     * @field 
     */
    hierarchy: TerrestrialHierarchy
    codeRateHp: DVBCodeRate
    codeRateLp: DVBCodeRate
    guardInterval: TerrestrialGuardInterval
    transmissionMode: TerrestrialTransmissionMode
    /**
     * %TRUE more frequency are use, else not
     * @field 
     */
    otherFrequency: boolean
}

/**
 * Terrestrial Delivery System Descriptor (EN 300 468 v.1.13.1)
 * @record 
 */
export class TerrestrialDeliverySystemDescriptor {

    // Own properties of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor

    static name: string
}
