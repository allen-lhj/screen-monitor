declare global {
  interface Window {
    BMapGL: any
    styleJson2: any
  }
}
declare namespace BMapGL {
  // 地图类
  class Map {
    constructor(container: string | HTMLElement, options?: MapOptions)
    centerAndZoom(point: Point, zoom: number): void
    enableScrollWheelZoom(enable?: boolean): void
    setCenter(point: Point): void
    getCenter(): Point
    setZoom(zoom: number): void
    getZoom(): number
    panTo(point: Point): void
    panBy(x: number, y: number): void
    addOverlay(overlay: Overlay): void
    removeOverlay(overlay: Overlay): void
    clearOverlays(): void
    addControl(control: Control): void
    removeControl(control: Control): void
    getContainer(): HTMLElement
    setMapStyle(style: MapStyle): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    setDefaultCursor(cursor: string): void
    getDefaultCursor(): string
    setDraggingCursor(cursor: string): void
    getDraggingCursor(): string
    setMinZoom(zoom: number): void
    setMaxZoom(zoom: number): void
    setMapType(mapType: MapType): void
    getBounds(): Bounds
    getViewport(points: Point[]): Viewport
    getDistance(start: Point, end: Point): number
    addContextMenu(menu: ContextMenu): void
    removeContextMenu(menu: ContextMenu): void
    addTileLayer(tileLayer: TileLayer): void
    removeTileLayer(tileLayer: TileLayer): void
    setHeading(heading: number): void
    getHeading(): number
    setTilt(tilt: number): void
    getTilt(): number
  }

  // 地图选项
  interface MapOptions {
    minZoom?: number
    maxZoom?: number
    mapType?: MapType
    enableHighResolution?: boolean
    enableAutoResize?: boolean
    enableMapClick?: boolean
    style?: MapStyle
    coordsType?: number
    restrictCenter?: boolean
    heading?: number
    tilt?: number
  }

  // 地图样式
  interface MapStyle {
    style?: string
    features?: Feature[]
    styleJson?: any[]
  }

  interface Feature {
    featureType: string
    elementType: string
    stylers: Styler[]
  }

  interface Styler {
    [key: string]: any
  }

  // 点类
  class Point {
    constructor(lng: number, lat: number)
    lng: number
    lat: number
    equals(other: Point): boolean
  }

  // 地图类型
  enum MapType {
    BMAP_NORMAL_MAP = 'BMAP_NORMAL_MAP',
    BMAP_SATELLITE_MAP = 'BMAP_SATELLITE_MAP',
    BMAP_HYBRID_MAP = 'BMAP_HYBRID_MAP',
  }

  // 覆盖物基类
  abstract class Overlay {
    abstract initialize(map: Map): HTMLElement
    abstract draw(): void
    isVisible(): boolean
    hide(): void
    show(): void
    toString(): string
  }

  // 标注类
  class Marker extends Overlay {
    constructor(point: Point, options?: MarkerOptions)
    setPosition(point: Point): void
    getPosition(): Point
    setIcon(icon: Icon): void
    getIcon(): Icon
    setLabel(label: Label): void
    getLabel(): Label
    setTitle(title: string): void
    getTitle(): string
    setTop(isTop: boolean): void
    enableDragging(): void
    disableDragging(): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    setAnimation(animation: Animation): void
    setRotation(rotation: number): void
    getRotation(): number
    setShadow(shadow: Icon): void
    getShadow(): Icon
    addContextMenu(menu: ContextMenu): void
    removeContextMenu(menu: ContextMenu): void
  }

  interface MarkerOptions {
    offset?: Size
    icon?: Icon
    enableMassClear?: boolean
    enableDragging?: boolean
    enableClicking?: boolean
    raiseOnDrag?: boolean
    draggingCursor?: string
    rotation?: number
    shadow?: Icon
    title?: string
  }

  // 图标类
  class Icon {
    constructor(url: string, size: Size, options?: IconOptions)
    anchor: Size
    size: Size
    imageOffset: Size
    imageSize: Size
    imageUrl: string
    infoWindowOffset: Size
    printImageUrl: string
    setImageUrl(imageUrl: string): void
    setSize(size: Size): void
    setImageSize(size: Size): void
    setAnchor(anchor: Size): void
    setImageOffset(offset: Size): void
    setInfoWindowOffset(offset: Size): void
    setPrintImageUrl(url: string): void
    toString(): string
  }

  interface IconOptions {
    anchor?: Size
    imageOffset?: Size
    imageSize?: Size
    infoWindowOffset?: Size
    printImageUrl?: string
  }

  // 尺寸类
  class Size {
    constructor(width: number, height: number)
    width: number
    height: number
    equals(other: Size): boolean
    toString(): string
  }

  // 标签类
  class Label {
    constructor(content: string, options?: LabelOptions)
    setStyle(styles: any): void
    setContent(content: string): void
    setPosition(position: Point): void
    getPosition(): Point
    setOffset(offset: Size): void
    getOffset(): Size
    setTitle(title: string): void
    getTitle(): string
    enableMassClear(): void
    disableMassClear(): void
    setZIndex(zIndex: number): void
    getMap(): Map
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    toString(): string
  }

  interface LabelOptions {
    offset?: Size
    position?: Point
    enableMassClear?: boolean
  }

  // 信息窗口类
  class InfoWindow {
    constructor(content: string | HTMLElement, options?: InfoWindowOptions)
    setWidth(width: number): void
    setHeight(height: number): void
    redraw(): void
    setTitle(title: string): void
    getTitle(): string
    setContent(content: string | HTMLElement): void
    getContent(): string | HTMLElement
    getPosition(): Point
    enableMaximize(): void
    disableMaximize(): void
    isOpen(): boolean
    setMaxContent(content: string): void
    maximize(): void
    restore(): void
    enableAutoPan(): void
    disableAutoPan(): void
    enableCloseOnClick(): void
    disableCloseOnClick(): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    toString(): string
  }

  interface InfoWindowOptions {
    width?: number
    height?: number
    maxWidth?: number
    offset?: Size
    title?: string
    enableAutoPan?: boolean
    enableCloseOnClick?: boolean
    enableMessage?: boolean
    message?: string
  }

  // 折线类
  class Polyline extends Overlay {
    constructor(points: Point[], options?: PolylineOptions)
    setPath(points: Point[]): void
    getPath(): Point[]
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    setPositionAt(index: number, point: Point): void
    getLength(): number
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    toString(): string
  }

  interface PolylineOptions {
    strokeColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    strokeStyle?: string
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
  }

  // 多边形类
  class Polygon extends Overlay {
    constructor(points: Point[], options?: PolygonOptions)
    setPath(points: Point[]): void
    getPath(): Point[]
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    setFillColor(color: string): void
    getFillColor(): string
    setFillOpacity(opacity: number): void
    getFillOpacity(): number
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    setPositionAt(index: number, point: Point): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    toString(): string
  }

  interface PolygonOptions {
    strokeColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    strokeStyle?: string
    fillColor?: string
    fillOpacity?: number
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
  }

  // 圆形类
  class Circle extends Overlay {
    constructor(center: Point, radius: number, options?: CircleOptions)
    setCenter(center: Point): void
    getCenter(): Point
    setRadius(radius: number): void
    getRadius(): number
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    setFillColor(color: string): void
    getFillColor(): string
    setFillOpacity(opacity: number): void
    getFillOpacity(): number
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    toString(): string
  }

  interface CircleOptions {
    strokeColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    strokeStyle?: string
    fillColor?: string
    fillOpacity?: number
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
  }

  // 地理区域边界
  class Bounds {
    constructor(minX: number, minY: number, maxX: number, maxY: number)
    minX: number
    minY: number
    maxX: number
    maxY: number
    equals(other: Bounds): boolean
    containsPoint(point: Point): boolean
    containsBounds(bounds: Bounds): boolean
    intersects(other: Bounds): boolean
    extend(point: Point): void
    getCenter(): Point
    isEmpty(): boolean
    getSouthWest(): Point
    getNorthEast(): Point
    toSpan(): Point
    toString(): string
  }

  // 视野
  interface Viewport {
    center: Point
    zoom: number
  }

  // 控件基类
  abstract class Control {
    abstract initialize(map: Map): HTMLElement
    setAnchor(anchor: ControlAnchor): void
    getAnchor(): ControlAnchor
    setOffset(offset: Size): void
    getOffset(): Size
    show(): void
    hide(): void
    isVisible(): boolean
    toString(): string
  }

  // 控件停靠位置
  enum ControlAnchor {
    BMAP_ANCHOR_TOP_LEFT = 0,
    BMAP_ANCHOR_TOP_RIGHT = 1,
    BMAP_ANCHOR_BOTTOM_LEFT = 2,
    BMAP_ANCHOR_BOTTOM_RIGHT = 3,
  }

  // 导航控件
  class NavigationControl extends Control {
    constructor(options?: NavigationControlOptions)
    getType(): NavigationControlType
    setType(type: NavigationControlType): void
  }

  interface NavigationControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    type?: NavigationControlType
    showZoomInfo?: boolean
    enableGeolocation?: boolean
  }

  enum NavigationControlType {
    BMAP_NAVIGATION_CONTROL_LARGE = 0,
    BMAP_NAVIGATION_CONTROL_SMALL = 1,
    BMAP_NAVIGATION_CONTROL_PAN = 2,
    BMAP_NAVIGATION_CONTROL_ZOOM = 3,
  }

  // 缩放控件
  class ZoomControl extends Control {
    constructor(options?: ZoomControlOptions)
  }

  interface ZoomControlOptions {
    anchor?: ControlAnchor
    offset?: Size
  }

  // 比例尺控件
  class ScaleControl extends Control {
    constructor(options?: ScaleControlOptions)
    getUnit(): LengthUnit
    setUnit(unit: LengthUnit): void
  }

  interface ScaleControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    unit?: LengthUnit
  }

  enum LengthUnit {
    BMAP_UNIT_METRIC = 'metric',
    BMAP_UNIT_IMPERIAL = 'imperial',
  }

  // 版权控件
  class CopyrightControl extends Control {
    constructor(options?: CopyrightControlOptions)
    addCopyright(copyright: Copyright): void
    removeCopyright(id: number): void
    getCopyright(id: number): Copyright
    getCopyrightCollection(): Copyright[]
  }

  interface CopyrightControlOptions {
    anchor?: ControlAnchor
    offset?: Size
  }

  interface Copyright {
    id?: number
    content?: string
    bounds?: Bounds
  }

  // 地图类型控件
  class MapTypeControl extends Control {
    constructor(options?: MapTypeControlOptions)
  }

  interface MapTypeControlOptions {
    type?: MapTypeControlType
    mapTypes?: MapType[]
    anchor?: ControlAnchor
    offset?: Size
  }

  enum MapTypeControlType {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0,
    BMAP_MAPTYPE_CONTROL_DROPDOWN = 1,
    BMAP_MAPTYPE_CONTROL_MAP = 2,
  }

  // 右键菜单
  class ContextMenu {
    constructor()
    addItem(item: MenuItem): void
    removeItem(item: MenuItem): void
    addSeparator(): void
    removeSeparator(index: number): void
    onopen: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    onclose: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
  }

  class MenuItem {
    constructor(text: string, callback: (point: Point) => void, options?: MenuItemOptions)
    setText(text: string): void
    setIcon(iconUrl: string): void
    enable(): void
    disable(): void
  }

  interface MenuItemOptions {
    width?: number
    id?: string
    iconUrl?: string
  }

  // 像素点
  class Pixel {
    constructor(x: number, y: number)
    x: number
    y: number
    equals(other: Pixel): boolean
    toString(): string
  }

  // 动画
  enum Animation {
    BMAP_ANIMATION_DROP = 1,
    BMAP_ANIMATION_BOUNCE = 2,
  }

  // 瓦片图层
  class TileLayer {
    constructor(options?: TileLayerOptions)
    getTilesUrl(tileCoord: Pixel, zoom: number): string
    getCopyright(): Copyright
    isTransparentPng(): boolean
    getOpacity(): number
    setOpacity(opacity: number): void
    setZIndex(zIndex: number): void
    getZIndex(): number
  }

  interface TileLayerOptions {
    transparentPng?: boolean
    tileUrlTemplate?: string
    copyright?: Copyright
    zIndex?: number
    opacity?: number
  }

  // 地理编码
  class Geocoder {
    constructor()
    getPoint(address: string, callback: (point: Point) => void, city: string): void
    getLocation(point: Point, callback: (result: GeocoderResult) => void, options?: LocationOptions): void
  }

  interface GeocoderResult {
    point: Point
    address: string
    addressComponents: AddressComponent
    surroundingPois: Poi[]
    business: string
  }

  interface AddressComponent {
    streetNumber: string
    street: string
    district: string
    city: string
    province: string
  }

  interface Poi {
    addr: string
    cp: string
    direction: string
    distance: string
    name: string
    poiType: PoiType
    point: Point
    postcode: string
    tel: string
    uid: string
    zip: string
  }

  enum PoiType {
    BMAP_POI_TYPE_NORMAL = 0,
    BMAP_POI_TYPE_BUSSTOP = 1,
    BMAP_POI_TYPE_SUBSTOP = 2,
  }

  interface LocationOptions {
    poiRadius?: number
    numPois?: number
  }

  // 本地搜索
  class LocalSearch {
    constructor(location: string | Map | Point, options?: LocalSearchOptions)
    search(keyword: string, options?: object): void
    searchInBounds(keyword: string, bounds: Bounds, options?: object): void
    searchNearby(keyword: string, center: Point, radius: number, options?: object): void
    getResults(): LocalResult | LocalResult[]
    clearResults(): void
    gotoPage(page: number): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    enableFirstResultSelection(): void
    disableFirstResultSelection(): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
    setLocation(location: string | Map | Point): void
    setPageCapacity(capacity: number): void
    getPageCapacity(): number
    setSearchCompleteCallback(callback: (results: LocalResult[]) => void): void
    setOnSearchComplete(callback: (results: LocalResult[]) => void): void
    setOnMarkersSet(callback: (pois: Poi[]) => void): void
    setOnInfoHtmlSet(callback: (poi: Poi, html: HTMLElement) => void): void
    setOnResultsHtmlSet(callback: (container: HTMLElement) => void): void
  }

  interface LocalSearchOptions {
    renderOptions?: RenderOptions
    onSearchComplete?: (results: LocalResult[]) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
    pageCapacity?: number
    onGeocoderComplete?: (results: GeocoderResult[]) => void
  }

  interface RenderOptions {
    map: Map
    autoViewport?: boolean
    selectFirstResult?: boolean
    highlightMode?: HighlightModes
    panel?: string | HTMLElement
  }

  enum HighlightModes {
    BMAP_HIGHLIGHT_STEP = 1,
    BMAP_HIGHLIGHT_LIST = 2,
  }

  interface LocalResult {
    keyword: string
    center: LocalResultPoi
    radius: number
    bounds: Bounds
    city: string
    moreResultsUrl: string
    province: string
    suggestions: string[]
    getPoi(i: number): LocalResultPoi
    getNumPois(): number
    getNumPages(): number
    getPageIndex(): number
    getCityList(): object[]
  }

  interface LocalResultPoi {
    point: Point
    address: string
    city: string
    phoneNumber: string
    postcode: string
    type: PoiType
    isAccurate: boolean
    province: string
    tags: string[]
    title: string
    uid: string
    url: string
    hasDetailsUrl: boolean
    detailsUrl: string
  }

  enum ServiceStatusType {
    BMAP_STATUS_SUCCESS = 0,
    BMAP_STATUS_CITY_LIST = 1,
    BMAP_STATUS_UNKNOWN_LOCATION = 2,
    BMAP_STATUS_UNKNOWN_ROUTE = 3,
    BMAP_STATUS_INVALID_KEY = 4,
    BMAP_STATUS_INVALID_REQUEST = 5,
    BMAP_STATUS_PERMISSION_DENIED = 6,
    BMAP_STATUS_SERVICE_UNAVAILABLE = 7,
    BMAP_STATUS_TIMEOUT = 8,
  }

  // 工具类
  class MapUtils {
    static getDistance(start: Point, end: Point): number
    static getPolylineDistance(points: Point[]): number
    static getPolygonArea(points: Point[]): number
  }

  // 地理定位
  class Geolocation {
    constructor()
    getCurrentPosition(callback: (result: GeolocationResult) => void, options?: PositionOptions): void
    enableSDKLocation(): void
    disableSDKLocation(): void
    setLocationTimeout(timeout: number): void
    setMaximumAge(age: number): void
    watchPosition(callback: (result: GeolocationResult) => void): number
    clearWatch(watchId: number): void
    getStatus(): ServiceStatusType
  }

  interface GeolocationResult {
    point: Point
    accuracy: number
    address: AddressComponent
    isConverted: boolean
  }

  interface PositionOptions {
    enableHighAccuracy?: boolean
    timeout?: number
    maximumAge?: number
  }

  // 全景
  class Panorama {
    constructor(container: string | HTMLElement, options?: PanoramaOptions)
    getLinks(): PanoramaLink[]
    getId(): string
    getPosition(): Point
    getPov(): PanoramaPov
    getZoom(): number
    setId(id: string): void
    setPosition(position: Point): void
    setPov(pov: PanoramaPov): void
    setZoom(zoom: number): void
    enableScrollWheelZoom(): void
    disableScrollWheelZoom(): void
    show(): void
    hide(): void
    addOverlay(overlay: PanoramaOverlay): void
    removeOverlay(overlay: PanoramaOverlay): void
    getSceneType(): PanoramaSceneType
    setOptions(options: PanoramaOptions): void
    setPanoramaPOIType(type: PanoramaPOIType): void
    onposition_changed: () => void
    onlinks_changed: () => void
    onpov_changed: () => void
    onzoom_changed: () => void
    onscene_type_changed: () => void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
  }

  interface PanoramaOptions {
    navigationControl?: boolean
    linksControl?: boolean
    indoorSceneSwitchControl?: boolean
    albumsControl?: boolean
    albumsControlOptions?: AlbumsControlOptions
  }

  interface AlbumsControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    maxWidth?: number | string
    imageHeight?: number
  }

  interface PanoramaLink {
    description: string
    heading: number
    id: string
  }

  interface PanoramaPov {
    heading: number
    pitch: number
  }

  abstract class PanoramaOverlay {
    abstract initialize(pano: Panorama): HTMLElement
    abstract draw(): void
    isVisible(): boolean
    hide(): void
    show(): void
    toString(): string
  }

  enum PanoramaSceneType {
    BMAP_PANORAMA_INDOOR_SCENE = 'indoor',
    BMAP_PANORAMA_STREET_SCENE = 'street',
  }

  enum PanoramaPOIType {
    BMAP_PANORAMA_POI_HOTEL = 'hotel',
    BMAP_PANORAMA_POI_CATERING = 'catering',
    BMAP_PANORAMA_POI_MOVIE = 'movie',
    BMAP_PANORAMA_POI_TRANSIT = 'transit',
    BMAP_PANORAMA_POI_INDOOR_SCENE = 'indoor_scene',
    BMAP_PANORAMA_POI_NONE = 'none',
  }

  // 全景服务
  class PanoramaService {
    constructor()
    getPanoramaById(id: string, callback: (data: PanoramaData) => void): void
    getPanoramaByLocation(point: Point, radius: number, callback: (data: PanoramaData) => void): void
  }

  interface PanoramaData {
    id: string
    description: string
    links: PanoramaLink[]
    position: Point
    tiles: PanoramaTileData
  }

  interface PanoramaTileData {
    centerHeading: number
    tileSize: Size
    worldSize: Size
  }

  // 路径规划
  class DrivingRoute {
    constructor(location: string | Map | Point, options?: DrivingRouteOptions)
    search(start: string | Point, end: string | Point): void
    getResults(): DrivingRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: string | Map | Point): void
    setPolicy(policy: DrivingPolicy): void
    setSearchCompleteCallback(callback: (results: DrivingRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
  }

  interface DrivingRouteOptions {
    renderOptions?: RenderOptions
    policy?: DrivingPolicy
    onSearchComplete?: (results: DrivingRouteResult) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
  }

  enum DrivingPolicy {
    BMAP_DRIVING_POLICY_LEAST_TIME = 0,
    BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2,
  }

  interface DrivingRouteResult {
    policy: DrivingPolicy
    city: string
    start: LocalResultPoi
    end: LocalResultPoi
    getNumRoutes(): number
    getRoute(i: number): Route
  }

  interface Route {
    distance: number
    duration: number
    getNumSteps(): number
    getStep(i: number): Step
    getPath(): Point[]
    getPolyline(): Polyline
    getPoints(): Point[]
    getDistance(): number
    getDuration(): number
    getRouteType(): RouteType
  }

  interface Step {
    description: string
    distance: number
    duration: number
    getPosition(): Point
    getIndex(): number
    getDescription(): string
    getDistance(): number
    getDuration(): number
    getPolyline(): Polyline
    getPath(): Point[]
    getPoints(): Point[]
  }

  enum RouteType {
    BMAP_ROUTE_TYPE_DRIVING = 0,
    BMAP_ROUTE_TYPE_WALKING = 1,
  }

  // 公交路线
  class TransitRoute {
    constructor(location: string | Map | Point, options?: TransitRouteOptions)
    search(start: string | Point, end: string | Point): void
    getResults(): TransitRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: string | Map | Point): void
    setPolicy(policy: TransitPolicy): void
    setSearchCompleteCallback(callback: (results: TransitRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
  }

  interface TransitRouteOptions {
    renderOptions?: RenderOptions
    policy?: TransitPolicy
    pageCapacity?: number
    onSearchComplete?: (results: TransitRouteResult) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
  }

  enum TransitPolicy {
    BMAP_TRANSIT_POLICY_LEAST_TIME = 0,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING = 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3,
  }

  interface TransitRouteResult {
    policy: TransitPolicy
    city: string
    start: LocalResultPoi
    end: LocalResultPoi
    getNumRoutes(): number
    getRoute(i: number): TransitRoute
  }

  // 步行路线
  class WalkingRoute {
    constructor(location: string | Map | Point, options?: WalkingRouteOptions)
    search(start: string | Point, end: string | Point): void
    getResults(): WalkingRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: string | Map | Point): void
    setSearchCompleteCallback(callback: (results: WalkingRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
  }

  interface WalkingRouteOptions {
    renderOptions?: RenderOptions
    onSearchComplete?: (results: WalkingRouteResult) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
  }

  interface WalkingRouteResult {
    city: string
    start: LocalResultPoi
    end: LocalResultPoi
    getNumRoutes(): number
    getRoute(i: number): Route
  }

  // 骑行路线
  class RidingRoute {
    constructor(location: string | Map | Point, options?: RidingRouteOptions)
    search(start: string | Point, end: string | Point): void
    getResults(): RidingRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: string | Map | Point): void
    setSearchCompleteCallback(callback: (results: RidingRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
  }

  interface RidingRouteOptions {
    renderOptions?: RenderOptions
    onSearchComplete?: (results: RidingRouteResult) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
  }

  interface RidingRouteResult {
    city: string
    start: LocalResultPoi
    end: LocalResultPoi
    getNumRoutes(): number
    getRoute(i: number): Route
  }

  // 公交线路搜索
  class BusLineSearch {
    constructor(location: string | Map | Point, options?: BusLineSearchOptions)
    getBusLine(busLineName: string): void
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: string | Map | Point): void
    getResults(): BusLine[]
    setGetBusLineCompleteCallback(callback: (results: BusLine[]) => void): void
    setMarkersSetCallback(callback: (pois: Poi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: Poi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusType
    toString(): string
  }

  interface BusLineSearchOptions {
    renderOptions?: RenderOptions
    onGetBusLineComplete?: (results: BusLine[]) => void
    onMarkersSet?: (pois: Poi[]) => void
    onInfoHtmlSet?: (poi: Poi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
  }

  interface BusLine {
    name: string
    startTime: string
    endTime: string
    company: string
    getNumBusStations(): number
    getBusStation(i: number): BusStation
    getPath(): Point[]
    getPolyline(): Polyline
  }

  interface BusStation {
    name: string
    position: Point
  }

  // 自定义覆盖物
  class GroundOverlay extends Overlay {
    constructor(bounds: Bounds, options?: GroundOverlayOptions)
    setBounds(bounds: Bounds): void
    getBounds(): Bounds
    setImageURL(url: string): void
    getImageURL(): string
    setDisplayOnMinLevel(level: number): void
    getDisplayOnMinLevel(): number
    setDisplayOnMaxLevel(level: number): void
    getDisplayOnMaxLevel(): number
    setOpacity(opacity: number): void
    getOpacity(): number
    toString(): string
  }

  interface GroundOverlayOptions {
    opacity?: number
    imageURL?: string
    displayOnMinLevel?: number
    displayOnMaxLevel?: number
  }

  // 海量点
  class PointCollection {
    constructor(points: Point[], options?: PointCollectionOptions)
    setPoints(points: Point[]): void
    setStyles(styles: PointCollectionOption[]): void
    clear(): void
    onclick: (event: { type: string; target: any; point: Point }) => void
    onmouseover: (event: { type: string; target: any; point: Point }) => void
    onmouseout: (event: { type: string; target: any; point: Point }) => void
  }

  interface PointCollectionOptions {
    shape?: ShapeType
    color?: string
    size?: SizeType
  }

  interface PointCollectionOption {
    shape: ShapeType
    color: string
    size: SizeType
  }

  enum ShapeType {
    BMAP_POINT_SHAPE_CIRCLE = 1,
    BMAP_POINT_SHAPE_STAR = 2,
    BMAP_POINT_SHAPE_SQUARE = 3,
    BMAP_POINT_SHAPE_RHOMBUS = 4,
    BMAP_POINT_SHAPE_WATERDROP = 5,
  }

  enum SizeType {
    BMAP_POINT_SIZE_TINY = 0,
    BMAP_POINT_SIZE_SMALLER = 1,
    BMAP_POINT_SIZE_SMALL = 2,
    BMAP_POINT_SIZE_NORMAL = 3,
    BMAP_POINT_SIZE_BIG = 4,
    BMAP_POINT_SIZE_BIGGER = 5,
    BMAP_POINT_SIZE_HUGE = 6,
  }

  // 城市列表
  class CityList {
    constructor()
    getCityList(): CityListResult
  }

  interface CityListResult {
    cities: City[]
    statistics: CityListStatistics
  }

  interface City {
    name: string
    center: Point
    level: number
    cityCode: number
    zipCode: string
  }

  interface CityListStatistics {
    total: number
    direct: number
    provincial: number
    prefecture: number
    county: number
  }

  // 坐标转换
  class Convertor {
    constructor()
    translate(points: Point[], from: number, to: number, callback: (result: ConvertorResult) => void): void
  }

  interface ConvertorResult {
    points: Point[]
    status: number
  }

  // 常量
  const Constants: {
    BMAP_API_VERSION: string
    BMAP_POINT_SIZE_SMALL: number
    BMAP_POINT_SIZE_NORMAL: number
    BMAP_POINT_SIZE_BIG: number
    BMAP_POINT_SHAPE_CIRCLE: number
    BMAP_POINT_SHAPE_STAR: number
    BMAP_POINT_SHAPE_SQUARE: number
    BMAP_POINT_SHAPE_RHOMBUS: number
    BMAP_POINT_SHAPE_WATERDROP: number
    BMAP_ANIMATION_DROP: number
    BMAP_ANIMATION_BOUNCE: number
    BMAP_STATUS_SUCCESS: number
    BMAP_STATUS_CITY_LIST: number
    BMAP_STATUS_UNKNOWN_LOCATION: number
    BMAP_STATUS_UNKNOWN_ROUTE: number
    BMAP_STATUS_INVALID_KEY: number
    BMAP_STATUS_INVALID_REQUEST: number
    BMAP_STATUS_PERMISSION_DENIED: number
    BMAP_STATUS_SERVICE_UNAVAILABLE: number
    BMAP_STATUS_TIMEOUT: number
  }
}

// 将 BMapGL 添加到全局 window 对象
declare global {
  interface Window {
    BMapGL: typeof BMapGL
  }
  
  // 也可以直接声明为全局变量
  const BMapGL: typeof BMapGL
}

export = BMapGL
export as namespace BMapGL 